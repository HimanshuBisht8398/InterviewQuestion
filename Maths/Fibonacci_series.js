// Fibonacci series
let fib=[]
let num=10;
if(num>=1)fib.push(0);
if(num>=2)fib.push(1);

for(let i=2;i<num;i++){
    fib[i]=fib[i-1]+fib[i-2];
}
console.log(fib)