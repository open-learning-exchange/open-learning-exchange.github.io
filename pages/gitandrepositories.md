##Git Repositories 

On GitHub, our software code is organized by repositories which are different sections of our software development. For example, you have been working one of the repositories: open-learning-exchange.github.io. I would strongly suggest looking (look, don't touch) through our different repositories on GitHub [here](https://github.com/open-learning-exchange). These repositories act as a categorizing system for us to organize our code. 

As previously mentioned, you fork a repository to work on your own user and then send it back to the master repository in the form of a pull request to update it. You went through this process to fork open-learning-exchange.github.io and rename it to your own repository. Normally, we do not rename but as markdown wikis are slightly different, we renamed in the repository in that example. In the future, plan on forking different repositories, working on them, then sending your work to the master/origin via pull request.  

Now, we will be using GitHub reposiitories on a command line, which means that there is a separate step to get your GitHub repository on your OS. To be clear, you will be using both the command line and the GitHub user interface, meaning that you need to constantly be checking to make sure that your version is not behind to avoid merge conflicts. Therefore, open a command line and open your username.github.io repository on the  GitHub user interface. You then need to copy the link provided of the repository (seen in the picture below).

![GitHub Clone URL](/pages/uploads/images/githubcloneurl.png)

Then, turn to your command prompt and type your repository URL in the form of `git clone https://github.com/EmilyLarkin/EmilyLarkin.io.git` into the command line. You will use whichever URL you need to clone the proper repository; you will obviously not type mine.

Now, you have created a clone of your repository on your OS. You know have three different levels of GitHub repositiory: [open-learning-exchange.github.io](https://github.com/open-learning-exchange/open-learning-exchange.github.io), username.github.io, and your username.github.ion on your OS. These three levels need to be constantly synced and up to date with one another as we will all be contributing to the origin/master. It's important to try to keep these separate and not mix changes between them as you will be unable to fork and git push/pull if they are very different versions. An explanation on how to keep these repositories up to date is below. 

As you create a fork from the original repository and then clone your forked repository onto your OS, you will need to update the fork continuously so that your fork and clone are not behind. Further, you need to sync your repository on your OS and on GitHub (username. github.io) with the master repository (open-learning-exchange.github.io). There are various ways to do this which I will detail below. 

First, the GitHub help section and https://git-scm.com are incredibly helpful in answering your basic questions, including [this link](https://help.github.com/articles/syncing-a-fork/), which details how to sync a fork with the correct origin/master, because as you renamed your repository, it does not automatically assume that open-learning-exchange.github.io is the source. Instead, it assumes that username.github.io is the master which fails to allow a proper syncing process. Therefore, when you do `git diff` and `git status`, it only looks at your username.github.io. Therefore, you need to use `git fetch upstream`, `git checkout master`, and `git merge upstream/master` to correctly sync to open-learning-exchange.github.io. 

I would begin by opening your command prompt/terminal and finding the correct directory: `cd username.github.io`.

Then, use the command `git fetch upstream` to fetch branches and repositories from the upstream repository (in this case, it is open-learning-exchange.github.io). The check your fork's master branch with `git checkout master`. You should see some variation on this response: 

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

Now, your repository has been synced to the upstream/master. However, a discrepancy may still exist between your local (and now your origin/master) versus your username.github.io. You will now use `git diff` and `git status` to check how your local repository compares to your username.github.io repository. Depending on whether you have more or less commits than your username.github.io, you will either use `git pull` to receive any changes or `git push` to push updates to your repository. Most likely, as you just synced with the master, you will use `git push` to push updates to your username.github.io repo. If you have uncommitted changes (from mixing interface and terminal use of GitHub repositories), then these commands will be aborted until you fix the discrepancy.

Remember, you should repeatedly use the commands `git diff` and `git status` to respectively see the difference between the your username.github.io and your local repository and then see the status of your repository and the changes you have made. Once again, you need to sync your repository with the correct master first, otherwise you will not see the correct `git diff` and `git status`. `git diff` and `git status` only look between your local and username.github.io repos, not your origin/master repo. 

This process needs to always be repeated when you begin work to make sure that you are always up to date. If there are discrepancies, it will mess up the code and you could potentially lose your saved changes because it was not updated properly. We will provide more information on editting and saving changes in the next tutorial. 
