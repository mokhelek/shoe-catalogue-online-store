function shoesData() {
    let shoesStock = {
        shoesArray: [],
    };

    if (localStorage["stored-shoes"]) {
        shoesStock = JSON.parse(localStorage["stored-shoes"]);
    }

    /*
        let Array = [
            {
            title: "Air Jordan 11",
            brand: "Mike",
            color: "red",
            price: 5550,
            in_stock: 5,
            size: "6",
            quantity : 10
        },
        {
            title: "Air Jordan 11",
            brand: "Mike",
            color: "red",
            price: 5550,
            in_stock: 5,
            size: "6",
            quantity : 6

        },
        
    ]

    * first loop through the array
    * each array has an object containing shoe details
    * then iterate the object
    * use conditional statements to check if the details of the current objects being iterated match the new objects
    * if they match, add the quantities of the 2 objects
    * if they do not match then add the new object as a new member of the list


    */

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

    function setNewShoes(newShoesObj) {

        const hasSameTitle = shoesStock.shoesArray.some(item => item.title === newShoesObj.title);
   
        
        if(hasSameTitle){
            // todo : -> before I increment the stock I should get the object that has the same title as the new object
           

            function findShoe(){
                let shoeDetails = shoesStock.shoesArray.find(shoe => shoe.title == newShoesObj.title);
                return shoeDetails;
            }

            // todo : -> now the index of the shoe details

            let indexOfShoe =  shoesStock.shoesArray.indexOf(findShoe())

            shoesStock.shoesArray[indexOfShoe].quantity = Number(shoesStock.shoesArray[indexOfShoe].quantity) + Number(newShoesObj.quantity)  ;
        }else{
            let generateID = (shoesStock.shoesArray.length) + 1
            newShoesObj.id = generateID ; // * my object now has a unique ID 
            shoesStock.shoesArray.unshift(newShoesObj);
        }


        storeNewShoes();
    }

    function storeNewShoes() {
        localStorage["stored-shoes"] = JSON.stringify(getShoes());
    }

    function getShoes() {
        return shoesStock;
    }

    return {
        getShoes,
        setNewShoes,
    };
}
