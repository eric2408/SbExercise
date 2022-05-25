function findUserByUsername(arr, username){
    return arr.find(function(val){
        return val.username === username;
    })
}


function removeUser(arr, username){
    let findIdx = arr.findIndex(function(val){
        return val.username === username;
    })
    if(findIdx === -1) return;

    return arr.splice(findIdx, 1);
}

