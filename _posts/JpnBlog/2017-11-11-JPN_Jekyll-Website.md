---
layout: post
category: EngBlog
title: "Static Website with Jekyll"
language: 日本語
ref: Post-Jekyll-Website
date: 2017-11-11
---

## 概要:
このウェブサイトは[jekyll](https://jekyllrb-ja.github.io/)で作られたWebサイトで、githubにホストされています。Jekyll（ジキル）というのは静的サイトの生成のツールで、CSSとHTMLとMarkdownでブログを簡単に作らせることができます。ネットに色々なチュータリアルや例がありますので、この投稿に作り方を不快に説明しないと思います。。。このサイトに対して、使ったフロントエンフレームワークドは[Bootstrap](https://getbootstrap.com/)です。Bootstrapを使われたWebサイトはモービル携帯に対応して、ナビゲーションバーやJumbotron（ジャンボトロン）を入れさせることができます。[SASS](http://sass-lang.com/)はCSS種類を整理させることができます。

このサイトの日本語のバジョンを作るのために、それぞれの英語ページに日本語のページを作成して、

## 参考:


To create the Japanese version of this site, I create a duplicate entry for each corresponding English page and assign each corresponding entry a reference id. Jekyll Liquid is then used to sort the pages, and deliver the corresponding page to the one currently loaded from the Navigation bar.  The source code for my website is available on my [github](https://github.com/JLSeto/JLSeto.github.io).

## References:

[Setting up your GitHub Pages site locally with Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)
