# Writing manual test cases
* TBD

# Automating manual test cases

* Selenium

	* Selenium is a portable software testing framework for web applications. One of its component, Selenium WebDriver, is a server written in Java that accepts commands for the browser via HTTP. WebDriver makes it possible to write automated tests for a web application in any programming language, which allows for better integration of Selenium in existing unit test frameworks. To make writing tests easier, Selenium project currently provides client drivers for PHP, Python, Ruby, .NET, Perl and Java.

	* We will be using Java with Selenium WebDriver

* Setup

	* Eclipse

		* Download [Eclipse IDE for Java EE Developers] (https://www.eclipse.org/downloads/)

	* Selenium WebDriver

		* Download [Selenium Client & WebDriver Language Bindings (Java)] (http://www.seleniumhq.org/download/)

		* If you are not using FireFox to test the web app, you will also need to download the driver for specific browser

			* [Google Chrome WebDriver](https://sites.google.com/a/chromium.org/chromedriver/)


	* Install [TestNG in Eclispe] (http://www.guru99.com/all-about-testng-and-selenium.html)
	* Create a project in eclipse -> right click on the project -> Build Path -> Add External Archives -> choose all the jar files in the Selenium 
	Client & WebDriver Language Bindings you downloaded


* Basic Tutorial for Selenium
	* To initialize the web driver:
		* Firefox :
			* WebDriver driver = new FirefoxDriver();
		* Chrome:
			* System.setProperty("webdriver.chrome.driver", “YOUR_PATH_TO_chromedriver.exe");
			* WebDriver driver = new ChromeDriver();
	* To open an URL
		* driver.get("YOUR_URL”);
	* To close the browser
		* driver.quit();
	* To create an WebElement to save the element on the web page and interact with it later
		* WebElement element = driver.findElement(By.name("q")); // it will find the element that has the name, “q”, on the current webpage
		* Besides By.name, you could also use By.id, By.class, etc
		* If you have trouble on finding the info about the element on the web, then you could open the web page on FireFox -> right click the element -> check element
	* To interact with WebElement
		* element.click(); //to click the element
		* element.sendKeys(“YOUR_STRING”); // to send the string to the element. Like the search bar of Google
		* [other interactions] (http://seleniumhq.github.io/selenium/docs/api/java/)

* Basic Tutorial for TestNG
	* @BeforeTest:  when you put this annotation above a method, the method will be executed before the whole test begin
	* @Test: put this annotation above your test method
	* @AfterTest: put this annotation above a cleanup method (a method that close the browser in the end,etc)
	* Assert.assertEquals("String1","String2"); // Checking whether two strings are equal
	* see [other asserts] (http://testng.org/javadocs/org/testng/Assert.html)

* Code Convention
	* To organize everyone’s the automated tests better, please try to follow the rules below
		* A class = a web page
		* A method = a functionality on the page
		* Control + Shift +F on eclipse to make your code look better ;D

# How to report issues

* See [the previous wiki](pages/githubissues.md)

