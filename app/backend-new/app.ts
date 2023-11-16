import axios from 'axios';
import { print } from 'graphql';

// Define your GraphQL query
const userCount = `
  query {
    userDataCount
  }
`;

const getUserData = `
query Users($first: Int) {
  userDataIndex(first: $first) {
    edges {
      node {
        address
        email
      }
    }
  }
}
`;

// GraphQL server URL
const serverUrl = 'http://192.168.1.29:5005/graphql';

export const getUsers = async () => {
  try {
    const res = await axios.post(serverUrl, {
      query: userCount, // Convert the query to a string
    });

    const res2 = await axios.post(serverUrl, {
      query: getUserData,
      variables: {
        first: Number(res.data.data.userDataCount ?? 0),
      },
    });

    const {
      userDataIndex: { edges },
    } = res2.data.data;

    if (edges) {
      const newData = edges.map(({ node: arr }) => arr);
      console.log(newData);
      return newData;
    }
  } catch (error) {
    console.log(error);
  }
};
