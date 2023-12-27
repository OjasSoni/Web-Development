function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, '');
  console.log(str);

  let a = 0;
  let n= str.length;
  let b=n-1;
 

  while(a<=b){
    if(str[a]!=str[b] && str[a]!=' ' && str[b]!=' '){
      console.log(str[a]);
      console.log(str[b]);

      return false;
    }
    if((str[a]==' ' && str[b]!=' ')){
      a++;
    }
    else if(str[a]!=' ' && str[b]==' '){
      b--;
    }
    else{
    a++;
    b--;
    }
  }
  return true;
}

console.log(isPalindrome('Eva, can I see bees in a cave?'));