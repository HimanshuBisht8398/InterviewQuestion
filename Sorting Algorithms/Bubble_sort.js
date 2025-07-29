// Bubble Sort
// Time Complexcity(Worst-case & Average-case) => O(n*n)
// space complexcity => O(1)
// best Case:=O(n)(when the array is already sorted)

let arr=[1,2,3,4,54,3,2,2,34,3,4,4,5,6567,23,232,2,3,4,5]

let temp;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i;j++){
        if(arr[j]>arr[j+1]){
            temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
console.log(arr)