class FabricService {

    async connect() {
        console.log("Connected to Hyperledger Fabric");
    }

    async createProduct(product) {

        console.log("Submitting Product:", product);

        return {
            success: true,
            product
        };

    }

async getProducts() {

    return [
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
    ];

}
    async getProduct(id) {

    const products = await this.getProducts();

    return products.find(product => product.id === id);

}

    async transferOwnership(id, newOwner) {

        console.log(`Transfer ${id} -> ${newOwner}`);

        return {
            success: true
        };

    }

}

module.exports = new FabricService();
