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

//*********************

function pressButton_payment(){
	
	totalPrice = 0;
	let resultat = "";
	for (var dishRequest of listCustomerRequest) {
		
		dishPrice = getPrice(dishRequest); //retorna -1 si no existeix el plat demanat al menú
		
		if (dishPrice>=0) {
			totalPrice += dishPrice;
		}else{
			resultat += "El plat demanat \"" + dishRequest +"\" no existeix!!!";
			resultat += "<br>";
		}
	}

	resultat += "El preu total &eacute;s: " + totalPrice;
	resultat += "<br>";
	
	calculateBillsCustomerPayment(totalPrice);
	resultat += showBillsCustomerPayment();
	
	document.getElementById("fase3").innerHTML = resultat;
 }


//Consulta si el plat demanat per paràmetre existeix en el menú, i retorna el seu preu
// Si no existeix el plat demanat es mostra un missatge per pantalla i es retorna un preu negatiu
function getPrice(dishRequest) {
	
	let dishPrice = -1;
	let dishFound = false;
	let i=0;
	
	while(dishFound==false && i<arrayMenu.length) {
		
		dishFound = dishRequest.toLowerCase()===arrayMenu[i].toLowerCase();
		if (dishFound==false) i++;
		
	}
	
	if (dishFound==true) { //plat existeix en el menu
		dishPrice = arrayDishPrice[i];
	} 
	
	//si el plat "dishRequest" no existeix "dishPrice" té valor -1
	
	return dishPrice;
}


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

function showBillsCustomerPayment(){
	let resultat = "";
	
	resultat += "EL CLIENT HA DE PAGAR AMB AQUESTS BILLETS:";
	resultat += "<br>";
	resultat += "Billets 200 euros: "+ twoHundredEuros;
	resultat += "<br>";
	resultat += "Billets 100 euros: "+ oneHundredEuros;
	resultat += "<br>";
	resultat +="Billets 50 euros: "+ fiftyEuros;
	resultat += "<br>";
	resultat +="Billets 20 euros: "+ twentyEuros;
	resultat += "<br>";
	resultat +="Billets 10 euros: "+ tenEuros;
	resultat += "<br>";
	resultat +="Billets 5 euros: "+ fiveEuros;
	resultat += "<br>";
	
	return resultat;
}
