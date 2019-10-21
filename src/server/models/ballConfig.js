import { Op } from 'sequelize';

const ballConfig = (sequelize, DataTypes) => {
  const BallConfig = sequelize.define('ballConfig', {
    public: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  BallConfig.associate = models => {
    BallConfig.belongsTo(models.User);
    BallConfig.hasMany(models.Ball);
  };

  BallConfig.availableConfigsCreatedByUser = async (userId) => {
    const result = await BallConfig.findAll({
      attributes: ['id', 'createdAt'],
      where: { userId: userId }
    });
    return result;
  };

  BallConfig.publicConfigsAvailableToUser = async (userId, userModel) => {
    const result = await BallConfig.findAll({
      attributes: ['id', 'createdAt'],
      include: [{
        model: userModel, attributes: ['id', 'username']
      }],
      where: {
        public: true,
        userId: { [Op.ne]: userId },
      }
    });

    return result;
  };

  return BallConfig;
};

export default ballConfig;
