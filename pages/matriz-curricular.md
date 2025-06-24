---
layout: page-fullwidth
title: ""
meta_title: "Matriz Curricular"
subheadline: "Matriz Curricular"
teaser: ""
header:
   image_fullwidth: "banner-site-eso.png"
permalink: "/ensino/matriz-curricular/"
---


## Matriz Curricular
O curso de Engenharia de Software tem duração de 4 anos. É formado pelas 39 disciplinas abaixo relacionadas. 

Ao clicar na sigla da disciplina você é direcionado para uma página com os seus detalhes: carga horária, ementa e bibliografias. Nestas páginas, a ementa de cada disciplina é apresentada utilizando cores diferentes, para representar o nível de profundidade que os conteúdos são abordados. As cores e níveis de profundidade adotados para os conteúdos são: 

- <strong><class style="color: blue">Azul</class></strong>: menor profundidade, para o estudante <strong>conhecer</strong> o conteúdo.
- <strong><class style="color: green">Verde</class></strong>: média profundidade, para o estudante <strong>entender</strong> o conteúdo.
- <strong>Preto</strong>: maior profundidade, para o estudante <strong>entender e aplicar</strong>o conteúdo em novos problemas.



### 1ª Fase:
###### **Sigla/Disciplina**

[15IDT][15idt] - Introdução ao Desenvolvimento de Software e Testes
<br>
[15FES][15fes] - Fundamentos de Engenharia de Software
<br>
[15MAT][15mat] - Tópicos em Matemática Básica e Lógica Matemática
<br>
[15PRS][15prs] - Processos

### 2ª Fase:
###### **Sigla/Disciplina**

[25DOO1][25doo1] - Desenvolvimento de Software Orientado a Objetos I
<br>
[25REQ][25req] - Requisitos de Software
<br>
[25INF][25inf] - Infraestruturas Computacionais
<br>
[25CMP][25cmp] - Comunicação e Metodologia de Pesquisa em Engenharia de Software
<br>
[25BD1][25bd1] - Modelagem de Dados

### 3ª Fase:
###### **Sigla/Disciplina**

[35DOO2][35doo2] - Desenvolvimento de Software Orientado a Objetos II
<br>
[35TES][35tes] - Testes de Software
<br>
[35IHC][35ihc] - Interface Humano-Computador
<br>
[35MDI][35mdi] - Matemática Discreta
<br>
[35BD2][35bd2] - Persistência de Dados

### 4ª Fase:
###### **Sigla/Disciplina**

[45PRJ][45prj] - Projeto de Software
<br>
[45EST][45est] - Probabilidade e Estatística
<br>
[45RPE][45rpe] - Resolução de Problemas com Estruturas de Dados
<br>
[45DIU][45diu] - Desenvolvimento de Interface de Usuário
<br>
[45QUA][45qua] - Qualidade de Software

### 5ª Fase:
###### **Sigla/Disciplina**

[55PPR][55ppr] - Padrões de Projeto
<br>
[55DWEB][55dweb] - Desenvolvimento de Software Web
<br>
[55ESE][55ese] - Engenharia de Software Experimental
<br>
[55IA][55ia] - Inteligência Artificial
<br>
[55GPR][55gpr] - Gerência de Projetos

### 6ª Fase:
###### **Sigla/Disciplina**

[65ARQ][65arq] - Arquitetura de Software
<br>
[65DDM][65ddm] - Desenvolvimento de Software para Dispositivos Móveis
<br>
[65DVP][65dvp] - DevOps
<br>
[65PIN1][65pin1] - Projeto Integrador I
<br>
<!-- todo erick: faltou fazer 1 página com todas as opções de disciplinas optativas (pegar do projeto do curso) e direcionar essa optativa e a da 7a fase para essa página-->
[65OPT][disciplina_optativa] - Disciplina Optativa

### 7ª Fase:
###### **Sigla/Disciplina**

[75POT][75pot] - Pesquisa Operacional e Otimização
<br>
[75GIN][75gin] - Gestão da Inovação em Engenharia de Software
<br>
[75PIN2][75pin2] - Projeto Integrador II
<br>
[75OPT][disciplina_optativa] - Disciplina Optativa
<br>
[75TCC1][75tcc1] - Trabalho de Conclusão de Curso I

### 8ª Fase:
###### **Sigla/Disciplina**

