const headerButtons = [
  { title: "HOME", url: "/" },
  { title: "coffee", url: "/coffee" },
  { title: "exam", url: "/exam" },
  { title: "dogs", url: "/dogs" },
];

export const Navbar = () => {
  return (
    <div className="w-full h-[300px border-2 flex justify-between items-center">
      {headerButtons.map((item, index) => (
        <a href={item.url} key={index} className="m-2 uppercase">
          {item.title}
        </a>
      ))}
    </div>
  );
};
