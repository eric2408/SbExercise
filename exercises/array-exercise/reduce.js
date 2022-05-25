function extractValue(arr, key){
    return arr.reduce(function(val, next){
        val.push(next[key]);
        return val;
    }, []);
}

function vowelCount(str){
    let changeArray = str.split('');
    let vowels = 'aeiou'

    changeArray.reduce(function(val, next){
        let lowerCase = next.atLowerCase();
        if(vowels.indexOf(lowerCase) !== -1){
            if(val[lowerCase]){
                val[lowerCase]++
            } else {
                val[lowerCase] =1;
            }
        } 
        return val;
    }, {})
}


function addKeyAndValue(arr, key, value){
    return arr.reduce(function(val, next, idx){
        val[idx][key] = value;
        return val;
    }, arr)
}

function partition(arr, callBack){
    return arr.reduce(function(val, next){
        if(callBack(next)){
            val[0].push(next);
        } else {
            val[1].push(next);
        }
        return val;
    }, [[],[]])
}

