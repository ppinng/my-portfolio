package main

import (
	"fmt"
	"github.com/gofiber/fiber/v2"
	"strings"
)

// handleHome injects SEO meta tags for the home page.
func handleHome(c *fiber.Ctx) error {
	title := "ppinng - Thiti's portfolio"
	description := "Welcome to ppinng's portfolio! Explore a showcase of my journey in computer science and software development on ppinng.me."
	return renderTemplate(c, title, description)
}

// handleAboutMe injects SEO meta tags for the About Me page.
func handleAboutMe(c *fiber.Ctx) error {
	title := "About me | Thiti Sae-lee | ppinng"
	description := "Get to know Thiti Sae-lee (Ping) and his journey in computer science and software development. Discover Thiti's background, skills, and experiences on ppinng.me."
	return renderTemplate(c, title, description)
}

// handleMyProjects injects SEO meta tags for the My Projects page.
func handleMyProjects(c *fiber.Ctx) error {
	title := "Projects | Explore Thiti's Work | ppinng"
	description := "Browse through the impressive projects created by Thiti on ppinng.me. Get inspired by innovative designs, developments, and solutions. Dive into a showcase of creativity and expertise."
	return renderTemplate(c, title, description)
}

// renderTemplate injects dynamic meta tags and returns the HTML content
func renderTemplate(c *fiber.Ctx, title, description string) error {
	// Define HTML meta tags
	metaTags := fmt.Sprintf(`
		<title>%s</title>
		<meta name="description" content="%s">`, title, description)

	// Inject the meta tags into the indexHTMLTemplate
	renderedHTML := strings.Replace(indexHTMLTemplate, "<head>", "<head>"+metaTags, 1)

	// Write the modified HTML to the response
	return c.Type("html").SendString(renderedHTML)
}
