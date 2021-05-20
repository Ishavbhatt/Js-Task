
  
  
  correctIt = (inputText) => {
    let fix_space = inputText.replace(/\s+/g, ' ').trim();
    let add_missing_period = fix_space.replace(/([A-Z])/g, '. $1').trim();
    let fix_period_space = add_missing_period.replace(/\s+(\W)/g, "$1");
  
    let re = /(^|[.!?]\s+)([a-z])/g;
    let final_text = fix_period_space.replace(re, (m, $1, $2) => $1 + $2.toUpperCase());
    if (final_text.slice(-1) !== '.') {
      return final_text.concat('.').trim();
    }
    return final_text.trim();
  }
  
  //   input
  correctIt("john have an apple The sky is blue . they get a coin");
  
  //   output
  "John have an apple. The sky is blue. They get a coin."