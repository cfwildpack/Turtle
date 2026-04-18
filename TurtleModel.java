public class TurtleModel {
    private String species;
    private int weight;

    public TurtleModel(String species, int weight) {
        this.species = species;
        this.weight = weight;
    }

    public void describe() {
        System.out.println("Species: " + species);
        System.out.println("Weight: " + weight + " kg");
    }

    public static void main(String[] args) {
        TurtleModel turtle = new TurtleModel("Green Sea Turtle", 160);
        turtle.describe();
    }
}
