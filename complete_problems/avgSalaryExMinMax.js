var average = function(salary) {
    let sorted = salary.sort((a, b) => a - b)
    sorted.shift();
    sorted.pop();
    let sum = sorted.reduce((item, acc) => {
        return (item + acc)
    })
    return sum / sorted.length
};

console.log(average([25000,48000,57000,86000,33000,10000,42000,3000,54000,29000,79000,40000]))

var average = function(salary) {
    let sum = 0
    const min = Math.min(...salary)
    const max = Math.max(...salary)
    for (let i=0; i<salary.length; i++){
        if (salary[i] !== min && salary[i] !== max){
            sum += salary[i]
        }
    }
    return sum / (salary.length - 2)
};