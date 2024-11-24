"use client";

import { TokenDetailsProvider } from "@/contexts/TokenDetailsContext";
import { TokenListProvider } from "@/contexts/TokenListContext";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TokenListProvider>
      <TokenDetailsProvider>{children}</TokenDetailsProvider>
    </TokenListProvider>
  );
}
