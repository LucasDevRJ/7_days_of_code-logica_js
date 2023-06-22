let opcao = parseInt(prompt("Escolha a conta:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair."));

while (opcao != 5) {
	let valor1 = parseInt(prompt("Digite o primeiro valor:"));
	let valor2 = parseInt(prompt("Digite o segundo valor:"));
	let resultado;

	switch (opcao) {
		case 1:
			resultado = somar(valor1, valor2);
			alert(`${valor1} + ${valor2} = ${resultado}`);
		break;

		case 2:
			resultado = subtrair(valor1, valor2);
			alert(`${valor1} - ${valor2} = ${resultado}`);
		break;

		case 3:
			resultado = multiplicar(valor1, valor2);
			alert(`${valor1} x ${valor2} = ${resultado}`);
		break;

		case 4:
			resultado = dividir(valor1, valor2);
			alert(`${valor1} / ${valor2} = ${resultado}`);
		break;
	}

	function somar() {
		return valor1 + valor2;
	}

	function subtrair() {
		return valor1 - valor2;
	}

	function multiplicar() {
		return valor1 * valor2;
	}

	function dividir() {
		return valor1 / valor2;
	}

	opcao = parseInt(prompt("Escolha a conta:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair."));
}

alert("Até a próxima");