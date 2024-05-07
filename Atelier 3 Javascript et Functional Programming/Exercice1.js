// Exercice 1 : Ecrire un programme fonctionnel qui prend une liste puis renvoie un autre liste selon la logique suivante :
//const numbers = [1, 7, 10, 9, 8 , 2]; —> [2, 8 , 10]

function filterAndSort(numbers) {
    // Filtrer les nombres pairs
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    
    // Trier les nombres pairs par ordre croissant
    const sortnombres = evenNumbers.sort((a, b) => a - b);
    
    return sortnombres;
  }
  
  const numbers = [1, 7, 10, 9, 8, 2];
  const filteredAndSortedNumbers = filterAndSort(numbers);
  console.log(filteredAndSortedNumbers); 