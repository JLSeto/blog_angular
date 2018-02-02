---
layout: post
category: EngBlog
title: "Static Website with Jekyll"
language: English
ref: Post-Jekyll-Website
date: 2017-11-11
---

## Overview:

This website was created using [Jekyll](https://jekyllrb.com/) and is hosted on github. Jeyll is a static website generator, and allows you to quickly create a blog with some html and css. There are a lot of tutorials and examples online for how to do this... I also use [Bootstrap](https://getbootstrap.com/) as a frontend framework which makes the site quite compatible with mobile devices, and allows me to include features such as navigation bars and jumbotrons. [SASS](http://sass-lang.com/) was also used to organize some of my custom CSS files.

To create the Japanese version of this site, I create a duplicate entry for each corresponding English page and assign each corresponding entry a reference id. A small script is then written in Jekyll's Liquid to sort the pages, and deliver the corresponding translation page to the one currently loaded.  This feature can be accessed from the Navigation bar.  The source code for my website is available on my [github](https://github.com/JLSeto/JLSeto.github.io).

## References:

[Setting up your GitHub Pages site locally with Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)
