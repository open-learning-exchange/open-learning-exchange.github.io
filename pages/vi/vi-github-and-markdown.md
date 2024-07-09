# GitHub and Markdown (Step 3)

## 1. Objectives

- Learn about GitHub and Markdown
- Create your own Markdown profile page
- Understand the Forking workflow on GitHub (including forks, repositories, commits, and pull requests)

## 2. Preparation

Before diving into GitHub, Markdown, and forking workflow, it's crucial to understand the essential tools and resources involved for this tutorial:

- [Markdown](https://en.wikipedia.org/wiki/Markdown) – a lightweight markup language with plain text formatting syntax.
- [GitHub](https://docs.github.com/en) –  a platform for hosting code, version control, and collaboration.
- [MDwiki](http://dynalon.github.io/mdwiki/#!quickstart.md) – a content management system that leverages Markdown. The site you are reading is built with MDwiki.
- [Forking Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow) - This is the workflow you'll be using during the First Steps phase, as you won't have direct access to our repositories yet. This tutorial will focus solely on using this workflow on GitHub.com to keep things simple. We'll explore working with Git on the command line in more depth later.

### 2.1 Introduction to Markdown

1. Review [Getting Started | Markdown Guide](https://www.markdownguide.org/getting-started/) for an overview of Markdown, how it works, and what you can do with it.
2. Go through [Basic Syntax | Markdown Guide](https://www.markdownguide.org/basic-syntax/) to learn the fundamental syntax.
3. Complete [this interactive Markdown tutorial](https://tylingsoft.github.io/tutorial.md/#whats-markdown) to gain some practical experience.

### 2.2 Introduction to GitHub

Ensure you are logged in to GitHub with your account credentials. If you're unfamiliar with GitHub's layout and functionalities, visit [our repository](https://github.com/open-learning-exchange/open-learning-exchange.github.io) to explore around.

**NOTE**: Confirm your commit email address on GitHub is set correctly. For detailed steps, refer to [Setting your commit email address on GitHub - GitHub Doc](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-on-github).

### 2.3 Introduction to Forking Workflow

The [forking workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow) is a collaborative approach to software development, commonly used in open-source projects. It allows developers to contribute to a project without requiring direct access to the original repository. Here's how it works:

- **Forking**: This is where you create a copy of an existing project repository under your own GitHub account. It's like duplicating a book so you can make notes without altering the original.

- **Independent Changes**: In your forked repository, you have the freedom to explore, experiment, and make changes. You can create new features, fix bugs, or improve documentation.

- **Pull Requests**: Once you're happy with your changes, you can propose them to the original project by creating a pull request. This is a request for the project maintainers to review and possibly merge your changes into their codebase.

## 3. Add Your Own Markdown Profile Page with Forking Workflow on github.com

Below is a summary of the steps that we will walk you through:

1. [Find and fork the correct repository](#3.1_Find_and_fork_the_correct_repository)
2. [Go to Settings and rename your repository](#3.2_Go_to_Settings_and_rename_your_repository)
3. [Check to see if your github.io site works](#3.3_Check_to_see_if_your_github.io_site_works)
4. [Create a new file as your personal MDwiki page and commit your changes](#3.4_Create_a_new_file_as_your_personal_MDwiki_page_and_commit_your_changes)
5. [Open a pull request](#3.5_Open_a_pull_request)

### 3.1 Find and fork the correct repository

Forking creates a personal copy of a repository in your GitHub account, allowing you to make changes without affecting the original repository.

To fork the correct repository, follow these steps:

1. Visit the [OLE github.io repository](https://github.com/open-learning-exchange/open-learning-exchange.github.io).
2. Click the "Fork" button at the top-right corner. If you're unable to locate it, refer to [Forking a repository - GitHub Docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo#forking-a-repository).

**NOTE**: Until you become an official virtual intern, always fork the repository before making changes. Commit your changes to your forked version, and submit pull requests to contribute back to OLE's repository. The main repository will be updated once your pull requests are approved.

### 3.2 Go to Settings and rename your repository

After forking the repository, you'll be redirected to your personal copy of the repository: **&lt;YourUserName&gt;/open-learning-exchange.github.io**. To rename this repository to create your GitHub Pages site:

1. Click at the repository Settings at the top of the page.
2. In the repository name field, change it to `YourUserName.github.io`.
3. Click **Rename** to confirm the change.

**Note:** If you already have a GitHub Pages site at https://YourUserName.github.io in use, refer to [this FAQ question](#!pages/mi/mi-faq.md#Q17:_What_do_I_do_if_I_already_have_a_github.io_with_my_username?) for guidance.

![Renaming Repository](images/vi-rename-repository.png)

### 3.3 Check to see if your github.io site works

After renaming your repository, visit `https://<YourUserName>.github.io` to check if your site is live.

If you see a "404 Page Not Found" error, don't panic. It may take a while for your GitHub Pages site to build and become accessible. To ensure it's set up correctly, go to the repository **Settings > Pages** and confirm that the **Source** is set to "Deploy from a branch" and `master` `/(root)` are selected under **Branch**.

### 3.4 Create a new file as your personal MDwiki page and commit your changes

Before editing, ensure you're working in your own GitHub repository. Verify that the repository name includes your GitHub username. For example, it should look like `<YourGitHubUserName>/<YourGitHubUserName>.github.io`.

#### 3.4.1 Create a new branch

1. **Switch to the Master Branch**: Click the branch selector at the top-left corner of your repository. If it doesn't say "**master**", switch to the master branch.
2. **Name the New Branch**: Click the branch selector again, then type a descriptive name like `add-<YourGitHubUserName>-profile`. For best practices on branch naming, check out this [guide](https://github.com/agis/git-style-guide#branches).
3. **Confirm Creating the New Branch**: Click "Create branch **add-&lt;YourGitHubUserName&gt;-profile** from **master**." You should now see "**add-&lt;YourGitHubUserName&gt;-profile**" as your current branch.

  ![New Branch](images/vi-new-branch.png)

#### 3.4.2 Create your profile file in Markdown

To create your profile file, follow these steps:

1. Navigate to `pages/mi/profiles/` folder from the main page of your forked repository.
2. Ensure you are still on the branch you just created, look for "**add-&lt;YourGitHubUserName&gt;-profile**" on the branch selector menu
3. Above the list of files, select the "Add file" dropdown menu, then click "Create new file".
4. Name the file using your GitHub username with the .md extension (e.g., `JohnDoe.md`). This ensures your profile is easy to find.

In this new Markdown file, include the following information with a minimal of 5 Markdown elements:

- Your name, location/time zone, and OS (with version)
- A brief description of yourself to help others get to know you.

Use the "Preview" tab to preliminarily see how your Markdown will look like. Aim to use at least five different types of Markdown elements for variety. Avoid HTML, as the purpose of Markdown is to keep things simple. Consider creative examples, like:

- [Profile 1](profiles/lillyxxx.md) (using table, list, and emoji)
- [Profile 2](profiles/paulbert.md) (using link, list, and emoji)

When you're ready, click the "Commit changes..." button. If you need to edit your file again, click the pencil icon.

To preview your changes rendered by MDwiki, use the following link, replacing "YourUserName" with your GitHub username and "YourBranchName" with the name of your branch:

`https://raw.githack.com/YourUserName/YourUserName.github.io/YourBranchName/#!pages/mi/profiles/YourUserName.md`

Before proceeding to the next section, please ensure that everything looks as expected and works correctly with the raw.githack link.

**NOTE**:
- New changes you push should be reflected within minutes on raw.githack. If changes still don't appear, clear your browser's cache or open your page in "incognito" or "private" mode. You can also force refresh/reload the page using `Ctrl+Shift+R` or `Ctrl+F5` (on Mac: `Cmd+Shift+R`).
- Remember that there are [different Markdown flavors](https://github.com/commonmark/CommonMark/wiki/Markdown-Flavors). Since the MDwiki site is used for "production," always check if your content renders correctly on the raw.githack link. Use GitHub's preview tab for guidance, but rely on raw.githack for accuracy.

### 3.5 Open a pull request

Once you have your profile ready, it's time to create a pull request. Click on one of the "Pull request" buttons as highlighted in the screenshot below.

![Initiate Pull Request](images/vi-initiate-pull-request.png)

![Complete Pull Request](images/vi-create-pull-request.png)

**There are a few things to watch out before clicking on the "Create pull request" button**. Make sure you:

- give the pull request a short and descriptive title (e.g. add YourUserName.md)
- follow the pull request template, include the raw.githack link to your Markdown profile page in the pull request description
- verify you used at least **5 different** Markdown elements in your profile
  - To use emojis in your profile, copy the actual emoji directly (e.g., '🐱' instead of ':emojicode:'). You can find and copy emojis from [emojipedia](https://emojipedia.org/).
  - Task lists are supported on GitHub but not on MDwiki. They may look correct on GitHub but not on MDwiki.

Finally, click "Create pull request" button and post the link to your GitHub Pages and profile pull request in the #vi-software channel on discord:

> I'm on step 3 - GitHub and Markdown, please look at `https://YourUserName.github.io` and review my profile pull request `LinkToYourPullRequest`

Remember, it can take a while for `https://YourUserName.github.io` to be up and running, so don't worry if you see a **404** when you access the link!

A member of our team will review your changes and notify you on Discord. Reviewers often provide feedback, so be prepared to address their suggestions or corrections. If you receive feedback, make the necessary changes in your branch by navigating to the file in your forked repository or by clicking on the pull request's "Files changed" tab, selecting "...", and then "Edit file." Leave a comment on the pull request once you're finished, and don't forget to notify us on Discord. Any updates you make to your branch will automatically reflect in the pull request.

After you receive enough approving reviews, we will merge your Markdown profile into the main repository.

After the pull request is merged, you'll be able to see your personal page at `open-learning-exchange.github.io/#!pages/mi/profiles/<YourUserName>.md`. Let us know in the #vi-software channel on discord after you complete this step.

#### 3.5.1 Delete the Branch from your remote repository

After your pull request has been **approved** and **merged** by us, you might want to delete the branch that is associated with your pull request. It can keep your remote (yourUserName.github.io on GitHub) repository away from a mess of defunct branches. To delete the defunct branch in your remote repository, you can click the "Delete branch" button in your pull request (see the picture below).

![Delete Merged Branch](images/vi-delete-merged-branch.png)

## 4. Useful Links

- [Basic writing and formatting syntax - GitHub Docs](https://guides.github.com/features/mastering-markdown/)
- [MDWiki – Quick Start](http://dynalon.github.io/mdwiki/#!quickstart.md) - The official MDwiki quick start guide on Markdown syntax.
- [Fork a repository - GitHub Docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) - A more in-depth explanation about how and why we fork repositories.
- [Managing files - GitHub Docs](https://docs.github.com/en/repositories/working-with-files/managing-files)

## Next Section _([Step 4](vi-planetapps.md))_ **→**

In the next step, you will learn more about your community Planet, and the Planet interface.

#### Return to [First Steps](vi-first-steps.md#Step_3_-_Markdown_and_Fork_Tutorial)
