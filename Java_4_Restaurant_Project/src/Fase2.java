import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Scanner;

public class Fase2 {

	public static List<String> customerRequest = new ArrayList<>(); //contindrà els plats demanats pel client
	
	public static void execute() {
				
		System.out.println("------");
		System.out.println("FASE 2");
		System.out.println("------");

		createMenuDishes(); //crea el menú amb el nom i el preu de cada plat introduïts per l'usuari
		
		showMenuDishes(); //mostra per pantalla els noms i preus de cada plat del menú
		
		askDishesToCustomer(); //crea la demanda de plats del client introduïts per l'usuari
		
	}
	
	// Guarda als arrays de la classe Fase1 "menu" y "dishPrice" el nom i preu de cada plat introduït 
	// per consola per part de l'usuari
	public static void createMenuDishes() {
		
		System.out.println("-------------------------");
		System.out.println("CREA UN MENU AMB 5 PLATS:");
		System.out.println("-------------------------");

		Scanner input = new Scanner(System.in);
		boolean numberFormat = false;
		
		for (int i = 0; i < Fase1.menu.length; i++) {
			System.out.println("Introdueix el NOM del plat número "+i+" :");
			Fase1.menu[i] = input.nextLine();
			System.out.println("Introdueix el PREU en euros del plat número "+i+" :");
			
			// Demana el preu per consola. Si no és un número vàlid torna a demanar preu per consola.
			numberFormat = false;
			while(numberFormat==false) {
				try {
					Fase1.dishPrice[i] = input.nextDouble();
					numberFormat=true;
					
				}catch(InputMismatchException e) {
					numberFormat=false;
					System.out.println("El preu ha de ser un número vàlid. Prova a introduir el preu de nou:");
					input.nextLine();

				}
			}
			
			input.nextLine();
		}
		
		//input.close(); //si s'invoca, al següent Scanner(System.in).nextLine() no funciona
	}
	
	
	// Mostra per pantalla cada plat i el seu preu del menú corresponent als arrays "menu" i "dishPrice" de la classe Fase1
	public static void showMenuDishes() {
		
		System.out.println("----------------");
		System.out.println("PLATS DEL MENU :");
		System.out.println("----------------");

		for (int i = 0; i < Fase1.menu.length; i++) {
			System.out.println("PLAT "+i+" : " + Fase1.menu[i]);
			System.out.println("PREU "+i+" : " + Fase1.dishPrice[i]);
		}
		
	}
	
	// Guarda a la llista global "customerRequest" de la classe Fase2, els plats demanats pel client que ha introduït
	// l'usuari per consola
	
	public static void askDishesToCustomer() {
		
		System.out.println("----------------------");
		System.out.println("DEMANDA PLATS CLIENT :");
		System.out.println("----------------------");
		
		Scanner input = new Scanner(System.in);
		boolean fi = false;
		
		while(fi==false) { //continuar demanant plats mentre l'usuari no respongui per consola "0" quan se li pregunta si vol demanar més plats
			
			System.out.println("Quin plat vols menjar ?");
			String dish = input.nextLine();
			customerRequest.add(dish); //afegeix el plat demanat a la llista "customerRequest"
			
			System.out.println("Vols seguir demanant més plats? (1:Si / 0:No) :");
			int askMore = input.nextInt();
			input.nextLine();
			
			fi = (askMore==0);
		}
		
		input.close();
	}
}
