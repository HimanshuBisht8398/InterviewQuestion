const arr=[1,2,3,4,5,56,4,2,1,2,3,4,5,56,6,67,673,3,2,1]

let obj={}

for(let i=0;i<arr.length;i++){
    if(obj[arr[i]]){
        obj[arr[i]]++
    }
    else{
        obj[arr[i]]=1;
    }
}
console.log(obj)