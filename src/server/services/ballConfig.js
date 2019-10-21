export default class BallConfigService {
  constructor(ballConfigModel, ballModel, userModel) {
    this.ballConfigModel = ballConfigModel;
    this.ballModel = ballModel;
    this.userModel = userModel;
  }

  async createNewConfig({userId, ballArray, makePublic}) {
    const ballConfig = await this.ballConfigModel.create({ userId, public: makePublic });
    const ballArrayWithConfigId = ballArray.map(ball => {
      const b = { ...ball };
      b.ballConfigId = ballConfig.id;
      return b;
    });
    await this.ballModel.bulkCreate(ballArrayWithConfigId);
  }

  async getUsersConfigs(userId) {
    const myBallConfigs = await this.ballConfigModel.availableConfigsCreatedByUser(userId);
    const publicBallConfigs = await this.ballConfigModel.publicConfigsAvailableToUser(userId, this.userModel);

    return { myBallConfigs, publicBallConfigs };
  }

  async getCompleteSetup(ballConfigId) {
    const balls = await this.ballModel.allBallsInBallConfig(ballConfigId);

    return balls;
  }
}
