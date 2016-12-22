# Testing with Python `unittest` Library
*Running Tests Locally through Selenium and Remotely through Travis CI and
Selenium on Sauce Labs*  
See [Documentation on Google Docs](https://docs.google.com/document/d/1orxRy3rtdno8IuIdJZhntLM7I6OQ8tTXwJxUN7RW6Ik/edit#heading=h.xgifbik9tru5)

## What is Functional Testing?
Functional testing is a form of black-box testing that should ideally start from
reading the functional requirements and develop tests to check that the system
conforms to such functional requirements. Basically, functional testing ensures
that the code performs as expected.

## What is Unit Testing?
Unit testing, unlike functional testing, is aimed at testing small portions of
code, such as methods or functions. Ideally, each function or method is tested
mocking any dependencies, to ensure that it does what is expected. Writing unit
tests ensures the validity of the codebase and goes to prove that the code is
more robust (able to handle various normal and abnormal cases).

## Differences Between Functional Testing and Unit Testing
Ideally, unit tests should always be performed before functional tests.
The reason being that unit tests ensure that each function or method does
exactly what it is supposed to do. Later on, when performing functional testing,
we want to ensure that the entire system is behaving the way it was supposed to.
A common way to differentiate unit testing and functional testing is saying that
unit testing ensures the code does things right, while functional testing
ensures the code does the right things.

## What is Test Driven Development?
Test Driven Development (TDD) is making heavy use of unit testing, but it goes
one step further. In TDD, unit tests are written starting from use cases, before
writing any code. Thus, developers need to ensure that all unit tests fail
(since no code has been written yet), and then should write code that would make
all tests pass. This process usually ensures code robustness, since it avoids
the temptation to “adapt” the tests to the code that has already been written
(i.e., who would want to write tests to make their own code fail, after spending
hours to write it?).

## Where is Testing Performed?
Tests can be performed locally (on your machine) and remotely (on a server or on
the cloud). For our own testing purposes, we use VirtualBox through Vagrant to
run a nation or a community on your computer, and Selenium to perform tests
written in Python, using the `unittest` library. Selenium has several key
libraries (such as WebDriver) that will open a web browser and perform various
actions (type in a user name, click on a button, etc.). When running the tests,
a web browser will open and will perform the program live in front of you.
This is one step up from manual testing, which would be a real live person
clicking through the software, but still requires that we initiate the testing
ourselves. When we move from local to remote testing, instead of running a
nation on VirtualBox through Vagrant, we use Travis CI to setup a remote
environment, including a remote nation, and we run Selenium through Sauce Labs.
This setup allows us to perform automated testing. With Travis CI, whenever
someone posts a commit or a pull request on GitHub, automated testing is
automatically performed. The result of the testing is available on GitHub after
a short time, and allows us to catch possible mistakes before deploying the code
to production.

## Which should I do first, cloud or local?
Currently, we are performing local testing before pushing the tests to GitHub
and thus, allowing for Travis CI and Sauce Labs to perform the tests remotely.
This, however, does not seem an ideal solution, since what works locally does
not always work also remotely.
Perhaps, setting up individual accounts on Sauce Labs to perform testing on
everyone’s personal repo before opening a pull request may be a better solution,
in terms of development time.

## Windows - Installing Testing Development Environment
## Installing Nation

We assume that we already have choco (not mandatory), vagrant, git, firefox and
virtualbox installed.

Open git bash and type,
`git clone https://github.com/dogi/ole--vagrant-travis.git`
`cd ole--vagrant-travis`
`vagrant up`

Then, check in a browser if http://localhost:8081 is resolving to
http://localhost:5981/apps/_design/bell/MyApp/index.html#login.

## Installing Python, Pip, Selenium, Geckodriver, and Firefox

1. Install python 3.5 (**open a cmd as administrator** and type `choco install
python`  or download from https://www.python.org/downloads/release/python-352/)
2. Restart the cmd window
3. Install pip (`choco install pip` or `python get-pip.py`)
4. Check if you installed them correctly, typing `python --version` and `pip
--version`

    **Python Virtual Environment**
The following steps are optional (next mandatory step is point 5 below).
**NOTE**: You should only follow these steps if you either know what you’re
doing or you are sure you’ll be able to manage the virtual environment.
  * type `pip install virtualenv`
  * cd into the directory you want to use to store the tests
  * run `python3 -v venv selvenv` (**NOTE**: selvenv is a random name, you can
  pick your own)
  * next, activate the virtual environment,
    * on Windows, type `selvenv\Scripts\activate` and on Linux/Mac run `source
    selvenv/bin/activate`
  * Be careful that every time you close the cmd window or reboot your computer,
  you need to activate the virtual environment again (if you want to manually
  deactivate it, just type `deactivate`)
5. Type `pip install selenium`
6. Download geckodriver from https://github.com/mozilla/geckodriver/releases
7. Unzip geckodriver and add the directory containing the .exe file to the PATH.
8. Check if firefox is in PATH with `which firefox` in git bash
9. If not, add firefox to the PATH

Finally:
10. Fork https://github.com/ole-vi/BeLL-Apps on GitHub
11. Clone your fork (`git clone https://github.com/[your_username]/BeLL-Apps`)
12. `cd BeLL-Apps/tests`
13. `python test_login.py`

## MacOS/Ubuntu - Installing Testing Development Environment
## Installing Nation
WIP - Needs some love.

## Installing Python, Pip, Selenium, Geckodriver, and Firefox
WIP - Needs some love.

## Daily Workflow (waffle.io tutorial)

1. Go to https://waffle.io/ole-vi/BeLL-Apps
2. If you are already working on an issue, continue working on it, unless you
have been temporarily removed from it and assigned to a `high priority` issue
(when you are temporarily removed from an issue, the issue will remain in
progress with nobody assigned to it)
3. Make sure to check if you have been assigned to a `QA` issue, and give
priority to those
4. If there are issues assigned to you in the Ready column, please work on those
issues
5. If there are no issues assigned to you, pick an issue from the Ready column,
in the following order,
  * First, urgent issues
  * Then, high priority issues (or bugs)
  * If there are no high priority issues, then pick an unlabeled issue
**IMPORTANT**: Do not pick issues from the Backlog column! Also, do not pick
issues from the In Progress column (even if they are assigned to nobody! See
point #2 above).
**REMEMBER**: If you like, you can work together with someone else on an issue
(i.e., if you feel you need help, or otherwise you like to work together).
Just remember to agree with the other person beforehand, NEVER jump on someone
else’s issue without his/her consent.

If you need help with the issue assigned to you, add the `help wanted` label to
your issue, so others will know and can offer to help you.<sup id="down">[*](#back)</sup>

> Aside: Usually, in the Open Source community, the `help wanted` label is used
when you are looking for external collaborators (i.e., you want people that you
don’t already know to jump on your issue and solve it).

<b id="back">*</b> Github just pushed out a new feature, so now you can also ask
someone to review your pull request, when you need help. You can ask a review to
as many people as needed, if you feel you would like to get more ideas.
(Note: It is still advisable to add the “help wanted” tag, since on waffle.io we
cannot see review requests).[↩](#down)

Lastly, if you think of any issue that is not already addressed, feel free to
add new issues to the Backlog column.

## Programming Tests Info

Imports that you **must always have** in your file (for info on how to use the Bell
Library, see Bell Library at the end of this document).

```python
import unittest
import bell

from base_case import on_platforms
from base_case import browsers
from base_case import BaseCase

from selenium import webdriver
```


Add:
```python
from selenium.webdriver.support.ui import Select
```
if you need to pick an item from a dropdown menu

Add:
```python
from selenium.webdriver.common.alert import Alert
```
if you want to check for a javascript alert (that is, a popup).

Add:
```python
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
```
if you want to add some waiting time to search for the presence of an element on
the page.

**Always use**:
```python
@on_platforms(browsers)
class ClassName(BaseCase): // don’t forget “BaseCase”
```

**Always use**: `test_` in front of your function name **AND** in front of your
file name.

The test functions are getting executed in alphabetical order. For example:
If you you have `def test_login_logout(self)` and
`def test_incorrect_username(self)`, then `def test_incorrect_username(self)`
will be executed first.

## Test results explained

After you run a test, you may get any of the following results,
- `E` means you have an error
- `x` is the correct output of an expected failure (i.e., a test we expect to
fail in order to be successful. For example, if we try to login with an incorrect
username or password, we may want our test to fail).
If you want to code something like this you have to add the
`@unittest.expectedFailure` decorator right above the declaration of the
function that is expected to fail.
It turns out that expected failure can be a confusing feature, so perhaps it’s
better to avoid it and rather use normal tests.
- `.` means that the test was successful
- `OK` means that *all* tests were successful



## Python Style Guidelines

## File and Class names
The name of each file should reflect the name of the class it contains, but it
must always start by `test_` (i.e. if the class is `LoginTest`, the name of the
file will be `test_login.py`).
This is particularly important for automatic test discovery!
Remember to add the `BaseCase` argument to every class (e.g.,
`LoginTest(BaseCase)`).

## Test cases
Every test case should be named `test_` + name of test (e.g., `test_login`).
This is particularly important, because only methods that start with `test_`
will be run.
Usually, the main method of each class should reflect the class and the file
name (e.g., if you have a file named `test_login.py`, the class would be
`LoginTest` and the main method should preferably be `test_login`).

## Random rules
Avoid redundancy! This is true not only for Python, but also in general, and it
is known as the DRY principle (Don’t Repeat Yourself).
If you find yourself typing the same thing over and over again, then you should
use a helper function to avoid the repetitions.

Avoid redundancy also in Boolean checks!
**Do not do**,
```python
if x == 2:
    return True
else:
    return False
```
**DO**,
```python
return x == 2
```

WIP (Needs more love!)

## QuantifiedCode
QuantifiedCode has been added to the repo to check for Python style, errors,
etc.
You can find the QuantifiedCode check right along the usual Travis CI
check.
QuantifiedCode will warn about stylistic problems and errors, and will
also indicate clearly how to fix them.
A good use of QuantifiedCode can help you learn good Python style, without
adding many style guidelines to this document.
Please, make use of it, so we can ensure good coding practices throughout the
testing suite.

## Bell Library
To use the bell library, you need to add `import bell` to your test module.
Then, you have the following functions available,

`bell.get_url()` - this retuns the homepage url
(i.e., http://127.0.0.1:5981/apps/_design/bell/MyApp/index.html)

`bell.login(driver, username, password)` - provided a driver and user details,
logs the user in

`bell.logout(driver)` - provided a driver, logs the user out

WIP - needs more love (and especially more functions!!!)
