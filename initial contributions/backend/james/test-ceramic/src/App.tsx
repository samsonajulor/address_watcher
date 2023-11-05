import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useQueryContext } from "./context/QueryContext";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const USER_DATA = gql`
  query UserData($nodeId: ID!) {
    # viewer {
    #   id
    # }
    node(id: $nodeId) {
      ... on CeramicAccount {
        id
        userData {
          address
          email
        }
      }
    }
  }
`;

const ADD_EMAIL = gql`
  mutation AddUserData($input: CreateUserDataInput!) {
    createUserData(input: $input) {
      document {
        id
        email
        address
      }
    }
  }
`;

function App() {
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState<{
    email: string;
    address: string;
  }>();
  const { session, account } = useQueryContext();
  const { loading, error, data } = useQuery(USER_DATA, {
    variables: {
      nodeId: session.id,
    },
  });
  const [mutateFunction] = useMutation(ADD_EMAIL);

  useEffect(() => {
    if (!loading && !error && data) {
      const {
        node: { userData: dt },
      } = data;

      if (dt) {
        setUserData(dt);
      }
    }
  }, [loading, error, data]);

  const handleAdd = async () => {
    await mutateFunction({
      variables: {
        input: { content: { email: email, address: account } },
      },
    });
    setEmail("");
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button>Session ID is {session?.id}</button>
        <p>Email: {userData?.email}</p>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
