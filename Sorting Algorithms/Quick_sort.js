// Basically Quick is an approach to sort an unsorted array by using
// tehcnique of making pivot(select random number from array) So on the behalf of random number we compare each element of array
// which is less than pivot we push to left array and greater will be pushed to the right array  and after that 
// we merge all three left array,pivot,right array using the recursive function call


// ====>
function Quicksort(arr){
    if(arr.length<=1){
        return arr;
    }
    let pivot=arr[0]
    let left=[],right=[];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return [...Quicksort(left),pivot,...Quicksort(right)]
}
let unsortedArray=[5,4,1,2,3,7,6]
let result=Quicksort(unsortedArray)
console.log("==",result)