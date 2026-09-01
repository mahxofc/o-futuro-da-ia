const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a Inteligência Artificial pode influenciar o futuro da sociedade?",
        alternativas: [
            {
                texto: "A IA pode facilitar diversas atividades do dia a dia, auxiliar em áreas como educação, medicina e tecnologia e aumentar a produtividade.",
                afirmacao: "A Inteligência Artificial pode transformar a sociedade ao automatizar tarefas, auxiliar profissionais e criar novas possibilidades em diferentes áreas."
            },
            {
                texto: "A IA terá pouca influência, pois muitas atividades continuarão sendo realizadas da mesma forma que são atualmente.",
                afirmacao: "Apesar de algumas atividades continuarem dependendo das pessoas, a Inteligência Artificial tende a estar cada vez mais presente na sociedade e modificar a maneira como realizamos diversas tarefas."
            }
        ]
    },
    {
        enunciado: "Com o avanço da Inteligência Artificial, muitas profissões poderão ser modificadas ou automatizadas. Isso significa que a IA irá substituir todos os trabalhadores?",
        alternativas: [
            {
                texto: "Não, pois a IA pode substituir algumas tarefas, mas também pode criar novas profissões e fazer com que os trabalhadores desenvolvam novas habilidades.",
                afirmacao: "A evolução da Inteligência Artificial pode transformar o mercado de trabalho, substituindo algumas tarefas e criando novas oportunidades que exigem diferentes conhecimentos e habilidades."
            },
            {
                texto: "Sim, porque no futuro as máquinas poderão realizar praticamente todas as atividades que atualmente são feitas pelos seres humanos.",
                afirmacao: "Embora a IA possa automatizar diversas tarefas, existem atividades que dependem de criatividade, empatia, pensamento crítico e interação humana, tornando improvável que todas as profissões sejam completamente substituídas."
            }
        ]
    },
    {
        enunciado: "Com o crescimento da Inteligência Artificial, também aumentam as preocupações relacionadas ao seu uso. Como a sociedade pode se preparar para esse futuro?",
        alternativas: [
            {
                texto: "Criando regras para o uso responsável da IA, ensinando a população sobre a tecnologia e garantindo que ela seja utilizada de maneira segura e ética.",
                afirmacao: "Para que a Inteligência Artificial seja utilizada de forma positiva, é importante investir em educação, segurança, transparência e regras que diminuam possíveis impactos negativos da tecnologia."
            },
            {
                texto: "Deixar que a tecnologia evolua sem regras, pois qualquer tentativa de controlar a IA poderia impedir seu desenvolvimento.",
                afirmacao: "O desenvolvimento da Inteligência Artificial precisa ser acompanhado de responsabilidade, pois seu uso sem limites pode aumentar problemas relacionados à privacidade, desinformação, segurança e desigualdade."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sobre o futuro da Inteligência Artificial...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
