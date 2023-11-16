import { serveEncodedDefinition } from '@composedb/devtools-node';

/**
 * Runs GraphiQL server to view & query composites.
 */
let server;

serveEncodedDefinition({
  ceramicURL: 'http://localhost:7007',
  graphiql: true,
  path: './src/__generated__/definition.json',
  port: 5001,
}).then((_server) => {
  server = _server;
  console.log(`Server started on ${server.url}`);
});

console.log(`Server started on ${server.url}`);

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Server stopped');
  });
});
