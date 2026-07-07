exports.getProducts = async (req, res) => {
    res.json({
        status: "success",
        message: "All Products",
        data: []
    });
};

exports.getProduct = async (req, res) => {
    res.json({
        status: "success",
        productId: req.params.id
    });
};

exports.createProduct = async (req, res) => {
    res.json({
        status: "success",
        message: "Product Created",
        product: req.body
    });
};

exports.transferOwnership = async (req, res) => {
    res.json({
        status: "success",
        productId: req.params.id,
        message: "Ownership Transferred"
    });
};
