---
title: Bash Scriptage
date: "2022-11-01"
sidebar: false
tags:
  - bash
  - bash script
  - how to create a bash script
---

# Simple Bash Scriptage

Bourne Again Shell (Bash) scripts are scripts of commands used on Unix terminals, like the Linux terminal.

It allows you to enter a list of commands (in sequence) just by typing the name of the Bash Script file.

For example, to open Firefox for Developers on Linux systems, you need to open the folder where it is at and double click de file called `firefox`.

To do it from the terminal, you need:

* Change Directory `cd` to the folder where `firefox` is;
* Run `./firefox`.

> `./` means "from this folder where i'm" + `/` to select file/folder you wish to work with.

To achieve this, you just typed a few commands on the terminal. To do this with a single command, you need a Bash Script.

## How to create a Bash Script

At your user home folder `$` (/home/user), create a file called `script.sh`.

> Your user home folder is usually where your terminal starts. Type `pwd` to check. It needs to be `/home/petry`, for example.

Inside the `script.sh` write `#!/bin/sh` on the very first line. This will tell the terminal it is a Bash Script.

The first command of your script will be written above, and so on.

Example:

```bash
#!/bin/sh
cd aurora
./firefox &
```

This is the same as: `cd aurora && ./firefox &`.

> In this case, is just two commands, but this can be used to create complex scripts, with logic operators and all that cool programming stuff.

## Bonus: how to create symbolic 'links', or soft links, to folders/files on the terminal

As you can see on the example, the first command on the script is `cd aurora`. Aurora is the nickname for the Firefox for Developers, and this folder is actually `/home/petry/aurora/`.

This is a link. To create one, you will need the `ln` command. Like:

```bash
ln -s [path] [symbolic name]
```

Example:

```bash
ln -s /home/petry/aurora/ aurora
````

> This is starting to look like magic...

<div class="wisdom">
<img class="wisdony" src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Pents02.jpg" alt="">
</div>

<style>
  .wisdom {
    display: flex;
    justify-content: center;
  }

  .wisdony {
  height: 120px;
  }
</style>
