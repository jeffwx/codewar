/* You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3) 

[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3 

Test.assertSimilar(stray([1, 1, 2]), 2);

*/

// function stray(numbers) {
// 	let strayNumber = numbers[0];
// 	let normalCount = 0;
// 	for (let i = 1; i < numbers.length; i++) {
// 		if (numbers[i] === strayNumber) {
// 			normalCount++;
// 		}else if(normalCount>0 && numbers[i] !== strayNumber){
// 			strayNumber = numbers[i];
// 			break;
// 		}
// 		if(normalCount ===1 && i==2) {
// 			strayNumber = numbers[1];
// 			break;
// 		}
// 	}
// 	return strayNumber;
// }

function stray(numbers){
  for (var i in numbers){
     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
  }
}
/*
^ (Bitwise XOR)
  Performs the AND operation on each pair of bits. a AND b yields 1 only if both a and b are 1. 
  Bitwise XORing any number x with 0 yields x. Bitwise XORing any number x with -1 yields ~x.
*/
// function stray(numbers) {
//   return numbers.reduce((x, y) => x ^ y);
// }

console.log(stray([1, 1, 2,1]));