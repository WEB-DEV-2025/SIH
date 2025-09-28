import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Compass, Menu, User, AlertTriangle } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Itinerary Planner", href: "/itinerary" },
  { name: "Events", href: "/events" },
  { name: "Chat", href: "/chat" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <Compass className="h-8 w-8 text-primary group-hover:text-primary-dark transition-colors" />
              <span className="ml-2 text-xl font-bold text-foreground">KalpanaX</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-8 md:flex md:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                    isActivePath(item.href)
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                  }`}
                >
                  {item.name === "Itinerary Planner" ? (
                    <span className="inline-flex items-baseline gap-1">
                      <span>Itinerary Planner</span>
                      <sup className="text-[10px] leading-none text-primary">AI</sup>
                    </span>
                  ) : (
                    item.name
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Actions: Search | SOS | Login */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <div className="w-64">
              <Input placeholder="Search" className="w-full" />
            </div>
            <Link to="/safety">
              <Button variant="safety" size="sm" className="sos-pulse">
                <AlertTriangle className="h-4 w-4" />
                SOS
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline">
                <User className="h-4 w-4" />
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile SOS */}
            <Link to="/safety">
              <Button variant="safety" size="sm" className="sos-pulse">
                <AlertTriangle className="h-4 w-4" />
              </Button>
            </Link>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col space-y-4 pt-6">
                  <div className="flex items-center space-x-2 pb-4 border-b border-border">
                    <Compass className="h-6 w-6 text-primary" />
                    <span className="text-lg font-bold">KalpanaX</span>
                  </div>
                  <div className="px-1">
                    <Input placeholder="Search" />
                  </div>
                  
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActivePath(item.href)
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      {item.name === "Itinerary Planner" ? (
                        <span className="inline-flex items-baseline gap-1">
                          <span>Itinerary Planner</span>
                          <sup className="text-[10px] leading-none">AI</sup>
                        </span>
                      ) : (
                        item.name
                      )}
                    </Link>
                  ))}
                  
                  <div className="pt-4 border-t border-border space-y-2">
                    <Link to="/safety" onClick={() => setIsOpen(false)}>
                      <Button variant="safety" className="w-full justify-start">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        SOS
                      </Button>
                    </Link>
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <Button className="w-full justify-start">
                        <User className="h-4 w-4 mr-2" />
                        Login
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}