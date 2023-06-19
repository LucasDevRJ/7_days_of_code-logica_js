let decisaoArea = parseInt(prompt("Deseja seguir para o Front-end ou Back-end?\n1 - Front-end ou 2 - Back-end"));
let tecnologiasQueDesejaAprender;

while (decisaoArea != 1 && decisaoArea != 2) {
	alert("Escolha 1 ou 2!");
	decisaoArea = parseInt(prompt("Deseja seguir para o Front-end ou Back-end?\n1 - Front-end ou 2 - Back-end"));
}

if (decisaoArea == 1) {
	let tecnologiaDesejada = parseInt(prompt("Deseja aprender React ou Vue?\n1 - React ou 2 - Vue"));

	while (tecnologiaDesejada != 1 && tecnologiaDesejada != 2) {
		alert("Escolha entre 1 ou 2!");
		tecnologiaDesejada = parseInt(prompt("Deseja aprender React ou Vue?\n1 - React ou 2 - Vue"));
	}

	if (tecnologiaDesejada == 1) {
		tecnologiasQueDesejaAprender = "React";
	} else {
		tecnologiasQueDesejaAprender = "Vue";
	}
	
} else {
	let tecnologiaDesejada = parseInt(prompt("Deseja aprender C# ou Java?\n1 - C# ou 2 - Java"));

	while (tecnologiaDesejada != 1 && tecnologiaDesejada != 2) {
		alert("Escolha entre 1 ou 2!");
		tecnologiaDesejada = parseInt(prompt("Deseja aprender React ou Vue?\n1 - React ou 2 - Vue"));
	}

	if (tecnologiaDesejada == 1) {
		tecnologiasQueDesejaAprender = "C#";
	} else {
		tecnologiasQueDesejaAprender = "Java";
	}
}

decisaoArea = parseInt(prompt("Deseja seguir se especializando no Front-end ou ser Full Stack?\n1 - Especializar ou 2 - Full Stack"));

while (decisaoArea != 1 && decisaoArea != 2) {
	alert("Escolha entre 1 ou 2!");
	decisaoArea = parseInt(prompt("Deseja seguir se especializando na área ou ser Full Stack?\n1 - Especializar ou 2 - Full Stack"));
}

if (decisaoArea == 1) {
	alert("Então decidiu ser especialista na área, parabéns! Não se esqueça de estudar bastante os frameworks da área");
} else {
	alert("Existem bastantes oportunidades para quem é generalista, parabéns");
}

tecnologiaDesejada = prompt("Qual tecnologia gostaria de aprender?");

while (tecnologiaDesejada.length == 0) {
	alert("Digite a tecnologia que gostaria de aprender!!");
	tecnologiaDesejada = prompt("Qual tecnologia gostaria de aprender?");
}

tecnologiasQueDesejaAprender = tecnologiasQueDesejaAprender + ", " + tecnologiaDesejada;

let desejaAprenderMaisTecnologia = parseInt(prompt("Deseja aprender outra tecnologia?\n1 - Sim ou Qualquer tecla - Não"));

while (desejaAprenderMaisTecnologia == 1) {
	tecnologiaDesejada = prompt("Qual tecnologia gostaria de aprender?");

	while (tecnologiaDesejada.length == 0) {
		alert("Digite a tecnologia que gostaria de aprender!!");
		tecnologiaDesejada = prompt("Qual tecnologia gostaria de aprender?");
	}

	tecnologiasQueDesejaAprender = tecnologiasQueDesejaAprender + ", " + tecnologiaDesejada;
	desejaAprenderMaisTecnologia = parseInt(prompt("Deseja aprender outra tecnologia?\n1 - Sim ou Qualquer tecla - Não"));
}
	
alert("Então deseja aprender as tecnologia(s): " + tecnologiasQueDesejaAprender + ". Que bom!!");