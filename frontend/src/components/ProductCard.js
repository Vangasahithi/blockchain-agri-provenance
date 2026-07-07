function ProductCard({ product }) {

    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "15px",
                marginBottom: "15px"
            }}
        >
            <h3>{product.name}</h3>

            <p><strong>ID:</strong> {product.id}</p>
            <p><strong>Farmer:</strong> {product.farmer}</p>
            <p><strong>Location:</strong> {product.location}</p>
            <p><strong>Status:</strong> {product.status}</p>
        </div>
    );

}

export default ProductCard;
