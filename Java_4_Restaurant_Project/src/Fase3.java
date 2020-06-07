import java.util.List;

public class Fase3 {

	public static int fiveEuros=0, tenEuros=0, twentyEuros=0, fiftyEuros=0, oneHundredEuros=0,twoHundredEuros=0;
	
	public static double totalPrice=0;
	
	
	public static void execute() {
		
		System.out.println("------");
		System.out.println("FASE 3");
		System.out.println("------");
		
		List<String> listCustomerRequest = Fase2.customerRequest;
		
		// Es fa un recorregut dels plats demanats pel client i si existeixen al menú, 
		// es suma el seu preu a la variable "totalPrice"
		
		for (String dishRequest : listCustomerRequest) { //
			
			double dishPrice = getPrice(dishRequest); //retorna -1 si no existeix el plat demanat al menú
			
			if (dishPrice>=0) {
				totalPrice += dishPrice;
			}
		}

		System.out.println("----------");
		System.out.println("PREU TOTAL");
		System.out.println("----------");
		
		System.out.printf("El preu total és: %.2f \n", totalPrice);
		
		// Es calcula el nombre de billets en euros de cada tipus amb que haurà de pagar el client per cobrir el preu total
		// i es mostra per pantalla aquesta informació
		
		calculateBillsCustomerPayment(totalPrice);
		showBillsCustomerPayment();
		
	}
	
	// Consulta si el plat demanat per paràmetre existeix en el menú, i retorna el seu preu
	// Si no existeix el plat demanat es mostra un missatge per pantalla i es retorna un preu negatiu -1
	public static double getPrice(String dishRequest) {
		
		String[] arrayMenuDishes = Fase1.menu;

		double dishPrice = -1;
		boolean dishFound = false;
		int i=0;
		
		while(dishFound==false && i<arrayMenuDishes.length) { 
			//mentre no haguem recorregut tot l'array amb els plats del menu "arrayMenuDishes"
			//i no s'hagi trobat el plat demanat "dishRequest" a l'array "arrayMenuDishes" continuar el bucle while
			
			//comparem els Strings plat demanat amb plat del menu indepentment de si tenen caràcters en minúscula o majúscula
			dishFound = dishRequest.toLowerCase().equals(arrayMenuDishes[i].toLowerCase()); 
			if (dishFound==false) i++;
			
		}
		
		if (dishFound==true) { // plat existeix en el menu
			dishPrice = Fase1.dishPrice[i];
		} else { // plat NO existeix en el menu
			System.out.println("El plat demanat \"" + dishRequest +"\" no existeix!!!"); 
		}
			
		//si el plat "dishRequest" no existeix, "dishPrice" té valor -1
		
		return dishPrice;
	}
	
	
	// Es calcula quants billets en euros de cada tipus caldran entregar per a pagar el preu total de la compra amb els plats demanats
	// i es guarda la informació a cada variable corresponent
	public static void calculateBillsCustomerPayment(double doubletotalPrice) {
		
		double rest = 0;
		
		twoHundredEuros= (int) doubletotalPrice/200;
		rest = doubletotalPrice%200;
		
		oneHundredEuros= (int) rest/100;
		rest = rest%100;

		fiftyEuros= (int) rest/50;
		rest = rest%50;

		twentyEuros= (int) rest/20;
		rest = rest%20;
		
		tenEuros=(int) rest/10;
		rest = rest%10;

		fiveEuros=(int) rest/5;
		rest = rest%5;
		
		if(rest>0) fiveEuros = fiveEuros + 1;
	}

	// Es mostra per pantalla quants billets en euros de cada tipus caldran entregar per a pagar el preu total de la compra 
	// amb els plats demanats, a partir dels valors de les variables corresponents
	public static void showBillsCustomerPayment() {
		
		System.out.println("EL CLIENT HA DE PAGAR AMB AQUESTS BILLETS:");
		System.out.println(twoHundredEuros+ " billets 200 euros." );
		System.out.println(oneHundredEuros+" billets 100 euros." );
		System.out.println(fiftyEuros+" billets 50 euros. ");
		System.out.println(twentyEuros+" billets 20 euros. " );
		System.out.println(tenEuros+" billets 10 euros. " );
		System.out.println(fiveEuros+ " billets 5 euros. " );

	}

	
}
