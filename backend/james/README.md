###### Setup interaction scripts to save users addresses to ipfs. by james due 12pm Saturday 4th of November, 2023.

```
<!-- Set Up Ceramic -->
npm i -g @ceramicnetwork/cli @composedb/cli@^0.5.0 @composedb/devtools@^0.5.0 @composedb/devtools-node@^0.5.0

npx @ceramicnetwork/cli daemon

<!-- IMPORTANT: Ceramic API running on 0.0.0.0:7007 -->

<!-- DB Basic command (Ask for private key from me) -->
composedb composite:create users.graphql --output=users-composite.json --did-private-key=<private-key>

composedb composite:compile users-composite.json runtime-composite.json

```
