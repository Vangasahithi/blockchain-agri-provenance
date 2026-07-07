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
        <div style={{ padding: "20px" }}>
            <h1>Blockchain-Based Provenance Tracking</h1>

            <h2>Products</h2>

            {products.length === 0 ? (
                <p>No products available.</p>
            ) : (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            {product.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;
