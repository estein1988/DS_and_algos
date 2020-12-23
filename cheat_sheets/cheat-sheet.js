//for loop
for (let i = 0; i < array.length; i++){
    a[i] === b[i]
}

//es15 - arrays and strings
for(let character of str){
    reversed = character + reversed
}

//es15 - hashes/objects
for(let character in string)

//every function - checks every element in an array a returns true/false
str.split('').every((char, i))

//to Integer
parseInt('10')


////////////// MATH MATH MATH MATH MATH MATH MATH MATH //////////////////////////////////

//sum array:
array.reduce((a, b) => a + b, 0);


//math.ceil - returns smallest integer >= given number
Math.ceil(.95) === 1

//math.abs - absolute
Math.abs(-1) === 1

//even
number % 2 === 0

//odd
number % 2 !== 0

//math.sign - pass + num returns 1, pass - num return -1
Math.sign(-3) === -1
Math.sign(3) === 3

//to string
.toString()


////////////// WORDS WORDS WORDS WORDS WORDS //////////////////////////////////

//split - takes a string and returns an array of substrings obstained by splitting a string on a seperator you specifify
string1 = "Hello Joe"
string1.split(', ') === ['Hello Joe']

string2 = 'apple, fruit, banana, pear'
string2.split(', ') === ['apple', 'fruit', 'banana', 'pear']

string3 = 'abcd'
string.split('') = ['abcd']

//join - takes an array a returns a string with all array elements joined.
array1 = ['Hello Joe']
array1.join('') === 'Hello Joe'

array2 = ['apple', 'fruit', 'banana', 'pear']
string2.join(', ') === 'apple, fruit, banana, pear'

//slice - copies given part of array and returns as a new array. 
//DOES NOT CHANGE ORIGINAL ARRAY
//can also be used on strings
array.slice(from, until);
word.slice(1) === 'pple'

//splice - changes array by adding or removing elements from it
//CHANGES ARRAY

array.splice(index, numberOfElements);
array.splice(2) //every element starting from index 2 would be removed
array.splice(0, 0, 'a', 'b'); //adds elements

