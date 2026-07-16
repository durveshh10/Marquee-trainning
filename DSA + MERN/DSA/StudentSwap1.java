class Student {
    int marks;
    String name;
    int rollno;
}
public class StudentSwap1 {
    public static void swap3(Student a, Student b) {
        Student temp = a;
        a.marks = b.marks;
        a.rollno = b.rollno;
        b.marks = temp.marks;
        b.rollno = temp.rollno;
    }
    public static void main(String[] args) {
        Student bhavya = new Student();
        bhavya.rollno = 1;
        bhavya.marks = 10;
        bhavya.name = "Bhavya";

        Student aman = new Student();
        aman.rollno = 2;
        aman.marks = 20;
        aman.name = "Aman";
        System.out.println("Before Swap");
        System.out.println(bhavya.marks + " " + bhavya.rollno);
        System.out.println(aman.marks + " " + aman.rollno);
        swap3(bhavya, aman);
        System.out.println("After Swap");
        System.out.println(bhavya.marks + " " + bhavya.rollno);
        System.out.println(aman.marks + " " + aman.rollno);
    }
}