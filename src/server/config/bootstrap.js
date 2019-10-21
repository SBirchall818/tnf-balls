import models from '../models';

export default async function bootstrap() {
  await models.User.create({ username: 'Simon'});
  await models.User.create({ username: 'Joel'});
  await models.User.create({ username: 'Amy'});

  const ballConfig = await models.BallConfig.create({ userId: 1, public: true });
  await models.Ball.bulkCreate([
    { x: 100, h: 100, ballConfigId: ballConfig.id },
    { x: 50, h: 350, time: 1250, ballConfigId: ballConfig.id },
  ]);
}
