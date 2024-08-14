---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
header:
  image_fullwidth: "banner-site-eso.png"
widget1:
  title: "Sobre o Curso"
  url: "/curso/sobre/"
  image: 
  text: 'Conheça o curso de Graduação em Engenharia de Software da UDESC Alto Vale.'
widget2:
  title: "Matriz Curricular"
  url: '/curso/matriz-curricular/'
  image: foto-matriz-curricular.jpg
  text: 'Conheça a Matriz Curricular do curso de Engenharia de Software.'
widget3:
  title: "Professores"
  url: '/professores/'
  image: foto-professores.jpeg
  text: 'Conheça os Professores do curso de Engenharia de Software.'
#
# Use the call for action to show a button on the frontpage
#
# To make internal links, just use a permalink like this
# url: /getting-started/
#
# To style the button in different colors, use no value
# to use the main color or success, alert or secondary.
# To change colors see sass/_01_settings_colors.scss
#
permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---

<div id="videoModal" class="reveal-modal large" data-reveal="">
  <div class="flex-video widescreen vimeo" style="display: block;">
    <iframe width="1280" height="720" src="https://www.youtube.com/embed/3b5zCFSmVvU" frameborder="0" allowfullscreen></iframe>
  </div>
  <a class="close-reveal-modal">&#215;</a>
</div>
