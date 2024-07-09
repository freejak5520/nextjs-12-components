import Link from "next/link";

export default function Home() {
  return (
    <main className="w-dvw h-dvh py-8 px-12">
      <Link className="text-xl" href={"/select"}>Select</Link>
      <Link className="text-xl" href={"/horizontal-scroll"}>Horizontal Scroll</Link>
    </main>
  )
}
