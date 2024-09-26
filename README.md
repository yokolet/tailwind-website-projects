# Vue 3 + TypeScript + Vite + Tailwind CSS

The application has 6 website projects from
https://github.com/bradtraversy/tailwind-course-projects/tree/main/website-projects .

The original projects are simply implemented by HTML and Tailwind CSS.
Those are built on Vue 3, TypeScript and Vite.

The application is deployed to https://yokolet.gitlab.io/tailwind-website-projects/ .

## How to Run the application locally

### Prerequisite

- node: https://nodejs.org/en
- bun: https://bun.sh/

### Clone or Download the Repo

`$ git clone git@gitlab.com:yokolet/tailwind-website-projects.git`

### Install packages

`$ bun install`

### Run the App

`$ bun run dev`

Then, go to http://localhost:5173

## GitLab Pages

The repo includes a setting to deploy to GitLab pages.
If you deploy to the GitLab pages:
1. Update `vite.config.ts` so that `base` points `/<your-repo>/`.
2. At your GitLab repository, go to the left side menu: Deploy -> Pages -> uncheck "Use unique domain"
