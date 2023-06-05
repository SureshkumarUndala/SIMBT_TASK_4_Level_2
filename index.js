function countMissingBrackets(str) {
    let stack = [];
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
      let char = str.charAt(i);
      
      if (char === '(') {
        stack.push(char);
      } else if (char === ')') {
          count++;
        } else {
          stack.pop();
        }
      }
    }
    
    count += stack.length;
    return count;
  }
  