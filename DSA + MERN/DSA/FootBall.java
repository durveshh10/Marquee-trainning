import java.util.Scanner;

public class FootBall {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String t1 = "";
        String t2 = "";
        int g1 = 0;
        int g2 = 0;    
        for (int i = 0; i < n; i++) {
            String team = sc.next();
            if (t1.isEmpty()) {
                t1 = team;
            }
            if (team.equals(t1)) {
                g1++;
            } else {
                t2 = team;
                g2++;
            }
        }
        if (g1 > g2) {
            System.out.println(t1);
        } else {
            System.out.println(t2);
        }
        sc.close();
    }
}
