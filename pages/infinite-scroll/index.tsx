import { useState } from "react";
import InfiniteScroll from "./component";

export default function InfiniteScrollPage() {
  const [items, setItems] = useState<number[]>(new Array(10).fill(0).map((_, index) => index + 1));
  const [max, setMax] = useState(Math.max(...items));

  return <main>
    <InfiniteScroll className="flex flex-col h-96 gap-4 max-h-screen overflow-scroll bg-gray-100" onScrollEnd={async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      }).then();

      const appendArray = new Array(10).fill(0).map((_, index) => index + 1 + max);

      setItems([...items, ...appendArray]);

      setMax(current => current + 10);
    }}>
      {items.map((value) => <div key={value} className="h-10 p-4">{value}</div>)}
    </InfiniteScroll>
  </main>;
}
