import { useState } from "react";
import axios from "axios";

function AddProduct() {

    const [product, setProduct] = useState({
        id: "",
        name: "",
        farmer: "",
        location: "",
        harvestDate: "",
        status: ""
    });

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                "http://localhost:5000/api/products",
                product
            );

            alert("Product added successfully!");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={{ marginBottom: "30px" }}>
            <h2>Add Product</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="id"
                    placeholder="Product ID"
                    onChange={handleChange}
                /><br /><br />

                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    onChange={handleChange}
                /><br /><br />

                <input
                    type="text"
                    name="farmer"
                    placeholder="Farmer"
                    onChange={handleChange}
                /><br /><br />

                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    onChange={handleChange}
                /><br /><br />

                <input
                    type="date"
                    name="harvestDate"
                    onChange={handleChange}
                /><br /><br />

                <input
                    type="text"
                    name="status"
                    placeholder="Status"
                    onChange={handleChange}
                /><br /><br />

                <button type="submit">
                    Add Product
                </button>

            </form>
        </div>
    );

}

export default AddProduct;
