# Day-to-Day Guide for Planet Virtual Interns

Now that you’ve completed the 10 steps, you’re ready to become a productive member of the team. As a virtual intern, your 4 core responsibilities are:

- Testing the app  
- Creating issues  
- Reviewing others’ pull requests  
- Submitting your own pull requests  

You can always check your day-to-day progress on your GitHub profile, where it’s reflected as points. Our hope is that you find satisfaction watching your contributions climb.

## Scheduling

Your schedule is largely up to you, although we generally require 20–24 hours per week, Monday–Friday between 8AM–6PM EST. This ensures that you’re able to work alongside your team leaders and other interns. This schedule also helps you get up to speed as soon as possible in order to begin making meaningful contributions.

- Post your schedule in the Discord, so we know when we can expect to work with you.  
- If there will be permanent changes, post an updated schedule.  
- If you cannot make it to a shift, whenever possible, give us 1 work day’s notice.

## Recommended Daily Workflow

Your role offers flexibility in terms of how you schedule your tasks. Over time, you will find a workflow that fits you. One effective way to organize your day-to-day tasks is in the following order:

### [Check into the Virtual Office](https://talk.ole.org/)

As a new intern, it’s a good idea to verbally check in with Mutugi when you arrive. After a week or two, you can just get right to your tasks if you feel comfortable doing so.

### [Review Pull Requests](https://github.com/open-learning-exchange/planet/pulls)

- For each PR, look at the linked issue and test thoroughly to ensure that the PR fixes the issue without creating additional issues and that the code is clean and maintainable.  
- If you need to give feedback beyond simply approving the PR, screenshots and screen recordings are always helpful.

### [Find an issue](https://github.com/open-learning-exchange/planet/issues)

- See if there are issues assigned to you, or assign an issue to yourself if there is an unclaimed one that you feel is a good fit for you.

### Begin Working on Your Assigned Issues

- In general, the best practice is to give each issue its own branch so that PRs are easy to understand and merge conflicts are minimized.

### Create a PR Once You Feel the Issue is Solved

Before your very first PR, open the terminal in the app directory and run:

```
npm run install-hooks
```

This prevents [linting issues](https://www.testim.io/blog/what-is-a-linter-heres-a-definition-and-quick-start-guide/) in your pull requests.

To test that your linters are working, run:

```
ng lint
```

If you see general linting errors, try running:

```
ng lint --fix
```

If you see linting errors related to the Chat API, run:

```
cd chatapi
npm install
cd ..
```

Now when you push changes, you should see both tslint for the file and chatapi are passed.

If your PR is a work in progress, feel free to submit it as a draft so you can get back to it later.

#### The Formatting of Our Pull Requests is Very Important

**Title:**

- Use lower case  
- Begin with the relevant page and a colon, e.g. `resources:`, `courses:`, `manager:`  
- Keep the rest positive and concise, e.g. `smoother date filtering`, `more responsive toolbar`, `cleaner menu formatting`  
- End the title with the issue number in parentheses, e.g. `(fixes #1234)`  
- Example: `manager: smoother date filtering (fixes #8145)`

You may want to look at [closed PRs](https://github.com/open-learning-exchange/planet/pulls?q=is%3Apr+is%3Aclosed) for more examples.

**Body:**

- Begin the body of the PR with the issue number, e.g. `fixes #1234`, which will helpfully link directly to the issue for those reviewing the PR  
- Include a brief description, unless the change is very simple  
- Include screenshots and/or screen recordings if you think more information would be helpful

### Check Out

This is one of your most important responsibilities. When it’s nearing the end of your shift, try to verbally check out with Mutugi or Dogi. This is a good chance to show off the progress you made today.

If neither of them are available, it is acceptable to check out in the [Planet Discord channel](https://discord.com/channels/1079980988421132369/1243223477608124426)
.

Example checkout message:

- Number of PRs created  
- Number of PRs reviewed  
- Number of issues created  
- When we will see you next

## Thursday Testing Day

On Thursdays we test the app. Since we spend most of the week testing our production environment, we use this opportunity to test the production server, which you created in [Step 3](https://open-learning-exchange.github.io/#!pages/vi/vi-first-steps.md#Step_3_-_Planet_and_Docker). Make sure it is up to date:

1. Log into your community, go to Manager Settings > Manage Sync  
2. Click Run Sync, wait a few moments, and then click Refresh  
3. Most, if not all, of the items listed should have a cloud/checkmark icon

A good place to start testing the app is by navigating to the [Tags page on GitHub](https://github.com/open-learning-exchange/planet/tags).

See the Planet Discord channel where Mutugi posts the weekly test versions. Test all the tags between the version jump, and confirm that the changes are working correctly.

Spend some time looking around the app and create issues as you see fit. When in doubt, ask Mutugi if an issue you found is valid.

## Friday Meeting

On Fridays at 11AM EST in the virtual office, the team leaders meet with Richard Rowe, OLE’s president and CEO to discuss our weekly progress and future plans. While interns rarely participate, you are welcome to listen in. We have a very flat management structure at OLE and feel that interns can benefit from the transparency with which the organization is guided. There is usually an opportunity later in the day for you to give your feedback on the meeting, if you have any.

## Virtual Office Etiquette

Our team works best when we treat the virtual office like a physical one. That means being accessible for communication by spending most of your shift logged into the virtual office. We affectionately call it the Planet radio station, so feel free to tune in and out as needed. If the conversation isn’t relevant to you and becomes distracting, go ahead and mute the tab, just don’t forget to turn the volume back up after a little while. Staying connected keeps our team energy flowing.

- Please keep yourself muted when you’re not talking to avoid distracting others.  
- If you're having audio or connection issues, try exiting and rejoining.  
- If you need to step away, put a message in the chat to let us know.  
- Stay in touch! If you ever have questions about any part of your workflow, the virtual office is the perfect place to ask.
