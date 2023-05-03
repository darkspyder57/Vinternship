import Solution from "./intern.js";

//I have written one input for now because i just wanted to show that i know concept
// If you want other inputs then I have written them in the intern.js file and you can checkout from there and use this code to unit test it.
const D ={'2023-04-30': 10};
const result = Solution(D);
const expect = {'Mon': 10};
if(result==expect)
console.log("Test case failed ");
else{
    console.log("ok input 1 pass");
}

