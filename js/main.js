let shoeCatalogueInstance = shoeCatalogue(); // * Factory function instance
let shoesInstance = shoesData();

const shoeBoxPlaceholder = document.querySelector(".shoe-box-placeholder");
const shoeBoxTemplate = document.querySelector(".shoe-box-template").innerHTML;

let compiledTemplate = Handlebars.compile(shoeBoxTemplate);

let shoes = shoesInstance.getShoes(); // ? data in a form of array

const brandFilterDropdown = document.querySelector(".brand-filter-dropdown");
const colorFilterDropdown = document.querySelector(".color-filter-dropdown");
const sizeFilterDropdown = document.querySelector(".size-filter-dropdown");
const titleSearchFilter = document.querySelector(".title-search-filter");

function filterFunctionClicked() {
    console.log(titleSearchFilter.value, brandFilterDropdown.value, colorFilterDropdown.value, sizeFilterDropdown.value);
    shoes.shoesArray = shoeCatalogueInstance.myFilterFunction(titleSearchFilter.value, brandFilterDropdown.value, colorFilterDropdown.value, sizeFilterDropdown.value);
    shoeBoxPlaceholder.innerHTML = compiledTemplate(shoes);
}
shoeBoxPlaceholder.innerHTML = compiledTemplate(shoes);










