let nome = prompt("Qual é o seu nome? ");

while (nome.length == 0) {
	alert("Digite o seu nome!");
	nome = prompt("Qual é o seu nome? ");
}

let idade = prompt("Quantos anos você tem? ");

while (idade.length == 0) {
	alert("Digite a sua idade!");
	idade = prompt("Quantos anos você tem? ");
}

let linguagem = prompt("Qual linguagem de programação você está estudando? ");

while (linguagem.length == 0) {
	alert("Digite a linguagem de programação!");
	linguagem = prompt("Qual linguagem de programação você está estudando? ");
}

let resposta = document.getElementById("resposta");
resposta.textContent = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;

let opcao = prompt(`Você gosta de estudar ${linguagem}?\nResponda com o número 1 para SIM ou 2 para NÃO.`);

while (opcao != 1 && opcao != 2) {
	alert("Escolha entre 1 ou 2!");
	opcao = prompt(`Você gosta de estudar ${linguagem}?\nResponda com o número 1 para SIM ou 2 para NÃO.`);
}

if (opcao == 1) {
	alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else if (opcao == 2) {
	alert("Ahh que pena... Já tentou aprender outras linguagens?");
}