const productController = {
    carrito: (req, res) => {
        res.render('./product/carrito')
    },
    detail: (req, res) => {
        res.render('./product/product')
    },
    // admin: (req, res) => {
    //     res.render('./product/productEdit')
    // }
};

module.exports = productController;