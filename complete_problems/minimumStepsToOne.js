//my answer (close, but incorrect)
function minimumSteps(num){
    let steps = 0;
    while (num > 1){
        if (num % 3 == 0) {
            num /= 3
            steps++
        } else if (num % 2 == 0){
            num /= 2;
            steps++
        } else {
            num--
            steps++;
        }
    }
    return steps
}

console.log(minimumSteps(10))

///////////////////////////////////////
//input: int n
//output: int min # steps to 1 with 3 operators (-1, /2, /3)
//constraints: 
//  a) n >= 1
//  b) only divide when divisible
//e.g.: 
//  5.. 3 steps
//  11..is 4 steps, most people think it will 5; this proves that a greedy approach won't work
//recurssion is much easier to use than a for loop or a while loop because of this
//could use a while loop, but would need to also use a stack
///////////////////////////////////////

//Time: O(k^n) (exponential)
//Space: O(n) - each recursive function takes up space
function minimumStepsToOne(n){
    //key is the state that we always repeat - input to this function
    let cache = {};

    function recurse(curr){
        //Base case
        if(curr === 1){
            return 0;
        }

        //Recursive Relations
        //sub1
        let steps = recurse(curr - 1)

        // divBy2
        if(curr % 2 === 0){
            let divby2 = recurse(curr / 2)
            steps = Math.min(steps, divby2)
        }

        if(curr % 3 === 0){
            let divby3 = recurse(curr / 3)
            steps = Math.min(steps, divby3)
        }

        //Return min # steps to 1 from curr
        return 1 + steps
    }

    let res = recurse(n);
    return res;
}

console.log(minimumStepsToOne(50));

//https://codeinterview.io/UJHHHJGGRE

// function minStepsToOne(n) {

//     function recurse(curr) {
//       // Base case
//       if(curr == 1) {
//         return 0;
//       }
    
//       // Recursive relations
//       // sub1
//       let steps = recurse(curr-1);
    
//       // divby2
//       if(curr % 2 == 0) {
//         let divby2 = recurse(curr/2);
//         steps = Math.min(steps, divby2);
//       }
    
//       // divby3
//       if(curr % 3 == 0) {
//         let divby3 = recurse(curr/3);
//         steps = Math.min(steps, divby3);
//       }
    
    
//       // return min # steps to 1 from `curr`
//       return 1+steps;
    
//     }

//     let res = recurse(n);
//     return res;
//   }


//   function minStepsToOneMemo(n) {
//     let cache = {};

//     function recurse(curr) {
//       // Base case
//       if(curr == 1) {
//         return 0;
//       }
//       // Cache check
//       if(curr in cache) {
//         return cache[curr];
//       }
    
//       // Recursive relations
//       // sub1
//       let steps = recurse(curr-1);
    
//       // divby2
//       if(curr % 2 == 0) {
//         let divby2 = recurse(curr/2);
//         steps = Math.min(steps, divby2);
//       }
    
//       // divby3
//       if(curr % 3 == 0) {
//         let divby3 = recurse(curr/3);
//         steps = Math.min(steps, divby3);
//       }
    
    
//       // return min # steps to 1 from `curr`
//       let result = 1+steps;
//       // Store result in cache
//       cache[curr] = result;
//       return result;
    
//     }

//     let res = recurse(n);
//     // console.log(cache);
//     return res;
//   }

//   function minStepsToOneTab(n) {
//     // init array n+1 size
//     let tab = new Array(n+1);

//     // apply base case to table
//     tab[1] = 0;

//     // loop table filling in subproblem solutions
//     for(let curr = 2; curr <= n; curr++) {
//       // sub1
//       let steps = tab[curr-1];
    
//       // divby2
//       if(curr % 2 == 0) {
//         let divby2 = tab[curr/2];
//         steps = Math.min(steps, divby2);
//       }
    
//       // divby3
//       if(curr % 3 == 0) {
//         let divby3 = tab[curr/3];
//         steps = Math.min(steps, divby3);
//       }
    
    
//       // return min # steps to 1 from `curr`
//       let result = 1+steps;
//       // Store result in cache
//       tab[curr] = result;
//     }


//     return tab[n];


//   }

//   // console.time("Brute Force Recursion: ");
//   // console.log(minStepsToOne(10));
//   // console.timeEnd("Brute Force Recursion: ");

//   console.time("Memoization: ");
//   console.log(minStepsToOneMemo(5678));
//   console.timeEnd("Memoization: ");

//   console.time("Tabulation: ");
//   console.log(minStepsToOneTab(5678));
//   console.timeEnd("Tabulation: ");