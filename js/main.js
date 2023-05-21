let shoeCatalogueInstance = shoeCatalogue(); // * Factory function instance
let shoesInstance = shoesData();

const shoeBoxPlaceholder = document.querySelector(".shoe-box-placeholder");
const shoeBoxTemplate = document.querySelector(".shoe-box-template").innerHTML;

let compiledTemplate = Handlebars.compile(shoeBoxTemplate);

let shoes = shoesInstance.getShoes(); // ? data in a form of array



const brandFilterDropdown = document.querySelector(".brand-filter-dropdown"); // * my placeholder ...
const colorFilterDropdown = document.querySelector(".color-filter-dropdown");
const sizeFilterDropdown = document.querySelector(".size-filter-dropdown");
const titleSearchFilter = document.querySelector(".title-search-filter");

// ********************************* BRAND NAMES FILTERING **********************************
let brandsArray = shoeCatalogueInstance.getAllTheBrands() ;
const brandFilterTemplate  = document.querySelector(".brand-filter-template").innerHTML ;
let compiledBrandTemplate = Handlebars.compile(brandFilterTemplate) ;

brandFilterDropdown.innerHTML = compiledBrandTemplate(brandsArray);

// ********************************* Colors FILTERING **********************************

let colorsArray = shoeCatalogueInstance.getAllTheColors() ;
const colorFilterTemplate  = document.querySelector(".color-filter-template").innerHTML ;
let compiledColorTemplate = Handlebars.compile(colorFilterTemplate) ;

colorFilterDropdown.innerHTML = compiledColorTemplate(colorsArray) ;









function filterFunctionClicked() {
    console.log(titleSearchFilter.value, brandFilterDropdown.value, colorFilterDropdown.value, sizeFilterDropdown.value);
    shoes.shoesArray = shoeCatalogueInstance.myFilterFunction(titleSearchFilter.value, brandFilterDropdown.value, colorFilterDropdown.value, sizeFilterDropdown.value);
    shoeBoxPlaceholder.innerHTML = compiledTemplate(shoes);
}
shoeBoxPlaceholder.innerHTML = compiledTemplate(shoes);










