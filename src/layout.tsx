import { Navbar } from "@/components/navbar";
import { Footer } from "./components/footer";
//import { Button } from "./components/ui/button";
import { FloatingActionButton } from "./components/floating-action-button";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        {children}
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
