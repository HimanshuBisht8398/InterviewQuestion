let arr=[1,2,3,4,54,3,2,2,34,3,4,4,5,6567,23,232,2,3,4,5]

let first_small=Infinity;
let second_small=Infinity;

for(let i=0;i<arr.length;i++){
    if(arr[i]<first_small){
        first_small=second_small;
        second_small=arr[i];
    }
    else if(first_small<arr[i] && second_small>arr[i]){
        second_small=arr[i]
    }
}
console.log(second_small)