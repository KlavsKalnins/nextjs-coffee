import Image from "next/image";
import { Inter } from "next/font/google";
import { CoffeeItem } from "@/components/coffee/coffee";

const inter = Inter({ subsets: ["latin"] });

export default function Coffee() {
  return (
    <div className="w-full h-full bg-slate-500/10">
      <div className="w-full h-[95vh] flex flex-col sm:flex-row">
        <CoffeeItem colorInteger={0} name={"Black Tea"} />
        <CoffeeItem
          colorInteger={1}
          colorPurchaseButton={2}
          name={"Green Tea"}
        />
        <CoffeeItem colorInteger={2} name={"White Tea"} />
      </div>
    </div>
  );
}
