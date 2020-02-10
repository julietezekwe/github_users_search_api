import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app = express();

app.get('/status', (req, res) => res.status(200)
  .json({ message: 'Welcome to search api' }));
app.enable('trust proxy');
// Enable Cross Origin Resource Sharing to all origins
app.use(cors());

// Log requests to the console.
const loggerFormat = '- [:date[web]] ":method :url" :status :response-time';

app.use(morgan(loggerFormat));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Define Route
app.use('/api/v1/', routes);

// error handlers
app.use('*', (req, res) => res.status(404).json({
  message: 'Well, will you help build this route? 🤷🏼‍♂️',
}));

const hostname = process.env.hostname || '127.0.0.1';
const port = process.env.port || 9000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API is listening on ${hostname}:${port}`);
});

export default app;
