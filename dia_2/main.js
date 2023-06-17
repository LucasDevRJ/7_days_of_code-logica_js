let campoEntradaDados = document.querySelectorAll("input");
let resposta = document.getElementById("resposta");
let botao = document.querySelector("button");
let camposPreenchidos = false;

botao.onclick = function() {
	for (let i = 0; i < campoEntradaDados.length; i++) {
		let nomeDigitado = campoEntradaDados[0].value;
		let idadeDigitada = campoEntradaDados[1].value;
		let linguagemDigitada = campoEntradaDados[2].value;

		if (nomeDigitado.length == 0
			|| idadeDigitada.length == 0
			|| linguagemDigitada.length == 0) {
			resposta.textContent = "Preencha todos os campos!";
			camposPreenchidos = false;
		} else {
			camposPreenchidos = true;
		}
	}

	if (camposPreenchidos == true) {
		resposta.textContent = `Olá ${campoEntradaDados[0].value}, você tem ${campoEntradaDados[1].value} anos e já está aprendendo ${campoEntradaDados[2].value}!`;
	}
}