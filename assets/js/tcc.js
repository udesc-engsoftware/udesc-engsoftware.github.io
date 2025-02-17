document.addEventListener("DOMContentLoaded", function(){
    const id_tabela = "2PACX-1vSDF0f-Bc6daeqKfWjAaGjG14a0alpBCjTHYtvhxgOtpN2t9Tb8igm3vOqq9fqnEHJqS0OrnVhFrnCY";
    const tabela_url = `https://docs.google.com/spreadsheets/d/e/${id_tabela}/pub?output=csv`;

    /* Busca os dados da Planilha  */
    fetch(tabela_url)
        .then(response => response.text())
        .then(csvData => {
            const parsedData = Papa.parse(csvData, { header: false }).data;
            parsedData.shift();

            const links = parsedData.map(row => {
                const titulo = row[1];
                
                const titulo_tcc = titulo.toLowerCase() /*Transforma em letras minúsculas*/
                    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") /* Separa e remove os acentos*/
                    .replace(/[^a-z0-9]+/g, "-") /* Substitui caracteres inválidos por hífen "-" */ 
                    .replace(/^-+|-+$/g, ""); /* Remove hífens no início e no final */
                
                const link_tcc = `/banca-tcc/tccs/${titulo_tcc}/`;
                row[1] = `<a href="${link_tcc}" target="_blank">${titulo}</a>`;

                return row;
            });

            console.log("Links dos TCC's");
            links.forEach(row => {
                const link = row[1].match(/href="([^"]+)"/);
                if (link) {
                    console.log(link[1]); 
                }
            });

            new DataTable("#tabela-tcc", {
                data: links,
                columns: [
                    { title: "Aluno(a)" },
                    { title: "Título" },
                    { title: "Orientador(a)" },
                    { title: "Membros" },
                    { title: "Área" },
                    { title: "Data" },
                    { title: "Hora" },
                    { title: "Local" }
                ],
                language: {
                    url: "https://cdn.datatables.net/plug-ins/1.13.6/i18n/pt-BR.json"
                },
                order: [[1, 'asc']],
                responsive: true,
            });
        })
        .catch(error => console.error("Erro ao carregar os dados da Planilha: ", error));
});