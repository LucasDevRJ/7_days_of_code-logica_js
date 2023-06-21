let listaDeCompras = [];
let comida;

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

	comida = {
		nomeComida : comidaDesejada,
		categoriaComida : categoria
	}

	listaDeCompras.push(comida);

	alert(comida.nomeComida + " - " + comida.categoriaComida + " adicionado com sucesso!");

	if (listaDeCompras.length > 0) {
		let desejaRemoverComida = parseInt(prompt("Deseja remover alguma comida da lista?\n1 - Sim ou 2 - Não"));

		while (desejaRemoverComida != 1 && desejaRemoverComida != 2) {
			alert("Digite somente 1 ou 2!!");
			desejaRemoverComida = parseInt(prompt("Deseja remover alguma comida da lista?\n1 - Sim ou 2 - Não"));
		}

		if (desejaRemoverComida == 1) {
			let removeComida = prompt("Digite o nome da comida:");

			for (let i = 0; i < listaDeCompras.length; i++) {
				if (listaDeCompras[i].nomeComida == removeComida) {
					listaDeCompras.splice(i, 1);
					alert(removeComida + " removido com sucesso!");
				} 
			}
		}
	}
}

let frutas = "";
let laticinios = "";
let congelados = "";
let doces = "";

for (let i = 0; i < listaDeCompras.length; i++) {
	if (listaDeCompras[i].categoriaComida == "Frutas") {
		frutas += listaDeCompras[i].nomeComida + ", ";
	} else if (listaDeCompras[i].categoriaComida == "Laticínios") {
		laticinios += listaDeCompras[i].nomeComida + ", ";
	} else if (listaDeCompras[i].categoriaComida == "Congelados") {
		congelados += listaDeCompras[i].nomeComida + ", ";
	} else if (listaDeCompras[i].categoriaComida == "Doces") {
		doces += listaDeCompras[i].nomeComida + ", ";
	}
}

document.write("<br>Lista de compras:");
document.write("<br>&nbsp;&nbsp;&nbsp;Frutas: " + frutas);
document.write("<br>&nbsp;&nbsp;&nbsp;Laticínios: " + laticinios);
document.write("<br>&nbsp;&nbsp;&nbsp;Congelados: " + congelados);
document.write("<br>&nbsp;&nbsp;&nbsp;Doces: " + doces);