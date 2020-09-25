# The URL Shortener APP
The URL Shortener APP is a Node.js and an Express app, serves shortening the large URLs.

  - The APP is built using Node.js, Express.js for backend and in the front end EJS templating engine along with Bootstrap framework is used.
  - This App stores the data in mongoDB
  - To run this app it assumed that your system is set up with node.js, npm and mongodb for the database.

# Installation and set up
Git clone the repository:
```sh
$ git clone https://github.com/KavitaGunda/url-shortener.git
```
cd to the `url-shortener` folder & Run npm intall:
```sh
$ npm install
```
Open the command prompt and run mongod instance: 
```sh
$ mongod
```
Or specify the `mongod --db-path=C:/data/db` if you are running it in Windows platform.
Open the command prompt and make sure you are connected to the mongodb by running mongo instance : 
```sh
$ mongo
```
Run the The URL Shortener APP using below command: 
```sh
$ npm start
```
Once the webserver is started, visit following URL:
```sh
  http://localhost:3000
```
