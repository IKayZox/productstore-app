const express = require("express");
const Product = require("../model/product");

// now creating router which have all functionality of this Router().

const router = express.Router();
const productsController = require("../controllers/productsController");
router.get("/", productsController.getAllProducts);

// in the post we add data in body->raw->json->addData
router.post("/", productsController.addProducts);
module.exports = router;

// Now we want data by simply id(url). for this we want to create Id varibale in productsController.
router.get("/:id", productsController.getById);

// Now we use put method it used for update.
router.put("/:id", productsController.updateProducts);

// Now only need is delete.
router.delete("/:id", productsController.deleteProduct);
