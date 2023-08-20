import java.util.Scanner;
import java.io.*;
class node{
    String ID;
    String City;
    String Position;
    String Account_number;
    String Balance;
    node link;
    node(String ID,String City,String Position,String Account_number,String Balance){
        this.ID = ID;
        this.City = City;
        this.Position = Position;
        this.Account_number = Account_number;
        this.Balance = Balance;
        this.link = null;
    }
}
class LinkedList{
    node head;
    node tail;
    int count;
    LinkedList(){
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    public void add(String ID,String City,String Position,String Account_number,String Balance) {
        node temp = new node(ID,City,Position,Account_number,Balance);
        if(count == 0){
            head = temp;
            tail = temp;
        }else{
            tail.link = temp;
            tail =temp;
        }
        count++;
    }

    public void read() {
        try {
            File file = new File("D:\\Project\\Java\\My-learn\\Machine.txt");
            Scanner kb = new Scanner(file);
            while (kb.hasNext()) {
                String ID = kb.next();
                String City = kb.next();
                String Positon1 = kb.next();
                String Positon2 = kb.next();
                String B = kb.next();
                String A = kb.next();
                String C = kb.next();
                String E = kb.next();
                String Balance = kb.next();
                String Position = Positon1 + Positon2;
                String Account = B + A + C + E ;
                add(ID, City, Position, Account, Balance);
            }
        } catch (FileNotFoundException e) {
            System.err.println("File not found: " + e.getMessage());
        }
    }

    public void select() {
        Scanner kb = new Scanner(System.in);
        int Enter = 0;
        do {
            System.out.print("-------------------");
            System.out.println();
            System.out.print("        Menu");
            System.out.println();
            System.out.print("-------------------");
            System.out.println();
            System.out.print("1. Machine details");
            System.out.println();
            System.out.print("2. Exit");
            System.out.println();
            System.out.println("-------------------");
            System.out.print("Enter number ");
            Enter = kb.nextInt();
        }while (Enter < 1 || Enter > 2 );
    }

    public void Show() {
        node temp = head;
        for(int i = 0 ;i<count;i++){
            System.out.print(temp.ID + " " );
            System.out.print(temp.City + " " );
            System.out.print(temp.Position + " " );
            System.out.print(temp.Account_number + " " );
            System.out.println(temp.Balance + " " );
            temp = temp.link;
        }
    }
}


public class Read {
   public static void main(String[] args) {
        // Scanner kb = new Scanner(System.in);
        LinkedList obj1 = new LinkedList();
        obj1.read();
        obj1.Show();
    }
}