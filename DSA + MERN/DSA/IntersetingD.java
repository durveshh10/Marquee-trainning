import java.util.*;
public class IntersetingD {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] Shop = new int[100001];
        for (int i = 0; i < n; i++) {
            int price = sc.nextInt();
            Shop[price]++;
        }
        for (int i = 1; i <= 100000; i++) {
            Shop[i] += Shop[i - 1];
        }
        int q = sc.nextInt();
        for (int i = 0; i < q; i++) {
            int coins = sc.nextInt();
            if (coins >= 100000) {
                System.out.println(n);
            } else {
                System.out.println(Shop[coins]);
            }
        }
    }
}