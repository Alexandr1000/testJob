function sayHello() {
    let current = 0;
    let to = 9;
  
    setTimeout(function say() {
      console.log("Hello")
      if (current < to) {
        setTimeout(say, 1000);
      }
      current++;
    }, 1000);
  }
  
  sayHello();