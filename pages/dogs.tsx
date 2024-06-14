import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { VerticalSpacing } from "@/components/VerticalSpacing";
import { ComponentPerson } from "@/components/ComponentPerson";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [dogImage, setDogImage] = useState<any>("");
  const [dogList, setDogList] = useState<any>();

  async function getImage() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    //console.log(data);
    setDogImage(data.message);
  }

  async function getDogList() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    console.log(data.message);
    setDogList(data.message);
  }
  useEffect(() => {
    getImage();
    getDogList();
  }, []);

  useEffect(() => {
    getImage();
    getDogList();
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 flex-col max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <ComponentPerson name={"adolfs"} age={75} isMarried={false}/>
        <button className="p-2 bg-red-800" onClick={() => getImage()}>
          {" "}
          refetch image
        </button>
        <VerticalSpacing />
        <img src={dogImage} alt={`HTTP status`} width={600} height={400} />
        <VerticalSpacing />

        {dogList &&
          dogList.terrier.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
          <div className="flex flex">
            <p>jj</p>
            <p>gh</p>
          </div>
      </div>
    </main>
  );
}
