import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full items-center">
      <Navbar />
      <div className="flex flex-col w-full h-full">
        {children}
      </div>
      <Footer />
    </div>
  );
};
