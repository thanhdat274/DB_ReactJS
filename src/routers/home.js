import express from "express";

const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
    res.send(`
    <h1>Home Page</h1>    
    `)
})

export default homeRouter