let numeroSorteado = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let numeroChutado = parseInt(prompt("Digite um número dentre 0 a 10: "));
let chances = 3;

while (chances > 0) {
	chances--;
	if (numeroSorteado == numeroChutado) {
		alert("Acertou!! O número sorteado é o " + numeroSorteado);
		break;
	} else if (chances == 0) {
		alert("Game Over!! O número sorteado era o " + numeroSorteado);
		break;
	}

	numeroChutado = parseInt(prompt("Digite um número dentre 0 a 10: "));
}