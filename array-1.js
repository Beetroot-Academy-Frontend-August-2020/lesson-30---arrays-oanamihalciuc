/* 1. Create a “groceries list” array. Each element of the array is an object that contains the name of a product, an amount needed and whether it is bought or not. Write a few functions for working with this array. 
- Display the entire list, so that the not yet purchased items go before the bought ones. 
- Adding a purchase to the list. Note that if a product already exists, the amount needs to be increased in the existing purchase, not in a new one. 
- Purchasing a product. The function accepts the name of a product and marks it as bought.
 */

let groceryList = [
    {
    product: 'bread',
    amount: 1,
    bought: true,
    }, 
    {
    product: 'eggs',
    amount: 10,
    bought: false,
    }, 
    {
    product: 'apples',
    amount: 5,
    bought: false,
    },
    {
    product: 'milk',
    amount: 1,
    bought: true,
    }];

let sortedList = groceryList.sort((a,b) => {
    return a.bought - b.bought;
    }); 

console.log(sortedList);


// - Adding a purchase to the list. Note that if a product already exists, the amount needs to be increased in the existing purchase, not in a new one. 

// Code is working fine for a new product, although seems like push does not increase the length of the array with 1, the console shows the same length (eg 4) and one push object.
// For an existing product - adds the value to the existing quantity but it also creates a new object[4] - which is a duplicate and not correct.

function addPurchase(newProduct, value) {
    for(var i=0; i < groceryList.length; i++) {
        if(groceryList[i].product = newProduct) {
        groceryList[i].amount = groceryList[i].amount + value;
    } else {
        groceryList.push = {
            product: newProduct,
            amount: value,
            bought: true,
        }
    }
}
    console.log(groceryList);
}

addPurchase('eggs', 2);
addPurchase('honey', 1);

// - Purchasing a product. The function accepts the name of a product and marks it as bought.

function addProduct(anotherProduct) {
    groceryList[4] = {
        product: anotherProduct,
        bought: true,
    }
    console.log(groceryList);
}

addProduct('banana');
