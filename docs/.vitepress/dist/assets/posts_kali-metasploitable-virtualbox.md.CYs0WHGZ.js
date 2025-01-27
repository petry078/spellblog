import{_ as i,c as l,ae as a,o}from"./chunks/framework.ilBJtLV6.js";const k=JSON.parse('{"title":"Set up Kali Linux and Metasploitable on VirtualBox","description":"","frontmatter":{"title":"Set up Kali Linux and Metasploitable on VirtualBox","date":"2023-03-03","sidebar":true,"prev":false,"next":false,"tags":["kali","kali linux","metasploit framework","metasploitable","metasploitable2","virtualbox"]},"headers":[],"relativePath":"posts/kali-metasploitable-virtualbox.md","filePath":"posts/kali-metasploitable-virtualbox.md"}'),t={name:"posts/kali-metasploitable-virtualbox.md"};function c(d,e,r,n,s,u){return o(),l("div",null,e[0]||(e[0]=[a('<h1 id="set-up-kali-linux-and-metasploitable-on-virtualbox" tabindex="-1">Set up Kali Linux and Metasploitable on VirtualBox <a class="header-anchor" href="#set-up-kali-linux-and-metasploitable-on-virtualbox" aria-label="Permalink to &quot;Set up Kali Linux and Metasploitable on VirtualBox&quot;">​</a></h1><h2 id="_1-download" tabindex="-1">1: Download <a class="header-anchor" href="#_1-download" aria-label="Permalink to &quot;1: Download&quot;">​</a></h2><ul><li><a href="https://www.virtualbox.org/" target="_blank" rel="noreferrer">VirtualBox</a>.</li><li><a href="https://www.kali.org/get-kali/#kali-virtual-machines" target="_blank" rel="noreferrer">Kali Linux</a>.</li><li><a href="https://sourceforge.net/projects/metasploitable/" target="_blank" rel="noreferrer">Metasploitable</a>.</li></ul><p>Extract Kali and Metasploitable to the same directory.</p><p>Inside the directory, locate the files <code>kali-linux-2022.4-virtualbox-amd64.vdi</code> and <code>Metasploitable.vmdk</code>, make sure you know where they are.</p><h2 id="_2-kali-linux-virtual-machine" tabindex="-1">2: Kali Linux virtual machine <a class="header-anchor" href="#_2-kali-linux-virtual-machine" aria-label="Permalink to &quot;2: Kali Linux virtual machine&quot;">​</a></h2><ol><li>Open VirtualBox and click <code>New</code>.</li><li>Give it a name. On <code>Machine Folder</code> select the directory you extracted Kali and Metasploitable.</li><li>In <code>Type</code> select <code>Linux</code>.</li><li>In <code>Version</code> select <code>Debian (64-bit)</code>.</li><li>Click <code>Next</code>.</li><li>Define its memory.</li><li>Select <code>Create a virtual hard disk now</code>.</li><li>Select <code>VDI (VirtualBox Disk Image)</code>.</li><li>Select <code>Dynamically allocated</code>.</li><li>8 GB is fine I guess...</li><li>Click <code>Create</code>.</li></ol><p>Now, you need to add the <code>kali-linux-2022.4-virtualbox-amd64.vdi</code> to the new virtual machine:</p><ol><li>Right-click the new virtual machine and click <code>Settings</code>.</li><li>Go to <code>Storage</code>.</li><li>Find and click in <code>kali-linux-2022.4-virtualbox-amd64.vdi</code> below <code>Controller: SATA</code>.</li><li>At your right, in <code>Attributes</code>, you will find a small disk icon. Click on it!</li><li>Select <code>Choose/Create a Virtual Hard Disk</code>.</li><li>Select <code>kali-linux-2022.4-virtualbox-amd64.vdi</code>.</li><li>Click <code>Ok</code>.</li></ol><h2 id="_3-metasploitable-virtual-machine" tabindex="-1">3: Metasploitable virtual machine <a class="header-anchor" href="#_3-metasploitable-virtual-machine" aria-label="Permalink to &quot;3: Metasploitable virtual machine&quot;">​</a></h2><ol><li>Open VirtualBox and click <code>New</code>.</li><li>Give it a name. On <code>Machine Folder</code> select the directory you extracted Kali and Metasploitable.</li><li>In <code>Type</code> select <code>Linux</code>.</li><li>In <code>Version</code> select <code>Debian (64-bit)</code>.</li><li>Click <code>Next</code>.</li><li>Define its memory.</li><li>Select <code>Create a virtual hard disk now</code>.</li><li>Select <code>VDI (VirtualBox Disk Image)</code>.</li><li>Select <code>Dynamically allocated</code>.</li><li>8 GB is fine I guess...</li><li>Click <code>Create</code>.</li></ol><p>Now, you need to add the <code>Metasploitable.vmdk</code> to the new virtual machine:</p><ol><li>Right-click the new virtual machine and click <code>Settings</code>.</li><li>Go to <code>Storage</code>.</li><li>Find and click in <code>Metasploitable.vmdk</code> below <code>Controller: SATA</code>.</li><li>At your right, in <code>Attributes</code>, you will find a small disk icon. Click on it!</li><li>Select <code>Choose/Create a Virtual Hard Disk</code>.</li><li>Select <code>Metasploitable.vmdk</code>.</li><li>Click <code>Ok</code>.</li></ol><h2 id="_4-virtual-machines-network-configuration" tabindex="-1">4: Virtual machines network configuration <a class="header-anchor" href="#_4-virtual-machines-network-configuration" aria-label="Permalink to &quot;4: Virtual machines network configuration&quot;">​</a></h2><p>Don&#39;t forget to change the network config from <code>NAT</code> to <code>Bridge Adapter</code> on both virtual machines. Otherwise, Metasploitable won&#39;t be able to host:</p><ol><li>Right-click the new virtual machine and click <code>Settings</code>.</li><li>Go to <code>Network</code>.</li><li>On <code>Attached to</code> select <code>Bridge Adapter</code>.</li><li>Click <code>Ok</code>.</li></ol><blockquote><p>I guess this is high cyber witchery already...</p></blockquote><div class="wisdom"><img class="wisdony" src="https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg" alt=""></div>',18)]))}const m=i(t,[["render",c]]);export{k as __pageData,m as default};
