public class Triangle {
    private int h;
    private int w;

    public Triangle(int h, int w){
        this.h = h;
        this.w = w;
    }

    public int perimeter(int h, int w){
        return  h*2 + w;
    }

    public void print(int h, int w) {
        String str = "*";

        //first *
        for (int i = 1; i <= h ; i++) {
            System.out.print(" ");
        }
        System.out.println(str);

        //between *
        int oddNum = ((w+1)/2)-2; //כמה מספרים אי זוגיים יש
        int numOfLines = (h-2)/oddNum; //כמה שורות ידפיס לכל אחד
        int extraLines = 0; //שארית החלוקה

        if((h-2) % oddNum != 0){
            extraLines = (h-2) % oddNum;
        }

        int space = h - 1;

        //extraLines
        for(int i = 0; i < extraLines; i++) {

            for(int j = 1; j <= space; j++) {
                System.out.print(" ");
            }

            for(int j = 0; j < 3; j++) {
                System.out.print(str);
            }
            System.out.println("");
        }

        //all the others
        for(int i = 3; i < w; i+=2) {

            for(int k = 1; k <= numOfLines; k++) {

                for(int j = 1; j <= space; j++) {
                    System.out.print(" ");
                }
                for(int j = 0; j < i; j++) {
                    System.out.print(str);
                }
                System.out.println("");
            }
            space--;
        }

        //last *
        for(int j = 0; j < space; j++) {
            System.out.print(" ");
        }
        for(int j = 0; j < w; j++){
            System.out.print(str);
        }
        System.out.println("");
    }
}
