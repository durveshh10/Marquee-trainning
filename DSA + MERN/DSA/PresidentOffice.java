import java.util.Scanner;

public class PresidentOffice {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int rows = input.nextInt();
        int cols = input.nextInt();
        char president = input.next().charAt(0);
        char[][] office = new char[rows][cols];
        for (int i = 0; i < rows; i++) {
            office[i] = input.next().toCharArray();
        }
        String deputies = "";
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (office[r][c] == president) {
                    if (r > 0) {
                        char neighbor = office[r - 1][c];
                        if (neighbor != '.' && neighbor != president && deputies.indexOf(neighbor) == -1) {
                            deputies += neighbor;
                        }
                    }
                    if (r < rows - 1) {
                        char neighbor = office[r + 1][c];
                        if (neighbor != '.' && neighbor != president && deputies.indexOf(neighbor) == -1) {
                            deputies += neighbor;
                        }
                    }
                    if (c > 0) {
                        char neighbor = office[r][c - 1];
                        if (neighbor != '.' && neighbor != president && deputies.indexOf(neighbor) == -1) {
                            deputies += neighbor;
                        }
                    }
                    if (c < cols - 1) {
                        char neighbor = office[r][c + 1];
                        if (neighbor != '.' && neighbor != president && deputies.indexOf(neighbor) == -1) {
                            deputies += neighbor;
                        }
                    }
                }
            }
        }

        System.out.println(deputies.length());
    }
}
