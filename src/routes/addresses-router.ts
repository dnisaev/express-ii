import {Request, Response, Router} from "express";

const addresses = [{id: 1, value: 'Moscow'}, {id: 2, value: "Minsk"}]

export const addressesRouter = Router({})

addressesRouter.get('/:id', (req: Request, res: Response) => {
    let address = addresses.find(a => a.id === +req.params.id)

    if (address) {
        res.send(address)
    } else {
        res.send(404)
    }
})