---
title: Fun with Neofetch and Bash scripts
date: "2024-9-4"
sidebar: true
prev: false
next: false
tags:
  - Bash
  - Bashs script
  - Neofetch
---

# Fun with Neofetch and Bash scripts

Neofetch is one piece of customization I really miss when I am at different computers other than my main one. When executed, it provides a nice Linux ASCII art with context information about the machine. You can customize the style and information it returns.

![neofetch1.gif](/images/neofetch1.gif)

Really nice, huh? Well, yes... 

Every time you run the `neofetch` command, you can customize the output with some arguments, like the`--ascii_distro <DISTRO>` that changes the Linux ASCII logo it will print, or the `--cpu off` that will hide the CPU information, and many others.

This standard implementation is limited and even pointless for the everyday experience. It is not even funny and today we are here to have fun, REAL FUN, with terminal applications, right :queijo:?

"Would that be really nice if `neofetch` runs as the first command when a new terminal window is opened, and with a different Linux ASCII art?", I thought when I first discovered this software.

And with the power of bash scripts, yes, we can run customized `neofetch` with a simple `./neofetch.sh` call, and automate it to run as the first command of a new terminal window:

![neofetch1.gif](/images/neofetch2.gif)

> Neofetch was discontinued on Apr 26, 2024, but you can still use it, as it is just a simple tweak.

## How to make Neofetch funny bash scripts

To reproduce my implementation of the `neofetch`, follow the steps:

1. Download and install [Neofetch](https://github.com/dylanaraps/neofetch).
2. Find the Bash configuration file `.bashrc`. Path: `$HOME/.bashrc`.
3. Paste this script in the bottom of the file:

```bash
fetchers=( "AIX" "Alpine" "Anarchy" "Android" "Antergos" "antiX" "AOSC OS" "AOSC OS/Retro" "Apricity" "ArcoLinux" "ARCHlabs" "ArchStrike" "XFerience" "ArchMerge" "Arch" "Artix" "Arya" "Bedrock" "Bitrig" "BlackArch" "BLAG" "BlankOn" "BlueLight" "bonsai" "BSD" "BunsenLabs" "Calculate" "Carbs" "CentOS" "Chakra" "ChaletOS" "Chapeau" "Chrom*" "Cleanjaro" "ClearOS" "Clear_Linux" "Clover" "Condres" "Container_Linux" "CRUX" "Cucumber" "Debian" "Deepin" "DesaOS" "Devuan" "DracOS" "DarkOs" "DragonFly" "Drauger" "Elementary" "EndeavourOS" "Endless" "EuroLinux" "Exherbo" "Fedora" "Feren" "FreeBSD" "FreeMiNT" "Frugalware" "Funtoo" "GalliumOS" "Garuda" "Gentoo" "Pentoo" "gNewSense" "GNOME" "GNU" "GoboLinux" "Grombyang" "Guix" "Haiku" "Huayra" "Hyperbola" "janus" "Kali" "KaOS" "KDE_neon" "Kibojoe" "Kogaion" "Korora" "KSLinux" "Kubuntu" "LEDE" "LFS" "Linux_Lite" "LMDE" "Lubuntu" "Lunar" "macos" "Mageia" "MagpieOS" "Mandriva" "Manjaro" "Maui" "Mer" "Minix" "LinuxMint" "MX_Linux" "Namib" "Neptune" "NetBSD" "Netrunner" "Nitrux" "NixOS" "Nurunner" "NuTyX" "OBRevenge" "OpenBSD" "openEuler" "OpenIndiana" "openmamba" "OpenMandriva" "OpenStage" "OpenWrt" "osmc" "Oracle" "OS Elbrus" "PacBSD" "Parabola" "Pardus" "Parrot" "Parsix" "TrueOS" "PCLinuxOS" "Peppermint" "popos" "Porteus" "PostMarketOS" "Proxmox" "Puppy" "PureOS" "Qubes" "Radix" "Raspbian" "Reborn_OS" "Redstar" "Redcore" "Redhat" "Refracted_Devuan" "Regata" "Rosa" "sabotage" "Sabayon" "Sailfish" "SalentOS" "Scientific" "Septor" "SereneLinux" "SharkLinux" "Siduction" "Slackware" "SliTaz" "SmartOS" "Solus" "Source_Mage" "Sparky" "Star" "SteamOS" "SunOS" "openSUSE_Leap" "openSUSE_Tumbleweed" "openSUSE" "SwagArch" "Tails" "Trisquel" "Ubuntu-Budgie" "Ubuntu-GNOME" "Ubuntu-MATE" "Ubuntu-Studio" "Ubuntu" "Venom" "Void" "Obarun" "windows10" "Windows7" "Xubuntu" "Zorin" "and" "IRIX" "Arch_old" "Ubuntu_old" "Redhat_old" "Dragonfly_old" )

randomIndex=$((RANDOM % ${#fetchers[@]}))
neofetch --ascii_distro "${fetchers[randomIndex]}"
```

The `fetchers` scope contains all the Linux ASCII arts Neofetch comes with. The `randomIndex` will select one element of the `fetchers` array and send it to the command structure, creating an authentic Neofetch command. Example: `neofetch --ascii_distro "kali"`.

4. Save and run a new terminal window.
5. Take some screenshots and send it to me :D

> This looks like cyber magic to me.

<div class="wisdom">
<img class="wisdony" src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Pents02.jpg" alt="">
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


