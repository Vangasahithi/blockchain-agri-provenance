function ProductDetails() {

    const product = {
        id: "P001",
        name: "Rice",
        farmer: "Ramesh",
        location: "Hyderabad",
        harvestDate: "2026-06-20",
        status: "Harvested"
    };

    return (
        <div style={{ marginBottom: "30px" }}>
            <h2>Product Details</h2>

            <p><strong>ID:</strong> {product.id}</p>
            <p><strong>Name:</strong> {product.name}</p>
            <p><strong>Farmer:</strong> {product.farmer}</p>
            <p><strong>Location:</strong> {product.location}</p>
            <p><strong>Harvest Date:</strong> {product.harvestDate}</p>
            <p><strong>Status:</strong> {product.status}</p>
        </div>
    );

}

export default ProductDetails;
