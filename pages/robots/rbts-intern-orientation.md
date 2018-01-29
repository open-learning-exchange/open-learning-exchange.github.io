# Virtual Intern Orientation

## Welcome to the OLE Intern Team!

Congratulations. You have completed the first steps and have been selected to join the Open Learning Exchange virtual intern team. Please remember that we expect interns to have 16 hours a week to work on Open Learning Exchange issues. If you do not currently have enough time, we will be happy to have you later when you do have time.

## Get to Know the Team

The first thing is to meet the team, starting with CTO Dogi, then the [current intern team lead and members](#!./pages/vi/vi-team.md). After having the initial meeting with Dogi, you can join <https://talk.ole.org> during weekly Google Hangouts sessions to meet with current interns, get to know each other, and ask them what they have been working on.

## Familiarize Yourself with Current Projects and Issues

Typically, interns choose what project they want to work on based on their experience. If you get tired of a certain project, there is opportunity to switch. Take a look at our current projects below, if any particular ones interest you, there is a very good chance that you can work on them.

* [Angular Reboot](rbts-angular.md)
  * Create a prototype Progressive Web App using Angular & CouchDB with the BeLL Apps functionality
* [Take Home](rbts-takehome.md)
  * Take home is an Android port of the BeLL apps.
* [Raspberry Pi](rbts-raspberry-pi.md)
  * The modified Raspbian image can be place on a microsd card for deployment in the field with a Raspberry Pi.
* [Automated Testing](rbts-automated-testing.md)
  * Automated UI testing via selenium, codeceptjs, and Saucelabs/Travis CI
* [Translation (Crowdin)](rbts-crowdin-integration.md)
  * Help us translate the BeLL App user interface to other languages.
* [Windows Installer](rbts-inno-project.md)
  * Help develop a virtual machine packaged installer file for Windows.
* [Simple Install](rbts-simple-install.md)
  * We are in the progress of making a script to install all the software needed to run and work on the Bell Apps.
* [HTML Resources](rbts-html-resources.md)
  * Add existing educational HTML apps into the BeLL.

## A Few Things to Know...

Once you've been added to the intern team, you will receive invites to become GitHub organization members of [open-learning-exchange](https://github.com/open-learning-exchange), [ole-vi](https://github.com/ole-vi) and [treehouses](https://github.com/treehouses).

Make sure you accept these invites.

Note that this will give you the ability to make bigger mistakes - so make sure you always double check what repository you are pushing to, or are working on.

You will now have the ability to review, close, and merge pull requests and issues.

Once you have accepted your invitation, mark yourself as public at the [list of OLE contributors.](https://github.com/orgs/open-learning-exchange/people)

### Reviewing Pull Requests and Issues

One of your responsibilities as an intern is to review and help prospective interns with their issues / pull request on open learning exchange. You can start a review by going to the files changed tab on a pull request. You can read more about [Review on GitHub](https://help.github.com/articles/about-pull-request-reviews/). 

Since we are a very diverse community with people coming from different background and culture, it might be hard to find the right language to use in reviewing other's code. Please make sure to read [**a guide for reviewing code and having your code reviewed**](https://github.com/thoughtbot/guides/tree/master/code-review#code-review) for some useful tips.

You should check if the following conditions are met:

* [x] include issue number in pull request title
* [x] no unneeded files/lines change in pull request
* [x] there's a branch for the patch
* [x] the pull request actually fix the issue
* [x] it display without any errors on rawgit
* [x] no merge conflicts
* [x] commits are associated with GitHub account

Every time you comment on an issue or review a pull request, message those involved on the [Gitter chat](https://gitter.im/open-learning-exchange/chat) with a link to the issue / pull request. Also, if you find any issue that must be addressed with a pull request, do not forget to use the `Request changes` option when creating your review.

### Merging a Pull Request

The pull request can be merged if at least two other people have approved the pull request and there are no more changes requested by another intern. One exception is when virtual interns are adding themselves to the team, we want the new intern to merge their pull request during their interview.

When you are ready to merge the pull request:

* Select "Squash Merge"
* **Remove all of the commit messages in the extended description, and make sure the commit title is clear and short.** 
* Include “(fixes #IssueNumber)” in the title so it will automatically close the issue.
  * If you forget to add keyword, go to the issue and manually close it and link to the original pull request.
  * An example of good commit title is: "update vi-configuration.md (fix #1530) (#1557)", where "1530" is the issue number and "1557" is pull request number.
  * Read more about [closing Issues using keywords](https://help.github.com/articles/closing-issues-using-keywords/).

Every time you merge a pull request, message the author on [Gitter chat](https://gitter.im/open-learning-exchange/chat), make sure you include a link to the pull request and commit id.

### Using Waffle.io

[Waffle.io](https://waffle.io/ole-vi/BeLL-Apps) is what OLE uses to manage the BeLL app project. It's another way to view the projects that you and your team need to work on and review. You will be automatically added to the Waffle.io page once you become an intern. If not, then message someone on the Gitter chat and they will add you.

Choose issues to work on out of the `Ready` column and assign them to yourself. Move them to the `In Progress` column when you start working on them. Make sure you link the pull requests to their issues by mentioning them in the pull request title. E.g. "(fixes #54)".

### Standup Post Format

Every time you work on OLE projects and issues, you should post in the Standup Gitter chat room before you start working. Use the following format:

* What did I achieve last?
  * `Mention what you were able to achieve.`
* What is my aim for today?
  * `List what you are working on - consider linking to the issues.`
* What obstacles are in the way of our progress?
  * `List any problems.`

## Form a Working Routine and Schedule

### Recommended Daily Routine

While you are free to work in your own style, we recommend you follow this basic daily routine:

* Check Gitter interns room and your Gitter private messages.
* Join the [OLE Google Hangouts meeting](https://talk.ole.org) if you are able to so you can follow what everyone is working on and get help fast.
* Check Waffle.io, if you have no issues assigned, assign yourself to issues relating to the project you wish to work on.
* Write a post in [Gitter Standup](https://gitter.im/open-learning-exchange/chat) with the format mentioned above.
* Review any issues or pull requests that have been added or changed on [open-learning-exchange.github.io](https://github.com/open-learning-exchange/open-learning-exchange.github.io) since last time you reviewed.
* Work on your issues and write in intern chat any time you run into problems.
* Make pull requests as early as possible so you can get feedback as you work.
* Try to close issues using some of the following keywords and variations of them in the headings: `close`, `fix` and `resolve`. [Closing Issues using keywords](https://help.github.com/articles/closing-issues-using-keywords/)

### Weekly Schedule

All of our Google Hangouts meetings can be joined at <https://talk.ole.org>. Currently, we have a few scheduled sessions each week:

* Happy hacking hangout
* angular asia (h)acking (h)angout
* BeLL Reboot Angular Hacking Hangout
* Raspberry Pi Hangout
* Take Home Hangout


To subscribe to our calendar, paste `ole.org_u2koassrool56icb7fqko9abac@group.calendar.google.com` into Google Calendar's "*Add a friend's calendar*" and hit `Enter`.

Every Monday at the "[Happy hacking hangout](https://talk.ole.org)" session, we work on problems together and catch up on what people have been doing all week. It is also advisable to schedule a day out of the week to meet with a team leader, especially if you can’t make it to the meeting. Use the calendar to set up meetings and other events with interns.

## Communicate, Communicate, Communicate!

It’s not good to go silent on Gitter or any other forms of communication. If you are ever unsure of what to work on, or cannot work for any other reason, please talk to us in the Gitter chat. It's better that we know why you aren’t able to do anything than to imagine reasons ourselves. Also make sure you are `away` in the [OLE google hangout](http://talk.ole.org/). Remember, the more you put into this internship the more you will get out of it. It may take a while to get used to the fact that you will need a good amount of self-discipline and initiative to get anything done in a remote internship, but we are here to help, so take advantage of it!

Also, if you find any issue that must be addressed with a pull request, do not forget to use the `Request changes` option when creating your review.
