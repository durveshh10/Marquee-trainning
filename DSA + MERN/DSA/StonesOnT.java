import java.util.*;
public class StonesOnT {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();  
        String s = input.next();  
        int ans = 0;
        for (int i = 0; i < n - 1; i++) {
            if (s.charAt(i) == s.charAt(i + 1)) {
                ans++;   
            }
        }
        System.out.println(ans);
    }
}
