function foldTo(distance) {
    let paper = 0.0001;
    let folds = 0;
    if (distance <= 0) {
        return null;
    } else {
        while ( distance > paper ) {
        paper *= 2;
        folds += 1;
        }
    }
    return folds;
}

function foldTo(distance) {
    if(distance <= 0) return null;
    let folds = 0;
    for(var i = 0.0001; i < distance; i+= i) folds++;
    return folds;
}

function foldTo(distance) {
    let thickness = 0.0001;
    let fold = 0;
    if (distance < 0) return null;
    while (thickness < distance) {
        thickness *= 2;
        fold++;
    }
    return fold;
}