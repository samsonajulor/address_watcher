/* eslint-disable import/prefer-default-export */
// This is an auto-generated file, do not edit manually
export const definition = {
  models: {
    BasicProfile: {
      id: 'kjzl6hvfrbw6c5k1ktd47rmh34sjor06zil6w770ol1291mmwt4g0eyz2xmir09',
      accountRelation: { type: 'single' },
    },
  },
  objects: {
    BasicProfile: {
      name: { type: 'string', required: true },
      emoji: { type: 'string', required: false },
      gender: { type: 'string', required: false },
      description: { type: 'string', required: false },
    },
  },
  enums: {},
  accountData: { basicProfile: { type: 'node', name: 'BasicProfile' } },
};
