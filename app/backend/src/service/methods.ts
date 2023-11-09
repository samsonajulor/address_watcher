import { authenticateCeramic } from './auth';
import { ceramic, composeClient } from '../config/ceramic/composedb';
import { GenericAnyType } from '../@types';

export const getUserData = async (user = '0xD4C42e502669947139D736b693C97b82D4d01F48') => {
  try {
    await authenticateCeramic(ceramic as any, composeClient, user);
    if (ceramic.did !== undefined) {
      const profile = await composeClient.executeQuery(`
        query {
          viewer {
            basicProfile {
              id
              owner
              email
            }
          }
        }
      `);

      return profile;
    }
  } catch (error: GenericAnyType) {
    console.log(error);
    throw new Error(error.message || 'Something went wrong');
  }
};

export const updateUserData = async (profile: {
  addresses: string;
  email: string;
  owner: string;
  subscriptionType: {
    txIn: number;
    txOut: number;
  };
  notificationType: {
    email: number;
    sms: number;
  };
}) => {
  try {
    await authenticateCeramic(ceramic as any, composeClient, profile.owner);
    const update = await composeClient.executeQuery(`
        mutation {
          createBasicProfile(input: {
            content: {
              owner: "${profile.owner}"
              email: "${profile?.email}"
            }
          }) 
          {
            document {
              owner
              email
            }
          }
        }
      `);

    return update;
  } catch (error: GenericAnyType) {
    console.log(error);
    throw new Error(error.message || 'Something went wrong');
  }
};
