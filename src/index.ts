import cors from 'cors';
import { config } from 'dotenv';
import express, { Application } from 'express';
import morgan from 'morgan';
import DiscordClient from './utils/init';

// Initailizing env variables
config();

const token: string | undefined = process.env.TOKEN;
const clientId: string | undefined = process.env.CLIENT_ID;
const publicKey: string | undefined = process.env.PUBLIC_KEY;

// Making bot go online
DiscordClient(token);

// Initializing an express app
const app: Application = express();

// Server Port
const PORT: number | undefined = 3000 || process.env.PORT;

// Formatting incoming data and allowing cross origin requests
app.use(cors());
app.use(express.json());

// Logging
app.use(morgan('dev'));

// Listening on the port
app.listen(PORT, () => {
    console.log(`Server running on ${process.env.API_URL}`);
    // database();
});
