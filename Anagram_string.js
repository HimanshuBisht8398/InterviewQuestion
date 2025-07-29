let str1 = 'geeks';
let str2 = 'kseeg';

let status;
if(str1.length!==str2.length){
    status='Not Anagram'
}
else{
    const string1=str1.split('').sort().join('')
    const string2=str2.split('').sort().join('')

    if(string1===string2){
        status='Anagram'
    }
    else{
        status='Not Anagram'
    }
}
console.log(status)