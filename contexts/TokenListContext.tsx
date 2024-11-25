"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Token } from "@/types/token";
import { getTokens, TokensSort, TokensType } from "@/lib/api";

export enum AsyncRequestStatus {
  IDLE = "idle",
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}

type TokenListContextType = {
  tokens: Token[];
  totalNumber: number;
  hasMore: boolean;
  requestStatus: AsyncRequestStatus;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  sort: TokensSort;
  setSort: (sort: TokensSort) => void;
  type: TokensType;
  setType: (type: TokensType) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
};

const TokenListContext = createContext<TokenListContextType | undefined>(
  undefined
);

const ITEMS_PER_PAGE = 10;
export function TokenListProvider({ children }: { children: ReactNode }) {
  const [tokens, setTokens] = useState<Token[]>([]);
  const [totalNumber, setTotalNumber] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [requestStatus, setRequestStatus] = useState(AsyncRequestStatus.IDLE);

  const [filter, setFilter] = useState({
    sort: TokensSort.DESC,
    type: TokensType.ALL,
    page: 1,
    q: "",
  });
  const { sort, type, page: currentPage, q: searchTerm } = filter;

  const setSearchTerm = (term: string) => setFilter({ ...filter, q: term });
  const setSort = (sort: TokensSort) => setFilter({ ...filter, sort, page: 1 });
  const setType = (type: TokensType) => setFilter({ ...filter, type, page: 1 });
  const setCurrentPage = (page: number) => setFilter({ ...filter, page });

  const fetchTokens = async ({
    sort,
    page,
    type,
  }: {
    sort: TokensSort;
    page: number;
    type: TokensType;
  }) => {
    setRequestStatus(AsyncRequestStatus.PENDING);
    try {
      const { data, total, hasMore } = await getTokens({
        sort,
        page,
        type,
      });
      setTokens(data);
      setTotalNumber(total);
      setHasMore(hasMore);
      setRequestStatus(AsyncRequestStatus.FULFILLED);
    } catch (err) {
      setRequestStatus(AsyncRequestStatus.REJECTED);
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTokens(filter);
  }, [filter]);

  return (
    <TokenListContext.Provider
      value={{
        tokens,
        totalNumber,
        hasMore,
        requestStatus,
        searchTerm,
        setSearchTerm,
        sort,
        setSort,
        type,
        setType,
        currentPage,
        setCurrentPage,
        totalPages: Math.ceil(totalNumber / ITEMS_PER_PAGE),
      }}
    >
      {children}
    </TokenListContext.Provider>
  );
}

export function useTokenList() {
  const context = useContext(TokenListContext);
  if (context === undefined) {
    throw new Error("useTokenList must be used within a TokenListProvider");
  }
  return context;
}
