
// **************************************************** ADD TO SHOPPING BAG DOM **********************************************


let shoppingCartInstance = shoppingCart() ;

let cartArr = [];
if(localStorage["cart-shoes"]){
    cartArr = JSON.parse(localStorage["cart-shoes"])
}

const cartShoesWrapperElem = document.querySelector(".cart-shoes-wrapper") ;
const cartShoesTemplate = document.querySelector(".cart-shoes-template").innerHTML ;

let compiledCartShoesTemplate = Handlebars.compile(cartShoesTemplate);
const emptyBag = document.querySelector(".empty-bag")

if(cartArr.length > 0){
    emptyBag.classList.remove("show")
    cartShoesWrapperElem.innerHTML = compiledCartShoesTemplate(cartArr)
}else{
    emptyBag.classList.add("show")

}

function quantityDOM(action, shoeId, max){
    let quantityCounterElem = document.querySelector(`.quantity-counter-${shoeId}`);

    if (action === "increase" && Number(quantityCounterElem.innerHTML) < max){
        quantityCounterElem.innerHTML = Number(quantityCounterElem.innerHTML) + 1 ;
        shoppingCartInstance.updateStockQuantity(shoeId, Number(quantityCounterElem.innerHTML), action ) ;

    }else if(action === "decrease" && Number(quantityCounterElem.innerHTML) >= 1 ){
        quantityCounterElem.innerHTML = Number(quantityCounterElem.innerHTML) - 1 ;
        shoppingCartInstance.updateStockQuantity(shoeId, Number(quantityCounterElem.innerHTML), action );

    }
}

function buyButtonClicked(){
    shoppingCartInstance.buyFunction()
}

