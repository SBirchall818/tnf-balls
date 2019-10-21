import config from './index';
import { sequelize } from '../models';
import bootstrap from './bootstrap';

export default function db() {
  return new Promise((resolve) => {
    sequelize.sync({ force: config.dropDatabaseOnRestart }).then(async () => {

      if (config.dropDatabaseOnRestart && config.bootstrapData) {
        // create initial data
        await bootstrap();
      }

      return resolve();
    });
  });
}
