import { ThemeProvider } from "next-themes";
import { FloatingActionButton } from "@/components/floating-action-button";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <FloatingActionButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
