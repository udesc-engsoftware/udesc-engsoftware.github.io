---
layout: page-fullwidth
title: ""
meta_title: "Notícias"
subheadline: ""
teaser: ""
header:
   image_fullwidth: "logo.png"
permalink: "/curso/noticias/"
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>