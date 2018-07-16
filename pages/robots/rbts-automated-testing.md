# Automated Testing

## Stop Doing it Manually Test Automatically

This is a project that started long ago, then evolved into a new phase, and is very likely to evolve even further in the near future.

It is always interesting to know how everything got started, so let's start from the past, work our way to the present, and get a glimpse of what may or may not become the future.

Ready? Let's go!

## The Past

The project was initially called Bug Hunt, which is a funny name, isn't it?

Certainly, much more amusing than the current, quite sober, name Automated Testing!  

It focused on writing great issues for bugs, mistakes, and other problems that may be found in the code base. It explained that issues should be constructive, rather than negative, which is to say that rather than just saying "This doesn't work," it is much more appropriate to describe in detail the problem encountered, even including screen shots, when they may be helpful. But, even more importantly, it means that one should take a proactive stance and try to figure out how a problem may be addressed, so that the issues end up looking much more like proposals for improvement than complaints about stuff not working properly.

Then, the project focused on manual tests, and explained how to conduct them and what to expect from them, highlighting pros and cons of such a testing practice. Finally, the project tackled the challenge of introducing automated testing, and envisioned writing Selenium tests in Java.

The project got abandoned since, but the entire history is still available at [Bug Hunt](https://docs.google.com/document/d/1cLbduhSoH0y6JKxcgoKGXz_BkxEV2P0sv1FtbVQztR0/edit).

## The Present

More recently, the project was renamed Automated Testing, and was implemented through Selenium, but with tests written in Python, using the `unittest` library.  

The tests are triggered automatically by Travis CI every time a pull request or a commit is pushed to GitHub (for now automated testing is limited to the [ole-vi repo](https://github.com/ole-vi/BeLL-Apps)).

What happens is that Travis CI creates an environment in the cloud, which includes a nation, and runs the Selenium tests through a tunnel established with Sauce Labs.

Since this is the current state of the project, it is extremely important that you read carefully the documentation at [Automated Testing with Python](rbts-automated-testing-python.md). That will introduce you to the motivation behind testing, and explain you how to setup a testing environment on your computer.

That may change in the near future, but for now, we're still running locally the tests we write before sending a pull request to the repository, so it is vital for you to install all the necessary libraries and tools.

At the moment, there are still many tests to write and quite a bit of work to do, but the entire work-flow is up and running, and the biggest challenges have been conquered.

## The Future (?)

A question mark is in order before starting to speak about the future. What I am going to describe may or may not become the future. It still depends on many factors.
However, it is interesting to know that there is a very nice testing framework called CodeceptJS, which may be worth researching into.

We already have a proof of concept documentation, explaining how to install the environment and why this framework may be more convenient than using Python `unittest` library, but there are some challenges yet to be mastered.

It is then up to you, the current and future interns, to master all the difficulties and to determine whether or not this will be the future!

To get started, you can find the documentation at [Automated Testing with CodeceptJS](rbts-automated-testing-code-ceptjs.md). Good luck!
