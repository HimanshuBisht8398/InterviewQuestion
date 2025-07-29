const arr = [1, 2, 3, 0, 4, 2, 4, 0, 8, 0, 2, 0, 1, 8];

let size=arr.length-1;
for(let i=arr.length-1;i>=0;i--){
    if(arr[i]!==0){
        arr[size]=arr[i];
        size--;
    }
}
while(size>=0){
    arr[size]=0;
    size--;
}
console.log(arr)