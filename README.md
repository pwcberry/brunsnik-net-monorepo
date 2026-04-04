# brunsnik.net

This repository contains the code to develop and run the brunsnik.net website.

## Packages

All packages are private and are not submitted to public registries.

### `website/eleventy`

This package contains all the content and the assets to display the website for `brunsnik.net`. 
There will be triggers (file monitoring, pre-commit hooks) to ensure metadata is kept up to date for each
document. This repo will also contain the scripts necessary for CSS.

It uses [eleventy](https://www.11ty.dev/) to generate the content as a statically-served website.

### `website/deploy`

This package contains the scripts necessary to push changes into production.

### `website/smoke-tests`

Run smoke tests on the public website to pass acceptance criteria.

### `library/docx-to-md`

This library is a Node module that converts Word .docx files into Markdown 
files suitable for brunsnik.net. 
Adds YAML frontmatter for each document with basic information such as `collection` and `dateAdded`. 

### `library/markdown-metadata`

This library exports a functions to extract the metadata for an existing 
Markdown file or to add metadata to each 
Markdown file as frontmatter.

### `library/styles`

This library contains the CSS styles required for brunsnik.net and 
similarly-branded websites built by the author.

## Development

This project uses [Yarn](https://yarnpkg.com/getting-started/install).

_Still in draft_

## Deployment

See the README at [website/deploy](./website/deploy/README.md).
