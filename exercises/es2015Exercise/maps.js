new Set([1,1,2,2,3,4])
// [1,2,3,4]

[...new Set("referee")].join("")
// "ref"


let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

/*
  0: {Array(3) => true}
  1: {Array(3) => false}
*/

const hasdDuplicate = arr => new Set(arr).size !== arr.length

const isVowel = char =>{
    return 'aeiou'.includes(char);
}


const vowelCount = str => {
    const newString = new Map();
    for(let char of str){
        let lowCase = char.toLowerCase()
        if(isVowel(lowCase)){
            if(newString.has(lowCase)){
                newString.set(lowCase, newString.get(lowCase) +1)
            } else {
                newString.set(lowCase, 1)
            }
        }
    }
    return newString;
}

