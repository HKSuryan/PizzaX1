//Transformation json-object and vice versa CRUD
import networkOperations from "../../../shared/services/networkcall.js";
import Product from "../model/product.js";

const productOperations = {
    products:[],
    dbproducts:[],
    async loadProducts(){
        const pizza = await networkOperations.getData(process.env.REACT_APP_URL);
        const pizzaArray = pizza['Vegetarian'];
        const productArray = pizzaArray.map(pizza=>{
            const currentPizza = new Product(pizza.id,pizza.name,pizza.menu_description,pizza.price,pizza.assets.product_details_page[0].url)
            return currentPizza;
        })
        console.log("Product array is",productArray);
        console.log("THISSS",this.products);
        this.products =productArray;
        return productArray;
    },
    async loaddbProducts(){
        const pizza = await networkOperations.getData(process.env.REACT_APP_PIZZA_SHOW);
        const pizzaArray = pizza;
        console.log(pizza);
        const productArray = pizzaArray.map(pizza=>{
            const currentPizza = new Product(pizza.pizzaId,pizza.pizzaName,pizza.pizzaDesc,pizza.pizzaPrice,pizza.pizzaSrc)
            return currentPizza;
        })
        this.dbproducts = productArray;

        return productArray;
    },
    getProductsInCart(){
        console.log(this.products);
        const productInCart = this.products.filter(product=>product.isAddedInCart).concat(this.dbproducts.filter(product=>product.isAddedInCart));
        return productInCart;
    },
    sortProducts(){}

}
export default productOperations;