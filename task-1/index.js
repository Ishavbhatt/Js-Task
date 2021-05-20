function swirlWords(str) {
    return str.replace(/\w{5,}/g, (word) =>
      word.split("").reverse().join("")
    );
  }
  
  //   Example 1
  str("Hey fellow warriors");
  
  // OutPut
  ("Hey wollef sroirraw");
  
  // Example 2 input
  str("This is another test");
  
  // Output
  ("This is rehtona test");
  
  