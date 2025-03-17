document.addEventListener("DOMContentLoaded", function(){
    const id_tabela = "2PACX-1vQD0IhjB59-yrW57UH1IQZnhzHfA5VK2kyWdloQGPgGeaeC8KCdgQKMigJ8dVRMZExiTEr4v-CulYG-";
    const tabela_url = `https://docs.google.com/spreadsheets/d/e/${id_tabela}/pub?output=csv`;

    /* Busca os dados da Planilha */
    fetch(tabela_url)
        .then(response => response.text())
        .then(csvData => {
            const parsedData = Papa.parse(csvData, { header: false }).data;
            parsedData.shift();

            const links = parsedData.map(row => {
                const nome = row[0];
                const titulo = row[1];
                const orientador = row[2];
                const semestre = row[5];
                
                const titulo_tcc = nome.toLowerCase() /*Transforma em letras minúsculas */
                    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") /* Separa e remove os acentos */
                    .replace(/[^a-z0-9]+/g, "-") /* Substitui caracteres inválidos por hífen "-" */ 
                    .replace(/^-+|-+$/g, ""); /* Remove hífens no início e no final */
                
                const link_tcc = `/banca-tcc/tccs/${titulo_tcc}/`;
                row[0] = `<a href="${link_tcc}" target="_blank">${titulo}</a>`;

                return [row[0], nome, orientador, semestre];
            });

            new DataTable("#tabela-tcc", {
                data: links,
                columns: [
                    { title: "Título" },
                    { title: "Aluno(a)" },
                    { title: "Orientador(a)" },
                    { title: "Semestre" }
                ],
                language: {
                    url: "https://cdn.datatables.net/plug-ins/1.13.6/i18n/pt-BR.json"
                },
                order: [[0, 'asc']],
                responsive: true,
            });
        })
        .catch(error => console.error("Erro ao carregar os dados da Planilha: ", error));
});