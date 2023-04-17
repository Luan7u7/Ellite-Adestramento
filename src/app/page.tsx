import "./globals.css";
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="w-screen h-screen bg-[#191616]">

        <h1 className="titulo_dog font-semibold uppercase leading-[3.7rem] w-[19rem] text-right absolute top-4 right-3">

          A melhor opção de educação para seu pet
        </h1>

        <Image
          src="/dog.png"
          width={418}
          height={412}
          alt="foto do doguinho"
          className="absolute left-0 top-36"
        />

      </main>

      <footer className="flex fixed justify-center bottom-0 left-0 right-0 center w-screen h-80 rounded-t-[32px] bg-white opacity-80">
        <span className="w-32 h-1 bg-zinc-400 rounded-full mt-2 "></span>
      </footer>
    </div>
  );
}
