function sumOfEvenNumbers(start, end) {
    let sum = 0;
  
    for (let i = start; i <= end; i++) {
      if (i % 2 === 0) {
        sum += i;
      }
    }
  
    return sum;
  }
  
  const startingNumber = 1;
  const endingNumber = 10;
  
  const result = sumOfEvenNumbers(startingNumber, endingNumber);
  console.log(`La suma de números pares desde ${startingNumber} hasta ${endingNumber} es: ${result}`);
  