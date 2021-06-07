class ProductModel {

    constructor(product) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        this.stock = product.stock;
        this.imageName = product.imageName;
    }

}

module.exports = ProductModel;
