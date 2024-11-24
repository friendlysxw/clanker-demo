import TokenListHeader from "./TokenListHeader";
import TokenListContent from "./TokenListContent";
import TokenListPagination from "./TokenListPagination";

export default function TokenList() {
  return (
    <div className="flex-1">
      <div className=" sticky top-0 w-full bg-background p-4">
        {/* Filter content placeholder */}
        <TokenListHeader />
      </div>
      {/* Content placeholder */}
      <div className="space-y-6">
        <TokenListContent />
        <TokenListPagination />
      </div>
    </div>
  );
}
