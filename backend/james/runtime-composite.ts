import { RuntimeCompositeDefinition } from "@composedb/types";

const rt: RuntimeCompositeDefinition = {
  models: {
    UserData: {
      id: "kjzl6hvfrbw6c6xr8zctzt6gejfjltb5qpqbkstx3hbmkoi9615p7tzefb2cj3z",
      accountRelation: { type: "single" },
    },
  },
  objects: {
    UserData: {
      email: { type: "string", required: true },
      address: { type: "string", required: true },
    },
  },
  enums: {},
  accountData: { userData: { type: "node", name: "UserData" } },
};

export default rt;
