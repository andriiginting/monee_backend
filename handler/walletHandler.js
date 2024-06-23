class WalletHandlers {
    constructor(walletUseCase) {
        this.walletUseCase = walletUseCase;

        this.getWalletInformation = this.getWalletInformation.bind(this);
    }

    async getWalletInformation(req, res) {
        const walletData = await this.walletUseCase.getWalletData();
        console.log("usecase:"+walletData)
        let code = 200;
        let payload = {};
        if(walletData.length != 0) {
            payload = walletData
        } else {
            code = 404
            payload = {
                message: "Not found"
            }
        }

        res.status(code).send(payload)
    }
}

module.exports = WalletHandlers