# Angular Template Project

Requires Nodejs, gulp and tsd installed globally on your machine.

Just a few steps:

* Clone repo, copy it somewhere else and connect to another repo or whatever.
* Open console. Go to Assets folder and type `npm install` and after that `tsd reinstall`.
* Run `gulp build` for compile typescript and templates into *./assets/dist* folder.
* Run `gulp dev` for creating a server with change listener and livereload support. root: *./assets/dist*
* Uncomment *//localhost:8080/script/app.js* in *public/index.html*
* Run your own server with *./public* folder as a root
* Create something new!


Project use Angular router.
