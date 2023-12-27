let s  = "ojas soni";
let stirngtoarray = s.split('');

stirngtoarray.sort();
let arraytostring = stirngtoarray.join('');
// console.log(arraytostring);

function isAnagram(str1, str2) {
    str1.split('').sort().join('');
    str2.split('').sort().join('');
    let newstr1 = str1.replace(/\s/g, '');
    let newstr2 = str2.replace(/\s/g, '');

  if(str1==str2){
    return true;
  }
  else{
    return false;
  }
}
console.log(isAnagram("hello","world"));