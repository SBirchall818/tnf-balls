export default class UserService {
  constructor(userModel) {
    this.userModel = userModel;
  }

  async findAllUsers() {
    const result = await this.userModel.returnAll();
    return result;
  }
}
