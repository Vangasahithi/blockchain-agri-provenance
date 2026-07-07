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
