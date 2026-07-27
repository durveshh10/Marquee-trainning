import java.util.*;

public class Fence {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int i = sc.nextInt(); 
        int j = sc.nextInt();
        int[] k = new int[i];
        for (int l = 0; l < i; l++) {
            k[l] = sc.nextInt();
        }
        int totalSum = 0;
        for (int l = 0; l < j; l++) {
            totalSum += k[l];
        }
        int minSum = totalSum;
        int index = 1; 
                for (int l = j; l < i; l++) {
            totalSum = totalSum + k[l] - k[l - j];
                        if (totalSum < minSum) {
                minSum = totalSum;
                index = l - j + 2; 
            }
        }
                System.out.println(index);
    }
}
