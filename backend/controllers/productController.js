exports.getProducts = async (req, res) => {

    res.json({
        status: "success",
        products: [
            {
                id: "P001",
                name: "Rice",
                farmer: "Ramesh",
                location: "Hyderabad",
                status: "Harvested"
            },
            {
                id: "P002",
                name: "Wheat",
                farmer: "Suresh",
                location: "Warangal",
                status: "Transported"
            }
        ]
    });

};
