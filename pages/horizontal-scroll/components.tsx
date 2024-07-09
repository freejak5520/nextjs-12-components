import { useCallback, useEffect, useMemo, useRef } from "react";

export default function HorizontalScroll({ children, scrollAmount = 300 }: { children: React.ReactNode, scrollAmount?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const adjustScroll = useCallback(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const totalWidth = content.scrollWidth;
    const oneSetWidth = totalWidth / 3;

    if (container.scrollLeft < oneSetWidth) {
      container.scrollLeft += oneSetWidth;
    } else if (container.scrollLeft >= oneSetWidth * 2) {
      container.scrollLeft -= oneSetWidth;
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('scroll', adjustScroll);

    container.scrollLeft = container.scrollWidth / 3;

    return () => container.removeEventListener('scroll', adjustScroll);
  }, [adjustScroll]);

  return <div className="relative max-w-full overflow-x-hidden bg-gray-50 py-2 ">
    <div ref={containerRef} className="overflow-x-scroll scrollbar-hidden">
      <div ref={contentRef} className="grid grid-flow-col gap-2">
        {children}
        {children}
        {children}
      </div>
    </div>
  </div>
}
