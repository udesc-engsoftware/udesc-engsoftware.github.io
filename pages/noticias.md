---
layout: page-fullwidth
title: ""
meta_title: "Notícias"
subheadline: ""
teaser: ""
header:
   image_fullwidth: "banner-site-eso.png"
permalink: "/curso/noticias/"
---

<style>
.post-list {
  display: block;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.post-item {
  padding: 20px;
  border: 1px solid #ddd; 
  border-radius: 10px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  background-color: #fff;
  margin-bottom: 20px;
}

.post-link {
  text-decoration: none; 
  color: inherit; 
  display: block;
}

.post-content {
  display: flex;
  flex-direction: column;
}

.post-title {
  font-size: 1.5em;
  margin: 0 0 10px;
  font-family: Arial, sans-serif;
}

.post-date {
  font-size: 0.9em;
  color: #888;
  margin: 0 0 10px;
}

.post-excerpt {
  font-size: 1em;
  color: #555;
  margin: 0;
}

.post-item:hover {
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.post-title:hover{
  color: green;
  text-decoration: underline;
}
</style>

<ul class="post-list">
  {% for post in site.posts %}
    <li class="post-item">
      <a href="{{ post.url }}" class="post-link">
        <div class="post-content">
          <h2 class="post-title">{{ post.title }}</h2>
          <p class="post-date">{{ post.date | date: "%B %d, %Y" }}</p>
        </div>
      </a>
    </li>
  {% endfor %}
</ul>

