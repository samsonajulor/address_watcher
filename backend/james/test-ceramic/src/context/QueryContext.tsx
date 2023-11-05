import { ReactNode, createContext, useContext } from "react";
import { DIDSession } from "did-session";
import { ComposeClient } from "@composedb/client";
import { compose, session, account } from "../config/compose-client";

const QueryContext = createContext<{
  session: DIDSession;
  compose: ComposeClient;
  account: string;
}>({
  session,
  compose,
  account,
});

export const QueryContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <QueryContext.Provider
      value={{
        session,
        compose,
        account,
      }}
    >
      {children}
    </QueryContext.Provider>
  );
};

export const useQueryContext = () => {
  return useContext(QueryContext);
};
