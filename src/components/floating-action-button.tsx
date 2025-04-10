"use client";

import { useState } from "react";
import { Moon, Sun, Settings } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        {/* Additional Button */}
        <div
          className={`absolute bottom-full right-0 mb-2 transition-all duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Button
            variant="outline"
            size="icon"
            className="h-12 w-12 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Main Button */}
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
