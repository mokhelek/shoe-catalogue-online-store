/*
    ! The stock should only decrement after checkout/Buy button has been clicked
    
    // Upon clicking the "add-to-cart" button
    // Trigger a function that will do the following :
    // Firstly, the function should take the ID of the clicked shoe as a parameter
    // The function should then use the ID  to find that shoe from the list of shoes stored in local storage.
    // The "add-to-cart" button cannot be clicked twice -> disable after first click ?
    // Store the objects of the selected shoes in an array --> push the array to the local storage
    // The function should have a second parameter called "currentStock" --> The stock amount
    * The buyer cannot exceed the stock amount ... Meaning that the max quantity = stock amount

*/

/*
    TODO : --> Buy or Checkout Button Is Clicked (decrease the stock)

    * How and When should I decrement the stock quantity ?
    * The stock amount should go down only after the items that are in the cart have been bought
    * Meaning that the stock quantity shall remain the same till the checkout/buy button has been clicked
    * 
    * Upon clicking the buy button, do the following :
        * -> For each different shoe bought (stored in local storage)
        * -> check the quantity of each bought shoe
        * -> Get the ID of the bought shoe
        * -> Use that ID to find the shoe from the list of all the shoes
        * -> Subtract the quantity of the bought shoes from each shoe's initial stock
        * -> If the resulting quantity is zero, delete the shoe (array.pop())
        * -> Store the new shoes
*/

/*

    TODO : --> Upon adding the shoe in the cart, add a temporary key to the shoe object that tracks the buy quantity

*/

function shoppingCart() {
    let shoesInstance = shoesData();

    let cartArray = [];
    if (localStorage["cart-shoes"]) {
        cartArray = JSON.parse(localStorage["cart-shoes"]);
    }

    function addShoe(shoeId) {
        function findShoe() {
            let shoeDetails = shoesInstance.getShoes().shoesArray.find((shoe) => shoe.id == shoeId);
            return shoeDetails;
        }

        let cartShoe = findShoe();

        let checkShoeInCart = getSelectedShoes().some((obj) => obj.id == cartShoe.id);

        if (checkShoeInCart) {
            alert("already in the cart");
        } else {
            cartShoe.buyQuantity = 1;
            cartArray.push(cartShoe);
            storeSelectedShoes();
        }
    }

    function updateStockQuantity(shoeId, buyQuantity) {
        function findShoe() {
            let cartShoeDetails = getSelectedShoes().find((shoe) => shoe.id == shoeId);
            return cartShoeDetails; // returns the actual shoe obj
        }
        let indexOfCartShoe = getSelectedShoes().indexOf(findShoe());

        cartArray[indexOfCartShoe].quantity = Number(cartArray[indexOfCartShoe].quantity) - buyQuantity;
        cartArray[indexOfCartShoe].buyQuantity = buyQuantity;
        storeSelectedShoes();
    }

    function getSelectedShoes() {
        return cartArray;
    }

    function storeSelectedShoes() {
        localStorage["cart-shoes"] = JSON.stringify(getSelectedShoes());
    }

    return {
        addShoe,
        updateStockQuantity,
    };
}
