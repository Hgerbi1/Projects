public class Rectangle {
    private int h;
    private int w;

    public Rectangle(int h, int w){
        this.h = h;
        this.w = w;
    }

    public int perimeter(int h, int w){
        return  h*2 + w*2;
    }

    public int area(int h, int w){
        return  h * w;
    }

}
