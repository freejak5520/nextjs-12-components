import Link from "next/link";

export default function Home() {
  return (
    <main className="w-dvw h-dvh dark:bg-black bg-white py-8 px-12">
      <Link className="text-xl text-white" href={"/select"}>Select</Link>
    </main>
  )
}
