import { cn } from "@utils/index";
import { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  className?: string,
  children?: ReactNode,
  onScrollEnd?: () => Promise<void>,
  offset?: number,
  loadingComponent?: ReactNode,
}

export default function InfiniteScroll({ className, onScrollEnd, children, loadingComponent = <div>Loading...</div>, offset = 200 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const current = containerRef.current;

    const onScroll = (ev: any) => {
      if (loading || !onScrollEnd) return;

      const current = ev.currentTarget;
      const scrollHeight = current.scrollHeight;

      const nowScroll = current.scrollTop + current.offsetHeight;

      if (scrollHeight - offset < nowScroll) {
        setLoading(true);

        onScrollEnd().then(() => {
          setLoading(false);
        });
      }
    };

    current.addEventListener("scroll", onScroll);

    return () => {
      current.removeEventListener("scroll", onScroll);
    }
  }, [loading, offset, onScrollEnd]);

  return <>
    <div className={cn(className, "relative")} ref={containerRef}>
      {children}
      {loading ? loadingComponent : <></>}
    </div>
  </>;
}
