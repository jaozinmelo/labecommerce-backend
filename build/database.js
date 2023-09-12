"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProductByName = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.products = exports.users = void 0;
exports.users = [
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
];
exports.products = [
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
];
const createUser = (id, name, email, password) => {
    const createdAt = new Date().toISOString();
    const user = {
        id: id,
        name: name,
        email: email,
        password: password,
        createdAt: createdAt
    };
    exports.users.push(user);
    return `Cadastro realizado com sucesso`;
};
exports.createUser = createUser;
const getAllUsers = () => {
    return exports.users;
};
exports.getAllUsers = getAllUsers;
const createProduct = (id, name, price, description, imageUrl) => {
    const product = {
        id: id,
        name: name,
        price: price,
        description: description,
        imageUrl: imageUrl
    };
    exports.products.push(product);
    return `Produto criado com sucesso`;
};
exports.createProduct = createProduct;
const getAllProducts = () => {
    return exports.products;
};
exports.getAllProducts = getAllProducts;
const searchProductByName = (name) => {
    const findProduct = exports.products.filter((product) => {
        return product.name.toLowerCase().includes(name.toLowerCase());
    });
    return findProduct;
};
exports.searchProductByName = searchProductByName;
