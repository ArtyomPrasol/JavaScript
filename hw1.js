
//сим? есть ли равные элементы? удаление первого подходящего элемента с конца?
public class ListItem <Item>{
    private Item data;
    ListItem<Item> next;
    ListItem<Item> prev;
    ListItem(Item d){
        data = d; next = null; prev = null;
    }

    ListItem(Item d, ListItem<Item> pr){
        data = d; prev = pr;
    }
    Item getData(){return data;}
    public void setData(Item d){ data = d;}
    ListItem<Item> getPrev(){return prev;}
    ListItem<Item> getNext(){return next;}

    public void setNext(ListItem<Item> next) {
        this.next = next;
    }

    public void setPrev(ListItem<Item> prev) {
        this.prev = prev;
    }
}
public class List<Item> {
    int kol;
    ListItem<Item> first;
    ListItem<Item> last;
    List(){
        kol = 0;
        first = null;
        last = null;
    }

    List(Item d){
        first = last = new ListItem<>(d);
        kol =1;
    }
    public void add(Item d){
        ListItem<Item> li = new ListItem<>(d);
        li.setNext(null);
        if(kol > 0){
            li.setPrev(last);
            last.setNext(li);
        }
        else first = li;
        last = li;
        kol++;
    }
    public ListItem<Item> getLast(){return last;}
    public ListItem<Item> getFirst(){return first;}
    public int getQuan(){return kol;}
    public ListItem<Item> get(int i){

        if(i>kol) return null;
        else {
            ListItem<Item> Li = first;
            for (int j = 1; j < i; j++) Li = Li.getNext();
            return Li;
        }
    }
    void print(){
        ListItem<Item> li = first;
        while(li!=null)
        {
            System.out.print(li.getData()+" ");
            li = li.getNext();
        }
    }

    public void remove(int i){
        if(i<= kol){
            ListItem<Item> li=get(i);
            ListItem<Item> prev = li.getPrev();
            ListItem<Item> next = li.getNext();
            if(prev!=null) prev.setNext(next);
            if(next!=null) {
                next.setPrev(prev);
                if(i==1) first = next;
            }
        }
        kol--;
    }
}

import java.util.*;
public class Main {
    public static void main(String []args){
        Scanner sc = new Scanner(System.in);
        int d = sc.nextInt();
        List<Integer> lama= new List<>(d);
        d = sc.nextInt();
        while(d>0){
            lama.add(d);
            d = sc.nextInt();
        }
        lama.print();
    }
}
