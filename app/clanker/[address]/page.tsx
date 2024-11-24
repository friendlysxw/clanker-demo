import {
  TokenDetailsCardContent,
  TokenPriceChartContent,
  TokenSwapContent,
} from "@/components/token-details/TokenDetailsContent";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";

export default function Page({
  params,
}: {
  params: {
    address: string;
  };
}) {
  const { address } = params;
  console.log(address);

  return (
    <div className="min-h-screen bg-background">
      {/* Main container with max width and center alignment */}
      <div className="mx-auto max-w-screen-xl p-4">
        {/* Three column layout */}
        <div className="">
          <div className="mt-4">
            <Link href="/">
              <Button size="sm" variant="outline">
                ← Back to All Tokens
              </Button>
            </Link>
          </div>
          <div className="mt-4">
            {" "}
            <Suspense fallback={<div>Loading ...</div>}>
              <TokenDetailsCardContent />
            </Suspense>
          </div>
          <div className="flex flex-row gap-4 mt-4">
            {" "}
            <div className="flex-1">
              {" "}
              <Suspense fallback={<div>Loading ...</div>}>
                <TokenPriceChartContent />
              </Suspense>
            </div>
            <div className="flex-1">
              {" "}
              <Suspense fallback={<div>Loading ...</div>}>
                <TokenSwapContent />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
