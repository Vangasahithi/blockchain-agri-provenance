
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./components/ProductCard";

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
<>
    <Navbar />

    <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>Blockchain-Based Provenance Tracking and Tamper Detection</h1>

          <Home />

<h2>Agricultural Products</h2>

            {products.length === 0 ? (
                <p>No products available.</p>
            ) : (
                products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))
            )}
           </div>
</>
    );
}

export default App;
