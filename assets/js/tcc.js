document.addEventListener("DOMContentLoaded", function(){
    const id_tabela = "2PACX-1vSDF0f-Bc6daeqKfWjAaGjG14a0alpBCjTHYtvhxgOtpN2t9Tb8igm3vOqq9fqnEHJqS0OrnVhFrnCY";
    const tabela_url = `https://docs.google.com/spreadsheets/d/e/${id_tabela}/pub?output=csv`;

    fetch(tabela_url)
        .then(response => response.text())
        .then(csvData => {
            const parsedData = Papa.parse(csvData, { header: false }).data;
            parsedData.shift();

            new DataTable("#tabela-tcc", {
                data: parsedData,
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