import { useState } from "react";
import axios from "axios";

function TransferOwnership() {

    const [productId, setProductId] = useState("");
    const [newOwner, setNewOwner] = useState("");

    const handleTransfer = async (e) => {
        e.preventDefault();

        try {
            await axios.put(
                `http://localhost:5000/api/products/${productId}/transfer`,
                {
                    newOwner
                }
            );

            alert("Ownership transferred successfully!");

            setProductId("");
            setNewOwner("");

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div style={{ marginBottom: "30px" }}>
            <h2>Transfer Ownership</h2>

            <form onSubmit={handleTransfer}>

                <input
                    type="text"
                    placeholder="Product ID"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="New Owner"
                    value={newOwner}
                    onChange={(e) => setNewOwner(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Transfer Ownership
                </button>

            </form>
        </div>
    );

}

export default TransferOwnership;
