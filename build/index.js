"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
// console.log(createUser("u003", "Astrodev", "astrodev@email.com", "astrodev99"));
// console.log(getAllUsers());
// console.log(createProduct("prod003", "SSD gamer", 349.99, "Acelere seu sistema com velocidades incríveis de leitura e gravação.", "https://images.unsplash.com/photo"));
// console.log(getAllProducts());
console.log((0, database_1.searchProductByName)("gamer"));