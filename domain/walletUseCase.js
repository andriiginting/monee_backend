class WalletUseCase {
  constructor(walletRepository) {
    this.walletRepository = walletRepository;
  }

  async getWalletData() {
    const wallets = await this.walletRepository.getWalletData();

    if (wallets != null) {
      wallets.map(item => {
          item.currency = this.getCurrencyType(item.currency);
        return item;
      });

      return wallets;
    }

    return null;
  }

  getCurrencyType(currencyInNumber) {
    if (currencyInNumber == 1) return "JPY";
    else return "IDR";
  }
}

module.exports = WalletUseCase;
