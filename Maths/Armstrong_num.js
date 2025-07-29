let num=153;
let str=num.toString()
let sum=0;
for(let i=0;i<str.length;i++){
    sum+=Math.pow(Number(str[i]),str.length)
}
if(sum===num){
    console.log("Armstrong Number")
}
else{
    console.log("Not Armstrong Number")
}