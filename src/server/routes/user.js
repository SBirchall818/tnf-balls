import models from '../models';
import UserService from '../services/user';

export default (app) => {
  app.post('/api/users', (req, res) => {
    setTimeout(async () => {
      const userServiceInstance = new UserService(models.User);
      const users = await userServiceInstance.findAllUsers();
      return res.send({users})

    }, 500)
  });
};
