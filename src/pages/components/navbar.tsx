import { Calendar, Home, Inbox, Settings } from "lucide-react";
import viteLogo from "/vite.svg";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

// Menu items matching sidebar
const leftItems = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Career",
    url: "/career",
    icon: Inbox,
  },
];

const rightItems = [
  {
    title: "Contact",
    url: "/contact",
    icon: Calendar,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto h-16 px-4">
        <div className="flex h-full items-center justify-center">
          <div className="flex items-center gap-8">
            {/* Left Menu Items */}
            <nav className="hidden md:flex">
              <NavigationMenu>
                <NavigationMenuList className="gap-4">
                  {leftItems.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuLink
                        href={item.url}
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.title}</span>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* Center Logo */}
            <a href="/" className="flex items-center">
              <img src={viteLogo} className="h-12 w-12" alt="Vite logo" />
            </a>

            {/* Right Menu Items */}
            <nav className="hidden md:flex">
              <NavigationMenu>
                <NavigationMenuList className="gap-4">
                  {rightItems.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuLink
                        href={item.url}
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        <span>{item.title}</span>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="outline" size="icon">
                  <Home className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-4">
                  {[...leftItems, ...rightItems].map((item) => (
                    <a
                      key={item.title}
                      href={item.url}
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <item.icon className="h-4 w-4" />
                      {item.title}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
