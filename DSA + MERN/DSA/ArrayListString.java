import java.util.ArrayList;

public class ArrayListString {
    public static void main(String[] args) {

        ArrayList<String> marks = new ArrayList<>();

        // Add elements
        marks.add("b");
        marks.add("abc");
        marks.add("cs");
        marks.add("aass");
        marks.add("asas");

        // Remove elements
        marks.remove("abc");   // Remove by value
        marks.remove("cs");

        // Print ArrayList
        System.out.println("Marks: " + marks);
    }
}