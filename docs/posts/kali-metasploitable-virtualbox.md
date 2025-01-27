---
title: Set up Kali Linux and Metasploitable on VirtualBox
date: "2023-03-03"
sidebar: true
prev: false
next: false
tags:
  - kali
  - kali linux
  - metasploit framework
  - metasploitable
  - metasploitable2
  - virtualbox
---

# Set up Kali Linux and Metasploitable on VirtualBox

## 1: Download

* [VirtualBox](https://www.virtualbox.org/).
* [Kali Linux](https://www.kali.org/get-kali/#kali-virtual-machines).
* [Metasploitable](https://sourceforge.net/projects/metasploitable/).

Extract Kali and Metasploitable to the same directory.

Inside the directory, locate the files `kali-linux-2022.4-virtualbox-amd64.vdi` and `Metasploitable.vmdk`, make sure you know where they are.

## 2: Kali Linux virtual machine

1. Open VirtualBox and click `New`.
2. Give it a name. On `Machine Folder` select the directory you extracted Kali and Metasploitable. 
3. In `Type` select `Linux`.
4. In `Version` select `Debian (64-bit)`.
5. Click `Next`.
6. Define its memory.
7. Select `Create a virtual hard disk now`.
8. Select `VDI (VirtualBox Disk Image)`.
9. Select `Dynamically allocated`.
10. 8 GB is fine I guess... 
11. Click `Create`.

Now, you need to add the `kali-linux-2022.4-virtualbox-amd64.vdi` to the new virtual machine:

1. Right-click the new virtual machine and click `Settings`.
2. Go to `Storage`.
3. Find and click in `kali-linux-2022.4-virtualbox-amd64.vdi` below `Controller: SATA`.
4. At your right, in `Attributes`, you will find a small disk icon. Click on it!
5. Select `Choose/Create a Virtual Hard Disk`.
6. Select `kali-linux-2022.4-virtualbox-amd64.vdi`.
7. Click `Ok`.

## 3: Metasploitable virtual machine

1. Open VirtualBox and click `New`.
2. Give it a name. On `Machine Folder` select the directory you extracted Kali and Metasploitable. 
3. In `Type` select `Linux`.
4. In `Version` select `Debian (64-bit)`.
5. Click `Next`.
6. Define its memory.
7. Select `Create a virtual hard disk now`.
8. Select `VDI (VirtualBox Disk Image)`.
9. Select `Dynamically allocated`.
10. 8 GB is fine I guess... 
11. Click `Create`.

Now, you need to add the `Metasploitable.vmdk` to the new virtual machine:

1. Right-click the new virtual machine and click `Settings`.
2. Go to `Storage`.
3. Find and click in `Metasploitable.vmdk` below `Controller: SATA`.
4. At your right, in `Attributes`, you will find a small disk icon. Click on it!
5. Select `Choose/Create a Virtual Hard Disk`.
6. Select `Metasploitable.vmdk`.
7. Click `Ok`.

## 4: Virtual machines network configuration

Don't forget to change the network config from `NAT` to `Bridge Adapter` on both virtual machines. Otherwise, Metasploitable won't be able to host: 

1. Right-click the new virtual machine and click `Settings`.
2. Go to `Network`.
3. On `Attached to` select `Bridge Adapter`.
4. Click `Ok`.

> I guess this is high cyber witchery already...

<div class="wisdom">
<img class="wisdony" src="https://upload.wikimedia.org/wikipedia/commons/4/4d/RWS_Tarot_09_Hermit.jpg" alt="">
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
