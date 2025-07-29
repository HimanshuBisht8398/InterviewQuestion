// first the Vowels to the first
let s='javascriptloops'
let vowels=new Set(['a','e','i','o','u'])
for(let i=0;i<s.length;i++){
    if(vowels.has(s[i])){
        console.log(s[i])
    }
}
for(let i=0;i<s.length;i++){
    if(!vowels.has(s[i])){
        console.log(s[i])
    }
}