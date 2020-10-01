import express from 'express';
import './misc/env.js';
import './misc/db.js';
import notFoundMiddleware from './middlewares/notfound.js';
import errorMiddleware from './middlewares/error.js';

import mainRouter from './routes/mainRouter.js'

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//-----------------------------------------Routers
app.use('/', mainRouter);
//-----------------------------------------Routers


app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT ?? 3001;
app.listen(port, () => {
  console.log('Connected', port + '----------------------------------------------------------------------------->');
});
