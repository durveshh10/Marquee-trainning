import java.util.*;
public class NextRound {
public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    int k = sc.nextInt();
    
    int[] scores = new int[n];
    for(int i = 0; i < n; i++) {
        scores[i] = sc.nextInt();
    }
    int score = scores[k - 1];
    int count = 0;
    for(int i = 0; i < n; i++) {
        if(scores[i] >= score && scores[i] > 0) {
            count++;
        }
    }
    System.out.println(count);
}
}
