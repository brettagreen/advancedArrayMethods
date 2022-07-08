function findUserByUsername(arr, name) {
    return arr.find(function(value) {
        return value['username'] === name;
    })
}

/*const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];*/
  
//console.log(findUserByUsername(users, 'mlewis'));
//console.log(findUserByUsername(users, 'taco'));

////////////////////
function removeUser(arr, name) {
    let idx = arr.findIndex(function(value, i) {
        return value['username'] === name;
    });
    if (idx !== -1) {
        let returnValue = arr[idx];
        arr.splice(arr[idx]);
        return returnValue;
    }
}

const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  
console.log(removeUser(users, 'akagen'));
console.log(removeUser(users, 'akagen'));
