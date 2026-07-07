function Navbar() {

    return (
        <nav
            style={{
                backgroundColor: "#1B5E20",
                color: "white",
                padding: "18px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "8px"
            }}
        >
            <h2>🌾 Blockchain Agri Provenance</h2>

            <div>
                <span style={{ marginRight: "20px" }}>Dashboard</span>
                <span style={{ marginRight: "20px" }}>Products</span>
                <span style={{ marginRight: "20px" }}>Blockchain</span>
                <span>Supply Chain</span>
            </div>
        </nav>
    );

}

export default Navbar;
