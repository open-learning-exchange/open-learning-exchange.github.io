# Git Repositories: A Guide to Cloning, Configuring, and Syncing Forks

## Objectives

- Learn how to **use Git from the command line**
- Understand how to configure and sync a repository with the forking workflow

## Introduction

On GitHub, software code is organized into repositories, each representing a different project. For example, you've been working on one of our repositories, **open-learning-exchange.github.io**. We encourage you to explore our other repositories on GitHub [here](https://github.com/open-learning-exchange), but remember: **look, don't touch**. If you are new to Git or GitHub, take a look at [this introduction](https://www.freecodecamp.org/news/introduction-to-git-and-github/).

As previously mentioned, in the [forking workflow](mi-github-and-markdown.md#2.3_Introduction_to_Forking_Workflow), you fork a repository to work on it independently from the upstream repository, then send your changes back to the original repository via a pull request. You completed this process on github.com in Step 1. In this step, we'll dive deeper and use the command line to sync your forked repository with OLE's upstream repository.

The diagram below shows the structure of the forking workflow for open-learning-exchange.github.io, with a central upstream repository, individual forks, and local copies on your machine.

![Repositories Relationship](image/mi-repo-diagram.png)

## Important Terms

In this step, you'll encounter some common terms, such as

- `master`/`main`: a repository's default branch name
- `upstream`: the repository you forked from
- `origin`: your own fork of the upstream repository
Both `upstream` and `origin` are considered **[remote](https://git-scm.com/docs/git-remote)**. Also, remember that a repository can contain multiple branches.

## 1. Clone Your GitHub Repository

Both HTTPS and SSH URLs allow you to access the same remote repositories, but they use different protocols. You can choose either based on your preference:

- **HTTPS:** Easier to set up for beginners, doesn't require SSH keys.
- **SSH:** More secure, requires you to have SSH keys set up on your machine and added to your GitHub account.

For more details, check [Cloning a repository | GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

#### To clone with SSH

1. [Verify you have existing SSH keys on your machine](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys).
2. [Add the SSH key to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

### 1.2 Clone Your Repository

1. Open a command prompt/terminal window and visit your `<YourUserName>.github.io` repository on GitHub.
2. Click the green "<> Code" button to get the repository's URL. Copy the HTTPS or SSH link.
3. In your command line interface (CLI), type `git clone ` and paste the copied link. It should look similar to:
   - **HTTPS:** `git clone https://github.com/<YourUserName>/<YourUserName>.github.io.git`
   - **SSH:** `git clone git@github.com:<YourUserName>/<YourUserName>.github.io.git`
4. Hit Enter. If the repository is cloned successfully, you can now `cd` into your `<YourUserName>.github.io` directory to see its contents.

## 2. Explanation About Repositories and Syncing Process

![GitHub Clone URL](image/mi-forking-and-updating-a-repo.png)

The previous step created a clone of your repository on your OS.

Now, there are three levels of repositories to keep in mind:

1. **Upstream Repository on GitHub:** `open-learning-exchange.github.io`
2. **Your Fork on GitHub:** `<YourUserName>.github.io`
3. **Your Local System Clone:** `<YourUserName>.github.io`

These repositories must be consistently synced and up-to-date with each other since we all contribute to the upstream repository (open-learning-exchange.github.io). It's crucial to keep changes separate and avoid mixing them between repositories. Significant differences can cause conflicts and prevent you from performing `git push/pull` operations smoothly.

### 2.1 Detailed Explanation of Syncing Repositories

The syncing process involves several key steps to ensure your local repository, your GitHub fork, and the upstream repository remain coordinated:

1. **Establish Remote Connections**
   When you clone a repository, Git automatically creates a remote connection called `origin` pointing to your GitHub fork. However, you need to manually add a connection to the upstream repository from which you originally forked.

2. **Fetch Upstream Changes**
   The `git fetch upstream` command retrieves all the branches and their respective commits from the upstream repository. This doesn't modify your local files but allows you to see what changes have been made in the original repository.

3. **Merge Upstream Changes**
   After fetching, you'll want to merge the upstream changes into your local branch. This ensures your local repository reflects the most recent updates from the upstream repository.

4. **Push Updates to Your Fork**
   Once you've merged upstream changes locally, you can push these updates to your GitHub fork, keeping it synchronized with the upstream repository.

### 2.2 Resources

- [GitHub Help: Syncing a Fork](https://help.github.com/articles/syncing-a-fork/)
- [Git Documentation](https://git-scm.com/doc)

By understanding and following these steps, you ensure your repositories are consistently up to date and avoid conflicts (Refer the diagram below).

![GitHub Clone URL](image/mi-sync-a-fork.png)

## 3. Configure a Remote Repository for Your Fork

To fetch updates from the upstream repository, configure it as follows:

1. Open your command prompt/terminal and navigate to the repository directory:

  ```bash
  cd <YourUserName>.github.io
  ```

2. List the current configured remote repository:

  ```bash
  git remote -v
  ```

  This should show:

  ```bash
  origin  https://github.com/<YourUserName>/<YourUserName>.github.io.git (fetch)
  origin  https://github.com/<YourUserName>/<YourUserName>.github.io.git (push)
  ```

3. Add the upstream repository:

  ```bash
  git remote add upstream https://github.com/open-learning-exchange/open-learning-exchange.github.io.git
  ```

4. Verify the upstream repository is configured correctly:

  ```bash
  git remote -v
  ```

  This should show:

  ```bash
  origin  https://github.com/<YourUserName>/<YourUserName>.github.io.git (fetch)
  origin  https://github.com/<YourUserName>/<YourUserName>.github.io.git (push)
  upstream  https://github.com/open-learning-exchange/open-learning-exchange.github.io.git (fetch)
  upstream  https://github.com/open-learning-exchange/open-learning-exchange.github.io.git (push)
  ```

  If noticed the upstream URLs are wrong, use `git remote rm upstream` and repeat "3. Add the upstream repository".

## 4. Sync Your Fork

1. Retrieves any changes from the remote repository named `upstream` to your local repository:

   ```bash
   git fetch upstream
   ```

2. Switch to your local repository's master branch:

   ```bash
   git checkout master
   ```

3. Merge the upstream/master with current branch in your local repository:

  ```bash
  git merge upstream/master
  ```

  If Vim editor shows up for commit message, use `:wq` (**w**rite and **q**uit) to exit with the default message.

4. Push the updates made to your repository to GitHub:

  ```bash
  git push origin master
  ```

## Summary of Steps

Follow these commands in your command line:

#### Clone Your GitHub Repository
1. Open your command prompt/terminal
2. Copy the HTTPS or SSH link from your repository on GitHub
3. Run `git clone *paste your HTTPS or SSH link here*`

#### Sync Your Fork
1. `git fetch upstream` - retrieve changes from the upstream repository
2. `git checkout master` - switch to the master branch
3. `git merge upstream/master` - merge upstream changes into your local branch
4. `git push origin master` - push updates to your GitHub fork

#### Configure Upstream Repository
1. `cd <YourUserName>.github.io`
2. `git remote -v` - verify current remote repositories
3. `git remote add upstream https://github.com/open-learning-exchange/open-learning-exchange.github.io.git`
4. `git remote -v` - confirm upstream repository is added

#### Additional Useful Commands
1. `git diff` - compare different versions of files
2. `git status` - view changes in the branch
3. `git pull` - sync local repository with remote repository
4. `git push` - upload local repository changes to GitHub

**NOTE**: Always sync your fork and ensure your repositories are up to date before starting work to minimize data loss and potential conflicts.

## Useful Links

- [Configuring a remote repository for a fork | GitHub Docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/configuring-a-remote-repository-for-a-fork) - You can sync changes made in the original repository with a fork.
- [Syncing a fork | GitHub Docs](https://help.github.com/articles/syncing-a-fork/) - Sync a fork of a repository to keep it up-to-date with the upstream repository.
- [GitHub tutorial](http://product.hubspot.com/blog/git-and-github-tutorial-for-beginners) - An Introduction to Git and GitHub for beginners from HubSpot.
- [Git-it Workshop](http://jlord.us/git-it/) - Runs in your terminal to work and provides a hands-on approach to learn Git and GitHub repositories.
- [Git help](https://git-scm.com/) - An encyclopedia of useful git workflows and terminology explanations.
- [Other helpful links and videos](mi-faq.md#Helpful_Links)

#### Return to [First Steps](mi-10-steps.md#Step_5_-_Git_Repositories:_A_Guide_to_Cloning,_Configuring,_and_Syncing_Forks)
