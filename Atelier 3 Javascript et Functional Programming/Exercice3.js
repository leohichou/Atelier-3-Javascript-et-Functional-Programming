// Exercice 3 : Ecrire un programme fonctionnel qui divise le texte en lignes, convertit chaque ligne en majuscules,
//filtre les lignes contenant la lettre "I", puis les imprime.

function convertMaj(text){
    return uppercase = text.toUpperCase();

}

function filterI(text){
  return   filteredLetters = text.split('').filter(char => char === 'I');
}

a= convertMaj('jekfhkjhfjkfbffebfioib kefwhknfskjhfwhjnfi feknjkfbf i');
console.log(a);
b=filterI(a);
console.log (b);