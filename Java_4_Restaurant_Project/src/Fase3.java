import java.util.ArrayList;
import java.util.List;

public class Fase3 {

	public static int fiveEuros=0, tenEuros=0, twentyEuros=0, fiftyEuros=0, oneHundredEuros=0,twoHundredEuros=0;
	
	public static double totalPrice=0;
	
	
	public static void execute() {
		
		System.out.println("------");
		System.out.println("FASE 3");
		System.out.println("------");
		
		List<String> listCustomerRequest = Fase2.customerRequest;
		
		for (String dishRequest : listCustomerRequest) {
			
			double dishPrice = getPrice(dishRequest); //retorna -1 si no existeix el plat demanat al menú
			
			if (dishPrice>0) {
				totalPrice += dishPrice;
			}
		}

		System.out.println("----------");
		System.out.println("PREU TOTAL");
		System.out.println("----------");
		
		System.out.println("El preu total és: " + totalPrice);
		
		calculateBillsCustomerPayment(totalPrice);
		showBillsCustomerPayment();
		
	}
	
	// Consulta si el plat demanat per paràmetre existeix en el menú, i retorna el seu preu
	// Si no existeix el plat demanat es mostra un missatge per pantalla i es retorna un preu negatiu
	public static double getPrice(String dishRequest) {
		
		String[] arrayMenuDishes = Fase1.menu;

		double dishPrice = -1;
		boolean dishFound = false;
		int i=0;
		
		while(dishFound==false && i<arrayMenuDishes.length) {
			
			dishFound = dishRequest.toLowerCase().equals(arrayMenuDishes[i].toLowerCase());
			if (dishFound==false) i++;
			
		}
		
		if (dishFound==true) { //plat existeix en el menu
			dishPrice = Fase1.dishPrice[i];
		} else { //fi==false : plat NO existeix en el menu
			System.out.println("El plat demanat \"" + dishRequest +"\" no existeix!!!");
		}
			
		return dishPrice;
	}
	
	
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

	public static void showBillsCustomerPayment() {
		
		System.out.println("EL CLIENT HA DE PAGAR AMB AQUESTS BILLETS:");
		System.out.println("Billets 200 euros: "+ twoHundredEuros);
		System.out.println("Billets 100 euros: "+ oneHundredEuros);
		System.out.println("Billets 50 euros: "+ fiftyEuros);
		System.out.println("Billets 20 euros: "+ twentyEuros);
		System.out.println("Billets 10 euros: "+ tenEuros);
		System.out.println("Billets 5 euros: "+ fiveEuros);

	}

	
}
