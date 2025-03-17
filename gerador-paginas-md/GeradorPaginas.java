import java.io.*;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.text.Normalizer;

public class GeradorPaginas {

    public static void main(String[] args) {
        String idTabela = "2PACX-1vQD0IhjB59-yrW57UH1IQZnhzHfA5VK2kyWdloQGPgGeaeC8KCdgQKMigJ8dVRMZExiTEr4v-CulYG-";
        String arquivoCsv = "https://docs.google.com/spreadsheets/d/e/" + idTabela + "/pub?output=csv";
        String template = "C:\\Users\\09644564944.CORP\\OneDrive - UDESC Universidade do Estado de Santa Catarina\\Documentos\\GitHub\\GeradorPaginasMD\\src\\template.md";

        lerCsv(arquivoCsv, template);
    }

    private static void lerCsv (String arquivoCsv, String template) {
        try (BufferedReader br = new BufferedReader(new InputStreamReader(new URL(arquivoCsv).openStream()))){
            br.readLine();
            String linhaTcc;

            while ((linhaTcc = br.readLine()) != null) {
                String[] dadosPlanilha = linhaTcc.split(",(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)", -1);

                for (int i = 0; i < dadosPlanilha.length; i++) {
                    dadosPlanilha[i] = dadosPlanilha[i].replaceAll("^\"|\"$", "").trim();
                }

                String nomeArquivo = gerarNomeArquivo(dadosPlanilha[5], dadosPlanilha[0]);
                String templateArquivo = gerarArquivoTemplate(template, dadosPlanilha);

                salvarPaginaMd(nomeArquivo, templateArquivo);
            }

        } catch (FileNotFoundException e) {
            System.err.println("Arquivo CSV não foi encontrado: " + arquivoCsv);
            e.printStackTrace();
        } catch (IOException e) {
            System.err.println("Erro ao ler o arquivo CSV: " + e.getMessage());
            e.printStackTrace();
        }
    }

    private static String gerarNomeArquivo (String semestre, String aluno) {
        String semestreFormatado = semestre.replace("/", "-").replace(" ", "-");
        String nomeFormatado = Normalizer.normalize(aluno.toLowerCase(), Normalizer.Form.NFD)
                .replaceAll("[^a-z0-9\\s-]", "")
                .trim()
                .replace(" ", "-");

        return semestreFormatado + "-" + nomeFormatado + ".md";
    }

    private static String gerarArquivoTemplate (String template, String[] dadosPlanilha) {
        StringBuilder sb = new StringBuilder();

        try (BufferedReader bufferedReader = new BufferedReader(new FileReader(template))) {
            String linhaTemplate;

            while ((linhaTemplate = bufferedReader.readLine()) != null) {
                linhaTemplate = linhaTemplate.replace("$titulo$", dadosPlanilha[1].trim())
                                             .replace("$nome$", dadosPlanilha[0].trim())
                                             .replace("$area$", dadosPlanilha[4].trim())
                                             .replace("$data$", dadosPlanilha[6].trim())
                                             .replace("$hora$", dadosPlanilha[7].trim())
                                             .replace("$local$", dadosPlanilha[8].trim())
                                             .replace("$semestre$", dadosPlanilha[5].trim())
                                             .replace("$orientador$", dadosPlanilha[2].trim())
                                             .replace("$membros$", dadosPlanilha[3].trim())
                                             .replace("$linkTcc$", dadosPlanilha[9].trim());

                sb.append(linhaTemplate).append("\n");
            }
        } catch (FileNotFoundException e) {
            System.err.println("O template não foi encontrado: " + template);
            e.printStackTrace();
        } catch (IOException e) {
            System.err.println("Erro ao ler o template: " + e.getMessage());
            e.printStackTrace();
        }

        return sb.toString();
    }

    private static void salvarPaginaMd (String nomeArquivo, String conteudoTemplate) {
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(nomeArquivo))) {
            bw.write(conteudoTemplate);
            System.out.println("Página criada com sucesso: " + nomeArquivo);
        } catch (IOException e) {
            System.out.println("Erro ao salvar a página: " + nomeArquivo);
            e.printStackTrace();
        }
    }
}
