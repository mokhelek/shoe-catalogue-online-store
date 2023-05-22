function shoesData() {

    
    let shoesStock = {
        shoesArray: [
            
            {
                title: "Bass Weejans",
                brand: "GH BASS",
                size: "8",
                price: 5550,
                image:"https://www.ghbass.com/media/catalog/product/b/a/baz2w455_baz2w455c15_on.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=410&width=410&canvas=410:410",
                color: "red",
                quantity: 5,
                id:1
            },
            {
                title: "John Craig",
                brand: "Mike",
                size: "6",
                price: 2500,
                image:"https://www.johncraig.co.za/wp-content/uploads/BAS02CO-BASS-OCG-WEEJUNS-VENETIAN-LEATHER-BROWN-BA91005E-0CG-V1-600x600.jpg",
                color: "red",
                quantity: 40,
                id:2
            },
            {
                title: "Gucci loafers",
                brand: "Gucci",
                size: "7",
                price: 2500,
                image:"https://image.harrods.com/gucci-leather-web-stripe-loafers_16165319_36472932_300.jpg" ,
                color: "purple",
                quantity: 25,
                id:3
            },
            {
                title: "Christian Louboutin leather loafers",
                brand: "Christian Louboutin",
                size: "7",
                price: 6000,
                image:"https://image.harrods.com/christian-louboutin-no-penny-patent-leather-loafers_19241760_43422425_300.jpg" ,
                color: "red",
                quantity: 65,
                id:4
            },
            
        ],
    };



    if (localStorage["stored-shoes"]) {
        shoesStock = JSON.parse(localStorage["stored-shoes"]);
    }

    /* 

        * first loop through the array
        * each array has an object containing shoe details
        * then iterate the object
        * use conditional statements to check if the details of the current objects being iterated match the new objects
        * if they match, add the quantities of the 2 objects
        * if they do not match then add the new object as a new member of the list

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
