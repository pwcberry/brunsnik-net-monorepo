# brunsnik.net

This repository contains the code to develop and run the brunsnik.net website.

## Packages

All packages are private and are not submitted to public registries.

* brunsnik-net-eleventy
* docx-to-md
* markdown-metadata
* brunsnik-net-deploy

### `brunsnik-net-eleventy`

This package contains all the content and the assets to display the website. 
There will be triggers (file monitoring, pre-commit hooks) to ensure metadata is kept up to date for each
document. This repo will also contain the scripts necessary for CSS.

### `docx-to-md`

This package will be a Node module that converts Word .docx files into Markdown files suitable for brunsnik.net. 
Adds YAML frontmatter for each document with basic information such as `collection` and `dateAdded`. 

### `markdown-metadata`

This package exports a functions to extract the metadata for an existing markdown file or to add metadata to each 
Markdown file as frontmatter.

### `brunsnik-net-deploy`

This package contains the scripts necessary to push changes into production.

## Development

_No draft available_

## Deployment

_No draft available_
