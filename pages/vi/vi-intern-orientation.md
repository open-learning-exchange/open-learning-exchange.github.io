# Software Engineering Intern Orientation

## Welcome to the OLE Software Engineering Intern Team!

Congratulations! You have completed the first steps and have been selected to join the Open Learning Exchange Software engineering virtual intern team. Please remember that we expect interns to have at least 24 hours a week for the minimal of 3 months to work on Open Learning Exchange issues. If you do not currently have enough time, we will be happy to have you later when you do have time.

## Get to Know the Team

The first thing is to meet the team, starting with CTO [dogi](https://github.com/dogi), then the [current intern team leads and members](#!./pages/vi/vi-team.md). After having the initial meeting with dogi, you can join <http://talk.ole.org> during Google Meet session to meet with current interns, get to know each other, and ask them what they have been working on.

## Familiarize Yourself with Current Projects and Issues

Typically, interns choose what project they want to work on based on their experience. If you get tired of a certain project, there is an opportunity to switch. Take a look at our current projects below, if any particular ones interest you, there is a very good chance that you can work on them.

To stay up to date with the projects you are contributing to, make sure you "Star" and "Watch" the repository on GitHub.

### Software Engineering Projects

- [Planet](https://github.com/open-learning-exchange/planet)
  - A learning management system designed as a Progressive Web App using Angular and CouchDB.

### Other Projects

- [myPlanet](https://github.com/open-learning-exchange/myplanet)
  - An Android app that syncs with Planet to save data for offline use and send usage data.
- [Remote](https://github.com/treehouses/remote/)
  - An Android app that communicates with headless Raspberry Pi mobile server running treehouses image via Bluetooth.
- [Systems Engineering Related Projects](https://treehouses.io/#!./pages/vi/orientation.md#Familiarize_Yourself_with_Current_Projects_and_Issues)

## A Few Things to Know...

### Becoming a GitHub Organization Member

Once you've been officially onboarded as a virtual intern, you'll receive email invitations to join the GitHub organizations: [open-learning-exchange](https://github.com/open-learning-exchange), [ole-vi](https://github.com/ole-vi), and [treehouses](https://github.com/treehouses).

Upon receiving these invitations, please accept them promptly. Once accepted, consider mark yourself as a public member in the [list of OLE contributors](https://github.com/orgs/open-learning-exchange/people) so others can see you are a member of OLE organization.

### Transition to OLE's Repositories and Adopt the Feature Branch Workflow

Moving forward, you'll be working directly on OLE's repositories instead of your own forked repositories. We'll be following the [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow), which allows for better collaboration and code management.

It's important to note that with this workflow, you have the potential to make more significant changes, so always double-check the branch you're working on. Additionally, commit frequently and create pull requests early in the development process. This enables other virtual interns to review your code and provide feedback, ensuring you stay on the right track from the outset.

### Reviewing Pull Requests and Issues

One of your responsibilities as an intern is to review and help prospective interns with their issues / pull requests at [open-learning-exchange/open-learning-exchange.github.io](https://github.com/open-learning-exchange/open-learning-exchange.github.io). To begin a review, navigate to the 'Files changed' tab on a pull request. Familiarize yourself with GitHub's review features by referring to the [Review on GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) documentation.

Ensure you're mindful of our diverse community when communicating feedback. Refer to [**A guide for reviewing code and having your code reviewed**](https://github.com/thoughtbot/guides/tree/main/code-review#code-review) for tips on using inclusive language and fostering a supportive environment.

You should check if the following conditions are met:

- [x] issue number is included in pull request title and description in the format of `(fixes #IssueNumber)`, when applicable
- [x] there are no unnecessary files/lines change in "Files changed" tab
- [x] there's a branch for the patch
- [x] the pull request actually fixes the issue
- [x] changes are rendered correctly on rawgit preview
- [x] no merge conflicts
- [x] commits are associated with GitHub account

Every time you comment on an issue or review a pull request, message those involved in the relevant Discord channel with a link to the issue / pull request. Also, if you find any issue that must be addressed with a pull request, do not forget to use the `Request changes` option when creating your review.

### Merging a Pull Request

To merge a pull request, follow these steps:

1. **Approval Requirement:** Ensure that at least two other team members have approved the pull request, and there are no outstanding change requests from others. However, there's an exception for virtual interns adding themselves to `mi-team.md`: they should merge their pull request during their initial meeting interview.

2. **Merging Process:**
   - Select "Squash and Merge"
   - **Commit Title:** Remove all commit messages in the extended description. Keep the commit title concise, clear, and in lowercase.
   - **Closing Issue:** If applicable, include "(fixes #IssueNumber)" in the title to [automatically close the associated issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword). If forgotten, manually close the issue and link it to the original pull request. An example of a good commit title: "update vi-configuration.md (fixes #1530) (#1557)", where "1530" is the issue number, and "1557" is the pull request number.

3. **Notification:** After merging a pull request, mention the author on the [Discord server](https://discord.gg/mtgGD4EnYW). Ensure to include a link to the pull request and the commit ID for reference.

### Check-in/Check-out

We typically conduct verbal check-ins (similar to "[stand-up meetings](https://en.wikipedia.org/wiki/Stand-up_meeting)") and check-outs. If verbal communication isn't possible, you can use the following text format in our Discord *vi-lounge* channel:

```
# Check-in
What did I work on last time?
-

What is my aim for today?
- List what you are working on - consider linking to the issues

What obstacles are in the way of our progress?
- List any problems
```

```
# Check-out
What I worked on today
- Consider linking to the pull request when applicable

which date and time are we going to meet you next
- e.g. Wednesday 10am EDT
```

## Form a Working Routine and Schedule

### Recommended Daily Routine

While you are free to work in your own style, we recommend you follow this basic daily routine:

- Check Discord channels and your discord private messages.
- Join the [OLE Google Meet session](http://talk.ole.org) if you are able to, so you can follow what everyone is working on and get help fast.
- Check in verbally or write a message in Discord vi-lounge channel with the format mentioned above.
- Review any issues or pull requests that have been added or changed on [open-learning-exchange.github.io](https://github.com/open-learning-exchange/open-learning-exchange.github.io) since last time you reviewed.
- Close issues with `(fixes #IssueNumber)` in the pull request squash merge commit message.
- Work on your issues and write in the respective repository Discord channel any time you run into problems.
- Commit often and make pull requests as early as possible, so you can get feedback as you work.

### Weekly Schedule

Our Google Meet session can be joined at [http://talk.ole.org](http://talk.ole.org). As we start up our virtual internship program, we might split up into many google meet sessions or use Discord for synchronous communication.

## Communicate, Communicate, Communicate!

Communication is key to success in a remote internship. Don't hesitate to reach out on Discord if you have questions, concerns, or need guidance. We're here to support you every step of the way.

If you're unsure about what tasks to tackle next or encounter any obstacles preventing you from working, let us know. It's better to communicate openly rather than leave us guessing. Remember, the more you invest in this internship, the more you'll gain from it.

Adjusting to remote work requires self-discipline and initiative, but you're not alone. We're here to help you navigate this journey, so don't hesitate to ask for help or advice. Your success is our priority!
