public class ArraySum {

    private static int ArraySum(int[] array) {
        int sum = 0;
        for (int i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }

    public static void main(String[] args) {
        int[] array = { 9, 1, 3, 4, 5, 8, 7 };

        int sum = ArraySum(array);

        System.out.println("Sum is:" + sum);

    }

}