[85EMP][85emp] - Empreendedorismo em Engenharia de Software
<br>
[85ASL][85asl] - Aspectos Sociais e Legais da Engenharia de Software
<br>
[85SIS][85sis] - Sistemas de Informação
<br>
[85DCD][85dcd] - Desenvolvimento de Software Concorrente e Distribuido
<br>
[85TCC2][85tcc2] - Trabalho de Conclusão de Curso II

### Organograma - Matriz Curricular Engenharia de Software
<hr>
<!-- todo erick: escrever um preâmbulo-->
<img class="img-responsive" src="{{site.urlimg}}/organograma-eso.png"/>

<script src="https://cdn.amcharts.com/lib/5/index.js"></script>
<script src="https://cdn.amcharts.com/lib/5/hierarchy.js"></script>
<script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>

<style>
  #chartdiv {
    width: 100%;
    height: 550px;
    margin-top: 30px;
    margin-bottom: 50px;
  }
</style>

<div class="container">
  <h2>Visualização Interativa da Matriz Curricular</h2>
  <hr>
  <p>Explore visualmente a estrutura das fases e disciplinas do curso de Engenharia de Software.
    <!-- todo erick: tem que explicar o que cada elemento do gráfico representa (circulos e linhas) e também onde o usuário precisa clicar para explorar--></p>
  <div id="chartdiv"></div>
</div>

<script src="/assets/js/matriz-curricular.js"></script>

[15idt]: {{site.url}}/curso/matriz-curricular/15idt 
[15fes]: {{site.url}}/curso/matriz-curricular/15fes
[15mat]: {{site.url}}/curso/matriz-curricular/15mat
[15prs]: {{site.url}}/curso/matriz-curricular/15prs

[25doo1]: {{site.url}}/curso/matriz-curricular/25doo1
[25req]: {{site.url}}/curso/matriz-curricular/25req
[25inf]: {{site.url}}/curso/matriz-curricular/25inf
[25cmp]: {{site.url}}/curso/matriz-curricular/25cmp
[25bd1]: {{site.url}}/curso/matriz-curricular/25bd1

[35doo2]: {{site.url}}/curso/matriz-curricular/35doo2
[35tes]: {{site.url}}/curso/matriz-curricular/35tes
[35ihc]: {{site.url}}/curso/matriz-curricular/35ihc
[35mdi]: {{site.url}}/curso/matriz-curricular/35mdi
[35bd2]: {{site.url}}/curso/matriz-curricular/35bd2

[45prj]: {{site.url}}/curso/matriz-curricular/45prj
[45est]: {{site.url}}/curso/matriz-curricular/45est
[45rpe]: {{site.url}}/curso/matriz-curricular/45rpe
[45diu]: {{site.url}}/curso/matriz-curricular/45diu
[45qua]: {{site.url}}/curso/matriz-curricular/45qua

[55ppr]: {{site.url}}/curso/matriz-curricular/55ppr
[55dweb]: {{site.url}}/curso/matriz-curricular/55dweb
[55ese]: {{site.url}}/curso/matriz-curricular/55ese
[55ia]: {{site.url}}/curso/matriz-curricular/55ia
[55gpr]: {{site.url}}/curso/matriz-curricular/55gpr

[65arq]: {{site.url}}/curso/matriz-curricular/65arq
[65ddm]: {{site.url}}/curso/matriz-curricular/65ddm
[65dvp]: {{site.url}}/curso/matriz-curricular/65dvp
[65pin1]: {{site.url}}/curso/matriz-curricular/65pin1

[75pot]: {{site.url}}/curso/matriz-curricular/75pot
[75gin]: {{site.url}}/curso/matriz-curricular/75gin
[75pin2]: {{site.url}}/curso/matriz-curricular/75pin2
[75tcc1]: {{site.url}}/curso/matriz-curricular/75tcc1

[85emp]: {{site.url}}/curso/matriz-curricular/85emp
[85asl]: {{site.url}}/curso/matriz-curricular/85asl
[85sis]: {{site.url}}/curso/matriz-curricular/85sis
[85dcd]: {{site.url}}/curso/matriz-curricular/85dcd
[85tcc2]: {{site.url}}/curso/matriz-curricular/85tcc2

[disciplina_optativa]: {{site.url}}/curso/matriz-curricular/disciplina-optativa



