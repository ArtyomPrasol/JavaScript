public interface Pair {
    void sum(int x, int y);

    void dif(int x, int y);

    void mult(int x, int y);

    void div(int x, int y);

    void print();
}

public class Rational implements Pair{
    int a,b;
    Rational(int a, int b){
        if(a<0 && b<0)
        {
            this.a=-a;
            this.b=-b;
        }
        else
        {this.a=a; this.b=b;}
    }
    public void print(){
        System.out.println(a+"/"+b);
    }
    int getA(){return a;}
    int getB(){return b;}

    @Override
    public void sum(int x, int y) {
        if(y==b) a+=x;
        else {
            a = a*y + b*x;
            b = y*b;
        }
    }

    @Override
    public void div(int x, int y) {
        a=a*y;
        b=x*b;
    }

    @Override
    public void dif(int x, int y) {
        if(y==b) a-=x;
        else {
            a = a*y - b*x;
            b = y*b;
        }
    }

    @Override
    public void mult(int x, int y) {
        a = a*x;
        b = b*y;
    }
}

public class Complex implements Pair{
    int r, i;
    Complex(int r, int i){
        this.r=r;
        this.i=i;
    }
    int getR(){return r;}
    int getI(){return i;}

    public void print(){
        System.out.println(r+"+("+i+")i");
    }

    @Override
    public void sum(int x, int y) {
        r+=x;
        i+=y;
    }

    @Override
    public void dif(int x, int y) {
        r-=x;
        i-=y;
    }

    @Override
    public void mult(int x, int y) {
        int a=r;
        int b =i;
        r = a*x-b*y;
        i = a*y+b*x;
    }

    @Override
    public void div(int x, int y) {
        int d = x*x +y*y;
        int m =r;
        r = (r*x+i*y)/d;
        i = (i*x-y*m)/d;
    }
}

import java.util.*;
public class Main {
    public static void main(String []args){
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter number of Pairs: ");
        int n = sc.nextInt();
        Pair []p=new Pair[n];
        for(int i = 0; i<n;i++){
            System.out.println("Enter 1 for Rat and 2 for Com: ");
            int v = sc.nextInt();
            if(v==1){
                System.out.println("Enter a and b for Rational: ");
                int a =sc.nextInt();
                int b=sc.nextInt();
                Rational num = new Rational(a,b);
                p[i]=num;
            }
            else{
                System.out.println("Enter a and b for Complex: ");
                int a =sc.nextInt();
                int b=sc.nextInt();
                Complex num = new Complex(a,b);
                p[i]=num;
            }
        }

        for(int i =0; i<n;i++){
            System.out.println("Enter a/b for Rat or a+bi for Com: a and b =");
            int a =sc.nextInt();
            int b=sc.nextInt();
            System.out.println("Enter 1-4: ");
            int v = sc.nextInt();
            if(v==1) p[i].sum(a,b);
            else if(v==2) p[i].dif(a,b);
            else if(v==3) p[i].div(a,b);
            else p[i].mult(a,b);
            System.out.println("Res: ");
            p[i].print();
        }
    }
}
