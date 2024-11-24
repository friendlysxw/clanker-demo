import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Token } from "@/types/token";
import dayjs from "dayjs";
import Link from "next/link";
import { Badge } from "../ui/badge";

export default function TokenDetailsCard({ token }: { token: Token }) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-4">
        <img
          src={token.img_url}
          alt={token.name}
          className="rounded-full size-24"
        />
        <div className="flex-1 space-y-1">
          <h3 className="font-semibold">{token.name}</h3>
          <p className="flex items-center gap-2">
            {" "}
            <span className="text-sm text-muted-foreground">
              {token.symbol}
            </span>
            <Badge>{token.type}</Badge>
            <span className="text-sm text-muted-foreground">
              {dayjs(token.created_at).fromNow()}
            </span>
          </p>
          <p className="text-sm text-muted-foreground">
            Requestor: {token.requestor_fid}
          </p>
          <p className="text-sm text-muted-foreground">
            Address: {token.contract_address}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Link
              href={`https://dexscreener.com/base/${token.pool_address}`}
              target="_blank"
            >
              <Button size="sm" variant="outline">
                DexScreener
              </Button>
            </Link>

            <Link
              href={`https://basescan.org/token/${token.contract_address}`}
              target="_blank"
            >
              <Button size="sm" variant="outline">
                BaseScan
              </Button>
            </Link>
            {/* <Button size="sm" variant="outline">
              Swap
            </Button>
            <Button size="sm" variant="outline">
              Add to Wallet
            </Button> */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
