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

| Command                       | Definition |
|-------------------------------|------------|
| `\documentclass[]{}`          | Initialize the document. Requires parameters `[]` and actual document class `{}`. |
| `\usepackage[]{}`             | Import and use packages with additional functionality. Requires parameters `[]` and scope `{}`. |
| `\setlength{\parindent}{0cm}` | Set paragraph identation. |
| `\setlength{\parskip}{2em}`   | Set space between paragraphs. |
| `\renewcommand{\baselinestretch}{1.5}` | Space between lines. |
| `\title{Document title}`
| `\author{Document author}`
| `\date{Document date}`
| 

###### \documentclass

`\documentcalss` parameters[], or parameters in genereal, are optionals and will change based on the actual class and command, that can be:

```tex
\documentclass{article}
\documentclass{report}
\documentclass{book}
\documentclass{letter}
\documentclass{slides}
\documentclass{beamer}
```

`\documentclass` parameter:

```tex
\documentclass[12pt]{}
\documentclass[a4paper]{}
\documentclass[twocolumn]{}
\documentclass[twoside]{}
\documentclass[landscape]{}
```

###### \usepackage

Must be right above the `\documentclass`.

Here are some popular packages and how to cast then.

```tex
\usepackage[utf8]{inputenc}
\usepackage[portuguese]{babel}
\usepackage{graphicx}
\usepackage{url}
```

#### Content commands and techniques

Content commands are only allowed in the document scope:

```Tex
\begin{document}
Content and content commands go here! Like \LaTeX!
\end{document}

```

##### Content commands

| Command                          | Definition                                                                                                          |
|----------------------------------|---------------------------------------------------------------------------------------------------------------------|
| `\par`                           | New paragraph                                                                                                       |
| `\\`                             | Line break, necessary on blank lines                                                                                | 
| `\textbf{Bold example}`          | Bold text.                                                                                                          |
| `\textit{Italic example}`        | Italic text.                                                                                                        |
| `\underline{Underline example}`  | Underlined text.                                                                                                    |
| `\begin{center}`                 | Text align: center. Requires `\end{center}`                                                                         |
| `\begin{flushright}`             | Text align: right. Requires `\end{flushright}`                                                                      |
| `\newpage` or `\clearpage`       | Page break. Needs test, as they work diffrently.                                                                    |
| `\vspace{4cm}`                   | Add vertical space between elements in line.                                                                        | 
| `\hspace{4cm}`                   | Add horizontal space between elements in line.                                                                      |
| `\hfill` and `\vfill`            | Fill horizontal and vertical space between elements in line.                                                        |
| `\begin{itemize}` or `\begin{enumerate}` | Iniciates unordered or ordered list. Requires `\end{itemize}` or `\end{enumerate}`. For list item: `\item`. |
| `\begin{figure}`                 | Iniciates image with standard snippet. Requires graphicx package `\usepackage{graphicx}` in the document header.    | 
| `\begin{tabular}`                | Iniciates image with standard snippet. Requires graphicx package `\usepackage{graphicx}` in the document header.    | 
| `\begin{titlepage}`              | Iniciate title page. Requires `\end{titlepage}`. See example below.                                                 |
| `\tableofcontents`               | Print table of contents. Nice to have `\newpage` after the summary.                                                 |
| `\listoffigures`                 | Print figures list.                                                                                                 |
| `\listoftables`                  | Print figures list.                                                                                                 |

##### Content techniques

Paragraphs must end with `\par`.

For a simple line break, use `\\` or `\newline` at the end of the paragraph, or in a single line.

```tex
Fisrt paragraph\par
Second paragraph\par
Simple line break\\
Newline \newline
```

> Crazy old tech stuff...

Whitespaces after commands are ignored. To print then, type the whitespace inside the commands scope {}. Example: `textbf{text }`.

`\hfill` and `\hspace{3cm}` examples:

```tex
Grape\hfill100g
1\hspace{1cm}2\hspace{1cm}3\hspace{1cm}4\hspace{1cm}
```

Inline font size and style:

```tex
\tiny{tiny text}\\
\scriptsize{scriptsize text}\\
\footnotesize{footnotesize text}\\
\small{small text}\\
\normalsize{normalsize text}\\
\large{large text}\\
\Large{Large text}\\
\LARGE{LARGE text}\\
\huge{huge text}\\
\Huge{Huge text}\\

\textrm{Roman Serif font}\\
\textsf{Sans Serif font}\\
\texttt{Monospaced font (typewriter)}\\
```

Any text style + any nother text style:

```tex
\underline{\textbf{\textit{Underlined, bold, and italic text}}}
```

Unordered list:

```tex
\begin{itemize}
\item 1
\item 2
\item 3
\item 4
\end{itemize}
```

Ordered list:

```tex
\begin{enumerate}
\item 1
\item 2
\item 3
\item 4
\end{enumerate}
```

Images are called figures in LaTeX, type `\begin{figure}` and it should autocomplete to this:

```tex
\begin{figure}
    \centering
    \includegraphics[scale=0.5]{imageExample.png}
    \caption{Caption text}
    \label{fig:enter-label}
\end{figure}
```

> Tables are too complicated, use online table generators or use Markdown inside LaTeX.

Title page:

```tex
\begin{titlepage}
\centering
\Huge{\textbf{University of Chaos}}
\vfill
\huge{My very long article title}
\vfill
\large{\textbf{Alum: Guilherme Petry}}
\vfill
\today
\end{titlepage}
```

Chapters, sections, and subsections:

```tex
\chapter{Chapter 1}
\section{Chapter 1, Section 1}
\section{Chapter 1, Section 2}
\subsection{Chapter 1, Section 2, Subsesummaryction 1}
\section{Chapter 1, Section 3}
\subsection{Chapter 1, Section 3, Subsection 1}
\subsection{Chapter 1, Section 3, Subsection 2}
```

> Use * in the end of markup to avoid it beeing indexed by the `\tableofcontents`. Example: `\section*{Chapter 1, Section 1}`

Note footers:

```tex
Primeiro parágrafo do capítulo 1, seção 3 e subseção 2\footnote{Nota de rodapé1}\par
Segundo parágrafo do capítulo 1, seção 3 e subseção 2\footnote{Nota de rodapé2}\par
```

### Comments

## ABNT

If you don't know what this is. Trust me, you don't need it.

## References 🖨️ 🖨

* Beguinners book: https://linorg.usp.br/CTAN/info/lshort/english/lshort.pdf
* Learn: https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes#What_is_LaTeX?
* ABNT: https://github.com/abntex/abntex2/wiki/InstalacaoLinux#instala%C3%A7%C3%A3o-autom%C3%A1tica-do-texlive-e-do-abntex2-em-distribui%C3%A7%C3%B5es-debian-ubuntu-e-derivadas-recomendado
* Learning playlist (UFMG): https://youtube.com/playlist?list=PLt2qoMeOJsQzWsM5vM7eWFUZKVbCZmWZB&si=M8rouIXyLS7dUfrb
* Parei em Aula 2.6: Referências Cruzadas | Preparação de Documentos em LaTeX: https://youtu.be/9mkGr-YSVHA?si=Xrp4AYw6JvxK7ddP

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
