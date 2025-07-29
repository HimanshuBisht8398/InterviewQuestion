let arr=[1,2,3,4,54,3,2,2,34,3,4,4,5,6567,23,232,2,3,4,5]
let first_small=Infinity,second_small=Infinity,third_small=Infinity;

for(let i=0;i<arr.length;i++){
    if(arr[i]<first_small){
        third_small=second_small
        second_small=first_small
        first_small=arr[i]
    }
    else if(arr[i]>first_small && arr[i]< second_small){
        third_small=second_small;
        second_small=arr[i]
    }
    else if(arr[i]>second_small && arr[i]< third_small){
        third_small=arr[i]
    }
}
console.log(third_small)