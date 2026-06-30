import java.util.HashMap;
public class HashMapInterger {
    public static void main(String[] args) {
        HashMap<Integer, String> map = new HashMap<>();
        map.put(101, "Rahul");
        map.put(102, "Aman");
        map.put(103, "Priya");
        map.put(104, "Karan");
        System.out.println(map);
        System.out.println(map.get(103));
        map.put(102, "Rohit");
        System.out.println(map);
        System.out.println(map.containsKey(101));
        System.out.println(map.containsValue("Priya"));
    }
}