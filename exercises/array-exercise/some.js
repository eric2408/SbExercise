function hasOddNumber(arr){
    return arr.some(function(val){
        return val %2 === 1
    })
}

function hasAZero(arr){
    arrSplit = arr.toString().split('');
    return arrSplit.some(function(val){
        return val === '0'
    })
}

function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
        return val %2 === 1;
    })
}


function hasNoDuplicates(arr){
    return arr.every(function(val){
        return arr.indexOf(val) === arr.lastIndexOf(val);
    })
    
}

function hasCertainKey(arr, key){
    return arr.every(function(val){
        return key in val;
    })
}

function hasCertainValue(arr, key, value){
    return arr.every(function(val){
        return val[key] === value;
    })
}

