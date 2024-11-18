# Software Engineering Intern Orientation

## Welcome to the OLE Software Engineering Intern Team!

Congratulations! You have successfully completed the First Steps and have been selected to join the Open Learning Exchange software engineering virtual internship team.

The first step is to get to know the team, including our CTO [dogi](https://github.com/dogi) and the [current intern team leads and members](#!./pages/vi/vi-team.md). You'll have the opportunity to meet us face-to-face in our "virtual office" via Google Meet during the initial meeting.

Please note that we expect interns to commit at least 24 hours per week for a minimum of 3 months to work on Open Learning Exchange projects. If you currently don’t have enough time, we’d be happy to welcome you later when your schedule allows. You can find more information in our [FAQ](vi-faq.md).

While most of the following topics will be covered in our initial meeting, please take a glance at the relevant websites and links for a more in-depth understanding.

## Familiarize Yourself with Current Projects and Issues

Typically, you are invited to the OLE internship that best aligns with your experience. Interns also have the opportunity to choose projects based on their interests and skills. If you feel stuck on a particular project, there is the option to switch. Take a look at our current projects below—if any catch your interest, there’s a very good chance you can work on them.

To stay updated on the projects you’re contributing to, be sure to "Star" and "Watch" the repository on GitHub.

#### Software Engineering Intern Project

This is the default project we will assign you to:

- [Planet](https://github.com/open-learning-exchange/planet): A learning management system designed as a Progressive Web App using Angular and CouchDB.

#### Projects in Other OLE Internship Tracks

There are other projects you might find interesting, especially if you have hardware such as an Android phone and a Raspberry Pi.

- [myPlanet](https://github.com/open-learning-exchange/myplanet): An Android app that syncs with Planet to save data for offline use and send usage statistics.
- [Remote](https://github.com/treehouses/remote/): An Android app that communicates with a headless Raspberry Pi mobile server running the Treehouses image via Bluetooth.
- [Systems Engineering Related Projects](https://treehouses.io/#!./pages/vi/orientation.md#Familiarize_Yourself_with_Current_Projects_and_Issues)

## OLE's GitHub Organization & Feature Branch Workflow

During your onboarding as a virtual intern in the initial Google Meet meeting, you'll receive email invitations to join the following GitHub organizations:

- [open-learning-exchange](https://github.com/open-learning-exchange): This is the main organization that hosts OLE's web and mobile app repositories.
- [treehouses](https://github.com/treehouses): This is the systems engineering branch of OLE's software.
- [ole-vi](https://github.com/ole-vi): Stands for OLE Virtual Intern, a space where you can freely start any OLE-related project and experiment with new ideas.

Upon receiving these invitations, please accept them promptly. Once accepted, consider marking yourself as a public member in the organization’s member list for both [open-learning-exchange](https://github.com/orgs/open-learning-exchange/people) and [treehouses](https://github.com/orgs/treehouses/people) so others can see that you are a member of the OLE organization on GitHub.

Moving forward, you'll be working directly on OLE's repositories instead of your own forked repositories. We'll be following the simpler [**Feature Branch Workflow**](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow), which allows for better collaboration and code management.

## Issues and Project Plannings

We use GitHub Issues for project planning and issue tracking. We will [assign issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/assigning-issues-and-pull-requests-to-other-github-users) for you to work on, but feel free to let us know if there are any specific issues you’d like to tackle. You are also free to create new issues after searching for duplicates. Additionally, you can [filter issues by assignee(s)](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/filtering-and-searching-issues-and-pull-requests#filtering-issues-and-pull-requests-by-assignees) to keep track of your own tasks.

To ensure we are always branching from the latest master/main branch and that the branch is prefixed with the issue number, we currently create branches directly from the GitHub issues interface. Please refer to [**Creating a branch to work on an issue** - GitHub Docs](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/creating-a-branch-for-an-issue) for detailed instructions.

## Pull Requests

Commit frequently and create pull requests early in the development process, utilizing [**GitHub's draft pull request feature**](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests#draft-pull-requests). This enables your mentor and fellow interns to review your code and provide feedback, helping to ensure you're on the right track from the start.

## Code Review and Collaboration: Reviewing Pull Requests

Familiarize yourself with GitHub's review features by referring to the [Review on GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) documentation. If you find an issue that must be addressed with a pull request, do not forget to use the "Request changes" option when submitting your review.

Additionally, please read [**A Guide for Reviewing Code and Having Your Code Reviewed**](https://github.com/thoughtbot/guides/tree/main/code-review#code-review) for a comprehensive overview of best practices for conducting effective code reviews, focusing on clear communication, constructive feedback, and collaboration to enhance code quality and foster team growth.

## Help Other Prospective Virtual Interns

For the first 2-4 weeks, one of your responsibilities as an software intern is to review and help prospective software interns with their issues / pull requests at [open-learning-exchange/open-learning-exchange.github.io](https://github.com/open-learning-exchange/open-learning-exchange.github.io). Please provide feedback to [issues raised by prospective software engineering interns](https://github.com/open-learning-exchange/open-learning-exchange.github.io/issues?q=is%3Aopen+is%3Aissue+label%3Avi), be sure to look out for the issues with `vi` label only, as other labels like `mi` is for other internships and you may not have the full picture.

To begin a review, ensure the checklist items in the pull request template are addressed properly by the prospective software engineering interns and make sure the pull request actually fixes the issue.

## Merge a Pull Request

Currently, virtual interns typically do not merge pull requests. To merge a pull request, follow these steps:

1. **Approval Requirement:** Ensure that at least two other team members have approved the pull request, and there are no outstanding change requests from others.

2. **Merging Process:**
   - Select "Squash and Merge"
   - **Commit Title:** Remove all commit messages in the extended description, with the exception of co-authors. Keep the commit title concise, clear, and in lowercase.
   - **Closing Issue:** If applicable, include " (fixes #IssueNumber)" in the title to [automatically close the associated issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword). If forgotten, manually close the issue and link it to the original pull request. An example of a good commit title: "update vi-configuration.md (fixes #1530) (#1557)", where "1530" is the issue number, and "1557" is the pull request number.

## Notify Others of Updates

Whenever you comment on an issue or review a pull request on GitHub that requires action from the submitter, notify those involved by sharing a link to the comment in the relevant Discord channel.

## Check-in/Check-out

We typically conduct verbal check-ins (similar to "[stand-up meetings](https://en.wikipedia.org/wiki/Stand-up_meeting)") and check-outs. If verbal communication isn't possible and you need to leave quickly, you can use the following text format in our Discord server's *#vi-lounge* channel:

```
# Check-in

What did I work on last time?
- List what you worked on last time

What is my aim for today?
- List what you are working on - consider linking to the issues

What obstacles are in the way of our progress?
- List any problems

What time I'm planning to leave the virtual office today?
- e.g. 4pm EDT
```

```
# Check-out

What I worked on today
- Consider linking to the pull request when applicable

Which date and time are we going to meet you next
- e.g. Wednesday 10am EDT
```

## Form a Working Routine and Schedule

### Recommended Daily Routine

While you are free to work in your own style, we recommend following this basic daily routine:

- Join the OLE Google Meet session at [https://talk.ole.org](https://talk.ole.org)
- Check Discord channels and your direct messages (DM).
- Check in with us verbally after you go online.
- For the first 2-4 weeks, review any issues tagged with `vi` and the associated pull requests that have been added or changed on [open-learning-exchange.github.io](https://github.com/open-learning-exchange/open-learning-exchange.github.io) since your last review.
- Review other contributor's pull requests in your assigned project(s).
- Work on your assigned issues and don’t hesitate to ask for help in Google Meet or post in the respective repository Discord channel whenever you are stuck on a problems for more than 2 or 3 hours.
- Commit frequently and create pull requests as early as possible to receive feedback as you work.
- Check out with us before you leave the "virtual office." If we are unavailable when you're leaving, please leave a message using the template mentioned earlier.

### Schedule

Join the OLE Google Meet session at [https://talk.ole.org](https://talk.ole.org) whenever you can during your work hours to stay updated on what everyone is working on and to get help quickly. This virtual office is typically staffed from 5 AM to 5 PM US Eastern Time during weekdays. As we expand our virtual internship program, we may split into multiple Google Meet sessions or use Discord for synchronous communication.

While some tasks can be done offline and outside the Google Meet "virtual office"—especially during unstaffed hours—we generally expect you to be present there for most of your work time. If you find the virtual office too distracting, please discuss this with us.

If you are unable to come to the "virtual office" at the time you mentioned during your last check-out, please try to let us know as soon as possible in the *#vi-lounge* channel and @dogi.

### Getting Ready to Work on Planet

Below are a few selected resources to help you get up to speed with Planet:

- **[(5 min) TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)**

#### Angular and RxJS Resources

- **[Angular v17 Documentation](https://v17.angular.io/docs)**
  - Comprehensive guide to Angular's core concepts, including modules, components, and services.
  - Covers setup, data binding, directives, routing, and forms for creating dynamic web apps.

- **[RxJS Overview](https://rxjs.dev/guide/overview)**
  - Introduces Reactive Extensions for JavaScript (RxJS), fundamental for Angular’s reactive programming.
  - Provides explanations of Observables, operators, and usage patterns for managing asynchronous data.

- **[Angular Material v17 Documentation](https://v17.material.angular.io/)**
  - Documentation for Angular Material, a UI component library.
  - Covers styling and layout components, like buttons, forms, and navigation to build responsive, accessible interfaces.

#### CSS Layout Resources

- **[CSS Flexbox Layout Guide | CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)**
  - Visual and descriptive guide to CSS Flexbox layout model.
  - Covers concepts like flex containers, items, alignment, and flexible resizing for responsive design.

- **[CSS Grid Layout Guide | CSS Tricks](https://css-tricks.com/snippets/css/complete-guide-grid/)**
  - Extensive tutorial on CSS Grid, a two-dimensional layout system.
  - Walkthroughs of grid container properties, item placements, and template creation for complex layouts.

## Communicate, Communicate, Communicate!

Communication is key to success in a remote internship. Don't hesitate to reach out on Discord if you have questions, concerns, or need guidance. We're here to support you every step of the way.

If you're unsure about what tasks to tackle next or encounter any obstacles preventing you from working, let us know. It's better to communicate openly rather than leave us guessing. Remember, the more you invest in this internship, the more you'll gain from it.

Adjusting to remote work requires self-discipline and initiative, but you're not alone. We're here to help you navigate this journey, so don't hesitate to ask for help or advice. Your success is our priority!
