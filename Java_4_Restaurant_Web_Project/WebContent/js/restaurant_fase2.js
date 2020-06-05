//------
//FASE 2
//------

// *********************
// * VARIABLES GLOBALS *
// *********************

var listCustomerRequest = [];

//*********************

// Afegir la gestió d'un event de click en el botó per executar el codi de totes les fases
// des de la funció "presionBoton" quan l'usuari ho demani

 addEventListener('load',inicializarEventos, false);
 
 function inicializarEventos(){
	 var ob = document.getElementById("button_createMenu");
	 ob.addEventListener('click',pressButton_createMenu,false);
	 
	 var ob2 = document.getElementById("button_addRequest");
	 ob2.addEventListener('click',pressButton_addRequest,false);
	 
	 var ob3 = document.getElementById("button_removeAllRequests");
	 ob3.addEventListener('click',pressButton_removeAllRequests,false);
	 
	 var ob4 = document.getElementById("button_payment");
	 ob4.addEventListener('click',pressButton_payment,false);
	
 }
 
 
 
 function pressButton_createMenu(){
	 //window.alert("1");
	 let inputsMenu = document.getElementsByName("menu");
	 let inputsDishPrice = document.getElementsByName("dishPrice");
	 
	 for (var i = 0; i < inputsMenu.length; i++) {
		 arrayMenu[i] = inputsMenu[i].value;
		 arrayDishPrice[i] = parseFloat(inputsDishPrice[i].value);
		 
		 let num = arrayDishPrice[i];
		 if (isNaN(num)){
			 window.alert("EL plat " +(i+1)+" no té un preu vàlid!!!" );
		 }
	 }
	 
	 showMenu(); //mostra menu per pantalla amb el nom i preu de cada plat introduït
 }

 function pressButton_addRequest(){
	 //window.alert("2");
	 let resultat = "";
	 
	 var nouPlatDemanat = document.getElementById("lastRequest");
	 
	 resultat += "<input name='customerRequest' value='"+nouPlatDemanat.value+"' disabled/>";
	 resultat += "<br>";
	 
	 listCustomerRequest.push(nouPlatDemanat.value);
	 
	 nouPlatDemanat.value="";
	 
	 document.getElementById("fase2_customerRequest").innerHTML += resultat;

 }

 function pressButton_removeAllRequests(){
	 //window.alert("3");
	 listCustomerRequest=[];
	 
	 totalPrice = 0;
	 fiveEuros=0; tenEuros=0; twentyEuros=0; fiftyEuros=0; oneHundredEuros=0; twoHundredEuros=0;
	 
	 document.getElementById("fase2_customerRequest").innerHTML="";
	 document.getElementById("fase3").innerHTML="";

 }
 
 function showMenu(){
	 
	 let resultat = "<table>";
	 resultat +="<tr> <th>N:</th> <th>PLAT:</th> <th>PREU:</th> </tr>";
	 
	 for (var i = 0; i < arrayMenu.length; i++) {
		 resultat += "<tr>"	
		 resultat += "<td>" + i +"</td>";
		 resultat += "<td>" + arrayMenu[i]+"</td>";
		 resultat += "<td>" + arrayDishPrice[i]+"</td>";
		 resultat += "</tr>";	 
	 }
	 
	 resultat +="</table>";
	 
	 document.getElementById("fase2_menu").innerHTML = resultat;
	 
 }