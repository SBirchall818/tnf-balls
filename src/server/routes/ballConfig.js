import models from '../models';
import BallConfigService from '../services/ballConfig';
import { check, validationResult } from 'express-validator';

export default (app) => {
  app.post('/api/ballConfig/create', [
    check('userId').isInt(),
    check('makePublic').isBoolean(),
    check('ballArray').isArray()
  ], async (req, res) => {
    setTimeout(async () => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });
      // userId
      // ballArray: [{x, h, velX, velH, time}]
      const { userId, ballArray, makePublic } = req.body;
      
      const ballConfigServiceInstance = new BallConfigService(models.BallConfig, models.Ball, models.User);
      await ballConfigServiceInstance.createNewConfig({userId, ballArray, makePublic});
      
      return res.status(200).send({success: true});

    }, 500);
  });

  app.post('/api/ballConfig/:userId', [
    check('userId').isInt()
  ], async (req, res) => {
    setTimeout(async () => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });
  
      const userId = req.params.userId;
      const ballConfigServiceInstance = new BallConfigService(models.BallConfig, models.Ball, models.User);
    
      const { myBallConfigs, publicBallConfigs } = await ballConfigServiceInstance.getUsersConfigs(userId);
      return res.status(200).send({myBallConfigs, publicBallConfigs});

    }, 500);
  });

  app.post('/api/ballConfig/:userId/:ballConfigId', [
    check('ballConfigId').isInt()
  ], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

    const ballConfigId = req.params.ballConfigId;
    const userId = req.params.userId;

    const ballConfigServiceInstance = new BallConfigService(models.BallConfig, models.Ball, models.User);
    const balls = await ballConfigServiceInstance.getCompleteSetup(ballConfigId);

    return res.status(200).send({
      userId: userId,
      ballConfigId: ballConfigId,
      balls
    });
  });
};
