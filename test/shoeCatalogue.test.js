describe("Testing the filtering functionality", function () {

    it("It should return an empty array because no shoe meets the criteria", function () {
        let shoeCatalogueInstance = shoeCatalogue();

        let searchText = "Vans"
        let brandName = "";
        let color = "";
        let size = "";

        let filteredShoes = shoeCatalogueInstance.myFilterFunction(searchText, brandName, color, size);
        let expectedResults = [];
        assert.deepEqual(expectedResults, filteredShoes);
    });

    it("It should return details of shoes with the red color", function () {
        let shoeCatalogueInstance = shoeCatalogue();

        let searchText = ""
        let brandName = "";
        let color = "red";
        let size = "";

        let filteredShoes = shoeCatalogueInstance.myFilterFunction(searchText, brandName, color, size);
        let expectedResults = [
            {
                title: "Air Jordan 11",
                brand: "Mike",
                color: "red",
                price: 5550,
                in_stock: 5,
                size: "6",
            },
            {
                title: "Vans Skater",
                brand: "vans",
                color: "red",
                price: 200,
                in_stock: 301,
                size: "4",
            },
        ];
        assert.deepEqual(expectedResults, filteredShoes);
    });

    it("It should return details of shoes from the carvela brand", function () {
        let shoeCatalogueInstance = shoeCatalogue();

        let searchText = ""
        let brandName = "carvela";
        let color = "";
        let size = "";

        let filteredShoes = shoeCatalogueInstance.myFilterFunction(searchText, brandName, color, size);
        let expectedResults = [
            {
                title: "Summer Carvela",
                brand: "carvela",
                color: "blue",
                price: 2000,
                in_stock: 3,
                size: "7",
            },
        ];
        assert.deepEqual(expectedResults, filteredShoes);
    });
    it("It should return details of shoes that are size 7", function () {
        let shoeCatalogueInstance = shoeCatalogue();

        let searchText = ""
        let brandName = "";
        let color = "";
        let size = "7";

        let filteredShoes = shoeCatalogueInstance.myFilterFunction(searchText,brandName, color, size);
        let expectedResults = [
            {
                title: "Summer Carvela",
                brand: "carvela",
                color: "blue",
                price: 2000,
                in_stock: 3,
                size: "7",
            },
            {
                title: "Air force 1",
                brand: "Mike",
                color: "blue",
                price: 1500,
                in_stock: 12,
                size: "7",
            },
        ];
        assert.deepEqual(expectedResults, filteredShoes);
    });

    it("It should return details of shoes that are size 4 and have a blue color", function () {
        let shoeCatalogueInstance = shoeCatalogue();

        let searchText = ""
        let brandName = "";
        let color = "blue";
        let size = "4";

        let filteredShoes = shoeCatalogueInstance.myFilterFunction(searchText,brandName, color, size);

        
        let expectedResults = [
            {
                title: "Chuck Taylor 70",
                brand: "Mike",
                color: "blue",
                price: 2700,
                in_stock: 26,
                size: "4",
            },
        ];
        assert.deepEqual(expectedResults, filteredShoes);
    });
});
