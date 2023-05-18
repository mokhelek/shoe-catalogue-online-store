

function shoesData() {

    let shoesStock = {
        shoesArray:[]
    };

    if ( localStorage["stored-shoes"] ){
        shoesStock = JSON.parse(localStorage["stored-shoes"])
    }
    
    /*
    let shoesStock = {
        shoesArray: [
            
            {
                title: "Air Jordan 11",
                brand: "Mike",
                color: "red",
                price: 5550,
                in_stock: 5,
                size: "6",
            },
            {
                title: "Summer Carvela",
                brand: "carvela",
                color: "blue",
                price: 2000,
                in_stock: 3,
                size: "7",
            },
            {
                title: "Bass Weejans",
                brand: "Bass",
                color: "green",
                price: 3500,
                in_stock: 26,
                size: "4",
            },
            {
                title: "Chuck Taylor 70",
                brand: "Mike",
                color: "blue",
                price: 2700,
                in_stock: 26,
                size: "4",
            },
            {
                title: "Vans Skater",
                brand: "vans",
                color: "red",
                price: 200,
                in_stock: 301,
                size: "4",
            },
            {
                title: "Air force 1",
                brand: "Mike",
                color: "blue",
                price: 1500,
                in_stock: 12,
                size: "7",
            },
        ],
    };
    */
    
    function setNewShoes(newShoesObj){
            shoesStock.shoesArray.push(newShoesObj);

        storeNewShoes()
    }
    
    function storeNewShoes(){
        localStorage["stored-shoes"] = JSON.stringify(getShoes()) 
    }


    function getShoes() {
        return shoesStock;
    }

    return {
        getShoes,
        setNewShoes,
    };
}
