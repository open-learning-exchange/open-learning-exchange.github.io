# Angular BeLL Reboot
*Note: This project page is a work in progress. Please reach out on the gitter chat if you would like to contribute to this project*
## Objective:
Create a prototype Progressive Web App using Angular & CouchDB with the BeLL Apps functionality

### Ways to contribute:
1. Working on a component
    Including
    1. Writing front end code
    2. Helping with unit tests
    3. Helping with e2e tests
2. Help with broader backend goals: SSL, Service Workers,


## Installation

1. **Clone** the [GitHub repository](https://github.com/ole-vi/BeLL-angular-reboot)
    *Note: This is in the process of switching to a [different repository](https://github.com/ole-vi/planet)*
2. If you haven't already, install [CouchDB 2.0](http://couchdb.apache.org/) and [NodeJS](https://nodejs.org/en/)
3. In a bash terminal, run the following commands to setup your CouchDB main databases:

    ```
    curl -X PUT http://127.0.0.1:5984/_users
    curl -X PUT http://127.0.0.1:5984/_replicator
    curl -X PUT http://127.0.0.1:5984/_global_changes

    ```

4. Then go into the CouchDB dashboard at `http://127.0.0.1:5984/_utils` and enable CORS by clicking __Configuration__ -> __CORS__, click the __Enable CORS__ button and add `http://localhost:3000` and/or `http://127.0.0.1:3000` to the list
 
    *Paul's note: add image here*

5. Run `npm install` to install the dependencies
6. Before you start hacking away at this: like with your work on the wiki be sure to only commit work on a secondary branch (not the master branch).  This helps us to keep the repository history neat and tidy.

Current command line commands:

1. `npm test` Will run unit tests

2. `npm run watch` Will build the app, run tslint on all files, and start up a node server at `localhost:3000`.  It will also watch for changes to all files in `src` and rebuild on changes.

## Working on a component

Once you have the app up and running, you can start working on a component!  Feel free to post to the Gitter chat or check out the [Angular docs](https://angular.io/docs) if you need some guidance on Angular or JavaScript.  Here we'll focus on some key points you be aware of.

### Keeping things organized

To keep things organized but not have too deep of a folder structure, our app structure looks like this:

```
src/
|--app/
   |--<features>/ <-- Various folders each containing a distinct feature.  Generally should match up with what is found on the navigation bar.
   |  |--<secondary features>/ <-- If the primary folder is getting or will be cluttered, split up the files further into distinct secondary features.
   |--home/
   |--shared/    <-- Contains services & components to be used in more than one module
```

### Accessing CouchDB

Most components will eventually need to access the database.  If you are unfamiliar with CouchDB, check out the documentation [here](http://docs.couchdb.org/en/2.0.0/).

There is a single service for accessing CouchDB in the shared folder that you can import to your component for accessing CouchDB.  It is very basic and flexible, allowing you to create an HTTP request for the CouchDB and returning the response as a JavaScript object.  You can import it with the line:

```
import { CouchService } from '../shared/couchdb.service';
```

This service has four public methods: `get`, `post`, `put`, and `delete`.  The [CouchDB docs](http://docs.couchdb.org/en/2.0.0/) are very helpful to let you know which to use, so take a look there if you are unsure.

Here's a quick rundown of the parameters used in these methods:

* `db`: Is a string representing the database to modify.  Note the service already includes the first `/`.  For example rather than `/_session` write `_session`.
* `data`: Is used in `post` and `put` only and is an object with data to send to CouchDB.
* `opts`: *Optional* Adds options to the HTTP request.

### Unit Tests

Each component that is built should have a corresponding unit test with a `.spec.ts` file extension.  Unit tests are written in Jasmine and use the Karma test runner, like the examples in the [Angular docs](https://angular.io/guide/testing).  The guide covers quite a bit, so we'll highlight one section here: [spies](https://angular.io/guide/testing#test-a-component-with-an-async-service).

A unit test of an Angular component should not involve calls to the database to retreive data (this would fall under end to end tests), but sometimes functionality needs to be tested that would make a call to the database (i.e. login success/failure messages).  One option to avoid using the database that Jasmine provides is the `spy`.  Spies allow you to track a function and supply a return value.  When that function is called within the test, the spy takes over and simply returns the provided value rather than executing the function.

As mentioned in the Angular docs, there are other ways to circumvent using the database in unit tests, but spies are a good place to start.

## Broader goals

WIP 

