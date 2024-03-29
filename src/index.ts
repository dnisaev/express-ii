import express, {Request, Response} from 'express'
const app = express()
const port = 3000
const products = [{title: 'tomato'}, {title: "orange"}]
const addresses = [{value: 'Moscow'}, {value: "Minsk"}]

app.get('/products', (req: Request, res: Response) => {
  res.send(products)
})

app.get('/products/:productTitle', (req: Request, res: Response) => {
  let product = products.find(p => p.title === req.params.productTitle)

  if(product) {
    res.send(product)
  } else {
    res.send(404)
  }


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})