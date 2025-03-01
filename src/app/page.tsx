import Image from "next/image";

export default function Home() {
  return (
      <div>
        <Image src="/logo.svg" width={50} height={50} alt="Logo"/>
        <p className="font-semibold text-xl tracking-tight">NewTube</p>
      </div>
  );
}
