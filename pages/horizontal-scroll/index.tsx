import HorizontalScroll from "./components";

function HorizontalScrollItemExample({ children }: { children: React.ReactNode }) {
  return <div className="w-64 h-64 flex justify-center items-center bg-blue-100">{children}</div>;
}

export default function HorizontalScrollExample() {
  const numList = new Array(10).fill(0).map((_, index) => index + 1);

  return <main className="main">
    <h1 className="h1">Horizontal Scroll</h1>

    <div className="flex flex-col gap-4">
      <h2>Infinite scroll</h2>
      <HorizontalScroll>
        {numList.map((num) => <HorizontalScrollItemExample key={num}>{num}</HorizontalScrollItemExample>)}
      </HorizontalScroll>
    </div>
  </main>
}
