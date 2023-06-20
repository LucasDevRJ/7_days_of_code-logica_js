let listaDeCompras = [];
let categoria;
let frutas = "";
let laticinios = "";
let congelados = "";
let doces = "";

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

	switch (categoriaComida) {
		case 1:
			categoria = "Frutas";
			frutas = frutas + comidaDesejada + ", ";
		break;

		case 2:
			categoria = "Laticínios";
			laticinios = laticinios + comidaDesejada + ", ";
		break;

		case 3:
			categoria = "Congelados";
			congelados = congelados + comidaDesejada + ", ";
		break;

		case 4:
			categoria = "Doces";
			doces = doces + comidaDesejada + ", ";
		break;
	}

	let comida = {
		nome : comidaDesejada,
		categoria : categoria
	}

	listaDeCompras.push(comida);
}

document.write("Lista de compras:");
document.write("<br>&nbsp;&nbsp;&nbsp;Frutas: " + frutas);
document.write("<br>&nbsp;&nbsp;&nbsp;Laticínios: " + laticinios);
document.write("<br>&nbsp;&nbsp;&nbsp;Congelados: " + congelados);
document.write("<br>&nbsp;&nbsp;&nbsp;Doces: " + doces);