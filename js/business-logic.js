
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



    return {

        myFilterFunction,
    }

}