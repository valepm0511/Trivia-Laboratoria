var nameUser = prompt("Bienvenid@ a la trivia, ingresa tu nombre.");
document.getElementById("saludoBienvenida").innerHTML = "Bienvenid@ " + nameUser;

var confirmation = confirm("¿Quieres jugar a la Trivia de Laboratoria?");

if(confirmation){
	alert("Entonces Empecemos :)");
	var firstQuestion = prompt("¿Desdes que edad se puede postular a Laboratoria?");
	var secondQuestion = prompt("¿Laboratoria esta dirigido a mujeres u hombres?");
	var thirdQuestion = prompt("Que lenguaje de programación se aprende en Laboratoria?");
	var fourthQuesion = prompt("¿En cuantos paises está laboratoria?");
	var fifthQuestion = prompt("¿Existe limite de edad en Laboratoria?");
	var sixthQuestion = prompt("¿Cuantos meses dura el Bootcamp?");
	var firtsPoints = 0;
	var secondPoints = 0;
	var thirdPoints = 0;
	var fourthPoints = 0;
	var fifthPoints = 0;
	var sixthPoints = 0;
	

	document.getElementById("resultados").innerHTML = "Resultados:";

	if(firstQuestion.trim == "18"){
		firtsPoints += 100;
		document.getElementById("respuestaCorrectaUno").innerHTML = " Respuesta 1: Excelente!! la respuesta es 18 años. <b>Puntaje:</b> "+firtsPoints;
	}else{
		document.getElementById("respuestaIncorrectaUno").innerHTML = "Respuesta 1: Lastima, no acertaste. <b>Puntaje: </b> "+firtsPoints;
		firtsPoints;
	}

	if(secondQuestion.toLowerCase() == "mujeres"){
		secondPoints += 100;
		document.getElementById("respuestaCorrectaDos").innerHTML = "Respuesta 2: Bien, la respuesta es Mujeres. <b>Puntaje: </b> "+secondPoints;
		
	}else{
		secondPoints = 0;
		document.getElementById("respuestaIncorrectaDos").innerHTML = "Respuesta 2: Te equivocaste.<b>Puntaje: </b>"+secondPoints;
	}

	if(thirdQuestion.toLowerCase() == "javascript"){
		thirdPoints += 100;
		document.getElementById("respuestaCorrectaTres").innerHTML = "Respuesta 3: Super!! es Javascript. <b>Puntaje: </b>" +thirdPoints;
		
	}else{
		thirdPoints = 0;
		document.getElementById("respuestaIncorrectaTres").innerHTML = "Respuesta 3: Mmmmmm no, no es la respuesta correcta. <b>Puntaje: </b>"+thirdPoints;
	}

	if(fourthQuesion.toLowerCase() == "4"){
		fourthPoints += 100;
		document.getElementById("respuestaCorrectaCuatro").innerHTML = "Respuesta 4: Si!! en 4 paises. <b>Puntaje: </b>" +fourthPoints;
		
	}else{
		fourthPoints = 0;
		document.getElementById("respuestaIncorrectaCuatro").innerHTML = "Respuesta 4: No es la respuesta correcta. <b>Puntaje: </b>"+fourthPoints;
	}

	if(fifthQuestion.toLowerCase() == "no"){
		fifthPoints += 100;
		document.getElementById("respuestaCorrectaCinco").innerHTML = "Respuesta 5: Excelente, no exite limite de edad. <b>Puntaje: </b>" +fifthPoints;
		
	}else{
		fifthPoints = 0;
		document.getElementById("respuestaIncorrectaCinco").innerHTML = "Respuesta 5: Que pena, no es la respuesta correcta. <b> Puntaje: </b>"+fifthPoints;
	}

	if(sixthQuestion == "6"){
		sixthPoints += 100;
		document.getElementById("respuestaCorrectaSeis").innerHTML = "Respuesta 6: Bien, son 6 meses de Bootcamp. <b> Puntaje: </b>" +sixthPoints;
		
	}else{
		sixthPoints = 0;
		document.getElementById("respuestaIncorrectaSeis").innerHTML = "Respuesta 6: Pucha, te equivocaste. <b>Puntaje: </b>"+sixthPoints;
	}
	var totalPoints = firtsPoints+secondPoints+thirdPoints+fourthPoints+fifthPoints+sixthPoints;
	document.getElementById("puntajeTotal").innerHTML = "Obtuviste "+totalPoints+" puntos de un total de 600.";

}else{
	document.getElementById("mensajeDespedida").innerHTML = ":'(";

}
