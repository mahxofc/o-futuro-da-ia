const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas =[
    {
        enunciado: "Como você imagina que a Inteligência Artificial estará presente no nosso dia a dia no futuro?",
        alternativas: [
            {
                texto: "A IA estará cada vez mais presente em tarefas do cotidiano, ajudando nos estudos, no trabalho, na saúde e na organização da rotina.",
                afirmacao: "A Inteligência Artificial tende a se tornar uma ferramenta cada vez mais presente no cotidiano, auxiliando as pessoas em diferentes atividades."
            },
            {
                texto: "A IA continuará sendo utilizada principalmente em áreas específicas, sem fazer parte de grande parte das atividades do dia a dia.",
                afirmacao: "Mesmo com o avanço da tecnologia, a utilização da Inteligência Artificial pode continuar concentrada em determinadas áreas e depender das necessidades de cada pessoa."
            }
        ]
    },
    {
        enunciado: "Com o avanço da Inteligência Artificial, muitas profissões podem passar por mudanças. Você acredita que a IA substituirá grande parte dos trabalhadores no futuro?",
        alternativas: [
            {
                texto: "Sim, algumas profissões poderão ser automatizadas, principalmente aquelas que envolvem tarefas repetitivas e previsíveis.",
                afirmacao: "O avanço da automação pode transformar o mercado de trabalho, fazendo com que algumas funções sejam substituídas ou profundamente modificadas pela Inteligência Artificial."
            },
            {
                texto: "Não totalmente, pois a IA deverá atuar principalmente como uma ferramenta de apoio aos trabalhadores.",
                afirmacao: "A Inteligência Artificial pode complementar o trabalho humano, enquanto habilidades como criatividade, comunicação, empatia e tomada de decisões continuam sendo importantes."
            }
        ]
    },
    {
        enunciado: "Pensando no futuro, qual deve ser uma das principais preocupações da sociedade em relação ao avanço da Inteligência Artificial?",
        alternativas: [
            {
                texto: "Garantir que a IA seja desenvolvida e utilizada de maneira ética, segura e responsável.",
                afirmacao: "O futuro da Inteligência Artificial dependerá não apenas do avanço tecnológico, mas também da criação de regras e práticas que garantam seu uso responsável e seguro."
            },
            {
                texto: "Permitir que a tecnologia avance livremente, sem muitas regras ou limitações.",
                afirmacao: "Um desenvolvimento sem cuidados pode aumentar riscos relacionados à privacidade, à segurança, à desinformação e ao uso inadequado da Inteligência Artificial."
            }
        ]
    }
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
    caixaPerguntas.textContent = "Sobre a leitura...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
