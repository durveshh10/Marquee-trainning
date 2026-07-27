import java.util.*;
public class Holidays {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int weeks = n/7;
        int rem = n%7;
        int Holidays = weeks * 2;
        int minHolidays = Holidays;
        if (rem == 6) {
            minHolidays += 1;
        }
        int maxHolidays = Holidays + Math.min(2, rem);
        System.out.println(minHolidays + " " + maxHolidays);
        sc.close();
    }
}
