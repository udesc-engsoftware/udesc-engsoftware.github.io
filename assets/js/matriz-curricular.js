am5.ready(function() {

    var root = am5.Root.new("chartdiv");
    root.setThemes([
        am5themes_Animated.new(root)
    ]);

    var data = {
        name: "Engenharia de Software",
        value: 8,
        children: [
            {
                name: "1ª Fase",
                value: 8,
                children: [
                    { name: "15IDT", value: 7, fullName: "Introdução ao Desenvolvimento de Software e Testes", cargaHoraria: "8h" },
                    { name: "15FES", value: 7, fullName: "Fundamentos de Engenharia de Software", cargaHoraria: "4h" },
                    { name: "15MAT", value: 7, fullName: "Tópicos em Matemática Básica e Lógica Matemática", cargaHoraria: "4h" },
                    { name: "15PRS", value: 7, fullName: "Processos", cargaHoraria: "4h" }
                ]
            },
            {
                name: "2ª Fase",
                value: 8,
                children: [
                    { name: "25DOO1", value: 7, fullName: "Desenvolvimento de Software Orientado a Objetos I", cargaHoraria: "4h", linkWith: ["15IDT"] },
                    { name: "25REQ", value: 7, fullName: "Requisitos de Software", cargaHoraria: "4h" },
                    { name: "25INF", value: 7, fullName: "Infraestruturas Computacionais", cargaHoraria: "4h" },
                    { name: "25CMP", value: 7, fullName: "Comunicação e Metodologia de Pesquisa em Engenharia de Software", cargaHoraria: "4h" },
                    { name: "25BD1", value: 7, fullName: "Modelagem de Dados", cargaHoraria: "4h" }
                ]
            },
            {
                name: "3ª Fase",
                value: 8,
                children: [
                    { name: "35DOO2", value: 7, fullName: "Desenvolvimento de Software Orientado a Objetos II", cargaHoraria: "4h", linkWith: ["25DOO1"] },
                    { name: "35TES", value: 7, fullName: "Testes de Software", cargaHoraria: "4h" },
                    { name: "35IHC", value: 7, fullName: "Interface Humano-Computador", cargaHoraria: "4h" },
                    { name: "35MDI", value: 7, fullName: "Matemática Discreta", cargaHoraria: "4h", linkWith: ["15MAT"] },
                    { name: "35BD2", value: 7, fullName: "Persistência de Dados", cargaHoraria: "4h", linkWith: ["25BD1"] }
                ]
            },
            {
                name: "4ª Fase",
                value: 8,
                children: [
                    { name: "45PRJ", value: 7, fullName: "Projeto de Software", cargaHoraria: "4h" },
                    { name: "45EST", value: 7, fullName: "Probabilidade e Estatística", cargaHoraria: "4h" },
                    { name: "45RPE", value: 7, fullName: "Resolução de Problemas com Estruturas de Dados", cargaHoraria: "4h", linkWith: ["25DOO1"] },
                    { name: "45DIU", value: 7, fullName: "Desenvolvimento de Interface de Usuário", cargaHoraria: "4h" },
                    { name: "45QUA", value: 7, fullName: "Qualidade de Software", cargaHoraria: "4h" }
                ]
            },
            {
                name: "5ª Fase",
                value: 8,
                children: [
                    { name: "55PPR", value: 7, fullName: "Padrões de Projeto", cargaHoraria: "4h", linkWith: ["35DOO2"] },
                    { name: "55DWEB", value: 7, fullName: "Desenvolvimento de Software Web", cargaHoraria: "4h", linkWith: ["35DOO2"] },
                    { name: "55ESE", value: 7, fullName: "Engenharia de Software Experimental", cargaHoraria: "4h", linkWith: ["45EST"] },
                    { name: "55IA", value: 7, fullName: "Inteligência Artificial", cargaHoraria: "4h" },
                    { name: "55GPR", value: 7, fullName: "Gerência de Projetos", cargaHoraria: "4h" }
                ]
            },
            {
                name: "6ª Fase",
                value: 8,
                children: [
                    { name: "65ARQ", value: 7, fullName: "Arquitetura de Software", cargaHoraria: "4h", linkWith: ["45PRJ"] },
                    { name: "65DDM", value: 7, fullName: "Desenvolvimento de Software para Dispositivos Móveis", cargaHoraria: "4h", linkWith: ["35DOO2"] },
                    { name: "65DVP", value: 7, fullName: "DevOps", cargaHoraria: "4h", linkWith: ["35TES"] },
                    { name: "65PIN1", value: 7, fullName: "Projeto Integrador I", cargaHoraria: "8h", linkWith: [
                        "15IDT", "15FES", "15MAT", "15PRS",
                        "25DOO1", "25REQ", "25INF", "25CMP", "25BD1",
                        "35DOO2", "35TES", "35IHC", "35MD1", "35BD2",
                        "45PRJ", "45EST", "45RPE", "45DIU", "45QUA"
                    ] },
                    { name: "65OPT", value: 7, fullName: "Disciplina Optativa", cargaHoraria: "4h" }
                ]
            },
            {
                name: "7ª Fase",
                value: 8,
                children: [
                    { name: "75POT", value: 7, fullName: "Pesquisa Operacional e Otimização", cargaHoraria: "4h", linkWith: ["45RPE"] },
                    { name: "75GIN", value: 7, fullName: "Gestão da Inovação em Engenharia de Software", cargaHoraria: "4h" },
                    { name: "75PIN2", value: 7, fullName: "Projeto Integrador II", cargaHoraria: "8h", linkWith: ["65PIN1"] },
                    { name: "75TCC1", value: 7, fullName: "Trabalho de Conclusão de Curso I", cargaHoraria: "4h", linkWith: [
                        "15IDT", "15FES", "15MAT", "15PRS",
                        "25DOO1", "25REQ", "25INF", "25CMP", "25BD1",
                        "35DOO2", "35TES", "35IHC", "35MD1", "35BD2",
                        "45PRJ", "45EST", "45RPE", "45DIU", "45QUA",
                        "55PPR", "55DWEB", "55ESE", "55IA", "55GPR"
                    ] },
                    { name: "75OPT", value: 6, fullName: "Disciplina Optativa", cargaHoraria: "4h" },
                ]
            },
            {
                name: "8ª Fase",
                value: 8,
                children: [
                    { name: "85EMP", value: 7, fullName: "Empreendedorismo em Engenharia de Software", cargaHoraria: "4h" },
                    { name: "85ASL", value: 7, fullName: "Aspectos Sociais e Legais da Engenharia de Software", cargaHoraria: "4h" },
                    { name: "85SIS", value: 7, fullName: "Sistemas de Informação", cargaHoraria: "4h" },
                    { name: "85DCD", value: 7, fullName: "Desenvolvimento de Software Concorrente e Distribuido", cargaHoraria: "4h", linkWith: ["25INF", "35DOO2"] },
                    { name: "85TCC2", value: 7, fullName: "Trabalho de Conclusão de Curso II", cargaHoraria: "11h", linkWith: ["75TCC1"] },
                ]  
            },
        ]
    };

    var container = root.container.children.push(
        am5.Container.new(root, {
            width: am5.percent(100),
            height: am5.percent(100),
            layout: root.verticalLayout
        })
    );

    var series = container.children.push(
        am5hierarchy.ForceDirected.new(root, {
          singleBranchOnly: false,
          downDepth: 1,
          topDepth: 1,
          maxRadius: 25,
          minRadius: 12,
          valueField: "value",
          categoryField: "name",
          childDataField: "children",
          idField: "name",
          linkWithStrength: 0.3,
          linkWithField: "linkWith",
          manyBodyStrength: -15,
          centerStrength: 0.5
        })
    );

    series.get("colors").set("step", 2);

    series.data.setAll([data]);
    series.set("selectedDataItem", series.dataItems[0]);

    series.nodes.template.set("tooltipText", "{fullName}\nCarga horária: {cargaHoraria}");

    series.appear(1000, 100);
});