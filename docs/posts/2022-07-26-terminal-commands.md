---
title: Linux Terminal & commands
date: "2022-07-26"
sidebar: auto
tags:
  - linux
  - terminal
  - commands
---

# Linux Terminal & commands

The Linux Terminal is a way to interact with the machine by typing console commands. To use it, you need an interpreter, like: 

* Bourne Again Shell (Bash);
* Z-shell (Zsh);
* KornShell (Ksh);
* C Shell (Csh).

But, don't worry about it. Most Linux distributions comes with one of those by standard, they all are going to work similarly and can do the job.

## Directory Structure

Everything starts from the `root` which is `/`.

From there:

* `/bin` essential user binaries;
* `/boot` boot static files;
* `/dev` (devices) device files (disks);
* `/etc` system configuration files (servers like Apache and Nginex);
* `/home` home directory, which contains users list directory;
* `/media` mount points for removable media;
* `/mnt` temporary mount directories;
* `/opt` optional or third-party software;
* `/sbin` binary system files;
* `/tmp` temporary files, non-persistent or cleared on reboot;
* `/usr` user related programs;
* `/var` variable files (logs from OS or servers like Apache, Nginx);
* `/proc` virtual and pseudo files;
* `/root` home directory of the root user (sudo home).

> `/` and `/root` are different things. `root` is inside `/`. This folder is used for system adiministrative tasks/files and contains configuration files specific to the root user (or the sudo command).

## Commands

### Navigation

```
| Command         | Description                                                 |
|-----------------|-------------------------------------------------------------|
| pwd             | Print working directory                                     |
| ls              | List files and directories (-l, -la, -ls, -lh...)           |
| cd              | Change directory                                            |
| cd ..           | Navigate one folder back in the directory hierarchy         |
| cd -            | Navigate to the folder you was before                       |
| mkdir           | Create folder `mkdir newFolder`                             |
| find            | Search inside current folder (case sensitive: find -i)      |
| locate          | Need to run `updatedb` before `locate index.html`           |
| xdg-open .      | Open current working directory on Files                     |
| xdg-open "path" | Open folder/archive. "xdg-open /home/petry" will open home  |
| xdg-open "file" | "xdg-open index.md" will open index.md form current folder  |
```

### Package Management 

```
| Command         | Description                                                 |
|-----------------|-------------------------------------------------------------|
| apt update      | Updates packages lists. Important before `apt upgrade`      | 
| apt upgrade     | Actually updates the packages (apps).                       | 
| apt search      | Searches for the specific app `apt search <appName>`.       | 
| apt install     | Install app `apt install <appName>`.                        |
| apt remove      | Remove app `apt remove <appName>`.                          |
| apt purge       | Removes app and all dependencies `apt remove <appName>`.    |
| dpkg -l         | Print all apps from packages.                               |
| dpkg -r <app>   | Remove <app>.                                               |
```
#### Important files

* `cat /etc/apt/sources.list` will print where system search for packages.

### File management and editing

```
| Command         | Description                                                 |
|-----------------|-------------------------------------------------------------|
| cp              | Copy. `cp imput.md output.md`                               |
| mv              | Move. `mv file.md /home/petry/Desktop`                      |
| touch index.md  | Creates a new file                                          |
| echo            | Print on screen. `echo "Hello, world!" > hello.md` to save. |
| cat file.md     | Reads and prints file on terminal                           |
| rm / rm -r      | Delete file / delete folder (may need to run as sudo)       |
| code .          | Open directory on Visual Studio Code                        |
| grep            | Search keyword in file (grep "keyword" file.md)             |
| egrep           | Search with multiple keywords (egrep "zsh|bash" file.md)    |
| cut             | Cut selected text inside file                               | 
| sed             | Substitution (sed 's/texto1/texto2' index.md)               | 
```

### Networking and processes

```
| Command                     | Description                                     |
|-----------------------------|-------------------------------------------------|
| top                         | Print system processes                          |
| ps aux                      | Print all system processes                      |
| ifconfig                    | Print network interfaces                        |
| ip                          | Print network interfaces + IP and MAC addresses |
| systemctl status networking | Print network status                            |  
| systemctl start networking  | Network controls (start, stop, restart)         |
| route                       | Print system routes (route -n)                  | 
| netstat (netstat -l [list]) | Print network open doors and active connections |
| dig +short <url>            | Print IP from from domain (dig +short hello.com)|
```
#### Important files

* `cat /etc/network/interfaces` will print network configuration files.

### Utility

```
| Command         | Description                                                 |
|-----------------|-------------------------------------------------------------|
| setxkbmap br    | Change keyboard language to <country>                       |
| man <app>       | Print manual for <application>                              |
| clear           | Clear terminal window                                       |
| whereis <app>   | Print location if <application> files                       |
| file hello.md   | Print file type (can be used with file name or file path)   |
| xxd hello.md    | Print binaries from file (can be used with path)            |
| curl URL        | Send GET request to URL. Try "curl wttr.in"                 |
| curl -o URL     | Download content (alphabetic "o", not zero)                 |
| !$              | Copy and paste last command entry, to command prompt        |
```

> Remember! Those are not spells. We will get there...

## Bonus! Using curl to convert images from the web

Define the output name and file extension after -o. Just like this:

`curl -o output.png https://www.thehousedesigners.com/images/uploads/SiteImage-Landing-large-house-plans-1.webp`

It works with .webp/.jpeg to .png

> Web developers love the .webp/.webm. file format. It is smaller and loads faster. But content creators hate it. .webp/.webm doesn't open on preview apps.

> This look shit... Don't worry. I'm working on a cURL post. Maybe after the `dig` and the `traceroute` commands.

<div class="wisdom">
<img class="wisdony" src="https://upload.wikimedia.org/wikipedia/commons/2/24/Cups09.jpg" alt="">
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
