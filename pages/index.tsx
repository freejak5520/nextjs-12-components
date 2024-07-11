import Link from "next/link";

export default function Home() {
  return (
    <main className="w-dvw h-dvh py-8 px-12 flex flex-col gap-4">
      <Link className="text-xl" href={"/select"}>Select</Link>
      <Link className="text-xl" href={"/horizontal-scroll"}>Horizontal Scroll</Link>
      <Link className="text-xl" href={"/infinite-scroll"}>Infinite Scroll</Link>
    </main>
  )
}
