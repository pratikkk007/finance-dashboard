public class MoveZeros {
    public static void moveZeros(int[] arr) {
        int k = 0;

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != 0) {
                arr[k] = arr[i];
                k++;
            }
        }

        while (k < arr.length) {
            arr[k] = 0;
            k++;
        }
    }

    public static void main(String[] args) {
        int[] arr = { 0, 1, 0, 3, 12 };
        moveZeros(arr);

        for (int num : arr) {
            System.out.print(num + " ");
        }
        // Output: 1 3 12 0 0
    }
}
