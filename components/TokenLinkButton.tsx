"use client";

import { useTokenDetails } from "@/contexts/TokenDetailsContext";
import { Button } from "./ui/button";
import { Token } from "@/types/token";

export default function TokenLinkButton({ token }: { token: Token }) {
  const { setToken } = useTokenDetails();

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={() => {
        setToken(token);
      }}
    >
      Token page
    </Button>
  );
}
