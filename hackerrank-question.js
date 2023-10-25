/*
Question 1
Complete the function solveMeFirst to compute the sum of two integers.

Example

a = 7, b = 3
result should be 10

Function Description

Complete the solveMeFirst function in the editor below.

solveMeFirst has the following parameters:

int a: the first value
int b: the second value
Returns
- int: the sum of a and b

Constraints
 1 <= a, b <= 1000
*/

function solveMeFirst(a, b) {
  // Hint: Type return a+b below
  return a + b;
}

/*
Question 2

Given an array of integers, find the sum of its elements.

For example, if the array , , so return .

Function Description

Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

simpleArraySum has the following parameter(s):

ar: an array of integers
Input Format

The first line contains an integer, , denoting the size of the array.
The second line contains  space-separated integers representing the array's elements.
*/

function simpleArraySum(ar) {
    // Write your code here
    let sum = 0;
    for (const num of ar) {
        sum += num;
    }
    
    return sum;
}


