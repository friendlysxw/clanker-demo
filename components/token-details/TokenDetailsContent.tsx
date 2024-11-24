"use client";

import { useTokenDetails } from "@/contexts/TokenDetailsContext";
import TokenDetailsCard from "./TokenDetailsCard";
import TokenPriceChart from "./TokenPriceChart";
import TokenSwap from "./TokenSwap";

export function TokenDetailsCardContent() {
  const { token } = useTokenDetails();
  if (!token) return null;
  return <TokenDetailsCard token={token} />;
}

export function TokenPriceChartContent() {
  const { token } = useTokenDetails();
  if (!token) return null;
  return <TokenPriceChart token={token} />;
}

export function TokenSwapContent() {
  const { token } = useTokenDetails();
  if (!token) return null;
  return <TokenSwap token={token} />;
}
