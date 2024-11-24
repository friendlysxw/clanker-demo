"use client";

import { useTokenList } from "@/contexts/TokenListContext";
import TokenCard from "./TokenCard";

export default function TokenListContent() {
  const { tokens } = useTokenList();

  if (tokens.length === 0) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-lg text-muted-foreground">Loading ...</p>
      </div>
    );
  }
  return (
    <div className="space-y-4">
      {tokens.map((token) => (
        <TokenCard key={token.id} token={token} />
      ))}
    </div>
  );
}
