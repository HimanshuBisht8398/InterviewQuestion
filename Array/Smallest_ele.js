let arr=[1,2,3,4,54,3,2,2,34,3,4,4,5,6567,23,232,2,3,4,5]

let small=Infinity;
for(let i=0;i<arr.length;i++){
    if(arr[i]<small){
        small=arr[i]
    }
}
console.log(small)