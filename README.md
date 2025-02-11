# Webber-web
My template website, currently being used to display Henge details. 

## How to use
1. Run `npm install` to install all the dependencies.
2. Run `npm start` to start the server.
3. Done


## General layout
Currently content for the pages is being populated using Json files in `\public`, this is fetched by services located
in the `services` package, and these services are called by various pages. 


## Deployment
This is currently hosted on github pages, and is deployed using the `gh-pages` package. Just pull request the master branch
and the website will be deployed automatically, provided the pull request is accepted. 


## TODOs
Componentise more of the pages, and make the website more modular.
Make Character details more dynamic, use less tables. 
Remove over complex View model from cheat sheet.