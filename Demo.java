import java.lang.System;
class Add {
    public int add5(int arg) {
        return arg+5;
    }
}
public class Demo {
    public static void main(String args[]) {
        System.out.println("Hello world");

        Add a = new Add();

        System.out.println(a.add5(10));
    }
}