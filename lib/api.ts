import { Token } from "@/types/token";

export enum TokensSort {
  ASC = "asc",
  DESC = "desc",
}

export enum TokensType {
  ALL = "all",
  PROXY = "proxy",
}

export async function getTokens({
  sort,
  page,
  type,
}: {
  sort: TokensSort;
  page: number;
  type: TokensType;
}): Promise<{
  data: Array<Token>;
  total: number;
  hasMore: boolean;
}> {
  const response = await fetch(
    `/api/tokens?sort=${sort}&page=${page}&type=${type}`
  );
  const data = await response.json();
  return data;
}
