"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Token } from "@/types/token";

type TokenDetailsContextType = {
  token: Token | null;
  setToken: (token: Token) => void;
};

const TokenDetailsContext = createContext<TokenDetailsContextType | undefined>(
  undefined
);

export function TokenDetailsProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<Token | null>(null);

  return (
    <TokenDetailsContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </TokenDetailsContext.Provider>
  );
}

export function useTokenDetails() {
  const context = useContext(TokenDetailsContext);
  if (context === undefined) {
    throw new Error(
      "useTokenDetails must be used within a TokenDetailsProvider"
    );
  }
  return context;
}
