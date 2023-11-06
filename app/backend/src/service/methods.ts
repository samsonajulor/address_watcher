import { authenticateCeramic } from './auth'
import { ceramic, composeClient } from '../config/ceramic/composedb';

export const getUserData = async (user = '0xD4C42e502669947139D736b693C97b82D4d01F48') => {
    await authenticateCeramic(ceramic as any, composeClient, user);
    if (ceramic.did !== undefined) {
      const profile = await composeClient.executeQuery(`
        query {
          viewer {
            basicProfile {
              id
              address
              email
            }
          }
        }
      `);

      return profile;
    }
  };

export  const updateUserData = async (profile: { address: string, email: string, owner: string}) => {
    await authenticateCeramic(ceramic as any, composeClient, profile.owner);
    const update = await composeClient.executeQuery(`
        mutation {
          createBasicProfile(input: {
            content: {
              address: "${profile?.address}"
              email: "${profile?.email}"
            }
          }) 
          {
            document {
              address
              email
            }
          }
        }
      `);
  };