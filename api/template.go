package main

import (
	"fmt"
	"os"
)

var indexHTMLTemplate string

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
