import Web3 from 'web3';
import express from 'express';
import http from 'http';
import WebSocket from 'ws';
import decodeTxHash from '../utils/txDecoder.ts';

const sockets: string = 'wss://eth-sepolia.g.alchemy.com/v2/3RXLLPbaLaKav4sgsrTv2r5YK2Hpblay';

const web3 = new Web3(sockets);
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const mySepoliaAddress = '0xD4C42e502669947139D736b693C97b82D4d01F48';

wss.on('connection', async (ws) => {
  // Handle incoming WebSocket connections here
  console.log('Client connected');

  // Subscribe to Ethereum events
  const subscription = await web3.eth.subscribe('pendingTransactions');

  subscription.on('data', async (event) => {
    // ws.send(JSON.stringify(event));
    const data = await decodeTxHash(event);
    if (data === false) {
      console.log('I was supposed to stop');
      subscription.off('data', () => console.log('Sub was turned off'));
    }
    console.log(
      '<<<<<<<<<>>>>>>>>>>>><<<<<<<<<>>>>>>>>>>>><<<<<<<<<>>>>>>>>>>>><<<<<<<<<>>>>>>>>>>>>'
    );
    if (data?.to === mySepoliaAddress || data?.from === mySepoliaAddress) {
      console.log('I am supposed to send an email here');
      subscription.unsubscribe();
    }
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
