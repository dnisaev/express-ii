"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const products = [{ title: 'tomato' }, { title: "orange" }];
const addresses = [{ value: 'Moscow' }, { value: "Minsk" }];
app.get('/products', (req, res) => {
    res.send(products);
});
app.get('/products/:productTitle', (req, res) => {
    let product = products.find(p => p.title === req.params.productTitle);
    if (product) {
        res.send(product);
    }
    else {
        res.send(404);
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
