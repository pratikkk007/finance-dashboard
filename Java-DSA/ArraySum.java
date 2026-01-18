public class ArraySum {

    public static int sumArray(int[] arr) {
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    public static void main(String[] args) {
        int arr[] = { 1, 15, 34, 78, 90 };
        int sum = sumArray(arr);
        System.out.println(sum);
    }

}