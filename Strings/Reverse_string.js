const strings='ihsaudhisahjduhppppp'

// 1st method

// let ans='';
// for(let i=strings.length-1;i>=0;i--){
//     if(strings[i]){
//         ans+=strings[i];
//     }
// }
// console.log(ans)

// 2nd Method
let data=strings.split('').reverse().join('')
console.log(data)