///////FOREACH//////////////
function doubleValues(arr) {
    let newArray = [];
    arr.forEach(function(value) {
        newArray.push(value * 2);
    });
    return newArray;
}

let myArray1 = [1,2,3];
let myArray2 = [5,1,2,3,10];
let result1 = doubleValues(myArray1);
let result2 = doubleValues(myArray2);

/////////////////////

function onlyEvenValues(arr) {
    let newArray = [];
    arr.forEach(function(value) {
        if (value % 2 === 0) {
            newArray.push(value);
        }
    });
    return newArray;
}

let result3 = onlyEvenValues(myArray1);
let result4 = onlyEvenValues(myArray2);
//console.log(result3);
//console.log(result4);

///////////////////////

function showFirstAndLast(arr) {
    let newArray = [];
    arr.forEach(function(value) {
        newArray.push(value[0]+value[value.length-1]);
    });
    return newArray;
}

let stringArray1 = ['colt','matt', 'tim', 'test'];
let stringArray2 = ['hi', 'goodbye', 'smile'];
let result5 = showFirstAndLast(stringArray1);
let result6 = showFirstAndLast(stringArray2);
//console.log(result5);
//console.log(result6);

////////////////////////
let objectArray = [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
  ];

  function addKeyAndValue(arr, key, val) {
    arr.forEach(function(value, i) {
        value.key = val;
        arr[i] = value;
    });
    //return arr;
}

addKeyAndValue(objectArray, "title", "instructor");

////////////////////////

function vowelCount(word) {
    word = word.toUpperCase();
    const filter = 'AEIOU';
    let returnValue = {};
    (word.split('')).forEach(function(value, index) {
        //console.log(value);
        if (filter.indexOf(value) != -1) {
            if (returnValue[value] === undefined) {
                returnValue[value] = 1;
            } else {
                returnValue[value]++;
            }
            
        }
    });
    return returnValue;
}

//console.log(vowelCount("amenable"));
//console.log(vowelCount('turkeytrotaIoU'));

/////////MAPS///////////////
function doubleValuesWithMap(arr) {
    return arr.map(function(value) {
        return value*2;
    })
}

//console.log(doubleValuesWithMap([1,2,3]));
//console.log(doubleValuesWithMap([-1,-2,-3]));

////////////////////////////
function valTimesIndex(arr) {
    return arr.map(function(value, index) {
        return value*index;
    })
}

//console.log(valTimesIndex([1,2,3]));
//console.log(valTimesIndex([1,-2,-3]));

////////////////////////////
function extractKey(arr, key) {
    return arr.map(function(value) {
        return value[key];
    })
}
/*console.log(extractKey(
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
    'name'
  ));*/

//////////////////////////
function extractFullName(arr) {
    return arr.map(function(value) {
        return `${value.first} ${value.last}`
    })
}

/*console.log(extractFullName([
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia"},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele"}
  ]));*/

////////FILTER////////////
function filterByValue(array, key) {
    return array.filter(function(value) {
        return value[key];
    });
}

/*console.log(filterByValue(
    [
      {first: 'Elie', last:"Schoppik"},
      {first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'Matt', last:"Lane"},
      {first: 'Colt', last:"Steele", isCatOwner: true}
    ],
    'isCatOwner'
    ));*/

/////////////////////////
function find(array, term) {
    return array.filter(function(value) {
        return value === term;
    })[0];
}

//console.log(find([1,2,3,4,5], 3));
//console.log(find([1,2,3,4,5], 10));

/////////////////////////
function findInObj(array, key, term) {
    return array.filter(function(value) {
        return value[key] === term;        
    })[0];
}

/*console.log(findInObj(
    [
      {first: 'Elie', last:"Schoppik"},
      {first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'att', last:"Lane"},
      {first: 'Colt', last:"Steele", isCatOwner: true}
    ],
    'isCatOwner',
    true
  ));

  console.log(findInObj(
    [
      {first: 'Elie', last:"Schoppik"},
      {first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'att', last:"Lane"},
      {first: 'Colt', last:"Steele", isCatOwner: true}
    ],
    'last',
    'Lane'
  ));*/

  ///////////////////////
function removeVowels(word) {
    word = word.toLowerCase();
    const filter = 'aeiou';
    let newString = '';
    let newArray = (word.split('')).filter(function(value) {
       if (filter.indexOf(value) === -1) {
         return value;
       }
    });
    console.log(newArray);
    newArray.forEach(function(value) {
        newString += value;
    });
    return newString;
}

//console.log(removeVowels('Elie'));
//console.log(removeVowels('TIM'));

///////////////////////
function doubleOddNumbers(array) {
    return array.filter(function(number) {
        return number % 2 != 0;
    }).map(function(number) {
        return number*2;
    })
}

//console.log(doubleOddNumbers([1,2,3,4,5]));
//console.log(doubleOddNumbers([2,7,12,21]));