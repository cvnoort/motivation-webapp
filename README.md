# Motivation webapp

[![pages-build-deployment](https://github.com/cvnoort/motivation-webapp/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/cvnoort/motivation-webapp/actions/workflows/pages/pages-build-deployment)

React web app created with Vite for
Codecademy Community Hackathon "Coding for a Cause" in January 2025.

## Context

This application was created as a submission for
[Codecademy](https://www.codecademy.com/)'s community hackathon "Coding for a Cause",
which required small teams to create a simple mobile or web app
that supports a cause they feel stongly about, eg. mental health.

## Usage

The web app can be viewed in a browser
[via GitHub Pages](https://cvnoort.github.io/motivation-webapp/),
or run locally by cloning the repository as [described below](#development).

A random quote is automatically displayed on a randomly selected photo.
The social media and e-mail buttons below the quote may be used
to share the page on a variety of platforms.

## Development

### Requirements

Requires Node.js (version 16+) to run locally,
as well as a suitable browser.

### Installation

To run the web app locally, clone this repository
(inside a directory of your choice, for example `~/github/`)
and install the app as follows:

```
cd ~/github/
git clone https://github.com/cvnoort/motivation-webapp.git
cd motivation-webapp
npm install
```

### Development server

Then start a development server:

```
npm run dev
```

View the application by opening the resulting address in your browser,
for example: `http://localhost:5173/`.
