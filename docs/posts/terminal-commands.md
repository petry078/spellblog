---
title: Terminal commands
date: "2022-07-26"
sidebar: false
tags:
  - linux
  - terminal
  - commands
---

# Terminal commands

```
| Command         | Description                                                 |
|-----------------|-------------------------------------------------------------|
| mkdir newFolder | Creates a new folder                                        |
| ls              | List files/folders                                          |
| ls -la          | List with details + hidden files                            |
| cd              | Navigate further (cd desktop)                               |
| cd ..           | Navigate one folder back                                    |
| pwd             | Shows current working folder                                |
| touch index.md  | Creates a new file                                          |
| echo            | echo "Hello, world!" > hello.md                             |
| find            | Search inside current folder                                |
| find -i         | Case sensitive search inside current folder                 |
| clear           | Clear previous commands                                     |
| Ctrl + A or E   | Send cursos to beginning (A) / end (E) to the end           |
| code .          | Open folder on Visual Studio Code (if installed)            |
| curl URL        | Send GET request to URL. Try "curl wttr.in"                 |
| curl -o URL     | Download content (alphabetic "o", not zero)                 |
| xdg-open "path" | Open folder/archive. "xdg-open /home/petry" will open home  |
| xdg-open "file" | "xdg-open index.md" will open index.md form current folder  |
```

> Remember! Those are not spells. We will get there...

## Using curl to convert images from the web

Define the output name and file extension after -o. Just like this:

`curl -o output.png https://www.thehousedesigners.com/images/uploads/SiteImage-Landing-large-house-plans-1.webp`

It works with .webp/.jpeg to .png

> Web developers love the .webp/.webm. file format. It is smaller and loads faster. But content creators hate it. .webp/.webm doesn't open on preview apps.

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
