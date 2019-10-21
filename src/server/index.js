import express from 'express';
import staticMiddleware from './middleware/static';
import routeLoggerMiddleware from './middleware/routeLogger';
import parseJson from './middleware/parseJson';
import userRoute from './routes/user';
import ballConfigRoute from './routes/ballConfig';
import config from './config';
import db from './config/db';


(async () => {
  const app = express();

  /**
   * Configure Middleware
   */
  staticMiddleware(app);
  routeLoggerMiddleware(app);
  parseJson(app);

  
  /**
   * Configure Routes
   */
  userRoute(app);
  ballConfigRoute(app);
  
  /**
   * Configure Database
   */
  await db();

  /**
   * Attach to Port
   */
  app.listen(config.apiPort, () => console.log(`Listening on port ${config.apiPort}!`));
})();
