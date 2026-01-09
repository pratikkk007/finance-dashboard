public class ReversedArray{

    public static void reversedArray(int[] arr)
    {
        int left = 0;
        int right=arr.length-1;
        while(left<right){
            int temp=arr[left];
            arr[left]=arr[right];
            arr[right]=temp;
            left++;
            right--;
        }


    }

    public static void main(String[] args)
    {
        int arr[] = {1,67,90,0,45};
       reversedArray(arr);

       for(int num: arr){
        System.out.println(num+ "");
       }
    }
}
