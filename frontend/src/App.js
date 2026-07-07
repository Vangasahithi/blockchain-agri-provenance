import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/products")
            .then((response) => {
                setProducts(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>Blockchain-Based Provenance Tracking</h1>

            <h2>Agricultural Products</h2>

            {products.length === 0 ? (
                <p>No products available.</p>
            ) : (
                products.map((product) => (
                    <div
                        key={product.id}
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
                ))
            )}
        </div>
    );
}

export default App;
