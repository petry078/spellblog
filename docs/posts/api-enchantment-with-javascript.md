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

Request: call `fetch(./rainbow.jpg)`
Response: a stream of data in a format of a file. Examples: JSON, plain text, HTML, XML, PNG, JPG, GIF, SVG, PDF, CSV, binary files and error responses (status code).

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    // Handle the data returned by the server
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error(error);
  });
```

> Not so fast, internet traveler! You are entering the Network — Application realm of knowledge. This was made to work and be clear, but was established in ancient times. Understanding it is a lifelong journey.

### {Promises context}

> **Spellsource**: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

> Courses: 

Promises: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6bKLPQvPRNNE65kBL62mVfx

Working with Data and APIs in JavaScript: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X
