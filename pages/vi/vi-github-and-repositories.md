# Git Repositories

## Objectives

* Understanding Git repositories and levels
* Learning how to use Git from the command line
* Configuring and syncing your repository

## Introduction

On GitHub, our software code is organized in repositories, each of which represents a different project we're working on. For example, you have been working on one of our repositories, called open-learning-exchange.github.io. We would strongly suggest you to look (look, don't touch) at our different repositories on GitHub [here](https://github.com/open-learning-exchange). These repositories act as an organizational system for our code.

As previously mentioned, you fork a repository to work on your own GitHub account, and then send back your changes to the upstream repository in the form of a pull request (PR). You went through this process to fork open-learning-exchange.github.io into your own repository and rename it to your own username. Normally, we do not rename repositories, but Markdown Wikis are slightly different. In the future, plan on forking different repositories, working on them, then sending your work to the upstream repo via PR. The general GitHub structure is outlined below.

![Repositories Relationship](images/vi-repo-diagram.png)

## Start Here

This is just a summary of the steps that you will need to perform. Please keep on reading for a detailed explanation of each step.

* [Clone Your GitHub Repository username.github.io](#Clone_Your_GitHub_Repository_username.github.io)
* [Clone with HTTPS or Use SSH?](#Clone_with_HTTPS_or_Use_SSH?) 
* [Read the Explanation to Understand Repositories and Syncing Process](#Explanation_About_Repositories_and_Syncing_Process)
* [Configure a Remote Repository for your fork](#Configure_a_Remote_Repository_For_Your_Fork)
* [Sync Your fork](#Sync_Your_Fork)

### Clone Your GitHub Repository username.github.io

Now, we will be using GitHub repositories on a command line, which means that there is a separate step to get your GitHub repository onto your OS. To be clear, you will be using both the command line and the online GitHub user interface, meaning you need to constantly check to make sure that your version is not behind to avoid merge conflicts. Therefore, open a command line and open your username.github.io repository on the GitHub user interface. You then need to copy the link provided in the repository (see the picture below).

![GitHub Clone URL](images/vi-github-clone-url.png)

Then, turn to your command prompt and type your repository URL in the form of `git clone https://github.com/EmilyLarkin/EmilyLarkin.github.io.git` into the command line. Be sure to use the correct URL to clone your repository (you will obviously type your own username).

##### Clone with HTTPS or Use SSH?

Both HTTPS and SSH URLs identify the same remote repositories but use different protocols to access the codebase. Besides HTTPS, which we talked about above, you can also use SSH to do the same thing. You can explore the differences using [connecting-to-github-with-ssh](https://help.github.com/articles/connecting-to-github-with-ssh/).

### Explanation About Repositories and Syncing Process

The previous step created a clone of your repository on your OS. Now, there are three different GitHub repository levels:  
  * [open-learning-exchange.github.io](https://github.com/open-learning-exchange/open-learning-exchange.github.io) (*upstream*)
  * username.github.io on GitHub
  * username.github.io on your OS

These three levels need to be constantly synced and up-to-date with one another as we will all be contributing to the upstream repository (open-learning-exchange.github.io). It's important to try and keep these separate and avoid mixing changes between them, as you will be unable to fork and git push/pull if they are very different versions.

As you create a fork from the original repository and then clone your forked repository onto your OS, you will need to frequently update the fork so that your fork and clone are not behind. Further, you need to sync your repository on your OS and on GitHub (username.github.io) with the upstream repository (open-learning-exchange.github.io). There are various ways to do this, as explained below.

First, the GitHub help section and the [Git website](https://git-scm.com) are incredibly helpful for answering your basic questions. For example, [this link](https://help.github.com/articles/syncing-a-fork/) explains how to sync a fork with the correct upstream repo, because as you renamed your repository, it does not automatically assume that open-learning-exchange.github.io is the source. Instead, it assumes that username.github.io is the master which fails to allow the proper syncing process. Therefore, when you do `git diff` and `git status`, it only looks at your username.github.io. Thus, following the steps below, you will need to use `git fetch upstream`, `git checkout master`, and `git merge upstream/master` to correctly sync to open-learning-exchange.github.io.

#### Configure a Remote Repository for Your Fork

To be able to fetch updates from the upstream repository, you need to first configure the upstream repository by following these steps:

1. Open your command prompt/terminal and find the correct directory (under your cloned repo), `cd <YOUR_USERNAME>.github.io.`

2. List the current configured remote repositories for your fork with `git remote -v`. This is what it should look like:
```
$ git remote -v
origin  https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git (fetch)
origin  https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git (push)
```

3. Specify a new remote repository name *upstream* that will be synced with the fork by using `git remote add upstream <repository>`. Our remote upstream repository will be https://github.com/open-learning-exchange/open-learning-exchange.github.io.git. Don't forget the `.git` at the end.
```
$ git remote add upstream https://github.com/open-learning-exchange/open-learning-exchange.github.io.git
```

4. Verify if *upstream* is configured correctly with `git remote -v`.
```
$ git remote -v
origin  https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git (fetch)
origin  https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git (push)
upstream  https://github.com/open-learning-exchange/open-learning-exchange.github.io.git (fetch)
upstream  https://github.com/open-learning-exchange/open-learning-exchange.github.io.git (push)
```

### Sync Your Fork

Then, use the command `git fetch upstream` to fetch branches from the upstream repository (which is, in this case, open-learning-exchange.github.io). *If there are any errors, please check for typos from previous step. If so, use `git remote rm upstream` to remove the flawed remote and add the repo as upstream again*. Next, check your fork's master branch with `git checkout master`. You should see some variation of this response:

```
EmilyLarkin.github.io $ git fetch upstream
remote: Counting objects: 1, done.
remote: Total 1 (delta 0), reused 1 (delta 0), pack-reused 0
Unpacking objects: 100% (1/1), done.
From https://github.com/open-learning-exchange/open-learning-exchange.github.io
   6940637..5934ec2  master     -> upstream/master
EmilyLarkin.github.io $ git checkout master
Already on 'master'
Your branch is up-to-date with 'origin/master'.
```

Then, use `git merge upstream/master` to merge the open-learning-exchange upstream/master with your local repository. It should look something like this:

```
EmilyLarkin.github.io $ git merge upstream/master
Updating 1388180..5934ec2
Fast-forward
```

If you get something like this,

```
Please enter a commit message to explain 
why this merge is necessary, especially 
if it merges an updated upstream into a 
topic branch. Lines starting with '#' 
will be ignored, and an empty message 
aborts the commit.
~
~
```
it means that you are in the Vim text editor in normal/command mode. Simply type ```:wq``` which stands for **w**rite and **q**uit. However, if you want to insert something you can type "i" and Vim goes into edit mode. To exit edit mode and return to normal/command mode, just hit "Esc."

Now, your repository has been synced to the upstream/master. However, a discrepancy may still exist between your local (and now your origin/master) versus your username.github.io on GitHub. You will now use `git diff` and `git status` to check how your local repository compares to your username.github.io repository. Depending on whether you have more or fewer commits than your username.github.io, you will either use `git pull` to receive any changes or `git push` to push updates to your repository. Most likely, as you just synced with the master, you will use `git push` to push updates to your username.github.io repo.
``` bash
$ git push origin master
```
If you have uncommitted changes (from mixing interface and terminal use of GitHub repositories), then these commands will be aborted until you fix the discrepancy.

Remember, you should repeatedly use the commands `git diff` and `git status` to respectively see the difference between your username.github.io and your local repository and then see the status of your repository and the changes you have made. Once again, you need to sync your repository with the correct master first, otherwise you will not see the correct `git diff` and `git status`. `git diff` and `git status` only look between your local and username.github.io repos, not your upstream repo.

Below is an example of **git diff** command showing difference in a file in the local and remote repositories.

``` bash
$ git diff
diff --git a/<file name>.md b/<file name>.md
index bf400c0..fc7380b 100644
--- a/<file name>.md
+++ b/<file name>.md
@@ -1,5 +1 @@
 What is this?
```
**What does `diff --git a/<file name>.md b/<file name>.md` mean?**

**Answer:** Our diff compares two items with each other: item A and item B. In most cases, A and B will be the same file, but different versions. To make clear what is actually being compared, a diff output always starts by declaring which files are represented by "A" and "B."

**What does `--- a/<file name>.md` and `+++ b/<file name>.md` mean?**

**Answer:** Further down in the output, the actual changes will be marked as coming from A or B. In order to tell them apart, A and B are each assigned a symbol: for version A, this is a minus ("-") sign and for version B, a plus ("+") sign.

This process needs to be repeated whenever you begin to work, to make sure that you are always up-to-date. If there are discrepancies, it will mess up the code and you could potentially lose your saved changes, because it was not updated properly. We will provide more information on editing and saving changes in the next tutorial.

### Summary of Steps

Generally, follow these commands in your command line, but refer back above if there are any errors or further questions about why you are writing any of the following commands.

1. Clone your git <username> repository using ``git clone`` and open it in your terminal by using ``cd``

2. Add upstream remote and check origin remote is correct using ``git remote -v``

3. Check for changes you missed while you were gone. You can do this with ``git fetch upstream`` ([info](https://git-scm.com/docs/git-fetch)), ``git checkout master``, and ``git merge upstream/master`` ([info](https://git-scm.com/docs/git-merge)).
  - If you're slightly confused, remember that the "upstream" we're referring to is the [main OLE GitHub repository](https://github.com/open-learning-exchange/open-learning-exchange.github.io).

4. Push the updates you just downloaded to your <username> repository by using ``git push`` ([info](https://git-scm.com/docs/git-info))

**NOTE**: Developers should repeat steps 2 and 4 every time they begin to work. This can minimize data loss and save you time. You want to make sure that you are always up-to-date with upstream.

If you find yourself needing to rebase your forked repository, the following two links should help:

[Rebase](https://git-scm.com/docs/git-rebase)
[Branching Rebasing](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)

**NOTE**: While rebasing and merging are similar, there is a difference between them. Merging takes all changes in one branch and merges onto another branch in one commit. Rebasing moves the branch's starting point to another place. For example, if you rebased your branch to the master branch, then your branch now incorporates all the changes made in the master and every time master is changed, your branch is changed as well. In contrast, merging is a one-time change.

For more info on differences of merging vs. rebasing (and when to use each one), [check this out](https://www.atlassian.com/git/tutorials/merging-vs-rebasing).

 If you would like to understand how syncing with the fork works, here is a useful [video](https://www.youtube.com/watch?v=-zvHQXnBO6c).

## Useful links

[Configure a remote for fork](https://help.github.com/articles/configuring-a-remote-for-a-fork/)
[Sync fork](https://help.github.com/articles/syncing-a-fork/)
[GitHub tutorial](http://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)
[Git help](https://git-scm.com/)
[Configure a remote for fork](https://help.github.com/articles/configuring-a-remote-for-a-fork/) - You can sync changes made in the original repository with a fork.
[Sync fork](https://help.github.com/articles/syncing-a-fork/) - Sync a fork of a repository to keep it up-to-date with the upstream repository.
[GitHub tutorial](http://product.hubspot.com/blog/git-and-github-tutorial-for-beginners) - An Introduction to Git and Github for beginners from Hubspot.
[GitHub's Git Tutorial](https://try.github.io/) - An interactive tutorial to learn GitHub in the browser.
[Git-it Workshop](http://jlord.us/git-it/) - Runs in your terminal to work and provides a hands-on approach to learn Git and GitHub repositories.
[Git help](https://git-scm.com/) - An encyclopedia of useful git workflows and terminology explanations.
[Other helpful links and videos](vi-faq.md#Helpful_Links)

#### Return to [First Steps](vi-first-steps.md#Step_5_-_Keeping_Fork_Updated)
