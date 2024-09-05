package handler

import (
	"fmt"
	"net/http"
	"os"
	"strings"
)

var indexHTMLTemplate string

func init() {
	// Load the HTML template when the application starts
	err := LoadTemplate()
	if err != nil {
		fmt.Printf("Error loading template: %v\n", err)
	}
}

// LoadTemplate reads the index.html file and stores it in the global indexHTMLTemplate variable
func LoadTemplate() error {
	// Read the index.html file from the dist folder
	indexHTMLBytes, err := os.ReadFile("dist/index.html")
	if err != nil {
		return fmt.Errorf("error reading index.html: %s", err.Error())
	}
	indexHTMLTemplate = string(indexHTMLBytes)
	return nil
}

// Handler function for all requests
func Handler(w http.ResponseWriter, r *http.Request) {
	var title, description string

	switch r.URL.Path {
	case "/":
		title = "ppinng - Thiti's portfolio"
		description = "Welcome to ppinng's portfolio! Explore a showcase of my journey in computer science and software development on ppinng.me."
	case "/aboutme":
		title = "About me | Thiti Sae-lee | ppinng"
		description = "Get to know Thiti Sae-lee (Ping) and his journey in computer science and software development. Discover Thiti's background, skills, and experiences on ppinng.me."
	case "/my-projects":
		title = "Projects | Explore Thiti's Work | ppinng"
		description = "Browse through the impressive projects created by Thiti on ppinng.me. Get inspired by innovative designs, developments, and solutions. Dive into a showcase of creativity and expertise."
	default:
		http.NotFound(w, r)
		return
	}

	// Define HTML meta tags
	metaTags := fmt.Sprintf(`
		<title>%s</title>
		<meta name="description" content="%s">`, title, description)

	// Inject the meta tags into the indexHTMLTemplate
	renderedHTML := strings.Replace(indexHTMLTemplate, "<head>", "<head>"+metaTags, 1)

	// Write the modified HTML to the response
	w.Header().Set("Content-Type", "text/html")
	_, _ = w.Write([]byte(renderedHTML))
}
