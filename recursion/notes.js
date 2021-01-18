//same problem, over and over, on a smaller piece, until you reach the base case;
//3453 3452 2342 2345 - is it odd? is it odd? is it odd? is it odd

//a process (a function) that calls itself

//sometimes cleaner and better than iteration
//comes up a lot more with more complex data structures
//pushes the same function over and over and over onto the call stack

//1) must call the same function over and over;
//2) must have a stop point (base case)

//pitfalls
//1) no base case or base case is wrong;
//2) no return statement; or returning the wrong thing
//3) Stack overflow - recursion is not stopping