import TokenList from "@/components/TokenList";
// import TopVolume from "@/components/TopVolume";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Main container with max width and center alignment */}
      <div className="mx-auto max-w-screen-xl p-4">
        {/* Three column layout */}
        <div className="relative flex gap-6">
          <TokenList />
          {/* <div className="w-80 shrink-0">
            <div className="fixed top-4 w-80">
              <TopVolume />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
