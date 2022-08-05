---
title: GitHub once and for all
date: "2022-08-05"
sidebar: false
tags:
  - github
  - github-guide
  - terminal
  - commands
---

# GitHub once and for all

Git and GitHub, at first, can be a little frustrating. Complex commands, Git running locally and the GitHub platform. I feel you... So, here is the easiest way (I know) to work with Git and GitHub repositories. 

You will need, access to [GitHub](https://github.com/), [Visual Studio Code](https://code.visualstudio.com/) and any UNIX Terminal (or Bash, for the Windows users).

## Clone, update, commit and push code to GitHub from the Terminal

Go to the GitHub repository you need work and copy the .git address, which is usually `https://github.com/yourUserID/yourRepoName.git` and head to the terminal.

Inside the Terminal, browse to the folder you wish to save the repository and type `git clone` + `.git URL`. Just like this:

`git clone https://github.com/petry078/spellblog.git`

Change directory to the repository you just cloned, with: `cd` + `repositoryName`.

`cd spellblog`

And open everything that it is inside the folder on Visual Studio Code, with: `code .`

Update and change what is needed and go back to the terminal to start the commit process.

First, run `git status` and read the results. If everything is correct, add every file to the commit, with: `git add .`

And then `git commit -m "commit description"` to write the commit.

To upload the commit, just run `git push`.

> It may ask for you to authenticate the access to your GitHub account, with user and password. For this to work, you need to have a token configured and use the token as your password. [Learn more about GitHub tokens and how to create one here!](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

The `git push` must return a message of success with the link of the repository you just pushed the commit. Click on it and check if it's all there.

> Its nice to check. I've losted files in this process before...

---

### Git commands used

```git
git status
git clone gitURL
git add .
git commit -m "commit description"
git push
```
