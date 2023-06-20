let listaDeCompras = [];

while (true) {
	let desejaAdicionarComida = parseInt(prompt("Deseja adicionar uma comida na sua lista de compras?\n1 - Sim ou 2 - Não"));

	if (desejaAdicionarComida == 2) {
		break;
	}

	while (desejaAdicionarComida != 1 && desejaAdicionarComida != 2) {
		alert("Digite 1 ou 2!!");
		desejaAdicionarComida = prompt("Deseja adicionar uma comida na sua lista de compras?\n1 - Sim ou 2 - Não");
	}

	let comidaDesejada = prompt("Qual comida você deseja inserir?");

	while (comidaDesejada.length == 0) {
		alert("Digite a comida desejada!!");
		comidaDesejada = prompt("Qual comida você deseja inserir?");
	}

	let categoriaComida = parseInt(prompt("Qual categoria a/o " + comidaDesejada + " se encaixa?\n1 - Frutas, 2 - Laticínios, 3 - Congelados, 4 - Doces."));
	let categoria;

	switch (categoriaComida) {
		case 1:
			categoria = "Frutas";
		break;

		case 2:
			categoria = "Laticínios";
		break;

		case 3:
			categoria = "Congelados";
		break;

		case 4:
			categoria = "Doces";
		break;
	}

	let comida = {
		nome : comidaDesejada,
		categoria : categoria
	}

	listaDeCompras.push(comida);
}