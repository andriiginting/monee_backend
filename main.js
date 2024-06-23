require('dotenv').config()
const { APP_PORT } = process.env

const express = require('express');
const app = express();
const PORT = APP_PORT;

//initialize deps
const dbService = require('./data/DatabaseService')
const WalletRepository = require('./repository/walletRepository')
const WalletHandlers = require('./handler/walletHandler')
const WalletUseCase = require('./domain/walletUseCase');

const walletRepository = new WalletRepository(dbService);
const walletUseCase = new WalletUseCase(walletRepository);

const walletHandler = new WalletHandlers(walletUseCase);

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "ok" });
});

app.get('/wallet', walletHandler.getWalletInformation);

// run and listen port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});