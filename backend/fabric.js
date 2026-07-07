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

        return [];

    }

    async transferOwnership(id, newOwner) {

        console.log(`Transfer ${id} -> ${newOwner}`);

        return {
            success: true
        };

    }

}

module.exports = new FabricService();
