# GitHub and Markdown

## Objectives

* Learn about GitHub and Markdown
* Create your own Markdown profile page
* Understand the GitHub workflow (including forks, repositories, commits, and pull requests)

## Preparation

[GitHub](https://help.github.com/categories/writing-on-github/) – a web-based hosting service for version control using git, source code management system for OLE.

[Markdown](https://en.wikipedia.org/wiki/Markdown) – a lightweight markup language with plain text formatting syntax.

[MDwiki](http://dynalon.github.io/mdwiki/#!quickstart.md) – a CMS/Wiki built in HTML5/Javascript and runs on the client. It uses Markdown as its input markup language. The OLE support website you are currently viewing is realized with MDwiki.

### Markdown

![Markdown Preview](images/vi-markdown-ref.png)
Example of Markdown syntax on the left side and the way it is rendered on the right side (click on image to expand):

![Markdown Cheat Sheet](images/vi-markdown-syntax.png)
A Markdown cheat sheet that might help you create your own Markdown page later:

**NOTE**: Markdown != HTML. For more reference or tutorial about Markdown, jump to [Useful Links](#Useful_Links). **If you have not used Markdown before, we recommend you to go through at least one of the tutorials/guides.**

## Start Here

Below is a summary of the steps that we will walk you through:

* [Login to GitHub with your username and password](#Login_to_GitHub_with_your_username_and_password)
* [Find and fork the correct repository](#Find_and_fork_the_correct_repository)
* [Go to Settings and rename your repository](#Go_to_Settings_and_rename_your_repository)
* [Post a link to your github.io website in chat](#Post_a_link_to_your_github.io_website_in_chat)
* [Create a new file as your personal MDwiki page and commit your changes](#Create_a_new_file_as_your_personal_MDwiki_page_and_commit_your_changes)
* [Open a pull request](#Open_a_pull_request)

### Login to GitHub with your username and password

Since you have already created an account on GitHub, we will assume that you understand the basic layout and functionality. If you don't, please explore and do some basic googling.

There is a lot to learn about GitHub, but to acclimatize you to it, we will walk you through a basic example of how to create your own &lt;username&gt;.github.io and allow you to edit and commit your changes.

**NOTE**: Existing GitHub users, please make sure to set your email address per local repository or make sure global settings are accurate. Follow [this](https://help.github.com/articles/setting-your-commit-email-address-in-git/) for more information.

### Find and fork the correct repository

Forking is essentially creating a copy of a repository on your own GitHub account, to avoid editing and, possibly, messing up with the main repository.

Now, go to [OLE's github.io repository](https://github.com/open-learning-exchange/open-learning-exchange.github.io) and click on the "Fork" button as shown in the screenshot below to fork the repository to your own GitHub account.

![Forking on GitHub](images/vi-github-forking.png)

**NOTE**: It is very important to **distinguish between your personal GitHub account and OLE's account**.
As we want to keep a 'clean' version of our code, everyone forks the repositories, commit their changes to a branch on their own version of the repository, and then send the changes back to OLE's repository for approval (called a pull request), before OLE's code is updated.

### Go to Settings and rename your repository

After you fork the repository, you will be on your repository: &lt;YourUserName&gt;/open-learning-exchange.github.io. Next, you should go to Settings at the top middle of the page and rename your repository to &lt;YourUserName&gt;.github.io. See example below.

![Renaming Repository](images/vi-rename-repository.png)

### Post a link to your github.io website in chat

After renaming your forked repository, make sure to post a link to the github.io website you've just created in the [gitter.im chat](https://gitter.im/open-learning-exchange/chat):

> @/all I'm on step 3 - GitHub and Markdown, please look at https://YourUserName.github.io

Don't worry if you see a **404** when you access the link, it will take a while for the page to be up and running. Make sure in **Settings > GitHub Pages**, the **source** is set to **_master branch_**.

### Create a new file as your personal MDwiki page and commit your changes

**Again, when you're editing on GitHub, it is important to make sure you are working on your own GitHub repository.** To that end, make sure there is your own username before the slash and the correct repository after the slash. For example: `EmilyLarkin/EmilyLarkin.github.io`.

First, before creating your file, we need to create a new branch

1. Click on the branch selector menu (make sure it says "Branch: **master**", if it's something else, click on it and switch to master branch first
1. Give your new branch a short and descriptive name (you can read more about branch naming [here](https://github.com/agis/git-style-guide#branches))
1. Click on "Create branch: your-new-branch-name". Then you should see "Branch: **your-new-branch-name**" on the branch selector menu

  ![New Branch](images/vi-new-branch.png)

Next, we are going to create your page

1. Go to the `pages/vi/profiles` folder
1. Make sure you are still on the new branch your just created, look for "Branch: **new-branch-name**" on the branch selector menu
1. Click `Create new file` button
1. Name the file exactly the same as your GitHub username with file extension `.md`
  * It is important that you stick with your GitHub username so we could easily identify you
  * For reference, an example of a link to a personal page is [https://github.com/kylemathias/kylemathias.github.io/blob/master/pages/vi/profiles/kylemathias.md](https://github.com/kylemathias/kylemathias.github.io/blob/master/pages/vi/profiles/kylemathias.md), yours should be named in the same manner, only using your username.

Then, in the new Markdown file, include the following information:

* your name, location/time zone, and OS (including version)
* a short description of yourself (so your fellow virtual interns know who you are)

You may use the "Preview" tab to have a primitive look of what your Markdown will look like. We recommend using at least 5 different types of Markdown elements so you can get an idea of how it works. Avoid using HTML as the purpose of Markdown is to make pages easy to write and read. Try to be as creative as possible. Some good examples of profiles are: [Profile 1](profiles/Loshma93.md) (links), [Profile 2](profiles/ketruong.md) (picture), [Profile 3](profiles/paulbert.md) (lists)

If you need to edit your file again, click the pencil icon to edit (as shown below).

  ![Edit Profile](images/vi-edit-profile.png)

Now, check what this looks like on your own page `https://rawgit.com/YourUserName/YourUserName.github.io/YourBranchName/#!pages/vi/profiles/YourUserName.md`. Please double check that everything looks good and is working as you hoped before moving on to next section.

**NOTE**:
• If you don't see any changes in your page after editing your file then you need to clear your browser's cache or open your page in your browser's **"incognito"** or **"privacy"** mode. You can also press Ctrl+Shift+R or Ctrl+F5 to reload the page with cache cleared.
• As MDwiki site is what we use for "production," please **always check** if everything renders as you expected using rawgit link. There are [different flavors of Markdown](https://github.com/commonmark/CommonMark/wiki/Markdown-Flavors). Use GitHub's preview tab for reference only.


### Open a pull request

Once you have your profile ready, it's time to create a pull request. Clink on the "Pull requests" button as highlighted in the screenshot below.

![Initiate Pull Request](images/vi-initiate-pull-request.png) ![Complete Pull Request](images/vi-create-pull-request.png)

There are a few things to watch out before clicking on the green "Create pull request" button. Make sure you:

* give the pull request a short and descriptive title (e.g. create YourUserName.md)
* include the rawgit link to your Markdown profile page in the pull request description
* scroll down the page and verify you used at least 3-5 Markdown elements in your profile

Finally, click "Create pull request" button and post the link to your pull request in the [gitter chat](https://gitter.im/open-learning-exchange/chat), someone from our team will review the changes and notify you.

Often there will be some feedback from the reviewer for you to address. If that is the case, make changes to your branch and comment on the pull request when done. Any changes you make to your branch will be automatically updated in the pull request. Once everything looks good, the reviewer will merge your Markdown profile with the main repository.

After the pull request is merged, you'll be able to see your personal page at `open-learning-exchange.github.io/#!pages/vi/profiles/<YourUserName>.md`. Let us know in the [gitter.im chat](https://gitter.im/open-learning-exchange/chat) after you complete this step.

**NOTE**: Try to add and experiment with as many markdown elements as you can and make your page attractive. A list of sample profile pages can be found [**here**](https://github.com/open-learning-exchange/open-learning-exchange.github.io/tree/master/pages/vi/profiles). Be creative.

## Useful Links

[GitHub – Mastering Markdown](https://guides.github.com/features/mastering-markdown/) - The official GitHub Guide for Markdown syntax.
[MDWiki – Quick Start](http://dynalon.github.io/mdwiki/#!quickstart.md) - The official MDwiki quick start guide on Markdown syntax.
[Markdown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) - A bigger Markdown cheat sheets with examples
[Markdown Tutorial](https://tylingsoft.github.io/tutorial.md/#whats-markdown) - An interactive tutorial to learn Markdown.
[Markdown Interactive Tutorial](http://www.markdowntutorial.com/lesson/1/) - Another awesome interactive tutorial to experiment and learn more Markdown syntax.

[GitHub - Writing and Formatting](https://help.github.com/categories/writing-on-github/) - A GitHub help page on how to format and write, along with working with saved replies.
[GitHub - How to fork a repo](https://help.github.com/articles/fork-a-repo/) - A more in depth explanation about how and why we fork repositories.

[Other helpful links and videos](vi-faq.md#Helpful_Links)

#### Return to [First Steps](vi-first-steps.md#Step_3_-_Markdown_and_Fork_Tutorial)
