---
title: API enchantment with JavaScript
date: "2023-07-17"
sidebar: true
prev: false
next: false
tags:
  - API
  - JavaScript
  - Fetch API
---

# API enchantment with JavaScript

> Content in progress.

## 1. The Fetch API 

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
Parsing and logging a `.csv` file from web server:

```javascript
    getData()

    async function getData () {
        const response = await fetch('https://raw.githubusercontent.com/petry078/exercicios-javascript/main/planilha.csv')
        const data = await response.text()
        const table = data.split('\n').slice(1)

            table.forEach(elt => {
                const columns = elt.split(',')
                const year = columns[0]
                const temp = columns[1]
                console.log(columns)
                console.log(year, temp)
            })

    }
```

<div class="wisdom">
<img class="wisdony" src="https://upload.wikimedia.org/wikipedia/commons/9/9b/RWS_Tarot_07_Chariot.jpg" alt="">
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