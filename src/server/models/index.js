import Sequelize from 'sequelize';
import config from '../config';

const sequelize = new Sequelize(
  config.databaseName,
  config.databaseUser,
  config.databasePassword,
  {
    dialect: 'postgres',
    logging: false
  },
);

const models = {
  User: sequelize.import('./user'),
  BallConfig: sequelize.import('./ballConfig'),
  Ball: sequelize.import('./ball'),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
