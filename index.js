const express = require("express");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth");
const adminProductsRouter = require("./routes/admin/products");
const productsRouter = require("./routes/products");

const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cookieSession({
		keys: ["a298fj10jsdf1"],
	})
);
app.use(authRouter);
app.use(productsRouter);
app.use(adminProductsRouter);

app.listen(3000, () => {
	console.log("Listening");
});
