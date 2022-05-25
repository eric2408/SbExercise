function doubleValues(arr){
    let result = [];
    arr.forEach(function(val){
        result.push(val * 2);
    });
    return result;
};

function onlyEvenValues(arr){
    let result = [];
    arr.forEach(function(val){
        if(val % 2 === 0){
            result.push(val);
        };
    });
    return result;
};


function showFirstAndLast(arr){
    let result =[];
    arr.forEach(function(val){
                result.push(val[0] + val[val.length -1]);
    });
    return result;
};


function addKeyAndValue(arr, key, value){
    arr.forEach(function(val){
        val[key] = value;
    });
    return arr;
}


function vowelCount(arr){
    let result = {};
    let newArr = arr.split('');
    const vowels = 'aeiou';

    newArr.forEach(function(val){
        let lowerCase = val.toLowerCase();
        if(vowels.indexOf(lowerCase) !== -1){
            if(result[lowerCase]){
                result[lowerCase]++;
            } else {
                result[lowerCase] = 1;
            }
        }

    })
    return result;
}



function doubleValuesWithMap(arr){
    return arr.map(function(val){
        return val *2
    })
}

function valTimesIndex(arr){
    return arr.map(function(val, idx){
        return val * idx;
    })
}

function extractKey(arr, key){
    return arr.map(function(val){
        return val[key];
    })
}


function extractFullName(arr){
    return arr.map(function(val){
        return val.first + ' '+val.last;
    })
}


function filterByValue(arr, key){
    return arr.filter(function(val){
        return val[key] !== undefined;
    });
}


function find(arr, value){
    return arr.filter(function(val){
        return val === value;
    })
}

function findInObj(arr, key, value){
    return arr.filter(function(val){
        return val[key]=== value ; 
    })[0] 
}

function removeVowels(str){
    let lowerStr = str.toLowerCase();
    const vowels = 'aeiou';
    return lowerStr.split('').filter(function(val){
        return vowels.indexOf(val) === -1;
    })
    .join('');
}


function doubleOddNumbers(arr){
    return arr.filter(function(val){
        return val % 2 === 1;
    })
    .map(function(val){
        return val *2;
    })
}




