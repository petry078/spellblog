---
title: API enchantment with JavaScript
date: "2023-07-17"
sidebar: auto
tags:
  - API
  - JavaScript
  - Fetch API
---

# API enchantment with JavaScript

{Intro on APIs and RESTful APIs}

## 1. The Fetch API 

{The Request/Response concept}

Fetch API GET request:

Request: call `fetch(<path>)`.
Response: a stream of data in a format of a file (JSON, plain text, HTML, XML, PNG, JPG, GIF, SVG, PDF, CSV, binary files and error responses [status code]).

Image from the web example:

```html
    <img src="" id="rainbow">
    <script>
        catchRainbow().then(response => {console.log('all good!')})

        async function catchRainbow(){
            const response = await fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Double-alaskan-rainbow.jpg/1200px-Double-alaskan-rainbow.jpg')
            const blob = await response.blob()
            document.getElementById('rainbow').src = URL.createObjectURL(blob)
            console.log(blob)
        }
    </script>
```

`.txt` file from the same domain example:

```html
    <p id="rainbow"></p>
    <script>
        catchRainbow()

        async function catchRainbow(){
            const response = await fetch('/index.txt')
            const text = await response.text()
            const printedResponse = String(text)
            document.getElementById("rainbow").innerText = printedResponse
        }
        
    </script>
```

### {Promises context}

> **Spellsource**: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

> Courses: 

Promises: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bKLPQvPRNNE65kBL62mVfx

Working with Data and APIs in JavaScript: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X
