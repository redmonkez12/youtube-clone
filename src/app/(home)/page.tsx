// "use client";

import { trpc } from "@/trpc/server";

export default async function Home() {
  // const { data } = trpc.hello.useQuery({ text: "Hello" });
  trpc.hello.prefetch({ text: "hello" });

  return (
    <div>I</div>
  );
}