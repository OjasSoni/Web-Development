/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let stringtoarray = str1.split('');
  let stringtoarray2 = str2.split('');

  stringtoarray.sort();
  stringtoarray2.sort();

  let  arraytostring = stringtoarray.join('');
  let  arraytostring2 = stringtoarray2.join('');

  arraytostring = arraytostring.replace(/\s/g, '');
   arraytostring2 = arraytostring2.replace(/\s/g, '');
   arraytostring = arraytostring.toLowerCase();
if(arraytostring==arraytostring2){
  return true;
}
else{
  return false;
}


// console.log(newstr2);

}

module.exports = isAnagram;
