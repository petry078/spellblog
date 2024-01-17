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

LaTeX is a powerful typesetting markup language, designed to make beautiful and readable printable documents.

Learn LaTeX is great because its old school, free and stable. You will never need to open shit and slow Google Docs, Microsoft Word and even Adobe inDesign, which are all private softwares.

LaTeX documents have to be written and than compiled. Write content using LaTeX markup syntax and than press it to PDF with the command:

```bash
pdflatex fileName.tex
```

To Press PDFs using LaTeX you need to have TeX installed.

```bash
sudo apt-get install texlive-full
tex --version
```

> Complicate stuff? [Overleaf](https://www.overleaf.com), the LaTeX web editor and compiler got you there.

The syntax is divided by the preamble, the content and bibliographic references.

There are also some reserved characters:

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

## The preamble

The preamble is where you will define the structure, styles, aditional packages, rules, metadata, and other general configuration. This configurations will apply to the document as a whole.

The first command of the preamble is `\documentclass[]{}` that will set the document class and its own parameters.

Here are the preamble commands discovered:

| Command                                | Definition                                                                                      |
|----------------------------------------|-------------------------------------------------------------------------------------------------|
| `\documentclass[]{}`                   | Initialize the document. Requires parameters `[]` and actual document class `{}`.               |
| `\usepackage[]{}`                      | Import and use packages with additional functionality. Requires parameters `[]` and scope `{}`. |
| `\setlength{\parindent}{0cm}`          | Set paragraph identation.                                                                       |
| `\setlength{\parskip}{2em}`            | Set space between paragraphs.                                                                   |
| `\renewcommand{\baselinestretch}{1.5}` | Space between lines.                                                                            |
| `\title{Document title}`               | Define title of the document.                                                                   |
| `\author{Document author}`             | Define author of the document.                                                                  |
| `\date{Document date}`                 | Define date of the document.                                                                    |

### \documentclass

`\documentcalss` parameters[], or parameters in genereal, are optionals and will change based on the actual class and command, that can be:

```tex
\documentclass{article}
\documentclass{report}
\documentclass{book}
\documentclass{letter}
\documentclass{slides}
\documentclass{beamer}
```
`\documentclass` parameters:

```tex
\documentclass[12pt]{}
\documentclass[a4paper]{}
\documentclass[twocolumn]{}
\documentclass[twoside]{}
\documentclass[landscape]{}
```

### \usepackage

The `\usepackage` commands imports aditional packages and features. Here are some examples:

```tex
\usepackage[utf8]{inputenc}
\usepackage[portuguese]{babel}
\usepackage{graphicx}
\usepackage{url}
```

## The content

Content commands are only allowed in the document scope:

```Tex
\begin{document}
Content and content commands go here! Like \LaTeX!
\end{document}

```

| Command                                  | Definition                                                                                                       |
|------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| `\par`                                   | New paragraph                                                                                                    |
| `\\`                                     | Line break, necessary on blank lines                                                                             |
| `\textbf{Bold example}`                  | Bold text.                                                                                                       |
| `\textit{Italic example}`                | Italic text.                                                                                                     | 
| `\underline{Underline example}`          | Underlined text.                                                                                                 | 
| `\begin{center}`                         | Text align: center. Requires `\end{center}                                                                       | 
| `\begin{flushright}`                     | Text align: right. Requires `\end{flushright}                                                                    |  
| `\newpage` or `\clearpage`               | Page break. Needs test, as they work diffrently.                                                                 | 
| `\vspace{4cm}`                           | Add vertical space between elements in line.                                                                     |  
| `\hspace{4cm}`                           | Add horizontal space between elements in line.                                                                   |  
| `\hfill` and `\vfill`                    | Fill horizontal and vertical space between elements in line.                                                     |
| `\begin{itemize}` or `\begin{enumerate}` | Iniciates unordered or ordered list. Requires `\end{itemize}` or `\end{enumerate}`. For list item: `\item`.      |
| `\begin{figure}`                         | Iniciates image with standard snippet. Requires graphicx package `\usepackage{graphicx}` in the document header. |     
| `\begin{tabular}`                        | Iniciates image with standard snippet. Requires graphicx package `\usepackage{graphicx}` in the document header. |   
| `\begin{titlepage}`                      | Iniciate title page. Requires `\end{titlepage}`. See example below.                                              |    
| `\tableofcontents`                       | Print table of contents. Nice to have `\newpage` after the summary.                                              |   
| `\listoffigures`                         | Print figures list.                                                                                              |   
| `\listoftables`                          | Print figures list.                                                                                              |   

## Content techniques

Content techniques are commands used inside the content scope.

### Paragraphs, chapters, sections, and subsections

A blank line and `\par` after the text represent paragraph.

```tex
Paragraph 1

Paragraph 2

Paragraph 3\par
Paragraph 4\par
```

For a simple line break, use `\\` or `\newline` at the end of the paragraph, or in a single line.

```tex
Simple line break\\
Newline \newline
```

Chapters, sections, and subsections:

```tex
\chapter{Chapter 1}
\section{Chapter 1, Section 1}
\section{Chapter 1, Section 2}
\subsection{Chapter 1, Section 2, Subsection 1}
\section{Chapter 1, Section 3}
\subsection{Chapter 1, Section 3, Subsection 1}
\subsection{Chapter 1, Section 3, Subsection 2}
```

### Horizontal and vertical spacing of elements

Whitespaces after commands are ignored. To print then, type the whitespace inside the commands scope {}. Example: `textbf{text }`.

`\hfill` and `\hspace{3cm}` examples:

```tex
Grape\hfill100g
1\hspace{1cm}2\hspace{1cm}3\hspace{1cm}4\hspace{1cm}
```

For vertical stuff, same thing, but `\vspace{1cm}` and `\vfill`.

### Font size and style

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

### Lists

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

### Images

Images are called figures in LaTeX, type `\begin{figure}` and it should autocomplete to this:

```tex
\begin{figure}
    \centering
    \includegraphics[scale=0.5]{imageExample.png}
    \caption{Caption text}
    \label{fig:enter-label}
\end{figure}
```

### Tables

Not gonna lie, tables are complicated.

### Titlepage

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

### Table of contents (TOC)

Just call `\tableofcontents` where you want it to be printed.

> Use * in the end of markup to avoid it beeing indexed by the `\tableofcontents`. Example: `\section*{Chapter 1, Section 1}`

### Footnotes

```tex
Primeiro parágrafo do capítulo 1, seção 3 e subseção 2\footnote{Nota de rodapé1}\par
Segundo parágrafo do capítulo 1, seção 3 e subseção 2\footnote{Nota de rodapé2}\par
```

### Quotes

```tex
\begin{quote}

\end{quote}
```

## Bibliographic references

Bibliographic references in LaTeX requires the `natbib` package and the references file should be in bibTeX, or `.bib`.

Instanciate the bliblopgraphy:

```tex
\bibliography{referencias}
\bibliographystyle{plainnat}
```

bibTeX bibliography example:

```bibTeX
@book{de1999santa,
  title={Santa Ifig{\^e}nia},
  author={de Athayde Jorge, C.},
  lccn={99887098},
  series={S{\'e}rie Hist{\'o}ria dos bairros de S{\~a}o Paulo},
  url={https://books.google.com.br/books?id=SDgsAAAAYAAJ},
  year={1999},
  publisher={Departamento do Patrim{\^o}nio Hist{\'o}rico}
}
```

On text, call reference with `\cite{referenceOfBibliography}.` The `referenceOfBibliography` in the example is `de1999santa`.

> Google Books offers bibTeX references like this!

## ABNT

Now!

## References 🖨️ 🖨

* [The Not So Short Introduction to LATEX 2εBeguinners book](https://linorg.usp.br/CTAN/info/lshort/english/lshort.pdf)
* [Learn LaTeX in 30 minutes](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes#What_is_LaTeX?)
* [abntex2](https://github.com/abntex/abntex2/wiki/InstalacaoLinux#instala%C3%A7%C3%A3o-autom%C3%A1tica-do-texlive-e-do-abntex2-em-distribui%C3%A7%C3%B5es-debian-ubuntu-e-derivadas-recomendado)
* Curso em Português: [Preparação de Documentos em LaTeX](https://youtube.com/playlist?list=PLt2qoMeOJsQzWsM5vM7eWFUZKVbCZmWZB&si=M8rouIXyLS7dUfrb)

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
