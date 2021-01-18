var minTimeToVisitAllPoints = function(points) {
    let time = 0;
    for(i = 0; i < points.length - 1; i++) {
        const xDiff = Math.abs(points[i][0] - points[i + 1][0]);
        const yDiff = Math.abs(points[i][1] - points[i + 1][1]);
        time += Math.max(xDiff, yDiff);
    }
    return time;
};

console.log([[1,1],[3,4],[-1,0]])

//https://levelup.gitconnected.com/javascript-problem-solvers-minimum-time-visiting-all-points-bd9122929ce2

var minTimeToVisitAllPoints = function(points) {
    let xDist = 0; 
    let yDist = 0; 
    let totalDist = 0;
    for(i = 0; i < points.length - 1; i++){
        xDist = Math.abs(points[i][0] - points[i + 1][0])
        yDist = Math.abs(points[i][1] - points[i + 1][1])
        totalDist += Math.max(xDist, yDist)
    }
    return totalDist
};

//recursion
var minTimeToVisitAllPoints = function(points, xDist = 0, yDist = 0, totalDist = 0, i = 0) {
    if(i === points.length - 1) return totalDist
    return minTimeToVisitAllPoints(points, xDist = Math.abs(points[i][0] - points[i + 1][0]), yDist = Math.abs(points[i][1] - points[i + 1][1]), totalDist + Math.max(xDist, yDist), i + 1)
};