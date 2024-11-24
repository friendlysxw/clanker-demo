import { Token } from "@/types/token";

export default function TokenSwap({ token }: { token: Token }) {
  const { contract_address } = token;
  return (
    <div className="w-full">
      <p className="font-bold text-xl mb-4">Swap</p>
      <iframe
        src={`https://app.uniswap.org/#/swap?exactField=input&outputCurrency=${contract_address}&chain=base`}
        className="w-full h-[660px]"
      ></iframe>
    </div>
  );
}
