import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Fase2 {

	public static List<String> customerRequest = new ArrayList<>();
	
	public static void execute() {
				
		System.out.println("------");
		System.out.println("FASE 2");
		System.out.println("------");

		createMenuDishes();
		
		showMenuDishes();
		
		askDishesToCustomer();
		
	}
	
	public static void createMenuDishes() {
		
		System.out.println("-------------------------");
		System.out.println("CREA UN MENU AMB 5 PLATS:");
		System.out.println("-------------------------");

		Scanner input = new Scanner(System.in);
		
		for (int i = 0; i < Fase1.menu.length; i++) {
			System.out.println("Introdueix el NOM del plat número "+i+" :");
			Fase1.menu[i] = input.nextLine();
			System.out.println("Introdueix el PREU en euros del plat número "+i+" :");
			Fase1.dishPrice[i] = input.nextDouble();
			input.nextLine();
		}
		
		//input.close(); //si s'invoca, al següent Scanner(System.in).nextLine() no funciona
	}
	
	public static void showMenuDishes() {
		
		System.out.println("----------------");
		System.out.println("PLATS DEL MENU :");
		System.out.println("----------------");

		for (int i = 0; i < Fase1.menu.length; i++) {
			System.out.println("PLAT "+i+" : " + Fase1.menu[i]);
			System.out.println("PREU "+i+" : " + Fase1.dishPrice[i]);
		}
		
	}
	
	public static void askDishesToCustomer() {
		
		System.out.println("----------------------");
		System.out.println("DEMANDA PLATS CLIENT :");
		System.out.println("----------------------");
		
		Scanner input = new Scanner(System.in);
		boolean fi = false;
		
		while(fi==false) {
			
			System.out.println("Quin plat vols menjar ?");
			String dish = input.nextLine();
			customerRequest.add(dish);
			
			System.out.println("Vols seguir demanant més plats? (1:Si / 0:No) :");
			int askMore = input.nextInt();
			input.nextLine();
			
			fi = (askMore==0);
		}
		
		input.close();
	}
}
