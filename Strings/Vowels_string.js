// check if string end & start with same vowel then return true
let vowels=new Set(['a','e','i','o','u'])

for(let i=0;i<s.length;i++){
    if(vowels.has(s[0])){
        if(s[0]===s[s.length]){
            console.log(true)
        }
        else{
            console.log(false)
        }
    }
    else{
        console.log(false)
    }
}