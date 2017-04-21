# Virtual Intern Orientation

## Welcome to the OLE Intern Team!
Congratulations, you have completed the first steps and have been selected to join the Open Learning Exchange virtual intern team. Please remember that we expect interns to have 16 hours a week to work on Open Learning Exchange issues. If you do not currently have enough time, we will be happy to have you later when you do have time.
## Get to know the team
The first thing that needs to happen now that you are an intern is meeting the rest of the team, starting with chief technology officer Dogi, and the [current intern team leads](team.md).
You can set up a time to have a Google hangout with them in the [Gitter Interns chat room](https://gitter.im/open-learning-exchange/interns), which you should now be able to access. While you're at it, meet the current interns and ask them what they have been working on, and get to know them better.
## Familiarize yourself with current projects and issues
Typically interns choose what project they want to work on, but if you get tired of a certain project there is opportunity to switch projects. The follow list are the current areas of work for the interns - besides the [issues on ole-vi BeLL-Apps](https://github.com/ole-vi/BeLL-Apps/issues). Take a look at them all, and if any particularly interest you there is a very good chance that you can work on them.

* [Automated Testing](automatedtesting.md)
  * Automated UI testing via selenium, codeceptjs, and Saucelabs/Travis CI
* [Translation (Crowdin)](crowdinintegration.md)
  * Help us translate the BeLL App user interface to other languages
* [Simple Install](simpleinstall.md)
  * We are in the progress of making a script to install all the software needed to run and work on the Bell Apps
* [HTML Resources](htmlresources.md)
  * Add existing educational HTML apps into the BeLL.
* [Take Home](takehome.md)
  * Take home is an Android port of the BeLL apps.
  
## A few things to know..
Now that you have been added to the intern team, you will receive invites to become github repository members for [open-learning-exchange](https://github.com/open-learning-exchange/open-learning-exchange.github.io) and [ole-vi](https://github.com/ole-vi/BeLL-Apps).
Make sure you accept these invites.
Note that this will give you the ability to make bigger mistakes - so make sure you always double check what repository you are pushing to, or are working on.
You will now have the ability to review, close, and merge pull requests and issues.
### Reviewing pull requests and issues
One of your responsibilities as an intern is to review and help prospective interns with their issues / pull request on open learning exchange. You can start a review by going to the files changed tab on a pull request. You can read more about [reviewing on Github here](https://help.github.com/articles/about-pull-request-reviews/). You should check for things such as:

* [x] Check for issue number in pull request title
* [x] Are there any unneeded files in the pull request?
* [x] Did they make a branch for their patch?
* [x] Does the pull request actually fix the issue?
* [x] Check the pull request on rawgit, does it display without any errors?
* [x] Is there any merge conflicts?

Every time you comment on an issue or review a pull request, message those involved on the [Gitter chat](https://gitter.im/open-learning-exchange/chat) with a link to the issue / pull request. Also if you find any issue with a pull request, do not forget to use the `Request changes` option when creating your review.
### Merging a pull request
If there are no issues remaining with a pull request, and at least two people have approved the pull request it can be merged, provided that there are no changes requested by another intern. When you go to merge the pull request, select Squash Merge, and **remove all of the commit message, and make sure the commit title is clear and short.** You can write “(fixes issue #)” and it will automatically close the issue that the pull request solves. If you forget, just manually go to the issue and close it, linking to the merged pull request.

Every time you merge a pull request, message the author on [Gitter in the chat room](https://gitter.im/open-learning-exchange/chat), make sure you include a link to the pull request and commit id.

### Using Waffle.io
[Waffle.io](https://waffle.io/ole-vi/BeLL-Apps) is what OLE uses to manage the BeLL app project. Its another way to see what needs to be done, what needs to be reviewed, what you need to work on, and what others are working on. You should be added when you become an intern, but if not message someone and they will add you to the Waffle.io page.

Choose issues to work on out of the Ready column and assign them to yourself. Move them to the In Progress column when you start working on them. Make sure you link the pull requests to their issues by mentioning them in the pull request title. E.g "(fixes #54)".
### Standup Post format
Every time you work on OLE projects and issues you should post in the Standup gitter chat room before you start working. Use the following format:

* What did I achieve last? .
  * `Mention what you were able to achieve.`
* What is my aim for today?
  * `List what you are working on - consider linking to the issues.`
* What obstacles are in the way of our progress?    
  * `List any problems.`

## Form a working routine and schedule
### Recommended daily routine

While you are free to work in your own style, we recommend you follow this basic daily routine:

* Check Gitter Interns room and your Gitter private messages.
* If you are able join the [OLE google hangout](https://plus.google.com/hangouts/_/calendar/c3RlZmFuLnVudGVyaGF1c2VyQGdtYWlsLmNvbQ.mc101llc19b1np40p03fivdh1g?authuser=1) so you can follow what everyone is working on and get help fast.
* Check Waffle.io, if you have no issues assigned, assign yourself to issues relating to the project you wish to work on.
* Write a post in [Gitter Standup](https://gitter.im/open-learning-exchange/standup) with the format mentioned above.
* Review any issues or pull requests that have been added or changed on [open-learning-exchange.github.io](https://github.com/open-learning-exchange/open-learning-exchange.github.io) since last time you reviewed.
* Work on your issues and write in intern chat any time you run into problems.
* Make pull requests as often as possible so you can get feedback as you work.

### Weekly schedule
Every friday we have a "[Happy hacking hangout](https://plus.google.com/hangouts/_/calendar/c3RlZmFuLnVudGVyaGF1c2VyQGdtYWlsLmNvbQ.mc101llc19b1np40p03fivdh1g?authuser=1)" session, where we work on problems together and catch up on what people have been doing all week. Typically we try to follow an Agenda provided in google docs. It is also advisable to schedule a day out of the week to meet with a team leader, especially if you can’t make it to the friday meeting. Use the calendar to set up meetings and other events with interns. Just enter: `b9jqne24d57p46p886kh861arg@group.calendar.google.com` in "*Add a friend's calendar*".

## Communicate, Communicate, Communicate!
It’s not good to go silent on gitter or any other forms of communication. If you are ever unsure of what to work on, or cannot work for any other reason, please talk to us in the gitter chat. It's better that we know why you aren’t able to do anything than to imagine reasons ourselves. Also make sure you are aways in the [OLE google hangout](http://talk.ole.org/). Remember, the more you put into this internship the more you will get out of it. It may take a while to get used to the fact that you will need a good amount of self discipline and initiative to get anything done in a remote internship, but we are here to help, so take advantage of it! 

Also if you find any issue with a pull request, do not forget to use the `Request changes` option when creating your review.

