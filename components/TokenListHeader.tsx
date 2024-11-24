"use client";

import { useTokenList } from "@/contexts/TokenListContext";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { TokensSort, TokensType } from "@/lib/api";

export default function TokenListHeader() {
  const { totalNumber, sort, type, setSort, setType, setSearchTerm } =
    useTokenList();

  return (
    <div className="space-y-4 sticky">
      <h1 className="text-2xl font-bold">{totalNumber} tokens deployed</h1>
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          disabled
          className="pl-10"
          placeholder="Search by token name, symbol, or requestor..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <ToggleGroup type="single" value={sort} onValueChange={setSort}>
          <ToggleGroupItem value={TokensSort.DESC}>
            Newest First
          </ToggleGroupItem>
          <ToggleGroupItem value={TokensSort.ASC}>Oldest First</ToggleGroupItem>
        </ToggleGroup>
        <ToggleGroup type="single" value={type} onValueChange={setType}>
          <ToggleGroupItem value={TokensType.ALL}>All Types</ToggleGroupItem>
          <ToggleGroupItem value={TokensType.PROXY}>Proxy Only</ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}
