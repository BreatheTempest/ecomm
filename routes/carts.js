const express = require("express");

const router = express.Router();

// Recieve a post request to add an item to a cart
router.post("/cart/products", (req, res) => {
	// Figure out the cart!

	// Either increment quantity
	// Or add new product

	res.send("Product added");
});
// Recieve a GET to show

// Recieve a post to delete

module.exports = router;
