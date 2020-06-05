//------
//FASE 2
//------

// *********************
// * VARIABLES GLOBALS *
// *********************

var listCustomerRequest = []; //contindrà els plats demanats pel client

//**********************

// Afegir la gestió dels events de click dels botons per executar el codi corresponent a cada funcionalitat

 addEventListener('load',inicializarEventos, false);
 
 function inicializarEventos(){
	 
	//botó "Crear Menú": mostrar menú introduït per l'usuari per pantalla
	 var ob = document.getElementById("button_createMenu"); 
	 ob.addEventListener('click',pressButton_createMenu,false);
	 
	 //botó "Demanar Nou Plat": afegir un nou plat demanat pel client per pantalla
	 var ob2 = document.getElementById("button_addRequest");
	 ob2.addEventListener('click',pressButton_addRequest,false);
	 
	 //botó "Esborrar tots els plats demanats": esborrar tots els plats demanats pel client i reinicialitzar variables
	 var ob3 = document.getElementById("button_removeAllRequests");
	 ob3.addEventListener('click',pressButton_removeAllRequests,false);
	 
	 //botó "Calcular Preu Total": mostrar per pantalla el preu total i els billets en euros de cada tipus que 
	 //tindrà que entregar el client per cobrir el preu total
	 var ob4 = document.getElementById("button_payment");
	 ob4.addEventListener('click',pressButton_payment,false);
	
 }
 
 
// Crea el menú amb el nom i el preu de cada plat introduïts per l'usuari:
// Guarda als arrays "arrayMenu" y "arrayDishPrice" el nom i preu de cada plat introduït 
// per part de l'usuari als camps de text
// Mostra menu per pantalla amb el nom i preu de cada plat introduït
 function pressButton_createMenu(){

	 //obtenim els arrays corresponents als camps de text amb els noms i preus de cada plat del menú
	 let inputsMenu = document.getElementsByName("menu");
	 let inputsDishPrice = document.getElementsByName("dishPrice");
	 
	 for (var i = 0; i < inputsMenu.length; i++) {
		 arrayMenu[i] = inputsMenu[i].value;
		 arrayDishPrice[i] = parseFloat(inputsDishPrice[i].value); //es passa el valor de tipus string a float
		 
		 let num = arrayDishPrice[i];
		 if (isNaN(num)){ //si el preu no és un número
			 window.alert("EL plat " +(i+1)+" no té un preu vàlid!!!" );
		 }
	 }
	 
	 showMenu(); //mostra menu per pantalla amb el nom i preu de cada plat introduït
 }

// S'afegeix un nou plat demanat pel client a la llista "listCustomerRequest"
// Es mostra per pantalla un nou camp de text amb el valor del nou plat demanat. Aquest nou camp no pot ser modificat per l'usuari.
 function pressButton_addRequest(){

	 let resultat = "";
	 
	 var nouPlatDemanat = document.getElementById("lastRequest");
	 
	 resultat += "<input name='customerRequest' value='"+nouPlatDemanat.value+"' disabled/>";
	 resultat += "<br>";
	 
	 listCustomerRequest.push(nouPlatDemanat.value);
	 
	 nouPlatDemanat.value="";
	 
	 document.getElementById("fase2_customerRequest").innerHTML += resultat;

 }

 // Esborra tots els camps de text corresponents als plats demanats pel client
 // Esborra els plats demanats guardats a la llista "listCustomerRequest"
 // Reinicialitza les variables i el contingut de l'apartat "FASE 3"
 function pressButton_removeAllRequests(){

	 listCustomerRequest=[];
	 
	 totalPrice = 0;
	 fiveEuros=0; tenEuros=0; twentyEuros=0; fiftyEuros=0; oneHundredEuros=0; twoHundredEuros=0;
	 
	 document.getElementById("fase2_customerRequest").innerHTML="";
	 document.getElementById("fase3").innerHTML="";

 }
 
// Mostra per pantalla cada plat i el seu preu del menú corresponent als arrays globals "arrayMenu" i "arrayDishPrice"
// Les dades es mostren amb el format d'una taula
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