class WalletRepository {
  constructor(dbConnection) {
    this.db = dbConnection;
  }

  async getWalletData() {
    const walletsRaw = []

    return await this.db
      .any("SELECT * from wallet")
      .then((data) => {
        console.log("DATA:", data)
        data.forEach(element => {
            walletsRaw.push(element)
        });

        return walletsRaw;
      })
      .catch((error) => {
        console.log("ERROR:", error);
        return null;
      });
  }

  async addWallet(wallet) {
    return await this.db
      .any("INSERT INTO wallet")
      .then((data) => {
        console.log("DATA:", data);
        data.forEach(element => {
            walletsRaw.push(element)
        });

        return walletsRaw;
      })
      .catch((error) => {
        console.log("ERROR:", error);
        return null;
      });
  }
}

module.exports = WalletRepository