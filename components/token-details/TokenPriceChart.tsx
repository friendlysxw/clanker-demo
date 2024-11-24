import { Token } from "@/types/token";

export default function TokenPriceChart({ token }: { token: Token }) {
  const { pool_address } = token;
  return (
    <div className="w-full">
      <p className="font-bold text-xl mb-4">Price Chart</p>
      <iframe
        src={`https://dexscreener.com/base/${pool_address}?embed=1&info=0`}
        className="w-full h-[660px]"
      ></iframe>
    </div>
  );
}
