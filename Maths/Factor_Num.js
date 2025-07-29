// Find Factor of a Number;
let num=36;
let ans=[]
for(let i=1;i<=num;i++){
    if(num%i==0){
        ans.push(i)
    }
}
console.log(ans)