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

Parsing and logging a `.csv` file from /:

```javascript
getData()

async function getData(){
    const response = await fetch('fileName.csv') //ask for it
    const data = await response.text()           //treat the data, in this case text
    console.log(data)                            //do something with it

    const table = data.split('\n').slice(1)      //spliting it by line break `\n`
    table.forEach(row => {                       //array.forEach(splitedProduct => { 
        const columns = row.split(',')           //split again separating it by columns}
        const year = columns[0]                  //defining what the first column is
        const temp = columns[1]                  //defining what the second column is
        console.log(year, temp)                  //logging it
    })
}
```
