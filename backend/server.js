const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { connectFabric } = require("./fabric");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", async (req, res) => {

    await connectFabric();

    res.json({
        status: "success",
        message: "Blockchain Backend Running"
    });

});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
