
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

    
    // ? When uploading, if the shoe details is exactly the same as one of the shoes then just increment the stock

    function addNewShoe(newShoeDetails){
        shoesInstance.setNewShoes(newShoeDetails);
    }

    return {
        myFilterFunction,
        addNewShoe,
    }

}