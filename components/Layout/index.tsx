import { ThemeProvider } from "@/providers/ThemeProvider";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { InfoBanner } from "../InfoBanner";
import { ScrollToTop } from "../ScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen w-full items-center bg-main-light dark:bg-main-dark">
        <InfoBanner />
        <Navbar />
        <div className="flex flex-1 flex-col h-full w-full relative bg-landing items-center">
          <ScrollToTop />
          {children}
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
