// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }


  /* Write an ES2015 Version */

const filterOutOdds = (... number) => number.filter(num => num % 2 === 0);


const findMin = (...arg) => Math.min(...arg);

const mergeObjects = (arr, arr2) => ({...arr, ...arr2});

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num *2) ]


/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items =>{
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0,idx), ...items.slice(idx+1)]
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    return {...obj, [key]: val};

}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2}
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    return {...obj, [key]: val};
}