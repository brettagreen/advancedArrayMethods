function extractValue(array, key) {
    let count = 0;
    let values = array.reduce(function(accumulator, nextItem) {
        console.log(typeof accumulator);
        accumulator.push(nextItem[key]);
        return accumulator;
    }, []);
    return values;
}

const babysfirstarray = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
console.log(extractValue(babysfirstarray,'name'));

//////////////////////////////
function vowelCount(string) {
    string = string.toLowerCase();
    const filter = 'aeiou';

    return string.split('').filter(function(char) {
        return filter.indexOf(char) != -1;
    }).reduce(function(accumulator, nextItem) {
        if (accumulator[nextItem] === undefined) {
           // console.log(accumulator);
            accumulator[nextItem] = 1;
        } else {
           // console.log(accumulator);
            accumulator[nextItem]++;
        }
        return accumulator;
    }, {});
}
//console.log(vowelCount('Eliuxyzauxie'));
//vowelCount('Tim'); // {i:1};
//vowelCount('Matt'); // {a:1})
//vowelCount('hmmm'); // {};
//console.log(vowelCount('I Am awesome and so are you'));

////////////////////////////////
function addKeyAndValue(aRay, key, val) {
    return aRay.reduce(function(accumulator, nextItem) {
        nextItem[key] = val;
        accumulator.push(nextItem);
        return accumulator;
    },[]);
}

const aRay = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
//console.log(addKeyAndValue(aRay, 'title', 'Instructor'));

////////////////////////////////
function partition(anotherArray, callback) {

    return anotherArray.reduce(function(acc, ni) {
        if (callback(ni)) {
            acc[0].push(ni);
        } else {
            acc[1].push(ni);
        }
        return acc;
    }, [[],[]]);
}

function isEven(val){
    return val % 2 === 0;
}

const x = [1,2,3,4,5,6,7,8];
//console.log(partition(x, isEven));
  
function isLongerThanThreeCharacters(val) {
    return val.length > 3;
}
  
const names = ['Elie', 'Colt', 'Tim', 'Matt'];
//console.log(partition(names, isLongerThanThreeCharacters));