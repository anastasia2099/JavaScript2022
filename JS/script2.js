"use script";


  const a = prompt ('Введите число a');
  const b = prompt ('Введите число b');
  const с = prompt ('выберете желаемую операцию * / + -');
  
  let newC = toString(c);

  // if (c== 1){
  //   alert (a * b);
  // } else if (c == '/') {
  //   alert (a / b);
  // } else if (c == '+') {
  //   alert (a + b);
  // } else if (c == '-') {
  //   alert (a - b);
  // } else {
  //   alert ('error');
  // }

  

  
  switch (newC){
    case 1:
      alert (a * b);
      break;
    case "+":
      alert (a + b);
      break;
    case "-":
      alert (a - b);
      break;
    case "/":
      alert (a / b);
      break;

  };
  //calcs(c);