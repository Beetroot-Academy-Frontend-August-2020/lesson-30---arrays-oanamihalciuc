/* 2. Create an array that describes a shop receipt. Each element of the array consists of the name of the product, an amount bought, and price per item. Write the following functions. 
- Print the receipt out on the screen.
- Counting the sum of the purchase.
- Extracting the most expensive item on the receipt.
- Counting an average item price on the receipt. */

let shopReceipt = [
{
    product: 'jeans',
    amount: 1,
    price: 400,
}, 
{
    product: 'sweater',
    amount: 2,
    price: 250,
}, 
{
    product: 'beanie',
    amount: 1,
    price: 100,
}, 
{
    product: 'gloves',
    amount: 1,
    price: 200,
}, 
]

// - Print the receipt out on the screen. 

function receipt() {
    console.log(shopReceipt);
}

receipt();


// - Counting the sum of the purchase.
// desk check: 400 + 500 + 100 + 200 = 1200

function total() {
    var sum = (shopReceipt[0].amount * shopReceipt[0].price) + (shopReceipt[1].amount * shopReceipt[1].price) + (shopReceipt[2].amount * shopReceipt[2].price) + (shopReceipt[3].amount * shopReceipt[3].price);
    console.log(sum);
}

total();
 

// - Extracting the most expensive item on the receipt.

function mostExpensive() {
let sortedReceipt = shopReceipt.sort((a,b) => {
    return b.price - a.price;
    }); 

console.log(sortedReceipt[0]);
}

mostExpensive();


// - Counting an average item price on the receipt.

function averageItemPrice() {
    var average = (shopReceipt[0].price + shopReceipt[1].price + shopReceipt[2].price + shopReceipt[3].price) / 4;
    console.log(average);
}

averageItemPrice();
