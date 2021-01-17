var destCity = function(paths) {
    let from = [];
    let to = [];
    
    for(let i = 0; i < paths.length; i++){
        from.push(paths[i][0])
        to.push(paths[i][1])
    }
    
    for(let city of to){
        if(from.indexOf(city) === -1) return city
    }
};


console.log(destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))


//alternate
var destCity = function(paths) {
    const startingCities = {}
    
    for(let i = 0; i < paths.length; i++) {
        startingCities[paths[i][0]] = 1
    }
    
    for(let j = 0; j< paths.length; j++) {
        if(!startingCities[paths[j][1]]) return paths[j][1]
    }
};