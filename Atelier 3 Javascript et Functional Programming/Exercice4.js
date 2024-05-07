// Exercice 4: A partir d'une liste de nombres, trouver le nombre maximum dans cette liste.
//const numbers = [1, 7, 10, 9, 8];

function maxNumber(numbers) {
    const maxnumber = numbers.reduce((max,num)=> Math.max(max,num))
 
    return maxnumber;
  }
  
  const numbers = [1, 7, 10, 9, 8];
  const maxnumber = maxNumber(numbers);
  console.log(maxnumber); 
