let arr=[1,2,3,4,54,3,2,2,34,3,4,4,5,6567,23,232,2,3,4,5]
let first_great=-Infinity,second_great=-Infinity;

for(let i=0;i<arr.length;i++){
    if(arr[i]>first_great){
        second_great=first_great;
        first_great=arr[i]
    }
    else if(arr[i]<first_great && arr[i]>second_great){
        second_great=arr[i]
    }
}
console.log(second_great)