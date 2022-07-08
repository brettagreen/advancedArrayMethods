/*function some(array, callback){
    for(let i = 0; i < array.length; i++){
      if(callback(array[i], i, array) === true){
        return true;
      }
    }
    return false;
  }

const myArray = [6,2,3];
some(myArray, function(val) {
    return val < 5;
});*/

//////////////////////////
function hasOddNumber(arr) {
    return arr.some(function(val) {
        return val % 2 === 1;
    });
}

//console.log(hasOddNumber([1,2,2,2,2,2,4]));
//console.log(hasOddNumber([6,2,2,2,2,2,4]));

//////////////////////////
function hasAZero(num) {
    return num.toString().split('').some(function(val) {
        return val === '0';
    });
}

//console.log(hasAZero(33321232131012));
//console.log(hasAZero(1212121));

//////////////////////////
function hasOnlyOddNumbers(num) {
    return num.every(function(val) {
        return val % 2 === 1;
    });
}

//console.log(hasOnlyOddNumbers([1,3,5,7]));
//console.log(hasOnlyOddNumbers([1,2,3,5,7]));

/////////////////////////
function hasNoDuplicates(arr) {
    let dupArray = [];
    return arr.every(function(val) {
        if (dupArray.indexOf(val) === -1) {
            dupArray.push(val);
            return true;
        } else {
            return false;
        }
    });
}

//console.log(hasNoDuplicates([1,2,3,1]));
//console.log(hasNoDuplicates([1,2,3]));

//////////////////////////
function hasCertainKey(array, key) {
    return array.every(function(val) {
        if (val[key] !== undefined) {
            return true;
        } else {
            return false;
        }
    });
}

let array = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

  //console.log(hasCertainKey(arr,'first'));
  //console.log(hasCertainKey(arr,'isCatOwner'));

  /////////////////////////
  function hasCertainValue(arr, key, val) {
    return arr.every(function(value) {
        if (value[key] === val) {
            return true;
        } else {
            return false;
        }
    });
}

  let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ];

  console.log(hasCertainValue(arr,'title','Instructor'));
  console.log(hasCertainValue(arr,'first','Elie'));