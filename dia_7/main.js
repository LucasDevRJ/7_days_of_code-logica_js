let opcao = parseInt(prompt("Escolha a conta:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair."));

if (opcao == 5) {
	alert("Até a próxima");
} else {
	let valor1 = parseInt(prompt("Digite o primeiro valor:"));
	let valor2 = parseInt(prompt("Digite o segundo valor:"));

	switch (opcao) {
		case 1:
			let resultado = somar(valor1, valor2);
			alert(`${valor1} + ${valor2} = ${resultado}`);
		break;

		case 2:
			subtrair(valor1, valor2);
		break;

		case 3:
			multiplicar(valor1, valor2);
		break;

		case 4:
			dividir(valor1, valor2);
		break;
	}

	function somar() {
		return valor1 + valor2;
	}
}