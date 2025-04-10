import { Navbar } from "@/components/navbar";
import { Footer } from "@/layouts/footer";
//import { Button } from "./components/ui/button";
import { FloatingActionButton } from "./components/floating-action-button";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-background">
        {children}
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
