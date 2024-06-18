---
layout: page-fullwidth
title: ""
meta_title: "Professores"
subheadline: ""
teaser: ""
header:
   image_fullwidth: "logo.png"
permalink: "/professores/"
---

<h1 style="text-align: center; color: black;">Professores</h1>

<style>
.card-container {
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-between; 
    gap: 20px; 
}

.card {
    width: calc(33.33% - 20px); 
    background-color: #D9D9D9;
    cursor: pointer;
    text-align: center;
    margin-bottom: 20px; 
    box-sizing: border-box; 
}

.card img {
    width: 100%;
    height: auto;
    display: block; 
}

.card-title {
    margin-top: 10px;
    margin-bottom: 0;
}

@media (max-width: 768px) {
    .card {
        width: calc(50% - 20px); 
    }
}

@media (max-width: 576px) {
    .card {
        width: 100%;
    }
}
</style>

<div style="display: flex; justify-content: center; flex-wrap: wrap;">
<div class="card-container">
<div class="card position-fixed" style="width: 16rem; top: 180px; margin-left: 4px; background-color: #D9D9D9; cursor: pointer;">
  <a href="/professores/pablo-schoeffel/" style="text-decoration: none; color: inherit;">
  <img class="img-resposive" src="{{site.urlimg}}foto-professor-pablo.jpg"/>
  <div class="card-body">
    <h3 class="card-title" style="text-align: center;"><b>Pablo Schoeffel</b></h3>
  </div>
  </a>
</div>

<div class="card position-fixed" style="width: 16rem; top: 180px; background-color: #D9D9D9; cursor: pointer;">
  <a href="/professores/marilia-guterres-ferreira/" style="text-decoration: none; color: inherit;">
  <img class="img-resposive" src="{{site.urlimg}}foto-professora-marilia.png"/>
  <div class="card-body">
    <h3 class="card-title" style="text-align: center;"><b>Marília Guterres Ferreira</b></h3>
  </div>
  </a>
</div>

<div class="card position-fixed" style="width: 16rem; top: 180px; background-color: #D9D9D9; cursor: pointer;">
  <a href="/professores/fernando-santos/" style="text-decoration: none; color: inherit;">
  <img class="img-resposive" src="{{site.urlimg}}foto-professor-fernando.png"/>
  <div class="card-body">
    <h3 class="card-title" style="text-align: center;"><b>Fernando dos Santos</b></h3>
  </div>
  </a>
</div>

</div>
