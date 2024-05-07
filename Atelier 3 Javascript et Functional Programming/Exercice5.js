//Exercice 5 : Ecrire un programme fonctionnel qui prend un tableau d'objets représentant des produits, et calcul
//le prix total de tous les produits TTC (25 % TVA ).

const products = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 }
];

function calculateTotal(products) {
    let total = 0;
    products.forEach(product => {
        total += product.price * 1.25; 
    });
    return total;
}

const totalPrice = calculateTotal(products);
console.log("Prix total TTC:", totalPrice);
