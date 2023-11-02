###### Setup interaction scripts to save users addresses to ipfs. by james due 12pm Saturday 4th of November, 2023.

```

composedb composite:create users.graphql --output=users-composite.json --did-private-key=<private-key>

composedb composite:compile users-composite.json runtime-composite.json

```
