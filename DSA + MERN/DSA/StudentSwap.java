class Student {
    int marks;
    String name;
    int rollno;
}

public class StudentSwap {

    public static void swap1(Student a, Student b) {
        Student temp = a;
        a = b;
        b = temp;
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

        System.out.println(bhavya.marks + " " + bhavya.rollno);
        System.out.println(aman.marks + " " + aman.rollno);

        swap1(bhavya, aman);

        System.out.println(bhavya.marks + " " + bhavya.rollno);
        System.out.println(aman.marks + " " + aman.rollno);
    }
}