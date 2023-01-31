---
title: Learn web security with Helmet.js
date: "2023-01-31"
sidebar: false
tags:
  - inforsecurity
  - cybersecurity
  - helmet.js
  - websecurity
---

# Learn web security with Helmet.js

"Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!", says the developers. It is a middleware (communication software) that deals with HTTP headers and also offers security modules for the [Express](https://expressjs.com) (Node.js framework) applications.

According to [stackshare.io](https://stackshare.io/expressjs), Express.js is used in more than 1900 companies applications around the world, including Twitter, Accenture, BlaBlaCar and others. Helmet can be also be used with [other frameworks](https://github.com/helmetjs/helmet/wiki/How-to-use-Helmet-without-Express).

> This documentation is based on (and can help you follow) the [Information Security with HelmetJS](https://www.freecodecamp.org/learn/information-security/#information-security-with-helmetjs) course on FreeCodeCamp.

## Installing

Run `npm install helmet` and in your Express application (app.js): 

```javascript
const express = require("express");
const helmet = require("helmet");
const app = express();
app.use(helmet());
```
> It is all about headers. Use `curl -v <URL>` on terminal, to read headers and confirm Helmet.js is working.
## Usage

On `app.js` write `app.use(helmet());` to include all manual configurations listed below:

* `app.use(helmet.hidePoweredBy());` removes the `X-Powered-By` header;
* `app.use(helmet.frameguard({action: 'deny'}));` makes your application break when used inside `<frame>` `<iframe>` HTML tags. This can help against Clickjacking attacks;
* `app.use(helmet.xssFilter());` sanitizes user input fields, protecting against Cross-Site Scripting (XSS) attacks;
* `app.use(helmet.noSniff());` tells the browser not to use MIME sniffing and read the file as the Content-Type header says.
	> MIME sniffing is a technique used in browsers to determine the file type by reading some of its data. This can create vulnerabilities.
* `app.use(helmet.ieNoOpen());` prevents the mighty *Internet Explorer* to download and execute infected HTML files.
* `app.use(helmet.hsts({maxAge: ninetyDaysInSeconds, force: true}));` configures HTTP Strict Transport Security (HSTS), or HTTPS only, avoiding insecure HTTP requests.
	> You also gonna need to instantiate a variable with 90 days in seconds `ninetyDaysInSeconds = 90*24*60*60` to check certification expiracy.
* `app.use(helmet.dnsPrefetchControl());` disables browser DNS Prefetch.
	> To make navigation faster, DNS prefetch resolve domain names before the user tries to click on the link. However, it can cause user data leak, if you serve a malicious website in your application. The attack is the inplantation of this malicious link.

### Not included in `app.use(helmet());`:

* `app.use(helmet.noCache());` prevents your user to use cached versions of your application. This can be good when you just pushed a security update.

* `app.use(helmet.contentSecurityPolicy({ directives: { defaultSrc: ["'self'"], scriptSrc: ["'self'", "trusted-cdn.com"] }} ));` Content Security Policy will help protect against data injection attacks, Cross-Site Scripting (XSS), Content Security Policy (CPS) attacks, undesired tracking, malicious frames and more.

> Test repository: [https://replit.com/@GuilhermePetry/boilerplate-infosec](https://replit.com/@GuilhermePetry/boilerplate-infosec)
