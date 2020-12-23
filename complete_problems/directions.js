//function reduceDirections takes in an input of directions[] and returns newDirections
    //if directions empty return []
    //declare oppositeDirection object with NSEW > WENS
    //for loop over directions[] start at index0
        //declare a variable direction = directions[] index
        // if you can't find direction inside 
        //if direction is inside of newDirections with indexOf()
            //then splice off that index indside new direction
            //else push this to the newDirections
    //return newDirections

function reduceDirections(directions){
    if(directions.length === 0) return []
    let oppositeDirection = {
        N: 'S',
        W: 'E',
        E: 'W',
        S: 'N'
    }
    let newDirections = [];
    for(let i = 0; i < directions.length; i++){
        let direction = directions[i]
        if(oppositeDirection[direction]){
            let newDirection = newDirections.indexOf(oppositeDirection[direction])
            if(newDirection !== -1){
                newDirections.splice(newDirection, 1)
            } else {
                newDirections.unshift(directions[i])
            }
        }
    }
    return newDirections;
}

console.log(reduceDirections(['N', 'N', 'W', 'S', 'E', 'W', 'S']))