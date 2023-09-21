import * as https from 'https';
import * as fs from 'fs';
import { dirname, join} from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import { App } from './App.ts';

const PORT = process.env.PORT;

const __filename: string = fileURLToPath(import.meta.url);
const __dirname: string = dirname(__filename);

const serverOption = {
    key: fs.readFileSync(join(__dirname,  "..", '/credentials', "/key.pem")),
    cert: fs.readFileSync(join(__dirname, "..", "/credentials", '/cert.pem'))
};

const server = https.createServer(serverOption, new App().express);

server.listen(3000, () => {
    console.log("Server is Running", PORT)
})
