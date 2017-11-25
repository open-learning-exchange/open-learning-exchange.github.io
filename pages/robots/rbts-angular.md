# Angular BeLL Reboot

*Note: This project page is a work in progress. Please reach out on the gitter chat if you would like to contribute to this project*

## Objective:

Create a prototype Progressive Web App using Angular & CouchDB with the BeLL Apps functionality

### Ways to Contribute:

1. Working on a component
    Including
    1. Writing front end code
    2. Helping with unit tests
    3. Helping with e2e tests
2. Making this project "Offline First"
3. Making the app secure with SSL

## Installation

1. You should have Vagrant installed already, but if not follow the instructions [here](https://github.com/dogi/ole--vagrant-vi) up to **Install a communityBeLL on your OS** to install Vagrant
2. Clone the [planet repository](https://github.com/ole-vi/planet)
3. Run `vagrant up` in the repo directory
4. After the virtual machine has been installed & a few more seconds to compile the code you can visit the application at `localhost:3000`
5. To run additional commands, you will need to ssh into the virtual machine with `vagrant ssh` and then `cd /vagrant` to get into the project directory
6. When you are done working, you can shut down the machine with `vagrant halt` if you'd like to

Some additional commands:

This project is built with the [Angular CLI](https://cli.angular.io/), and once you are in the working directory in the virtual machine you can use any of the commands available with the CLI.  Most often you'll be using one of the testing commands:

1. `ng test` Will run unit tests which are available at `localhost:9876` after compiling.
2. `ng e2e` Will run end to end tests which are available at `localhost:49152` after compiling.

## Working on a Component

Once you have the app up and running, you can start working on a component! You can find tasks to work on [Waffle.io](https://waffle.io/ole-vi/planet). Feel free to post to the Gitter chat or check out the [Angular docs](https://angular.io/docs) if you need some guidance on Angular or JavaScript.  Here we'll focus on some key points you should be aware of.

### Keeping Things Organized

To keep things organized but not have too deep of a folder structure, our app structure looks like this:

```
src/
|--app/
   |--<features>/ <-- Various folders each containing a distinct feature.  Generally should match up with what is found on the navigation bar.
   |  |--<secondary features>/ <-- If the primary folder is getting or will be cluttered, split up the files further into distinct secondary features.
   |--home/ <-- Contains navigation components in addition to dashboard
   |--login/ <-- Contains login & registration
   |--shared/    <-- Contains services & components to be used in more than one module
```

### Styles

This project is using SCSS/Sass, which is a CSS preprocessor.  You can [read more about it here](http://sass-lang.com/).

We're keeping the variables all in one file `/src/app/variables.scss` and if you write a mixin please put it in a similar `/src/app/mixins.scss` file so others can use them.

In general, please try to write broader styles that can work across many components.  Having classes like `meetup-button` and `resource-form` might make sense at a glance, but either end up being:

1. Just thrown into other components and confusing to read.
  OR
2. Copied entirely or with minor adjustments and renamed

It's either bad for readability or unnecessary repetition.

Broad app styles can be found & added to in `/src/styles.scss`

If you end up having some component specific styles, make sure to read up on [component styles](https://angular.io/guide/component-styles) in the Angular docs first.

### Accessing CouchDB

Most components will eventually need to access the database.  If you are unfamiliar with CouchDB, [check out the documentation here](http://docs.couchdb.org/en/2.0.0/).

There is a single service for accessing CouchDB in the shared folder that you can import to your component for accessing CouchDB.  It is very basic and flexible, allowing you to create an HTTP request for the CouchDB and returning the response as a JavaScript object.  You can import it with the line:

```
import { CouchService } from '../shared/couchdb.service';
```

This service has four public methods: `get`, `post`, `put`, and `delete`.  [The CouchDB docs](http://docs.couchdb.org/en/2.0.0/) are very helpful to let you know which to use, so take a look there if you are unsure.

Here's a quick rundown of the parameters used in these methods:

* `db`: Is a string representing the database to modify.  Note the service already includes the first `/`.  For example rather than `/_session` write `_session`.
* `data`: Is used in `post` and `put` only and is an object with data to send to CouchDB.
* `opts`: *Optional* Adds options to the HTTP request.

### Unit Tests

Each component that is built should have a corresponding unit test with a `.spec.ts` file extension.  Unit tests are written in Jasmine and use the Karma test runner, like the examples in the [Angular docs](https://angular.io/guide/testing).  The guide covers quite a bit, so we'll highlight one section here: [spies](https://angular.io/guide/testing#test-a-component-with-an-async-service).

A unit test of an Angular component should not involve calls to the database to retrieve data (this would fall under end to end tests), but sometimes functionality needs to be tested that would make a call to the database (i.e. login success/failure messages).  One option to avoid using the database that Jasmine provides is the `spy`.  Spies allow you to track a function and supply a return value.  When that function is called within the test, the spy takes over and simply returns the provided value rather than executing the function.

As mentioned in the Angular docs, there are other ways to circumvent using the database in unit tests, but spies are a good place to start.

## Offline First

We'd like to create an app that will work in various locales which have no or intermittent internet connections.  The goal is to have an instance of [PouchDB](https://pouchdb.com/) running within the browser which allows the user to do everything within the BeLL-Apps and when connectivity is available will talk back and forth with the CouchDB server.

A possible implementation would be to use Service Workers.  The first portion of [this presentation](https://www.youtube.com/watch?v=cmGr0RszHc8) covers Service Workers and how they work within a browser to create functional offline experiences. There is a [plugin for PouchDB](https://github.com/pouchdb-community/worker-pouch) for working with Service Workers which may be the solution here.

One of the big things to think about in this regard is merge conflicts, and PouchDB has a good article on [possible strategies](https://pouchdb.com/guides/conflicts.html).

Here are some links to some free courses which will help you learn more about Progressive Web Apps:

* https://codelabs.developers.google.com/codelabs/your-first-pwapp
* https://www.udacity.com/course/intro-to-progressive-web-apps--ud811

## SSL

WIP

## Deployment with Docker

We are using Docker container for our deployment both for nation and community (in field), and we also do effort to containerize (dockerize) another educational apps that can run on raspberry pi to increase usefulness of our platform. We provide Docker container both for development and deployment. A full documentationa about docker can be accessed here in [Angular and Docker love story]()

