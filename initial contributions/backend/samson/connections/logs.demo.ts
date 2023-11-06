import Web3 from 'web3';
import express from 'express';
import http from 'http';
import WebSocket from 'ws';

const sockets: string = 'wss://eth-sepolia.g.alchemy.com/v2/3RXLLPbaLaKav4sgsrTv2r5YK2Hpblay';

const web3 = new Web3(sockets);
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
// const wss = new WebSocket('ws://127.0.0.1:8545', { maxPayload: 1000 * 1024 * 1024 });
const dolapoAccountAbsContract = '0x2Dc05be382590198Ae61a514Db80f015bb1DAb27';

async function eventWatcher() {
  const data = await web3.eth.getBlockNumber();

  return Number(data);
}

wss.on('connection', async (ws) => {
  // Handle incoming WebSocket connections here
  console.log('Client connected');

  // Subscribe to Ethereum events
  const subscription = await web3.eth.subscribe('logs', {
    address: '0xD4C42e502669947139D736b693C97b82D4d01F48',
  });

  subscription.on('data', (event) => {
    console.log(event, 'event fetched');
    // ws.send(JSON.stringify(event));
  });

  ws.on('close', () => {
    console.log('Client disconnected');
    subscription.unsubscribe();
  });

  // Subscribe to new pending transactions
});

server.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});

eventWatcher().then((data) => {
  console.log(data);
});
