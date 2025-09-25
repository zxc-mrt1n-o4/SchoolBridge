import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-6 inset-x-4 h-16 bg-background/80 backdrop-blur-md border dark:border-slate-700/70 max-w-7xl mx-auto rounded-full z-50 shadow-lg">
      <div className="h-full flex items-center justify-between mx-auto px-6">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="hidden sm:inline-flex rounded-full hover:bg-muted/80 transition-colors"
            asChild
          >
            <Link href="/forum">
              Sign In
            </Link>
          </Button>
          <Button 
            className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            asChild
          >
            <Link href="/study-groups">
              Get Started
            </Link>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
