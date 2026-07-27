class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}
class Dog extends Animal {
        void sound() {
        System.out.println("Dog barks");
    }
}

public class AnimalOverride {
    public static void main(String[] args) {
        Animal a = new Animal();
        a.sound();   
        Animal b = new Dog();
        b.sound();  
        Dog d = new Dog();
        d.sound();
    
    }
}
