import config from './src/configs/db-configs.js'
import pkg from 'pg' 
import express from 'express';
const { Client }  = pkg;
const app = express();

const client = new Client(config); 
await client.connect();




