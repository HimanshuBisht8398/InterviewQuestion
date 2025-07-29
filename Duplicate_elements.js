const num = [1, 2, 3, 4, 2, 3, 5, 6, 1]
// 1st Method
// let ans=Array.from(new Set([...num]))
// console.log("===",ans)

// 2nd Method

// let ans=num.filter((item,index)=>{
//     return num.indexOf(item)===index
// })
// console.log(ans)

// 3rd Method

// let uniqueArr=[]
// for(let i=0;i<num.length;i++){
//     if(uniqueArr.indexOf(num[i])===-1){
//         uniqueArr.push(num[i])
//     }
// }

// console.log(uniqueArr)