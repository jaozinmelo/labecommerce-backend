import { TPerson, TProduct } from "./types";

export const users: Array<TPerson> = [
    {
        id: "001",
        name: "João Pedro",
        email: "joaopedro@email.com",
        password: "joao123",
        createdAt: new Date().toLocaleString()
    },
    {
        id: "002",
        name: "Guilherme",
        email: "guilherme@email.com",
        password: "guilherme123",
        createdAt: new Date().toLocaleString()
    }
]

export const products: TProduct[] = [
    {
        id: "prod001",
        name: "Mouse gamer",
        price: 250,
        description: "Melhor mouse do mercado!",
        imageUrl: "https://picsum.photos/seed/Mouse%20gamer/400"
    },
    {
        id: "prod002",
        name: "Monitor",
        price: 900,
        description: "Monitor LED Full HD 24 polegadas",
        imageUrl: "https://picsum.photos/seed/Monitor/400"
    }
]

export const createUser = (id: string, name: string, email: string, password: string): string => {
    const createdAt = new Date().toISOString()
    const user: TPerson = {
        id: id,
        name: name,
        email: email,
        password: password,
        createdAt: createdAt
    }

    users.push(user)
    return `Cadastro realizado com sucesso`
}

export const getAllUsers = (): TPerson[] => {
    return users
}


export const createProduct = (id: string, name: string, price: number, description: string, imageUrl: string): string => {

    const product: TProduct = {
        id,
        name,
        price,
        description,
        imageUrl
    }

    products.push(product)
    return `Produto criado com sucesso`
}

export const getAllProducts = (): TProduct[] => {
    return products
}

export const searchProductByName = (name: string): TProduct[] => {
    const findProduct = products.filter((product) => {
        return product.name.toLowerCase().includes(name.toLowerCase())
    })

    return findProduct
}