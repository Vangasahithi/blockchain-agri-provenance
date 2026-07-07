const fabricService = require("../fabric");
exports.getProducts = async (req, res) => {

    res.json({
        status: "success",
        data: [
            {
                id: "P001",
                name: "Rice",
                farmer: "Ramesh",
                location: "Hyderabad",
                status: "Harvested"
            },
            {
                id: "P002",
                name: "Tomatoes",
                farmer: "Suresh",
                location: "Warangal",
                status: "In Transit"
            },
            {
                id: "P003",
                name: "Mangoes",
                farmer: "Anil",
                location: "Nagarkurnool",
                status: "Delivered"
            }
        ]
    });

};

exports.getProduct = async (req, res) => {

    const product = await fabricService.getProduct(req.params.id);

    if (!product) {
        return res.status(404).json({
            status: "error",
            message: "Product not found"
        });
    }

    res.json({
        status: "success",
        data: product
    });

};

exports.createProduct = async (req, res) => {

    const product = req.body;

    const result = await fabricService.createProduct(product);

    res.status(201).json({
        status: "success",
        result
    });

};
exports.transferOwnership = async (req, res) => {

    const { newOwner } = req.body;

    const result = await fabricService.transferOwnership(
        req.params.id,
        newOwner
    );

    res.json({
        status: "success",
        result
    });

};

    res.json({
        status: "success",
        productId: req.params.id,
        newOwner,
        message: "Ownership transferred successfully"
    });

};
