import express, { Request, Response, query } from 'express'
import cors from 'cors'
import { TPerson, TProduct } from './types'
import { createProduct, createUser, products, users } from './database'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})
//


app.get("/ping", (req: Request, res: Response) => {
    res.send("pong!")
})

//

app.get("/users", (req: Request, res: Response) => {
    const resultUsers: TPerson[] = users
    res.status(200).send(resultUsers)
})

// app.get("/products", (req: Request, res: Response) => {
//     const resultProducts: TProduct[] = products
//     res.status(200).send(resultProducts)
// }
// )
//REFATORADO
app.get("/products", (req: Request, res: Response) => {
    const q: string = req.query.q as string;
    const resultProducts: TProduct[] = products

    if (!q) {
        return res.status(200).send(resultProducts)
    } else {
        const searchProductsByName: TProduct[] = products.filter(product => product.name.toLowerCase().includes(q.toLowerCase()))
        return res.status(200).send(searchProductsByName)
    }
})

app.post("/users", (req: Request, res: Response): void => {
    const { id, name, email, password }: {
        //TIPAGEM DIRETA
        id: string,
        name: string,
        email: string,
        password: string
    } = req.body

    const newUser = createUser(id, name, email, password)

    res.status(201).send(newUser)
})

//

app.post("/products", (req: Request, res: Response) => {
    const { id, name, price, description, imageUrl }: TProduct = req.body
    //createProduct() é uma função que vem do database.ts
    const newProduct = createProduct(id, name, price, description, imageUrl)
    res.status(201).send(newProduct)
})