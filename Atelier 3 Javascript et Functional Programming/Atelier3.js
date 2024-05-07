
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


// Exercice 4: A partir d'une liste de nombres, trouver le nombre maximum dans cette liste.
//const numbers = [1, 7, 10, 9, 8];

function maxNumber(numbers) {
    const maxnumber = numbers.reduce((max,num)=> Math.max(max,num))
 
    return maxnumber;
  }
  
  const numbers = [1, 7, 10, 9, 8];
  const maxnumber = maxNumber(numbers);
  console.log(maxnumber); 

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

//Exercice 6:
//partie html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Data Analysis</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="app">
        <h1>Product Data Analysis</h1>
        <input type="text" id="searchInput" placeholder="Search by name">
        <select id="categoryFilter">
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
        </select>
        <button onclick="filterProducts()">Filter</button>
        <button onclick="calculateTotalPrice()">Total Price</button>
        <button onclick="findLowStockProducts()">Low Stock</button>
        <button onclick="sortProducts()">Sort</button>
        <div id="products"></div>
        <div id="charts">
            <canvas id="priceChart"></canvas>
            <canvas id="stockChart"></canvas>
        </div>
    </div>

    <script src="data.js"></script>
    <script src="app.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</body>
</html>
 //partie JS 
 const products = [
    { name: 'Laptop', price: 999, category: 'Electronics', stock: 10 },
    { name: 'T-shirt', price: 20, category: 'Clothing', stock: 30 },
    { name: 'Book', price: 15, category: 'Books', stock: 5 },
    { name: 'Headphones', price: 100, category: 'Electronics', stock: 15 },
    { name: 'Jeans', price: 50, category: 'Clothing', stock: 20 },
    { name: 'Smartphone', price: 699, category: 'Electronics', stock: 8 },
    { name: 'Sweater', price: 35, category: 'Clothing', stock: 12 },
    { name: 'Tablet', price: 299, category: 'Electronics', stock: 3 }
];

