let decisaoArea = parseInt(prompt("Deseja seguir pela área de Front-end ou Back-end?\n1 - Front-end ou 2 - Back-end"));

while (decisaoArea != 1 && decisaoArea != 2) {
	alert("Escolha entre 1 ou 2!");
	decisaoArea = parseInt(prompt("Deseja seguir pela área de Front-end ou Back-end?\n1 - Front-end ou 2 - Back-end"));
}

if (decisaoArea == 1) {
	let decisaoTecnologia = parseInt(prompt("Deseja aprender React ou Vue?\n1 - React ou 2 - Vue"));
} else if (decisaoArea == 2) {
	let decisaoTecnologia = parseInt(prompt("Deseja aprender C# ou Java?\n1 - C# ou 2 - Java"));
}