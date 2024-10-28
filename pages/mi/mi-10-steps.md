# First Steps – Mobile Virtual Intern

## The Big Picture

Welcome to the first steps for becoming an OLE Mobile Virtual Intern! We treat these first steps as a vetting process to prove that you can follow basic instructions before moving on to more complex projects and larger teams. Think of this as the interview for the internship.

If you are selected for the internship after completing the steps, you will be officially invited to join the OLE mobile interns team! We’ll add you to our Virtual Interns Discord channel and assign you to a specific team to work on developing and improving OLE’s software. Our current mobile projects are:

1. **[myPlanet](https://github.com/open-learning-exchange/myplanet)**: An Android app that syncs with Planet to save data for offline use and send usage data.
2. **[Remote](https://github.com/treehouses/remote)**: An Android app that communicates with headless Raspberry Pi mobile server running treehouses image via Bluetooth.

If you are selected after completing these steps, you'll work with your team on an assignment, and assignments will change weekly. During this internship, you will have the opportunity to work with various software and languages, including **[Git](https://git-scm.com/)**, **[GitHub](https://github.com/)**, **[Markdown](https://daringfireball.net/projects/markdown/)**, **[Command Line/Terminal](https://www.w3schools.com/whatis/whatis_cli.asp)**, **[Command Line/Terminal Scripts](https://www.codecademy.com/articles/command-line-commands)**, **[Vim](https://www.vim.org/)**, **[CouchDB](http://couchdb.apache.org/)**, **[Realm database](https://en.wikipedia.org/wiki/Realm_(database%29)**, **[Android Studio](https://developer.android.com/studio)**, and **[Kotlin](https://kotlinlang.org/)**.

**NOTE**: This is an unpaid, intensive internship requiring at least 24 hours of work per week. You can find more information about the internship in our [FAQ](mi-faq.md#General_Internship_Questions). If you have additional questions, feel free to ask in the Discord server!

## The Steps

Social coding is a huge part of any open source and collaborative project, and the Open Learning Exchange (OLE) is no different. In the following series of steps, you will learn about Markdown, Vagrant, Docker, Git, GitHub, GitHub issues, GitHub pull requests, etc. You'll also be introduced to OLE's digital library, [Planet](https://github.com/open-learning-exchange/planet), and its companion Android app, [myPlanet](https://github.com/open-learning-exchange/myplanet).

**These steps may seem simple, but we expect high-quality work, which might require extra time. We want to see that you can use, or learn to use, these tools effectively — including writing clear GitHub issues, using basic Git commands, creating proper pull requests, navigating myPlanet, etc. Just passively following the steps is the bare minimum; instead, aim to impress us with excellent GitHub etiquette and well-structured Markdown.**

Take the opportunity to read more about the tools and languages we use to deepen your understanding and reduce confusion. **Treat these steps as learning opportunities!** The GitHub and Markdown skills you practice in first steps are crucial for both this internship and a future career in software development.

The MDwiki offers plenty of resources to help you complete these steps. You'll find a list of useful links at the end of each step.

**We also would like you to keep us regularly updated in the Discord channel as you complete these steps. We will ask you to send messages, links, and screenshots along the way, which we'll use to track your progress. Please make sure not to miss this, as it's crucial for us to track your work.**

A significant part of these steps is identifying problems or suggesting improvements for this MDwiki. As you complete the steps, take note of any issues you encounter or ideas for enhancements. This helps improve the MDwiki and these steps for future interns.

While there's no official deadline for completing these steps, most successful candidates finish them within 7-8 days. Good luck!

## FAQ - Frequently Asked Questions

**[Our FAQ page](mi-faq.md)** is a comprehensive resource containing answers to common questions about the internship and First Steps. It also features additional helpful links and video tutorials aimed at familiarizing you with the tools and languages integral to our work.

If you have general internship inquiries and can't find the information you need on the FAQ page, please don't hesitate to reach out to us via Discord. Try to avoid DMs as others might have the same question!

For technical questions not covered in the FAQ, in addition to contacting us on Discord, Google and Stack Exchange serve as excellent supplementary resources to explore. :)

## Step 0 - Prerequisites

To participate in the internship, you will need the following:

1. A laptop or desktop computer with at least 8GB of RAM.
2. An Android device (phone or tablet) with a minimum of 3GB of RAM and running Android 9 "Pie" or later, and/or a Chromebook.
   - If you do not have a physical Android or Chromebook device, you can use a [Raspberry Pi 4](https://emteria.com/kb/hardware#raspberry-pi-4b) [or 5](https://emteria.com/kb/hardware#raspberry-pi-5) with at least 8GB of RAM as an experimental alternative.
3. [Discord](https://discord.com/download) installed on both your Android device and your laptop or desktop computer for easier communication and screenshot sharing.
4. A stable internet connection.

**Once you have confirmed that you meet the aforementioned requirements, please say hi to everyone in the Discord channel and let us know that you have reached Step 0.**

## Step 1 - Markdown & Forking Workflow

Follow the instructions on [Creating Your GitHub Profile Page: A Guide to Markdown & Forking Workflow](mi-github-and-markdown.md).

**Remember: Only proceed to the next step once you've completed all the instructions and submitted the pull request for your profile.**

## Step 2 - myPlanet App

myPlanet is an Android app available on the Play Store. Please find and install it there using [this link](https://play.google.com/store/apps/details?id=org.ole.planet.myplanet).

#### Enroll in Beta Testing

Join as a beta tester to help us improve the app:

- **From a Phone:**
  Join in Google Play on Android in [myPlanet's app detail page](https://play.google.com/store/apps/details?id=org.ole.planet.myplanet). Scroll all the way down, under “Join the beta,” tap Join.
- **From a Laptop or Desktop Computer:**
  Join on the web via [this link](https://play.google.com/apps/testing/org.ole.planet.myplanet).

After enrolling, there may be a delay before you can upgrade to the beta version of the app.

#### Testing the app

Once you've **installed the beta version** of the app, launch it and grant necessary permissions. Tap the gear icon in the upper right after passing the intro screen. Keep configurations default and tap "SYNC". Wait for completion, then "LOG IN AS GUEST" and explore the app for a minimal of 15 minutes.

Take screenshots and attempt to crash the app. After exploration, update us on Discord: "I'm on step 2, spent about xx minutes in the myPlanet app and crashed it when navigating to ..." or "I'm on step 2, spent about xx minutes in the myPlanet app and it did not crash."

Details about the crash might take up to 24 hours to show up in Google Play Console on our end.

## Step 3 - Build myPlanet in Android Studio

Follow the guide at [myPlanet and Android Studio](mi-myplanet-and-android-studio.md) to clone myPlanet repository from GitHub and build the myPlanet app with Android Studio.

## Step 4 - Connect myPlanet app to Planet

Follow the guide at [Connecting myPlanet to Planet](mi-step4.md).

## Step 5 - Git Repositories: A Guide to Cloning, Configuring, and Syncing Forks

Follow the directions at [Git Repositories: A Guide to Cloning, Configuring, and Syncing Forks](mi-github-and-repositories.md).

## Step 6 - GitHub Issues Tutorial

- Follow the tutorial under the [GitHub Issues](mi-github-issues.md) to create at least one issue. Post a link in the discord channel whenever you create an issue or when you comment on someone else's issue. You are encouraged to post as many issues as you can for improving the page as well as for personal practice.
- No issue is too big or too small to be filed and it is OK if you are not sure how to fix it yourself. If you know how to solve an issue, be sure to provide a detailed account of your research and show how to fix it. It is ok to file an issue about minor typos and very small changes, but do not make this the case for all of the issues that you file.
- You can also work on issues that you didn't create. Make sure you have created at least one issue, resolved it, commented on an issue you didn't create and have a pull request with the fix merged.

**HINT**: You can track your progress with the number of pull requests and issues [here](../track-first-steps-progress.md).

## Step 7 - Take a Course on myPlanet, Courses Gardening

Follow the guide at [Take a Course on myPlanet, Courses Gardening](mi-myplanet-course.md).

## Step 8 - Create More Issues and Pull Requests

Follow [Create More Issues and Pull Requests](mi-issues-and-prs.md), where you'll focus on improving our Markdown Wiki. This involves creating three issues, with at least one addressing content reduction and another enhancing the myPlanet User Manual. Additionally, you'll comment on three existing issues and resolve your own by submitting pull requests. Follow the process outlined in the GitHub Issues Tutorial, each pull request will need to be reviewed and approved by two team members before merging.

## Step 9 - Kotlin Tour

myPlanet use Kotlin as the development language. If you have no or little prior exposure to Kotlin, please go over the [Kotlin crash-course](https://developer.android.com/kotlin/learn) on Android Developers to gain some familiarity.

Additionally, you may also go over the official [Kotlin tour](https://kotlinlang.org/docs/kotlin-tour-welcome.html). Optionally, there are practice exercise at the end of each topic for you to get some hands on exercise.

## Step 10 - Be part of the team

Once you've confirmed that you've met the requirements in the [progress tracker](../track-first-steps-progress.md), your next step is to add yourself to the virtual intern list in [mi-team.md](mi-team.md) and submit a pull request. Afterward, message us ("@okurole_25668", "@dogi", and "@vi-mobile") in the Discord *#lagrangelounge* channel to schedule a meeting and officially join the team.

After scheduling the meeting, and before it takes place, be sure to review the [Mobile Intern Orientation document](mi-intern-orientation.md) before the meeting.
