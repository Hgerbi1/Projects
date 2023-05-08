import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        boolean flag = true;

        while(flag) {
            System.out.println("בחר מספר: 1- מלבן, 2- משולש, 3- יציאה");
            Scanner in = new Scanner(System.in);
            int num = in.nextInt();

            int h; //height
            int w; //width

            if(num == 1){ //מלבן

                System.out.println("הכנס גובה מלבן");
                h = in.nextInt();

                while(h < 2){
                    System.out.println("גובה לא תקין, הכנס גובה מעל 2");
                    h = in.nextInt();
                }
                System.out.println("הכנס רוחב מלבן");
                w = in.nextInt();

                Rectangle r = new Rectangle( h , w);

                int check;
                if(h > w) {
                    check = h - w;
                }
                else{
                    check = w-h;
                }

                if(check > 5){
                    System.out.println("שטח המלבן: " + r.area(h, w));
                }
                else {
                    System.out.println("היקף המלבן: " + r.perimeter(h, w));
                }
            }
            else if(num == 2){ //משולש
                System.out.println("הכנס גובה משולש");
                h = in.nextInt();

                while(h < 2){
                    System.out.println("גובה לא תקין, הכנס גובה גדול או שווה ל 2 ");
                    h = in.nextInt();
                }
                System.out.println("הכנס רוחב משולש");
                w = in.nextInt();

                Triangle t = new Triangle(h, w);

                System.out.println("בחר מספר: 1- היקף משולש, 2- הדפסת משולש");
                num = in.nextInt();

                if(num == 1){
                    System.out.println("היקף המשולש: " + t.perimeter(h, w));
                }
                else{
                    if(w % 2 == 0 || w > 2*h){
                        System.out.println("מצטערים, לא ניתן להדפיס את המשולש.");
                    }
                    else{
                        t.print(h, w);
                    }
                }

            }
            else if(num == 3){
                System.out.println("להתראות!");
                flag = false;
            }
            else{
                System.out.println("ניתן לבחור מספרים רק בין 1-3");
            }

        }
    }
}