// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

// DNAStrand ("ATTGC") # return "TAACG"

// DNAStrand ("GTAT") # return "CATA"

// function DNAStrand(dna) {
//     //your code here
//     return dna.split('').map(function (char) {
//         let translateChar;
//         switch (char) {
//             case 'A':
//                 translateChar = 'T';
//                 break;
//             case 'T':
//                 translateChar = 'A';
//                 break;
//             case 'C':
//                 translateChar = 'G';
//                 break;
//             case 'G':
//                 translateChar = 'C';
//                 break;
//         }
//         return translateChar;
//     }).join('');
// }


var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

// let pairs = {A:'T',T:'A',C:'G',G:'C'};
// const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);

console.log(DNAStrand("ATTGC"));