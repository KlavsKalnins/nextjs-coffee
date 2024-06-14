export interface ICoffee {
  colorInteger: number;
  colorPurchaseButton?: number;
  name: string;
}

export const CoffeeItem: React.FC<ICoffee> = (coffee) => {
  function getColor(colorInteger: number) {
    switch (colorInteger) {
      case 0:
        return "bg-stone-600";
        break;
      case 1:
        return "bg-green-400";
      case 2:
        return "bg-slate-400";
    }
  }

  return (
    <div
      className={`p-10 w-full h-full gap-2 flex flex-row sm:flex-col justify-center items-center ${getColor(
        coffee.colorInteger
      )}`}
    >
      <img src={`/coffee/tea-${coffee.colorInteger}.png`} />
      <div className="flex flex-col gap-2 justify-center items-center">
        <p className="font-bold text-2xl sm:text-4xl">{coffee.name}</p>
        <button
          className={`uppercase p-2 text-black font-bold rounded-md ${
            coffee.colorPurchaseButton != undefined
              ? getColor(coffee.colorPurchaseButton)
              : "bg-green-400"
          }`}
        >
          purchase
        </button>
      </div>
    </div>
  );
};
