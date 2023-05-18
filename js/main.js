let shoeCatalogueInstance = shoeCatalogue(); // * Factory function instance
let shoesInstance= shoesData()

const shoeBoxPlaceholder = document.querySelector(".shoe-box-placeholder");
const shoeBoxTemplate = document.querySelector(".shoe-box-template").innerHTML;

let compiledTemplate = Handlebars.compile(shoeBoxTemplate);

let shoes = shoesInstance.getShoes() // ? data in a form of array


const brandFilterDropdown = document.querySelector(".brand-filter-dropdown");
const colorFilterDropdown = document.querySelector(".color-filter-dropdown");
const sizeFilterDropdown = document.querySelector(".size-filter-dropdown");
const titleSearchFilter = document.querySelector(".title-search-filter");


function filterFunctionClicked(){
    console.log(titleSearchFilter.value, brandFilterDropdown.value, colorFilterDropdown.value , sizeFilterDropdown.value)
    shoes.shoesArray = shoeCatalogueInstance.myFilterFunction(titleSearchFilter.value,brandFilterDropdown.value, colorFilterDropdown.value , sizeFilterDropdown.value)

    shoeBoxPlaceholder.innerHTML = compiledTemplate(shoes);
}

shoeBoxPlaceholder.innerHTML = compiledTemplate(shoes);














/*
function filterByBrandClicked(brand) {
    
    let filteredShoes = shoeCatalogueInstance.filterByBrand(brand) ;

    shoes.shoesArray = filteredShoes ;
    

    // shoeCatalogueInstance.setShoesState(filteredShoes) ;


    shoeBoxPlaceholder.innerHTML = compiledTemplate(shoes);
}

const brandFilterDropdown = document.querySelector(".brand-filter-dropdown");
brandFilterDropdown.addEventListener("change", function (e) {
    filterByBrandClicked(e.target.value); // * call this function when the brand filter option is selected
});

// ************************************** FILTER BY COLOR ********************************************



function filterByColorClicked(color) {
    let filteredShoes = shoeCatalogueInstance.filterByColor(color) ;

    shoes.shoesArray = filteredShoes ;
    

    // shoeCatalogueInstance.setShoesState(filteredShoes) ;


    shoeBoxPlaceholder.innerHTML = compiledTemplate(shoes);

}

const colorFilterDropdown = document.querySelector(".color-filter-dropdown");
colorFilterDropdown.addEventListener("change", function (e) {
    filterByColorClicked(e.target.value); // * call this function when the brand filter option is selected
});


*/
