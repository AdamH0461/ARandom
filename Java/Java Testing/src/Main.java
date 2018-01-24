import Person.*;
public class Main {

    public static void main(String[] args) {
        Person James = new Person("James", 13, 100, 100, "green", "boy");
        System.out.println(James.getAttribute("age"));

    }
}
