
function shoeCatalogue(){
    let shoesInstance= shoesData()

    function myFilterFunction(searchText, brandName, color, size){
        let filteredShoes = shoesInstance.getShoes().shoesArray.filter(shoe =>

             (  searchText == "" || (shoe.title).toLowerCase().includes(searchText.toLowerCase()) ) &&

             ( brandName == "" || shoe.brand == brandName ) &&
             ( color == "" || shoe.color == color ) &&
             ( size == "" || shoe.size == size )
             );

        return filteredShoes
    }

    function getAllTheBrands(){
        // ! Working ... I can get all the brand names ...
        let shoeArray = shoesInstance.getShoes().shoesArray ; // * My array of objects

        const uniqueBrands = new Set() ;

        for(const shoeObj of shoeArray){
            uniqueBrands.add(shoeObj.brand) ;
        }

        let uniqueBrandsArray = Array.from(uniqueBrands)

        return uniqueBrandsArray;
    }
    function getAllTheColors(){
        // ! Working ... I can get all the colors ...
        // todo : -> since the colors come in the form of hex code, use template to display the actual visual colors
        let shoeArray = shoesInstance.getShoes().shoesArray ; // * My array of objects

        const uniqueColors = new Set() ;

        for(const shoeObj of shoeArray){
            uniqueColors.add(shoeObj.color) ;
        }

        let uniqueColorsArray = Array.from(uniqueColors)

        return uniqueColorsArray ;
    }
    
    // ? When uploading, if the shoe details is exactly the same as one of the shoes then just increment the stock

    function addNewShoe(newShoeDetails){
        shoesInstance.setNewShoes(newShoeDetails);
    }

    return {
        myFilterFunction,
        addNewShoe,
        getAllTheBrands,
        getAllTheColors,
    }

}