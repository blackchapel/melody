import cors from 'cors';
import { config } from 'dotenv';
import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import DiscordClient from './utils/init';
import path from 'path';
import { createReadStream } from 'fs';
import serveFavicon from 'serve-favicon';

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
app.use(serveFavicon(path.join('public', 'favicon.ico')));

// Logging
app.use(morgan('dev'));

// Test API endpoint
app.use('/api', (req: Request, res: Response) => {
    res.status(200).json({
        message: `Server running on ${process.env.API_URL}`
    });
});

// Listening on the port
app.listen(PORT, () => {
    console.log(`Server running on ${process.env.API_URL}`);
    // database();
});
