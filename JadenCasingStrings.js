/*Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). 
Jaden is also known for some of his philosophy that he delivers via Twitter. 
When writing on Twitter, he is known for almost always capitalizing every word.

Your task is to convert strings to how they would be written by Jaden Smith. 
The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

*/


var str = "How Can Mirrors Be Real If Our Eyes Aren't Real";
//Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");

// String.prototype.toJadenCase = function () {
//   //...
//   return this.toLowerCase().split(" ").reduce(function(accumulator,current,index,array){
//   	 return accumulator.charAt(0).toUpperCase() + accumulator.slice(1) + ' ' +current.charAt(0).toUpperCase() + current.slice(1);
//   });
// };

// String.prototype.toJadenCase = function () {
//   return this.replace(/(?:^|\s)\S/g, function(c) { return c.toUpperCase(); });
// };

String.prototype.toJadenCase = function () {
  //...
  return this.toLowerCase().split(" ").map(function(current){
  	 return current.charAt(0).toUpperCase() + current.slice(1);
  }).join(' ');
};

console.log(str.toJadenCase());