let desejaAdicionarComida = parseInt(prompt("Deseja adicionar uma comida na sua lista de compras?\n1 - Sim ou 2 - Não"));

while (desejaAdicionarComida != 1 && desejaAdicionarComida != 2) {
	alert("Digite 1 ou 2!!");
	desejaAdicionarComida = prompt("Deseja adicionar uma comida na sua lista de compras?\n1 - Sim ou 2 - Não");
}

let comidaDesejada = prompt("Qual comida você deseja inserir?");

while (comidaDesejada.length == 0) {
	alert("Digite a comida desejada!!");
	comidaDesejada = prompt("Qual comida você deseja inserir?");
}