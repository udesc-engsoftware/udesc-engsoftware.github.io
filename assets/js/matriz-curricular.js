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
                    { name: "15IDT", value: 7 },
                    { name: "15FES", value: 7 },
                    { name: "15MAT", value: 7 },
                    { name: "15PRS", value: 7 }
                ]
            },
            {
                name: "2ª Fase",
                value: 8,
                children: [
                    { name: "25DOO1", value: 7, linkWith: ["15IDT"] },
                    { name: "25REQ", value: 7 },
                    { name: "25INF", value: 7 },
                    { name: "25CMP", value: 7 },
                    { name: "25BD1", value: 7 }
                ]
            },
            {
                name: "3ª Fase",
                value: 8,
                children: [
                    { name: "35DOO2", value: 7, linkWith: ["25DOO1"] },
                    { name: "35TES", value: 7 },
                    { name: "35IHC", value: 7 },
                    { name: "35MDI", value: 7, linkWith: ["15MAT"] },
                    { name: "35BD2", value: 7, linkWith: ["25BD1"] }
                ]
            },
            {
                name: "4ª Fase",
                value: 8,
                children: [
                    { name: "45PRJ", value: 7 },
                    { name: "45EST", value: 7 },
                    { name: "45RPE", value: 7, linkWith: ["25DOO1"] },
                    { name: "45DIU", value: 7 },
                    { name: "45QUA", value: 7 }
                ]
            },
            {
                name: "5ª Fase",
                value: 8,
                children: [
                    { name: "55PPR", value: 7, linkWith: ["35DOO2"] },
                    { name: "55DWEB", value: 7, linkWith: ["35DOO2"] },
                    { name: "55ESE", value: 7, linkWith: ["45EST"] },
                    { name: "55IA", value: 7 },
                    { name: "55GPR", value: 7 }
                ]
            },
            {
                name: "6ª Fase",
                value: 8,
                children: [
                    { name: "65ARQ", value: 7, linkWith: ["45PRJ"] },
                    { name: "65DDM", value: 7, linkWith: ["35DOO2"] },
                    { name: "65DVP", value: 7, linkWith: ["35TES"] },
                    { name: "65PIN1", value: 7, linkWith: [
                        "15IDT", "15FES", "15MAT", "15PRS",
                        "25DOO1", "25REQ", "25INF", "25CMP", "25BD1",
                        "35DOO2", "35TES", "35IHC", "35MD1", "35BD2",
                        "45PRJ", "45EST", "45RPE", "45DIU", "45QUA"
                    ] },
                    { name: "65OPT", value: 7 }
                ]
            },
            {
                name: "7ª Fase",
                value: 8,
                children: [
                    { name: "75POT", value: 7, linkWith: ["45RPE"] },
                    { name: "75GIN", value: 7, cargaHoraria: "4h" },
                    { name: "75PIN2", value: 7, linkWith: ["65PIN1"] },
                    { name: "75TCC1", value: 7, linkWith: [
                        "15IDT", "15FES", "15MAT", "15PRS",
                        "25DOO1", "25REQ", "25INF", "25CMP", "25BD1",
                        "35DOO2", "35TES", "35IHC", "35MD1", "35BD2",
                        "45PRJ", "45EST", "45RPE", "45DIU", "45QUA",
                        "55PPR", "55DWEB", "55ESE", "55IA", "55GPR"
                    ] },
                    { name: "75OPT", value: 6 },
                ]
            },
            {
                name: "8ª Fase",
                value: 8,
                children: [
                    { name: "85EMP", value: 7 },
                    { name: "85ASL", value: 7 },
                    { name: "85SIS", value: 7 },
                    { name: "85DCD", value: 7, linkWith: ["25INF", "35DOO2"] },
                    { name: "85TCC2", value: 7, linkWith: ["75TCC1"] },
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

    series.nodes.template.set("tooltipText", "{name}");

    series.appear(1000, 100);
});