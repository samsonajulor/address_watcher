import app from './index';
import { logger } from './config';
import { AddressInfo } from 'net';
import { createServer } from 'http';

const server = createServer(app);

async function startApp() {
  try {
    logger('connect:', 'connected to database');

    const service: any = server.listen(process.env.PORT || 5000, () => {
      const { port, address } = service.address() as AddressInfo;
      console.log(`Server is running on http://${address}:${port}`);
    });
  } catch (error: any) {
    logger('tried to start app', JSON.stringify(error.message));
    process.exit(1);
  }
}

startApp();
