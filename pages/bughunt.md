# Bug Hunt
https://docs.google.com/document/d/1cLbduhSoH0y6JKxcgoKGXz_BkxEV2P0sv1FtbVQztR0/edit?pref=2&pli=1

## What is an Issue?
An issue is an error, bug, flaw, failure or fault in BeLL app which causes it to produce an incorrect or unexpected result, or to behave in unintended ways. Issues in the app should be about existing features, not about features that need to be added. Also, keep in mind that issues must be reproducible. In other words, if you describe the steps you took to get to the issue to someone else, they should get the same issue.

**Some thoughts**
* It should be about an existing feature. Not wishing for enhancement.
* It should be reproducible. Otherwise, your computer is the only one which suffers from this issue.
* How did you find the issue.
* Image/screenshots of the issue.
* As detailed as possible.

## Writing manual test cases

Since we are doing black-box testing, there is no need to understand the code to debug a specific functionality. We only need to know the supposed input and correct output of a functionality. Below are the steps you can follow to write manual test cases for each functionalities of the webapp.

Format:

* User Goal:	// The goal of the functionality
* Preconditions:	// The precondition of the test
* Postconditions:	// The expected result of the test
* Steps:
	* step 1:	// Step one of the test
		* Expected Output:	// The expected output for the step 1
	* step 2:	// Step two of the test
		* Expected Output:	// The expected output for the step 2
	* step 3 ............


[Examples](https://docs.google.com/document/d/16PCc9mVKC1T8yBHOdjeDW80uzHTPO5BEmyq0PjBbZ3I/edit)

**Make sure that all test cases are independent of each other and other functionalities.**


## Automating manual test cases

### Introduction:
Selenium is a portable software testing framework for web applications. One of its components, Selenium WebDriver, is a server written in Java that accepts commands for the browser via HTTP. WebDriver makes it possible to write automated tests for a web application in any programming language, which allows for better integration of Selenium in existing unit test frameworks. To make writing tests easier, Selenium project currently provides client drivers for PHP, Python, Ruby, .NET, Perl and Java.

***We will be using Java with Selenium WebDriver***

### Setup:
#####1. Eclipse
Download [Eclipse IDE for Java EE Developers](https://www.eclipse.org/downloads/)
#####2. Selenium WebDriver
Download [Selenium Client & WebDriver Language Bindings (Java)](http://www.seleniumhq.org/download/). If you are not using FireFox to test the web app, you will also need to download the driver for specific browser. For example: [Google Chrome WebDriver](https://sites.google.com/a/chromium.org/chromedriver/)

Create a project in Eclipse -> Right click on the project -> Build Path -> Add External Archives -> Choose all the jar files in the **Selenium Client & WebDriver Language Bindings** you downloaded
#####3. TestNG
Install [TestNG in Eclispe](http://www.guru99.com/all-about-testng-and-selenium.html).


### Tutorial:
##### 1. Basic Tutorial for Selenium

* To initialize the web driver:
	* Firefox :
		* WebDriver driver = new FirefoxDriver();
	* Chrome:
		* System.setProperty("webdriver.chrome.driver", “YOUR_PATH_TO_chromedriver.exe");
		* WebDriver driver = new ChromeDriver();
* To open a URL
	* driver.get("YOUR_URL”);
* To close the browser
	* driver.quit();
* To create a WebElement, save the element on the web page, and interact with it later
	* WebElement element = driver.findElement(By.name("q")); // it will find the element that has the name, “q”, on the current webpage
	* Besides By.name, you could also use By.id, By.class, etc.
	* If you have trouble on finding the info about the element on the web, you could open the web page on FireFox -> Right click the element -> Check element
[Google Doc](https://docs.google.com/document/d/1cLbduhSoH0y6JKxcgoKGXz_BkxEV2P0sv1FtbVQztR0/edit?usp=sharing)

	* To interact with a WebElement
	* element.click(); //to click the element
	* element.sendKeys(“YOUR_STRING”); // to send the string to the element(like qeurying with Google's search bar)
	* [Other interactions](http://seleniumhq.github.io/selenium/docs/api/java/)

##### 2. Basic Tutorial for TestNG
##### Listed below are annotations for manual test cases and how/when to use them:
* @BeforeTest:  when you put this annotation above a method, the method will be executed before the whole test begins
* @Test: put this annotation above your test method
* @AfterTest: put this annotation above a cleanup method (a method that closes the browser in the end, etc.)
* Assert.assertEquals("String1","String2"); // Checking whether two strings are equal
* See [other Asserts](http://testng.org/javadocs/org/testng/Assert.html)

##### 3. Code Convention
* To organize everyone’s automated tests better, please try to follow the rules below
	* A class = a web page
	* A method = a functionality on the page
	* Control + Shift +F on Eclipse to make your code look better :D

## How to report issues

Be aware of picking a functionality that is under construction or that has previously been found buggy. You will know that by looking at the Github issue queue here: https://github.com/dogi/ole--vagrant-community/issues

If a bug is found, describe the bug in this Google Doc first: [BugHunt.md](https://docs.google.com/document/d/1cLbduhSoH0y6JKxcgoKGXz_BkxEV2P0sv1FtbVQztR0/edit?pref=2&pli=1)

* Clearly describe exactly what the bug is, the number of the test case, and the steps that fail or produce unexpected output. Make sure that your description of the bug is easily understandable and describes the issue. Feel free to use images, to supplement your description.
* Even though the test cases already have the steps outlined, it's always a good idea to provide more detailed description and pictures to help the developer to understand the situation.
* If you know why the issue is happening, or have a potential solution to the issue, feel free to add your thoughts to the end of the bug description, or even start working on the problem yourself.                                                         
* Ask @dogi or @Emily to check your proposed bug in the Google Doc above. They will give you advice and further instructions then.
* See [the previous wiki](githubissues.md) on how to write a good Github issue.
