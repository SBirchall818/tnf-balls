const user = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
    },
  });

  User.associate = models => {
    User.hasMany(models.BallConfig, { onDelete: 'CASCADE'});
  };

  User.returnAll = async () => {
    const users = await User.findAll({
      attributes: ['id', 'username']
    });

    return users
  };

  return User;
};

export default user;
