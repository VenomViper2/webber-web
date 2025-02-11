# Webber-web
My template website, currently being used to display Henge details. 


## Prerequisites
- [Node.js](https://nodejs.org/en/)
- npm (Node Package Manager)
- Angular CLI (`npm install -g @angular/cli`)
- Basic knowledge of TypeScript and Angular concepts

## How to use
1. Run `npm install` to install all the dependencies.
2. Run `npm start` to start the server.
3. Done


## General layout
Currently content for the pages is being populated using Json files in `\public`, this is fetched by services located
in the `services` package, and these services are called by various pages. 


## Deployment
Deployment

* Hosted on GitHub Pages
* Deployed using the gh-pages package
* Automatic deployment triggered by merged pull requests to master
* Build process:
    1. PR to master branch
    2. Review and merge
    3. Automatic deployment via GitHub Actions

## TODOs
- [] Componentise more of the pages, and make the website more modular.
- [] Make Character details more dynamic, use less tables. 
- [] Remove over complex View model from cheat sheet.


## Links
[Angular Installation](https://angular.dev/installation)