const arr=[1,3,2,6,7,4,9]
let max=Math.max(...arr)
let ans=[];
for(let i=1;i<=max;i++){
    if(!arr.includes(i)){
        ans.push(i)
    }
}
console.log(ans)