import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getTopVolume } from "@/lib/api";

export default async function TopVolume() {
  const topVolume = await getTopVolume();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-semibold">
            Top Daily Volume
          </CardTitle>
          <Select defaultValue="24h">
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">24 hours</SelectItem>
              <SelectItem value="7d">7 days</SelectItem>
              <SelectItem value="30d">30 days</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="space-y-4">
          {topVolume.map((item) => (
            <div
              key={item.symbol}
              className="flex flex-col space-y-2 border-b pb-4 last:border-0"
            >
              <div className="flex justify-between">
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.symbol}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{item.price}</p>
                  <p
                    className={`text-sm ${
                      item.change.startsWith("+")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.change}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                <div>
                  <p>24h Volume:</p>
                  <p>{item.volume}</p>
                </div>
                <div className="text-right">
                  <p>Market Cap:</p>
                  <p>{item.marketCap}</p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
