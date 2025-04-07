import { default as express } from 'express';
import { exceptionFilterMiddleware } from './middleware/exception-filter-middleware.js';
import appRouter from './router.js';

const app = express();
app.use(express.json());
app.use(appRouter);
app.use(exceptionFilterMiddleware);

const port = process.env.PORT;
app.listen(port);
