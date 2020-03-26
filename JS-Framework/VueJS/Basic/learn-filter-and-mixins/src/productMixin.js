export const productMixin = {
    data() {
        return {
            products: [
                "Apple",
                "Samsung",
                "HTC",
                "Nokia",
                "Xiaomi",
                "Noway",
                "Bphone",
                "Oppo",
                "Bla bla"
            ],
            filterProduct: ""
        };
    },
    computed: {
        filteredProducts() {
            return this.products.filter(item =>
                item.toLowerCase().match(this.filterProduct.toLowerCase())
            );
        }
    },
    created() {
        console.log('Created from mixins');
    },
};