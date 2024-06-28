class UserRepository {
  constructor(dbConnection) {
    this.db = dbConnection;
  }

  async getUserInformation() {
    
  }

  async login(user) {
    return await this.db
      .any('SELECT * from users WHERE username=${user.username} AND password = ${user.password}')
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log("ERROR:", error);
        return null;
      });
  }
}
