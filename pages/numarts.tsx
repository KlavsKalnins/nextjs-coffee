import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  const cellNumbers: number[][] = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 4, 6, 8, 0, 2, 4, 6, 8],
    [3, 6, 9, 2, 5, 8, 1, 4, 7],
    [4, 8, 2, 6, 0, 4, 8, 2, 6],
    [5, 0, 5, 0, 5, 0, 5, 0, 5],
    [6, 2, 8, 4, 0, 6, 2, 8, 4],
    [7, 4, 1, 8, 5, 2, 9, 6, 3],
    [8, 6, 4, 2, 0, 8, 6, 4, 2],
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
  ];

  const [date, setDate] = useState<string>("1999-11-28");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setDate(value);
  };

  const containsDateNumbers = (num: number) => {
    const numStr = num.toString();

    for (let i = 0; i < numStr.length; i++) {
      if (date.includes(numStr[i])) {
        return true;
      }
    }

    return false;
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 gap-4 ${inter.className}`}
    >
      <div className="w-[150px] flex justify-center flex-col gap-2 text-center">
        <p>Numart</p>
        <input
          className="bg-black text-white p-2 rounded"
          type="date"
          value={date}
          onChange={handleDateChange}
        />
      </div>
      <div className="w-[350px]">
        <div className="grid grid-cols-9 gap-0 border-white border-2">
          {[...Array(9)].map((_, row) =>
            [...Array(9)].map((_, col) => (
              <div
                key={`cell-${row}-${col}`}
                className={`w-full h-8 ${
                  containsDateNumbers(cellNumbers[row][col])
                    ? "bg-black"
                    : "bg-white"
                }`}
              />
            ))
          )}
        </div>
      </div>

    </main>
  );
}
