# Proof of Concept: Using CodeceptJS Instead of Python

*Motivation and Setup Guide*  
See [Documentations on Google Docs](https://docs.google.com/document/d/1FFpCPiTY3VmFtMHmYe78jOzpHLY_6ulhfdxJd6v7jXg/edit?usp=sharing)  

## Motivation

While writing tests with the Python `unittest` library is awesome, writing tests in CodeceptJS is super simple and much more intuitive.

### Code

**Python Login Example**

```Python
driver.get(url)
elem = driver.find_element_by_name("login")
elem.send_keys(username)
elem = driver.find_element_by_name("password")
elem.send_keys(password)
elem.submit()
```

**CodeceptJS Login Example**

```JavaScript
I.amOnPage(‘/’);
I.fillField(‘login’, username);
I.fillField(‘password’, password);
I.click(‘Submit’)
```

### Assertions

Even more importantly, while assertions in Python may sometimes be a source of confusion (we need to find the actual result we’re getting and compare it with the result we expected to see), in CodeceptJS we just use `I.see(something)` or `I.dontSee(something)` to check for the expected results. Being the language much more similar to the way we would express the same requirements in English, the code is much less prone to mistakes.

### Searching for Elements

In Python, we need to decide whether we want to search for an element by id, by name, by css selector, or by xpath, while in CodeceptJS, we just provide an element and the element is automatically searched by id, name, css selector, and xpath, and will return an error only if the element cannot be found by any means.

### Works with WebDriverIO by Default (*but also with Selenium WebDriver, Protractor, and NightmareJS*)

The instructions I provided below are setting up the environment to work with WebDriverIO, but other test runner libraries can be used as well (such as Selenium WebDriver, Protractor, and NightmareJS).

### Works with Travis CI and Sauce Labs (*but also with BrowserStack and TestingBot*)

Basically, CodeceptJS can work with the setup we already have in place (see [Setup Sauce Labs](http://webdriver.io/guide/services/sauce.html) for instructions on how to setup Sauce Labs).  
However, we can also substitute Sauce Labs with BrowserStack or with TestingBot, if desired.

### PageObjects and Helpers are Easy to Setup

[PageObjects](http://codecept.io/pageobjects/) and [Helpers](http://codecept.io/helpers/) are also very intuitive and easy to setup.

### Interactive Shell

CodeceptJS provides an interactive shell, that allows to insert a `pause()` call within any test, and test any instance of the `I` object interactively (i.e., on a test that fails, we may insert a `pause()` call, and then try various tests, such as `I.doubleClick(this)` or `I.click(that)`, etc. and see immediately what that command would do if it were to be included in the test).

### Test Call Flexibility

We can run all tests simply by typing `codeceptjs run` and one test only (for instance, a test called `login_test.js`) by typing `codeceptjs run . login_test.js`.   
However, we can also run only tests that contain the word “login” by typing `codeceptjs run --grep "login"`.   
Even more handy is the easiness with which we can run our tests on a different browser, by just typing `codeceptjs run --override '{ "helpers": {"WebDriverIO": {"browser": "chrome"}}}'`.   
This way, instead of having to change our configuration, we can just override it momentarily.

### Conclusion

The features outlined above make of CodeceptJS an ideal environment to write tests, especially for virtual interns, who would have the opportunity to learn how to conduct automated testing, abstracting the complications derived by using a complex framework such as Selenium. There would be many more reasons that may make CodeceptJS a quite attractive alternative to Python `unittest` library, not last the consideration of having an environment entirely based on JavaScript, instead of developing in JavaScript and testing in Python. 

In conclusion, CodeceptJS deserves a more complete and thorough evaluation, since its introduction in the work-flow may be considered an advantage in term of easiness of adoption and shorter developing times.

## Setting Up a Testing Development Environment

### Install Firefox

The Firefox web browser is recommended for used in automated testing. Firefox should be updated to version 54.0.1 or newer. 

### Install Visual Studio Code

(This is not mandatory, but will make writing your code much easier and faster - if you are used to another text editor, that would be fine as well). Go to https://code.visualstudio.com/ and install the appropriate version for your OS.

### Install Node JS

Go to https://nodejs.org/en/ and install the appropriate version for your OS.

### Install Geckodriver

Go to https://github.com/mozilla/geckodriver/releases and install the appropriate version for your OS. Extract geckodriver and add it to the path.

### Install Selenium Server

Download version 3.0.1 from http://www.seleniumhq.org/download/.  
On the command line, type `java -jar selenium-server-standalone-3.0.1.jar` to start the server.

### Install CodeceptJS

On the command line, type `npm install -g codeceptjs` or, if needed, `sudo npm install -g codecept.js`

Fork the new repo from https://github.com/aberdean-ole-vi/BeLL-Apps and clone it on your computer (this is temporary, until you troubleshoot the challenges outlined at the end of the file, then the tests can be merged into `ole-vi/BeLL-Apps`).

Go in the tests folder within your repo: `cd BeLL-Apps/tests`

### Initialize CodeceptJS

On the command line, type `codeceptjs init`. Follow these configuration steps:

- Installing to  
   - You will see `./*_test.js` - leave it and just press `Enter`  
   - Select `WebDriverIO` and press `Enter`  
   - You will see `(./output)` - type `./output` and press `Enter`  
   - You will see `(Y/n)` - type `Y` and press `Enter`  
   - You will see `English (no localization)` - just press `Enter`  
   - You will see `(./steps_file.js)` - type `./steps_file.js` and press `Enter`   
- Configure helpers.  
   - You will see `(http://localhost)` - type `http://127.0.0.1:5981/apps/_design/bell/MyApp/index.html` and press `Enter`  
   - You will see `(firefox)` - type `firefox` and press `Enter`  

At this point, you’ll see a confirmation message listing all the files that were created, and telling you how to create your first test. More importantly, though, you will see `Please install dependent packages globally: [sudo]` - type `sudo npm install -g webdriverio`  

### Create New Test

Type `codeceptjs gt`  

- You will see `Creating a new test…` - type the name of the test you want to create and press `Enter`  
- You will see the name you entered above within parentheses and with an uppercase initial - type what you see in parentheses and press `Enter`  
**Example**  
- To create a `login` test, when you see `Creating a new test…` - type `login`  
- When you see `(Login)` - type `Login` and press `Enter`  

That's it! Open your test file and write your test.

If you installed Visual Studio Code (or you use another IDE), type `codeceptjs def` to get autocompletion, which would make writing your tests super easy!

You’re now all set to start writing your tests.

To run your tests, just type `codeceptjs run --steps`

Awesome!

## Current Challenges

While CodeceptJS works awesomely for most websites, it presents some problems to work with BeLL-Apps. Specifically, when trying to load the homepage, the Selenium Server throws an error stating that jQuery is not loaded, and then it goes on throwing many more errors stating `ReferenceError: $ is not defined`. 

Most likely, this depends on the BeLL-Apps codebase and it is not related to CodeceptJS, so it would probably be worth investigating further to find out the root cause of the error. 

Another problem is that testing takes a long time in running with Bell-Apps. This leads to some test cases failing because of loading time problems.

## Common Bugs

If you experience some errors, this may be because of the following reasons:

1. Selenium, Firefox, Node JS, geckodriver are not updated to the appropriate version.
2. Bell-Apps take a long time to load.
3. Selenium, or Firefox, or Node JS, or geckodriver are not running in the system yet.

If you face any errors, please contact other interns through _gitter chat_, and may specifically ask for **@lmmrssa** or **@duongdo27**.