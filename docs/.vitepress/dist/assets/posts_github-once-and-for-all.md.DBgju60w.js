import{_ as t,c as o,ae as a,o as i}from"./chunks/framework.ilBJtLV6.js";const h=JSON.parse('{"title":"GitHub once and for all","description":"","frontmatter":{"title":"GitHub once and for all","date":"2022-08-05","sidebar":true,"prev":false,"next":false,"tags":["github","github-guide","terminal","commands"]},"headers":[],"relativePath":"posts/github-once-and-for-all.md","filePath":"posts/github-once-and-for-all.md"}'),s={name:"posts/github-once-and-for-all.md"};function n(c,e,r,d,l,u){return i(),o("div",null,e[0]||(e[0]=[a(`<h1 id="github-once-and-for-all" tabindex="-1">GitHub once and for all <a class="header-anchor" href="#github-once-and-for-all" aria-label="Permalink to &quot;GitHub once and for all&quot;">​</a></h1><p>Git and GitHub, at first, can be a little frustrating. Complex commands, Git running locally and the GitHub platform. I feel you... So, here is the easiest way (I know) to work with Git and GitHub repositories.</p><h2 id="clone-update-commit-and-push-code-to-github-from-the-terminal" tabindex="-1">Clone, update, commit and push code to GitHub from the Terminal <a class="header-anchor" href="#clone-update-commit-and-push-code-to-github-from-the-terminal" aria-label="Permalink to &quot;Clone, update, commit and push code to GitHub from the Terminal&quot;">​</a></h2><p>Go to the GitHub repository you need work and copy the .git address, which is usually <code>https://github.com/yourUserID/yourRepoName.git</code> and head to the terminal.</p><p>Inside the Terminal, browse to the folder you wish to save the repository and type <code>git clone</code> + <code>.git URL</code>. Just like this:</p><p><code>git clone https://github.com/petry078/spellblog.git</code></p><p>Change directory to the repository you just cloned, with: <code>cd</code> + <code>repositoryName</code>.</p><p><code>cd spellblog</code></p><p>And open everything that it is inside the folder on Visual Studio Code, with: <code>code .</code></p><p>Update and change what is needed and go back to the terminal to start the commit process.</p><p>First, run <code>git status</code> and read the results. If everything is correct, add every file to the commit, with: <code>git add .</code></p><p>And then <code>git commit -m &quot;commit description&quot;</code> to write the commit.</p><p>To upload the commit, just run <code>git push</code>.</p><blockquote><p>It may ask for you to authenticate the access to your GitHub account, with user and password. For this to work, you need to have a token configured and use the token as your password. <a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token" target="_blank" rel="noreferrer">Learn more about GitHub tokens and how to create one here!</a></p></blockquote><p>The <code>git push</code> must return a message of success with the link of the repository you just pushed the commit. Click on it and check if it&#39;s all there.</p><blockquote><p>Its nice to check. I&#39;ve losted files in this process before...</p></blockquote><h2 id="working-with-branches" tabindex="-1">Working with branches <a class="header-anchor" href="#working-with-branches" aria-label="Permalink to &quot;Working with branches&quot;">​</a></h2><ul><li><code>git clone URL</code></li><li><code>cd repositoryName</code></li><li><code>git status</code></li><li><code>git checkout -b NewBranch</code></li><li><code>code .</code></li><li>Make your changes.</li><li><code>git add .</code></li><li><code>git commit -m &quot;commit description&quot;</code></li><li><code>git push --set-upstream origin NewBranch</code></li></ul><p>This last command will bring the pull request page ready to pull it to main branch.</p><ul><li>Create a pull request for &quot;NewBranch&quot; on GitHub by visiting &quot;URL&quot;;</li><li>Create Pull Request;</li><li>Merge Pull Request;</li><li>Confirm merge;</li><li>Delete branch.</li></ul><hr><h2 id="git-commands-used" tabindex="-1">Git commands used <a class="header-anchor" href="#git-commands-used" aria-label="Permalink to &quot;Git commands used&quot;">​</a></h2><div class="language-git vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">git</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git status</span></span>
<span class="line"><span>git clone gitURL</span></span>
<span class="line"><span>git checkout -b NewBranch</span></span>
<span class="line"><span>git add .</span></span>
<span class="line"><span>git commit -m &quot;commit description&quot;</span></span>
<span class="line"><span>git push</span></span>
<span class="line"><span>git push --set-upstream origin NewBranch</span></span></code></pre></div><div class="wisdom"><img class="wisdony" src="https://upload.wikimedia.org/wikipedia/commons/8/84/Cups10.jpg" alt=""></div>`,24)]))}const m=t(s,[["render",n]]);export{h as __pageData,m as default};
