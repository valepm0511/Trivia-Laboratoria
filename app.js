var nameUser = prompt("Bienvenid@ a la trivia, ingresa tu nombre.");
document.getElementById("saludoBienvenida").innerHTML = "Bienvenid@ " + nameUser;

var confirmation = prompt("¿quieres jugar la trivia?");

if(confirmation == "si"){
	alert("Entonces Empecemos :)");
	var firstQuestion = prompt("¿Desdes que edad se puede postular a Laboratoria?");
	var secondQuestion = prompt("¿Laboratoria esta dirigido a mujeres u hombres?");
	var thirdQuestion = prompt("Que lenguaje de programación se aprende en Laboratoria?");
	var fourthQuesion = prompt("¿En cuantos paises está laboratoria?");
	var fifthQuestion = prompt("¿Existe limite de edad en Laboratoria?");
	var sixthQuestion = prompt("¿Cuantos meses dura el Bootcamp?");
	var firtsPonits = 0;
	var secondPonits = 0;
	var thirdPonits = 0;
	var fourthPonits = 0;
	var fifthPonits = 0;
	var sixthPonits = 0;
	

	document.getElementById("resultados").innerHTML = "Resultados:";

	if(firstQuestion == "18"){
		firtsPonits += 100;
		document.getElementById("respuestaCorrectaUno").innerHTML = " Respuesta 1: Excelente!! la respuesta es 18 años. <b>Puntaje:</b> "+firtsPonits;
	}else{
		document.getElementById("respuestaIncorrectaUno").innerHTML = "Respuesta 1: Lastima, no acertaste. <b>Puntaje: </b> "+firtsPonits;
		firtsPonits;
	}

	if(secondQuestion == "mujeres"){
		secondPonits += 100;
		document.getElementById("respuestaCorrectaDos").innerHTML = "Respuesta 2: Bien, la respuesta es Mujeres. <b>Puntaje: </b> "+secondPonits;
		
	}else{
		secondPonits = 0;
		document.getElementById("respuestaIncorrectaDos").innerHTML = "Respuesta 2: Te equivocaste.<b>Puntaje: </b>"+secondPonits;
	}

	if(thirdQuestion == "javascript"){
		thirdPonits += 100;
		document.getElementById("respuestaCorrectaTres").innerHTML = "Respuesta 3: Super!! es Javascript. <b>Puntaje: </b>" +thirdPonits;
		
	}else{
		thirdPonits = 0;
		document.getElementById("respuestaIncorrectaTres").innerHTML = "Respuesta 3: Mmmmmm no, no es la respuesta correcta. <b>Puntaje: </b>"+thirdPonits;
	}

	if(fourthQuesion == "4"){
		fourthPonits += 100;
		document.getElementById("respuestaCorrectaCuatro").innerHTML = "Respuesta 4: Si!! en 4 paises. <b>Puntaje: </b>" +fourthPonits;
		
	}else{
		fourthPonits = 0;
		document.getElementById("respuestaIncorrectaCuatro").innerHTML = "Respuesta 4: No es la respuesta correcta. <b>Puntaje: </b>"+fourthPonits;
	}

	if(fifthQuestion == "no"){
		fifthPonits += 100;
		document.getElementById("respuestaCorrectaCinco").innerHTML = "Respuesta 5: Excelente, no exite limite de edad. <b>Puntaje: </b>" +fifthPonits;
		
	}else{
		fifthPonits = 0;
		document.getElementById("respuestaIncorrectaCinco").innerHTML = "Respuesta 5: Que pena, no es la respuesta correcta. <b> Puntaje: </b>"+fifthPonits;
	}

	if(sixthQuestion == "6"){
		sixthPonits += 100;
		document.getElementById("respuestaCorrectaSeis").innerHTML = "Respuesta 6: Bien, son 6 meses de Bootcamp. <b> Puntaje: </b>" +sixthPonits;
		
	}else{
		sixthPonits = 0;
		document.getElementById("respuestaIncorrectaSeis").innerHTML = "Respuesta 6: Pucha, te equivocaste. <b>Puntaje: </b>"+sixthPonits;
	}
	var totalPoints = firtsPonits+secondPonits+thirdPonits+fourthPonits+fifthPonits+sixthPonits;
	document.getElementById("puntajeTotal").innerHTML = "Obtuviste "+totalPoints+" puntos de un total de 600.";

}else if (confirmation == "no"){
	document.getElementById("mensajeDespedida").innerHTML = ":'(";

}
