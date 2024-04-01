"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRouter = void 0;
const express_1 = require("express");
const addresses = [{ id: 1, value: 'Moscow' }, { id: 2, value: "Minsk" }];
exports.addressesRouter = (0, express_1.Router)({});
exports.addressesRouter.get('/:id', (req, res) => {
    let address = addresses.find(a => a.id === +req.params.id);
    if (address) {
        res.send(address);
    }
    else {
        res.send(404);
    }
});
