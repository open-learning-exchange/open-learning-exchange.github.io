##Git Repositories
###Objectives
* Understanding Git repositories and levels
* Learning how to use Git from the command line
* Configuring and syncing your repository

###Prerequisites
* Having completed all the previous steps

On GitHub, our software code is organized in repositories, each of which represents a different project we're working on. For example, you have been working on one of our repositories, called open-learning-exchange.github.io. We would strongly suggest you to look (look, don't touch) at our different repositories on GitHub [here](https://github.com/open-learning-exchange). These repositories act as a categorizing system for us to organize our code.

As previously mentioned, you fork a repository to work on your own GitHub account, and then send back your changes to the upstream repository in the form of a pull request. You went through this process to fork open-learning-exchange.github.io and rename it to your own repository. Normally, we do not rename repositories, but Markdown Wikis are slightly different. In the future, plan on forking different repositories, working on them, then sending your work to the upstream repo via pull request. The general GitHub structure is diagrammed below.

![Repositories Relationship](uploads/images/reposdiagram.png)

###Start here
This is just a summary of the steps that you will need to perform. Please, keep on reading for a detailed explanation of each step.

* [Clone your GitHub repository username.github.io](gitandrepositories.md#Clone_your_GitHub_repository_username.github.io) 
* [Read the explanation to understand repositories and syncing process](gitandrepositories.md#Explanation_about_repositories_and_syncing_process)   
* [Configure a remote for your fork](gitandrepositories.md#Configure_a_remote_for_your_fork)   
* [Sync your fork](gitandrepositories.md#Sync_your_fork)    

####Clone your GitHub repository username.github.io
Now, we will be using GitHub repositories on a command line, which means that there is a separate step to get your GitHub repository on your OS. To be clear, you will be using both the command line and the GitHub user interface, meaning that you need to constantly be checking to make sure that your version is not behind to avoid merge conflicts. Therefore, open a command line and open your username.github.io repository on the  GitHub user interface. You then need to copy the link provided in the repository (see the picture below).

![GitHub Clone URL](uploads/images/githubcloneurl.png)

Then, turn to your command prompt and type your repository URL in the form of `git clone https://github.com/EmilyLarkin/EmilyLarkin.io.git` into the command line. Be sure to use the correct URL to clone your repository (you will obviously type your own username).

####Explanation about repositories and syncing process
The previous step created a clone of your repository on your OS.
Now, there are three different Github repository levels: [open-learning-exchange.github.io](https://github.com/open-learning-exchange/open-learning-exchange.github.io), your username.github.io on GitHub, and your username.github.io on your OS. These three levels need to be constantly synced and up to date with one another as we will all be contributing to the upstream repository (open-learning-exchange.github.io). It's important to try and keep these separate and avoid mixing changes between them, as you will be unable to fork and git push/pull if they are very different versions.

As you create a fork from the original repository and then clone your forked repository onto your OS, you will need to frequently update the fork so that your fork and clone are not behind. Further, you need to sync your repository on your OS and on GitHub (username. github.io) with the upstream repository (open-learning-exchange.github.io). There are various ways to do this, as explained below.

First, the GitHub help section and the [Git website](https://git-scm.com) are incredibly helpful in answering your basic questions. For example, [this link](https://help.github.com/articles/syncing-a-fork/) explains how to sync a fork with the correct upstream repo, because as you renamed your repository, it does not automatically assume that open-learning-exchange.github.io is the source. Instead, it assumes that username.github.io is the master which fails to allow a proper syncing process. Therefore, when you do `git diff` and `git status`, it only looks at your username.github.io. Thus, you need to use `git fetch upstream`, `git checkout master`, and `git merge upstream/master` to correctly sync to open-learning-exchange.github.io.

####Configure a remote for your fork
First, open your command prompt/terminal and find the correct directory, `cd username.github.io`.

To be able to fetch updates from the upstream repository, you need to first configure the upstream repository by following [this link](https://help.github.com/articles/configuring-a-remote-for-a-fork/).

####Sync your fork
Then, use the command `git fetch upstream` to fetch branches from the upstream repository (in this case, it is open-learning-exchange.github.io). Next, check your fork's master branch with `git checkout master`. You should see some variation on this response:

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
# Please enter a commit message to explain why this merge is necessary,
# especially if it merges an updated upstream into a topic branch.
#
# Lines starting with '#' will be ignored, and an empty message aborts
# the commit.
~                                                                               
~
```
it means that you are in the Vim text editor. Simply type ```:wq``` which stands for **w**rite and **q**uit. However, if you want to insert something you can type "i" and Vim goes into edit mode. To exit edit mode just hit "escape".

Now, your repository has been synced to the upstream/master. However, a discrepancy may still exist between your local (and now your origin/master) versus your username.github.io on GitHub. You will now use `git diff` and `git status` to check how your local repository compares to your username.github.io repository. Depending on whether you have more or less commits than your username.github.io, you will either use `git pull` to receive any changes or `git push` to push updates to your repository. Most likely, as you just synced with the master, you will use `git push` to push updates to your username.github.io repo. If you have uncommitted changes (from mixing interface and terminal use of GitHub repositories), then these commands will be aborted until you fix the discrepancy.

Remember, you should repeatedly use the commands `git diff` and `git status` to respectively see the difference between your username.github.io and your local repository and then see the status of your repository and the changes you have made. Once again, you need to sync your repository with the correct master first, otherwise you will not see the correct `git diff` and `git status`. `git diff` and `git status` only look between your local and username.github.io repos, not your upstream repo.

This process needs to be repeated whenever you begin to work, to make sure that you are always up to date. If there are discrepancies, it will mess up the code and you could potentially lose your saved changes, because it was not updated properly. We will provide more information on editing and saving changes in the next tutorial.

If you find yourself needing to rebase your forked repository, the following two links should help
[Rebase](https://git-scm.com/docs/git-rebase)
[Branching Rebasing](https://git-scm.com/book/en/v2/Git-Branching-Rebasing)

 If you would like to understand how syncing with the fork works, here is a useful [video](https://www.youtube.com/watch?v=-zvHQXnBO6c)

####Useful links
[Configure a remote for fork](https://help.github.com/articles/configuring-a-remote-for-a-fork/)  
[Sync fork](https://help.github.com/articles/syncing-a-fork/)  
[GitHub tutorial](http://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)  
[Git help](https://git-scm.com/)  
[Other helpful links and videos](https://open-learning-exchange.github.io/#!pages/faq.md#Helpful_Links)

####Return to [First Steps](firststeps.md)
