import{_ as a,r as o,o as i,c,a as e,b as t,d as s,e as r}from"./app.40668d8d.js";const p={},l=e("h1",{id:"intro-on-web-security-with-helmet-js",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#intro-on-web-security-with-helmet-js","aria-hidden":"true"},"#"),s(" Intro on web security with Helmet.js")],-1),u=s(`"Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!", says the developers. It is a middleware (communication software) that deals with HTTP headers and also offers security modules for the `),d={href:"https://expressjs.com",target:"_blank",rel:"noopener noreferrer"},h=s("Express"),m=s(" (Node.js framework) applications."),k=s("According to "),f={href:"https://stackshare.io/expressjs",target:"_blank",rel:"noopener noreferrer"},_=s("stackshare.io"),y=s(", Express.js is used in more than 1900 companies applications around the world, including Twitter, Accenture, BlaBlaCar and others. Helmet can be also be used with "),b={href:"https://github.com/helmetjs/helmet/wiki/How-to-use-Helmet-without-Express",target:"_blank",rel:"noopener noreferrer"},g=s("other frameworks"),v=s("."),w=s("This documentation is based on (and can help you follow) the "),x={href:"https://www.freecodecamp.org/learn/information-security/#information-security-with-helmetjs",target:"_blank",rel:"noopener noreferrer"},S=s("Information Security with HelmetJS"),T=s(" course on FreeCodeCamp."),j=r(`<h2 id="installing" tabindex="-1"><a class="header-anchor" href="#installing" aria-hidden="true">#</a> Installing</h2><p>Run <code>npm install helmet</code> and in your Express application (app.js):</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;express&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> helmet <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;helmet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">helmet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>It is all about headers. Use <code>curl -v &lt;URL&gt;</code> on terminal, to read headers and confirm Helmet.js is working.</p></blockquote><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>On <code>app.js</code> write <code>app.use(helmet());</code> to include all manual configurations listed below:</p><ul><li><code>app.use(helmet.hidePoweredBy());</code> removes the <code>X-Powered-By</code> header;</li><li><code>app.use(helmet.frameguard({action: &#39;deny&#39;}));</code> makes your application break when used inside <code>&lt;frame&gt;</code> <code>&lt;iframe&gt;</code> HTML tags. This can help against Clickjacking attacks;</li><li><code>app.use(helmet.xssFilter());</code> sanitizes user input fields, protecting against Cross-Site Scripting (XSS) attacks;</li><li><code>app.use(helmet.noSniff());</code> tells the browser not to use MIME sniffing and read the file as the Content-Type header says. <blockquote><p>MIME sniffing is a technique used in browsers to determine the file type by reading some of its data. This can create vulnerabilities.</p></blockquote></li><li><code>app.use(helmet.ieNoOpen());</code> prevents the mighty <em>Internet Explorer</em> to download and execute infected HTML files.</li><li><code>app.use(helmet.hsts({maxAge: ninetyDaysInSeconds, force: true}));</code> configures HTTP Strict Transport Security (HSTS), or HTTPS only, avoiding insecure HTTP requests. <blockquote><p>You also gonna need to instantiate a variable with 90 days in seconds <code>ninetyDaysInSeconds = 90*24*60*60</code> to check certification expiracy.</p></blockquote></li><li><code>app.use(helmet.dnsPrefetchControl());</code> disables browser DNS Prefetch. <blockquote><p>To make navigation faster, DNS prefetch resolve domain names before the user tries to click on the link. However, it can cause user data leak, if you serve a malicious website in your application. The attack is the inplantation of this malicious link.</p></blockquote></li></ul><h3 id="not-included-in-app-use-helmet" tabindex="-1"><a class="header-anchor" href="#not-included-in-app-use-helmet" aria-hidden="true">#</a> Not included in <code>app.use(helmet());</code>:</h3><ul><li><p><code>app.use(helmet.noCache());</code> prevents your user to use cached versions of your application. This can be good when you just pushed a security update.</p></li><li><p>Content Security Policy:</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>helmet<span class="token punctuation">.</span><span class="token function">contentSecurityPolicy</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">directives</span><span class="token operator">:</span><span class="token punctuation">{</span>
		<span class="token literal-property property">scriptSrc</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&#39;self&#39;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token literal-property property">styleSrc</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&#39;self&#39;&quot;</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>scriptSrc</code> and <code>styleSrc</code> with <code>&quot;&#39;self&#39;&quot;</code> will restrict the execution of scripts and stylesheets, originated from the same origin as the domain itself. These <code>directives</code> enhance security by mitigating Cross-Site Scripting (XSS) and file injection attacks.</p>`,11),q=s("Test repository: "),H={href:"https://replit.com/@GuilhermePetry/boilerplate-infosec",target:"_blank",rel:"noopener noreferrer"},I=s("https://replit.com/@GuilhermePetry/boilerplate-infosec"),P=e("div",{class:"wisdom"},[e("img",{class:"wisdony",src:"https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg",alt:""})],-1);function C(E,N){const n=o("ExternalLinkIcon");return i(),c("div",null,[l,e("p",null,[u,e("a",d,[h,t(n)]),m]),e("p",null,[k,e("a",f,[_,t(n)]),y,e("a",b,[g,t(n)]),v]),e("blockquote",null,[e("p",null,[w,e("a",x,[S,t(n)]),T])]),j,e("blockquote",null,[e("p",null,[q,e("a",H,[I,t(n)])])]),P])}var M=a(p,[["render",C],["__file","intro-on-web-security-with-helmet-js.html.vue"]]);export{M as default};