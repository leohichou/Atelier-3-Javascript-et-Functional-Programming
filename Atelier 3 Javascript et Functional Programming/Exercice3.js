// Exercice 3 : Ecrire un programme fonctionnel qui divise le texte en lignes, convertit chaque ligne en majuscules,
//filtre les lignes contenant la lettre "I", puis les imprime.
function filtrerLignesContenantI(texte) {
  // Diviser le texte en lignes
  const lignes = texte.split('\n');
  
  // Convertir chaque ligne en majuscules, filtrer les lignes contenant la lettre "I"
  const lignesFiltrees = lignes
    .map(ligne => ligne.toUpperCase())
    .filter(ligne => ligne.includes('I'));

  // Imprimer les lignes filtrées
  lignesFiltrees.forEach(ligne => console.log(ligne));
}

// Exemple d'utilisation
const texte = `hello
Hi
My 
name
is 
`;
filtrerLignesContenantI(texte);
