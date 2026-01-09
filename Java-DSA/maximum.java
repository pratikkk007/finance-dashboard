public class maximum{

    public static int maxArray(int[] arr)
    {
        int max = arr[0];
        for(int i=0;i<arr.length;i++){
            if(arr[i]>max){
                max=arr[i];
            }
        }
        return max;
    }

    public static void main(String[] args)
    {
        int arr[] = {1,67,90,99999,45};
       int max = maxArray(arr);

        System.out.println(max);
       
    }
}
