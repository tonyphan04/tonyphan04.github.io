import { Calendar, Home, Inbox, Settings } from "lucide-react";

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
const items = [
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
      <div className="container flex h-16 items-center px-4">
        <a href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">Portfolio</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:flex-1 md:flex-end">
          <NavigationMenu>
            <NavigationMenuList>
              {items.map((item) => (
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
            <Button variant="outline" size="icon" className="ml-auto">
              <Home className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-4">
              {items.map((item) => (
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
    </header>
  );
}
