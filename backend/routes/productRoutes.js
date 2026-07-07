const express = require("express");

const {
    getProducts,
    getProduct,
    createProduct,
    transferOwnership
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id/transfer", transferOwnership);

module.exports = router;
