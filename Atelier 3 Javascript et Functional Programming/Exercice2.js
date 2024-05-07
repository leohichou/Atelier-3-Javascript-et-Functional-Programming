// Exercie 2 : Ecrire un programme fonctionnel qui prend une liste puis renvoie un autre liste selon la logique suivante :
//const numbers = [1,3 , 4]; —> [1, 6, 24]

function factorial(n) {
    if (n === 0 || n === 1)
      return 1;
    for (let i = n - 1; i >= 1; i--) {
      n *= i;
    }
    return n;
  }
  
  function transformList(numbers) {
    const transformedList = numbers.map(number => factorial(number));
    return transformedList;
  }
  
  const numbers = [1, 3, 4];
  const transformedNumbers = transformList(numbers);
  console.log(transformedNumbers); // Output: [1, 6, 24]