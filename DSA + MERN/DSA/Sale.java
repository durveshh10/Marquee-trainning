import java.util.*;
public class Sale {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();   
        int m = input.nextInt();  
        int[] price = new int[n];
        for (int i = 0; i < n; i++) {
            price[i] = input.nextInt();
        }
        Arrays.sort(price);
        int income = 0;
        int remain = 0;
        for (int i = 0; i < n && remain < m; i++) {
            if (price[i] < 0) {
                income += -price[i];
                remain++;
            }
        }
        System.out.println(income);
    }
}
