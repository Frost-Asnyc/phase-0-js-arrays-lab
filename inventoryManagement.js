// Write your code here

// Array of products
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Function to log the first product
function logFirstProduct() {
  console.log(products[0]);
}

// Function to add a new product
function addProduct(productName) {
  products.push(productName);
}

// Function to update a product name
function updateProductName(position, newName) {
  products[position] = newName;
}

// Function to remove the last product
function removeLastProduct() {
  products.pop();
}

logFirstProduct();

addProduct("Keyboard");
console.log(products);

updateProductName(1, "Smartphone");
console.log(products);

removeLastProduct();
console.log(products);

// Export the necessary parts for testing
module.exports = {
  logFirstProduct:
    typeof logFirstProduct !== "undefined" ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== "undefined" ? addProduct : undefined,
  updateProductName:
    typeof updateProductName !== "undefined" ? updateProductName : undefined,
  removeLastProduct:
    typeof removeLastProduct !== "undefined" ? removeLastProduct : undefined,
  products,
};
