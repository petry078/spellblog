---
title: LaTeX PDF press specification
date: "2024-01-09"
sidebar: auto
tags:
  - LaTeX
  - TeX
  - PDF
---

# LaTeX PDF press specification

> Content in progress.

LaTeX documents have to be written and than compiled. 

> Is it crime to write about LaTeX in an Markdown file?

Write content using LaTeX markup syntax and than press it to PDF with the command:

```bash
pdflatex fileName.tex
```

To Press PDFs using LaTeX you need to have TeX installed.

```bash
sudo apt-get install texlive-full
tex --version
```
> Complicate stuff? [Overleaf](https://www.overleaf.com), the LaTeX web editor and compiler got you there.

## Typesetting specification

Syntax is divided by **reserved characters**, **commands** and **comments**.

### Reserved characters

| Character | Definition                                |
|-----------|-------------------------------------------|
| `#`       | Macro key.                                |
| `$`       | Mathematical environment.                 |
| `%`       | Comment.                                  |
| `^`       | Superscript.                              |
| `&`       | Separation of columns in tables.          |
| `_`       | Automatic subscript.                      |
| `{}`      | Scope.                                    |
| `~`       | Space between text that cannot be broken. |
| `\`       | Command initialization.                   |

To print then, use `\` before. Example: `\#`.

### Commands

LaTeX document structure is defined by header, that contains metadata and information about the text, and content, with the text information.

#### Header commands

| Command              | Definition |
|----------------------|------------|
| \documentclass[]{}   | Initialize the document. Requires parameters `[]` and actual document class `{}`. |
| \usepackage[]{}      | Import packages with additional functionality. Requires parameters `[]` and scope `{}`. |
| 


###### \documentclass

###### \usepackage

Must be right above the `\documentclass`.

Here are some popular packages and how to cast then.

```tex
\usepackage[utf8]{inputenc}
\usepackage[portuguese]{babel}
\usepackage{graphicx}
```


#### Content commands and techniques

Content commands are only allowed in the document scope:

```Tex
\begin{document}
Content and content commands go here! Like \LaTeX!
\end{document}

```

##### Content commands:

| Command                   | Definition |
|---------------------------|------------|
| `\\`                      | Line break, necessary on blank lines | 
| `\textbf{Bold example}`   | Initialize the document. Requires parameters `[]` and actual document class `{}`. |
| `\textit{Italic example}` | Import packages with additional functionality. Requires parameters `[]` and scope `{}`. |


##### Content techniques

Paragraphs are confusing. It needs to be like this, because whitespaces are considered all of the same thing:

```tex
First paragraph.
\\
Second paragraph.
\\
Third paragraph.
\\
...
```
> Crazy old tech stuff...

Whitespaces after commands are ignored. To print then, type the whitespace inside the commands scope {}. Example: `textbf{text }`.

### Comments

## ABNT

If you don't know what this is. Trust me, you don't need it.

## References 🖨️ 🖨

* Beguinners book: https://linorg.usp.br/CTAN/info/lshort/english/lshort.pdf
* Learn: https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes#What_is_LaTeX?
* ABNT: https://github.com/abntex/abntex2/wiki/InstalacaoLinux#instala%C3%A7%C3%A3o-autom%C3%A1tica-do-texlive-e-do-abntex2-em-distribui%C3%A7%C3%B5es-debian-ubuntu-e-derivadas-recomendado
* Learning playlist (UFMG): https://youtube.com/playlist?list=PLt2qoMeOJsQzWsM5vM7eWFUZKVbCZmWZB&si=M8rouIXyLS7dUfrb

<div class="wisdom">
<img class="wisdony" src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Cups07.jpg" alt="">
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