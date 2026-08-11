class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
    void sleep() {
        System.out.println("Animal sleeps");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
    void eat() {
        System.out.println("Dog eats");
    }
}
public class AnimalOverride {
    public static void main(String[] args) {
        Animal a = new Animal();
        a.sleep();  

        Animal b = new Dog();
        b.sound(); 

        Dog d = new Dog();
        d.eat();
    }
}
