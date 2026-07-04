import java.util.*;

public class ArrayListDemo {
    public static void main(String[] args) {
        ArrayList<Integer> marks = new ArrayList<>();

        marks.add(85);
        marks.add(90);
        marks.add(78);
        marks.add(92);
        marks.add(67);

        marks.add(2, 88);

        System.out.println("Marks: " + marks);

        System.out.println("Total students: " + marks.size());

        System.out.println("Mark at index 3: " + marks.get(3));

        marks.set(0, 95);

        marks.remove(4);

        Collections.reverse(marks);

        System.out.println("Final Marks: " + marks);

        marks.clear();
        
        if (marks.isEmpty()) {
            System.out.println("The list is empty.");
        } else {
            System.out.println("The list is not empty.");
        }
    }
}