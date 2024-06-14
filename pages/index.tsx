import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { VerticalSpacing } from "@/components/VerticalSpacing";
import { ComponentPerson, IPerson } from "@/components/ComponentPerson";
import { faq } from "@/components/faqData";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

// const buttons = Array(3).fill(null); // Create an array with 3 null elements

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 flex-col max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* <ComponentPerson name={"adolfs"} age={75} isMarried={false}/> */}
        <div className="flex gap-2 flex-col">
          {faq.map((item, index) => (
            <div key={index} className="border-2">
              <p>{item.question}</p>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[100px] h-[100px] bg-green-800 hover:rotate-45 duration-150"></div>
      <div className="box-red"></div>
    </main>
  );
}
