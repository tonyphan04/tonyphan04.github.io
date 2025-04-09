import { Navbar } from "@/pages/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        {children}
      </main>
    </div>
  );
}
