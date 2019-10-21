const ball = (sequelize, DataTypes) => {
  const Ball = sequelize.define('ball', {
    x: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    h: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    velX: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    velH: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    time: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });

  Ball.associate = models => {
    Ball.belongsTo(models.BallConfig);
  };

  Ball.allBallsInBallConfig = async ballConfigId => {
    const result = await Ball.findAll({
      attributes: ['x', 'h', 'velX', 'velH', 'time'],
      where: { ballConfigId: ballConfigId },
      order: [
        ['time', 'DESC'],
      ],
    });

    return result;
  };

  return Ball;
};

export default ball;
