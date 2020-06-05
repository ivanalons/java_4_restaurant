// *********************************
// * VARIABLES GLOBALS EXISTENTS   *
// *********************************

/* 
var menu = new Array(5);      //restaurant_fase1.js
var dishPrice = new Array(5); //restaurant_fase1.js
var listCustomerRequest = []; //restaurant_fase2.js
*/

// ***************************
// * NOVES VARIABLES GLOBALS *
// ***************************

var totalPrice = 0;
var fiveEuros=0, tenEuros=0, twentyEuros=0, fiftyEuros=0, oneHundredEuros=0,twoHundredEuros=0;

//****************************

function pressButton_payment(){
	
	totalPrice = 0;
	let resultat = "";
	
	// Es fa un recorregut dels plats demanats pel client i si existeixen al menú, 
	// es suma el seu preu a la variable "totalPrice"
	for (var dishRequest of listCustomerRequest) {
		
		dishPrice = getPrice(dishRequest); //retorna -1 si no existeix el plat demanat al menú
		
		if (dishPrice>=0) {
			totalPrice += dishPrice;
		}else{ // Si no existeix el plat demanat es mostra un missatge per pantalla
			resultat += "El plat demanat \"" + dishRequest +"\" no existeix!!!";
			resultat += "<br>";
		}
	}

	resultat += "El preu total &eacute;s: " + totalPrice;
	resultat += "<br>";
	
	//Si no s'han instanciat els arrays arrayMenu i arrayDishPrice el preu total és cero
	if (totalPrice==0) window.alert("Segur que has premut el botó 'CREAR MENU' de l'apartat 'FASE 2'?");
	
	// Es calcula el nombre de billets en euros de cada tipus amb que haurà de pagar el client per cobrir el preu total
	// i es mostra per pantalla aquesta informació
	
	calculateBillsCustomerPayment(totalPrice);
	resultat += showBillsCustomerPayment();
	
	document.getElementById("fase3").innerHTML = resultat;
 }


//Consulta si el plat demanat per paràmetre existeix en el menú, i retorna el seu preu
// Si no existeix el plat, es retorna un preu negatiu -1
function getPrice(dishRequest) {
	
	let dishPrice = -1;
	let dishFound = false;
	let i=0;
	
	while(dishFound==false && i<arrayMenu.length) {
		//mentre no haguem recorregut tot l'array amb els plats del menu "arrayMenu"
		//i no s'hagi trobat el plat demanat "dishRequest" a l'array "arrayMenu" continuar el bucle while
		
		//comparem els Strings plat demanat amb plat del menu indepentment de si tenen caràcters en minúscula o majúscula
		dishFound = dishRequest.toLowerCase()===arrayMenu[i].toLowerCase(); 
		
		if (dishFound==false) i++;
		
	}
	
	if (dishFound==true) { //plat existeix en el menu
		dishPrice = arrayDishPrice[i];
	} 
	
	//si el plat "dishRequest" no existeix, "dishPrice" té valor -1
	
	return dishPrice;
}

// Es calcula quants billets en euros de cada tipus caldran entregar per a pagar el preu total de la compra amb els plats demanats
// i es guarda la informació a cada variable corresponent
function calculateBillsCustomerPayment(p_totalPrice){
	
	var rest = 0;
	
	twoHundredEuros= Math.floor(p_totalPrice/200);
	rest = p_totalPrice%200;
	
	oneHundredEuros= Math.floor(rest/100);
	rest = rest%100;

	fiftyEuros= Math.floor(rest/50);
	rest = rest%50;

	twentyEuros= Math.floor(rest/20);
	rest = rest%20;
	
	tenEuros= Math.floor(rest/10);
	rest = rest%10;

	fiveEuros=Math.floor(rest/5);
	rest = rest%5;
	
	if(rest>0) fiveEuros = fiveEuros + 1;
	
}

//Es mostra per "pantalla" (variable resultat) quants billets en euros de cada tipus caldran entregar per a pagar 
// el preu total de la compra amb els plats demanats, a partir dels valors de les variables corresponents
function showBillsCustomerPayment(){
	let resultat = "";
	
	resultat += "EL CLIENT HA DE PAGAR AMB AQUESTS BILLETS:";
	resultat += "<br>";
	resultat += twoHundredEuros + " billets 200 euros. ";
	resultat += "<br>";
	resultat += oneHundredEuros + " billets 100 euros. ";
	resultat += "<br>";
	resultat += fiftyEuros + " billets 50 euros.";
	resultat += "<br>";
	resultat += twentyEuros + " billets 20 euros. ";
	resultat += "<br>";
	resultat += tenEuros + " billets 10 euros. " ;
	resultat += "<br>";
	resultat += fiveEuros + " billets 5 euros. " ;
	resultat += "<br>";
	
	return resultat;
}
