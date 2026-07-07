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

    res.json({
        status: "success",
        productId: req.params.id
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

    console.log(
        `Product ${req.params.id} transferred to ${newOwner}`
    );

    res.json({
        status: "success",
        productId: req.params.id,
        newOwner,
        message: "Ownership transferred successfully"
    });

};
