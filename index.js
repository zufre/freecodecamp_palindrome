function palindrome(str) {
  
 str = str.replace( /\W/g , '');
 str = str.replace(/\_/g, '').toLowerCase();


  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
 
  return (reversed === str);

  
}