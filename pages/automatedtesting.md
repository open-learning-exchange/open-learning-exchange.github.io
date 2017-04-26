# Automated Testing
## Introduction: The hunt for bugs
### What are bugs?
For any software project a significant amount of effort is spent to prevent, find, and fix bugs.  The following is a explanation of what exactly a *bug* means in the context of software.

> A software bug is an error, flaw, failure or fault in a computer program or system that causes it to produce an incorrect or unexpected result, or to behave in unintended ways. Most bugs arise from mistakes and errors made in either a program's source code or its design, or in components and operating systems used by such programs. - [Wikipedia](https://en.wikipedia.org/wiki/Software_bug)
### Reporting bugs
Any time the a bug is found in the BeLL-Apps we create an issue on the [Github repo](https://github.com/open-learning-exchange/BeLL-Apps/issues). The technical steps to creating an issue can be found in the [first steps](http://open-learning-exchange.github.io/#!pages/githubissues.md). In addition to the advise given there, when reporting a bug:

- Provide a detailed explanation of how you encountered the bug, sufficient that someone else can reproduce the bug.
- Explain why the encountered behavior is not desired, if not obvious.
- Include images if it helps clarify. If certain inputs were needed to cause the problem, make sure you include them.
- Label the issue as a `bug` on github, so it stands out from feature requests, etc.

### Finding bugs
There are three main ways bugs are found in the BeLL Apps.

1. **Manual Testing & Code Review**- slow and time consuming
2. **In the wild** - End users encounter bugs while trying to use the software - not good.
3. **Automated Testing** - Initial setup can be difficult, but saves time in the long run.


Typically manual testing is done by the person developing a new feature, after they write the code they load up the BeLL apps and test the feature they are working on. Code review happens when a pull request is made, and others review your code for bugs and best practices.

The worst way to find bugs is through users - which is what we want to prevent. Releasing updates when not enough testing has been done is just outsourcing the testing to your users, who will not appreciate it. That said, getting select users (interns) to use the software before everyone has to use it can be a good idea. This is called [beta testing](https://en.wikipedia.org/wiki/Software_testing#Beta_testing). A closely related idea called [dogfooding](https://en.wikipedia.org/wiki/Eating_your_own_dog_food) is using your own beta software in the process of doing your work.

Automated testing aims to reduce the amount of manual testing needed, and more importantly, reduce the number of bugs found in the wild. There are many kinds of automated testing, but the for this project UI testing is used.

## The Automated UI testing framework

The actual test code is written in javascript (or typescript) using CodeceptJS, which controls a browser through WebdriverIO. When the tests are run automatically for github commits/pull requests, the automated build system, TravisCI runs the codeceptjs tests on Suacelabs.

### Setting Up a Testing Development Environment
#### Install Visual Studio Code (Optional)
(This is not mandatory, but will make writing your code much easier and faster - if you are used to another text editor, that would be fine as well).  
Go to https://code.visualstudio.com/ and install the appropriate version for your OS.

#### Install Node JS
Go to https://nodejs.org/en/ and install the appropriate version for your OS.

#### Install Geckodriver
Go to https://github.com/mozilla/geckodriver/releases and install the appropriate version for your OS.  
Extract geckodriver and **add it to the path** (Path environment variable on windows).

#### Install Selenium Server
Download the latest from http://www.seleniumhq.org/download/.  
On the command line, type `java -jar selenium-server-standalone-#.#.#.jar` where the `#` are replaced with the version number you downloaded. This will start the server, and will have to be repeated if you restart your computer or otherwise kill the server.

### Installing Nation

We assume that we already have Vagrant, Git, Firefox, and VirtualBox installed.

Open git bash and type,  
`git clone https://github.com/dogi/ole--vagrant-travis.git`  
`cd ole--vagrant-travis`  
`vagrant up`

Then, check in a browser if http://localhost:8081 is resolving to http://localhost:5981/apps/_design/bell/MyApp/index.html#login.

#### Install CodeceptJS
On the command line, type `npm install -g codeceptjs` or, if needed, `sudo npm install -g codecept.js`

#### Install Bell-Apps code
If you don't already have the Bell-Apps repository downloaded, fork the repo from https://github.com/ole-vi/BeLL-Apps and clone it on your computer.  Go to the tests folder within your repo: `cd BeLL-Apps/tests` and then run:
```
npm install -g webdriverio
npm install -g cookie
npm install --save -g co
codeceptjs run --steps
```
If there are still any packages missing `npm install` should get them. If nothing happens when run codeceptjs  most likely either geckodriver is missing or selenium server is not running.


### Creating a new test
Make sure you are in the tests folder, and have started a new branch for your tests. Then type `codeceptjs gt`  

- You will see `Creating a new test…` - type the name of the test you want to create and press `Enter`  
- You will see the name you entered above within parentheses and with an uppercase initial - type what you see in parentheses and press `Enter`  
**Example**  
- To create a `login` test, when you see `Creating a new test…` - type `login`  
- When you see `(Login)` - type `Login` and press `Enter`  
- That's it!  (You could also copy an existing test)

Open your test file and write your test.

If you installed Visual Studio Code (or you use another IDE), type `codeceptjs def` to get auto-completion, which would make writing your tests super easy!

You’re now all set to start writing your tests.

To run your tests, just type `codeceptjs run --steps`

### Basic Test writing procedure
- Start selenium server and vagrant travis.
- Create your test file.
- Open a browser and go to the Bell Apps hosted in the vagrant.
   1. Do the first step of the test manually in the browser
   2. Lookup the command in codeceptJS to do what you just did in the browser
   3. Use the browser developer tool to get the locator (usually xpath) for the elements you interacted with
   4. Add the lines of code needed to achieve what you did manually in the browser.
   5. Make sure you check for the proper results and elements to be present.
   6. Repeat until test case is finished.
- Run your test, fix any problems.
- Refactor your code into page objects if needed.
- Run test again.
- Write the rest of the tests cases for that file using the same process.
- Run all the tests you wrote three times in a row. If it passes three times in a row, make a pull request.
- Watch your test fail on Travis. Look at the suacelabs videos and travis/codeceptjs logs to figure out where and why it failed.
- Adjust the code for were the tests failed on the cloud. Most often clicks fail because the BeLL apps run slowly through travis / suacelabs and the element was not ready yet. 
### Test writing tips
#### Interactive Shell
CodeceptJS provides an interactive shell, that allows to insert a `pause()` call within any test, and test any instance of the `I` object interactively (i.e., on a test that fails, we may insert a `pause()` call, and then try various tests, such as `I.doubleClick(this)` or `I.click(that)`, etc. and see immediately what that command would do if it were to be included in the test).

#### Test call flexibility
We can run all tests simply by typing `codeceptjs run` and one test only (for instance, a test called `login_test.js`) by typing `codeceptjs run . login_test.js`.   
However, we can also run only tests that contain the word “login” by typing `codeceptjs run --grep "login"`.   
Even more handy is the easiness with which we can run our tests on a different browser, by just typing `codeceptjs run --override '{ "helpers": {"WebDriverIO": {"browser": "chrome"}}}'`.   
This way, instead of having to change our configuration, we can just override it momentarily.

#### More tips
 - The [codeceptJS documentation](http://codecept.io/) is pretty good, if you don't know how to do something check it.
 - Look at the tests that have already been written to see how things were done.
 - Use chrome developer tools to check for locators, such as xpath's
 - Use page objects to make your code more clean and reusable (again see existing code)
 - If you can't figure something out, the developer from Codeceptjs answers questions most of the time. Also, if there is a bug, report it at https://github.com/codeception/codeceptjs/
 - Your local tests will almost certainly not work on the cloud the first time. This is because of how the Bell Apps were programmed, it is not a problem with Codeceptjs/Travis CI/Suacelabs. Various UI elements are loaded and **enabled** before they are able to be used, so there is no way of knowing if an item is clickable. Use conservative waits.

## Opportunities for improvement
Main three areas that could be improved:

- Test server side / logic code separately from UI testing with unit tests.
- Add all objects required for each test directly to CouchDB at initialization, so tests can be run concurrently.
- Figure out and fix Bell app code so elements are not clickable until the Bell apps are ready. This way we can wait for an element to be enabled, waiting exactly how long is needed regardless of platform.

## FAQ

### Why codeceptJS?
In the past we used Python to write our UI tests. Some of the reasons we switched to CodeceptJS are:
- Tests are more readable, and shorter. They are much closer to an English list of steps someone would take to do something in the Bell-Apps.
- Tests take less time to write in CodeceptJS.
- All of our code can be in one language if we use CodeceptJS

It is more difficult to write complex tests in CodeceptJS, but in general you should avoid complex tests whenever you can anyway. CodeceptJS is also less mature and has more bugs than python, but so far bugs have been addressed fairly fasted by the CodeceptJS developer.

### Why UI testing and not unit test/other tests?

The short answer is that UI tests are the easiest tests to add to a project that was not written with testing in mind. It is **not** best practice to start with or rely on UI tests. If you are starting a new project you should follow the [testing pyramid](https://www.google.com/search?q=testing+pyramid) and not follow the anti-pattern currently being used in this project.