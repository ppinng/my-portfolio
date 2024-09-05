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

func LoadTemplate() error {
	indexHTMLBytes, err := os.ReadFile("dist/index.html")
	if err != nil {
		return fmt.Errorf("error reading index.html: %s", err.Error())
	}
	indexHTMLTemplate = string(indexHTMLBytes)
	return nil
}

func Main(w http.ResponseWriter, r *http.Request) {
	var title, description string

	// Handle routing within the Go function
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

	metaTags := fmt.Sprintf(`
		<title>%s</title>
		<meta name="description" content="%s">`, title, description)

	// Inject the meta tags into the indexHTMLTemplate
	renderedHTML := strings.Replace(indexHTMLTemplate, "<head>", "<head>"+metaTags, 1)

	w.Header().Set("Content-Type", "text/html")
	_, _ = w.Write([]byte(renderedHTML))
}
