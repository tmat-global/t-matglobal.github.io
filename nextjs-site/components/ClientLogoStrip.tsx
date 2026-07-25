import Image from "next/image";
import { clientLogos } from "@/data/clientLogos";

export default function ClientLogoStrip() {
  return (
    <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 rounded-lg bg-white/95 px-6 py-8 sm:gap-x-14">
      {clientLogos.map((client) => (
        <Image
          key={client.name}
          src={client.src}
          alt={client.name}
          width={140}
          height={30}
          className="h-6 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-7"
        />
      ))}
    </div>
  );
}
