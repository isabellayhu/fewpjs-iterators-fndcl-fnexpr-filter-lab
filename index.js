// Code your solution here
function findMatching(list, name){
    return list.filter(newName => {
        return newName.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(list, name){
    return list.filter(newName => {
        return newName.startsWith(name);
    });
}

function matchName(list, matchName){
    return list.filter(({name})=>{
        return name === matchName;
    });
}
