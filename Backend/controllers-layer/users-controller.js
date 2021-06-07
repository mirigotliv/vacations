const express = require("express");
// const path = require("path"); // Node.js package dealing with paths
// const fs = require("fs");
// const ProductModel = require("../models/product-model");
const usersLogic = require("../business-logic-layer/users-logic");
const router = express.Router();

// // GET http://localhost:3001/api/products 
// router.get("/login", async (request, response) => {
//     console.log("login");
//     try {
//         const login = await logic.getAllProductsAsync();
//         response.json(login);
//     }
//     catch (err) {
//         response.status(500).send(err.message);
//     }
// });

// // GET http://localhost:3001/api/products/7     7 is a product id
// router.get("/:id", async (request, response) => {
//     try {
//         const id = +request.params.id;
//         const product = await logic.getOneProductAsync(id);
//         if (!product) return response.status(404).send(`id ${id} not found.`);
//         response.json(product);
//     }
//     catch (err) {
//         response.status(500).send(err.message);
//     }
// });

// // POST http://localhost:3001/api/products
// router.post("/", async (request, response) => {
//     try {
//         const product = new ProductModel(request.body);

//         // Need to call product.validatePost ...

//         // Extract the image file from the request:
//         const image = request.files && request.files.image ? request.files.image : null;
//         if (!image) return response.status(400).send("Missing image.");

//         const addedProduct = await logic.addProductAsync(product, image);

//         response.status(201).json(addedProduct);
//     }
//     catch (err) {
//         response.status(500).send(err.message);
//     }
// });

// // PUT http://localhost:3001/api/products/7     7 is a product id
// router.put("/:id", async (request, response) => {
//     try {
//         const id = +request.params.id;
//         const product = new ProductModel(request.body);
//         product.id = id;

//         // validation...

//         // Extract the image file from the request:
//         const image = request.files && request.files.image ? request.files.image : null;

//         const updatedProduct = await logic.updateProductAsync(product, image);
//         response.json(updatedProduct);
//     }
//     catch (err) {
//         console.log(err);
//         response.status(500).send(err.message);
//     }
// });

// // DELETE http://localhost:3001/api/products/7     7 is a product id
// router.delete("/:id", async (request, response) => {
//     try {
//         const id = +request.params.id;
//         await logic.deleteProductAsync(id);
//         response.sendStatus(204);
//     }
//     catch (err) {
//         response.status(500).send(err.message);
//     }
// });

// // GET http://localhost:3001/api/products/images/7.jpg
// router.get("/images/:name", (request, response) => {
//     try {
//         const name = request.params.name;
//         let absolutePath = path.join(__dirname, "..", "images", "products", name);
//         if (!fs.existsSync(absolutePath)) {
//             absolutePath = path.join(__dirname, "..", "images", "not-found.jpg");
//         }
//         response.sendFile(absolutePath);
//     }
//     catch (err) {
//         response.status(500).send(err.message);
//     }
// });

// module.exports = router;



// const express = require("express");
// const router = express.Router();
// const usersLogic = require("../business-logic-layer/users-logic");

//----------------------------------------//
router.get("/names", async (request, response) => {
    try {
        const names = await usersLogic.getUserNames();
        res.json(names);
    }
    catch (err) {
        res.status(500).json(err.message);
    }
});



// GET http://localhost:3001/api/products/7     7 is a product id
router.get("/:id", async (request, response) => {
    try {
        const userName = req.params.user;
        const user = await usersLogic.getOneUserAsync(userName);
        res.json(user);
    }
    catch (err) {
        res.status(500).json(err.message);
    }
});


router.patch("/", async (request, response) => {
    try {
        const userObj = req.body;
        const user = await usersLogic.updateUserAsync(userObj);
        res.json(user);
    }
    catch (err) {
        res.status(500).json(err.message);
    }
});



router.post("/", async (request, response) => {
    try {
        const userObj = req.body;
        const user = await usersLogic.addUserAsync(userObj);
        res.json(user);
    }
    catch (err) {
        res.status(500).json(err.message);
    }
});


module.exports = router;