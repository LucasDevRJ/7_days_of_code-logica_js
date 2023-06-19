let decisaoArea = parseInt(prompt("Deseja seguir para o Front-end ou Back-end?\n1 - Front-end ou 2 - Back-end"));

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

	decisaoArea = parseInt(prompt("Deseja seguir se especializando no Front-end ou ser Full Stack?\n1 - Especializar ou 2 - Full Stack"));

	while (decisaoArea != 1 && decisaoArea != 2) {
		alert("Escolha entre 1 ou 2!");
		decisaoArea = parseInt(prompt("Deseja seguir se especializando no Front-end ou ser Full Stack?\n1 - Especializar ou 2 - Full Stack"));
	}

	if (decisaoArea == 1) {
		alert("Então decidiu ser especialista em desenvolvimento Front-end, parabéns! Não se esqueça de estudar bastante os frameworks da área");
	} else {
		alert("Existem bastantes oportunidades para quem é generalista, parabéns");
	}
	
} else {
	let tecnologiaDesejada = parseInt(prompt("Deseja aprender C# ou Java?\n1 - C# ou 2 - Java"));
}