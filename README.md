Node version: 12.15.0

Install packages and depencies

`npm install`

Connect database:
- create local.js file inside config folder and setup config
`module.exports.datastores = {
	default: {
    adapter: require('sails-mongo'),
    url: 'mongodb://127.0.0.1:27017/database';
  },
}`

Sometime may be required to run 
`ng update @angular/cli --migrate-only --from=1.7.3`


Here some commands you can use to run the app,

* `npm run start`: Build the project's assets (front-end), starts running sails and open a new window with ng server watching code for updates in real time.

* `npm run build`: Builds the project's assets in development environment. Add `build:prod `for production and `build:aot` for ahead of time compilation.

* `npm run dev`: Will start running sails in dev environment (run `npm run build:dev` before).

* `npm run prod`: Will run sails in prodution environment. You should use this for deploying to a public server (run `npm build:prod` before).

* `nodemon app.js`: It'll list the server app and look for the file changes.

* Test API: http://localhost:1337/test
* Load UI: http://localhost:4200

* SailsJS Documentation: https://sailsjs.com/documentation/reference
