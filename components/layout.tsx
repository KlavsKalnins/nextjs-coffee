import { Navbar } from "@/components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div>
        <Navbar/>
        {children}
    </div>
  );
};
