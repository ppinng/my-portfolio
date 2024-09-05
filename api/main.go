package main

import (
	"github.com/gofiber/fiber/v2"

	"log"
	"os"
)

func main() {
	// Initialize Fiber app
	app := fiber.New()



	// Define routes
	app.Get("/", handleHome)
	app.Get("/aboutme", handleAboutMe)
	app.Get("/my-projects", handleMyProjects)

	// Serve static files from the dist folder
	app.Static("/", "./dist")

	// Run the Fiber app (on Vercel, no need to specify the port)
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000" // Default port for local development
	}

	log.Fatal(app.Listen(":" + port))
}
