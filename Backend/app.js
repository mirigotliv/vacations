global.config = require("./config.json");

const express = require("express");
const cors = require("cors");
const usersController = require("./controllers-layer/users-controller");
const server = express();

server.use(cors());
server.use(express.json());
server.use("/api", () => usersController);


server.listen(3001, () => {
    server.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        next()
    })
    server.use('/register', () => {
        console.log("aaa");
    })
    console.log("Listening...");
})