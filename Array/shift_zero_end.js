
// Shift all the zero at the end of array
const arr = [1, 2, 3, 0, 4, 2, 4, 0, 8, 0, 2, 0, 1, 8];
let zero=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]!==0){
        arr[zero++]=arr[i]
    }
}
while(zero<arr.length){
    arr[zero++]=0;
}
console.log(arr)
