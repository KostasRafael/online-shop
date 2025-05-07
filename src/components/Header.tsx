
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useShop } from "@/context/ShopContext";
import { ShoppingCart, User, Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const Header: React.FC = () => {
  const { isAuthenticated, logout, user, getCartItemsCount } = useShop();
  const isMobile = useIsMobile();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const cartItemsCount = getCartItemsCount();

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-shop-purple">ShopDream</span>
          </Link>

          {!isMobile && (
            <nav className="hidden md:flex gap-6">
              <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
                Home
              </Link>
              <Link to="/products" className="text-sm font-medium transition-colors hover:text-primary">
                Products
              </Link>
              <Link to="/categories" className="text-sm font-medium transition-colors hover:text-primary">
                Categories
              </Link>
            </nav>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search products..."
              className="w-[200px] rounded-md border border-input bg-background pl-8 pr-4 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
          </div>

          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-shop-purple text-[10px] text-white">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </Link>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem className="font-medium">
                  Hello, {user?.name}
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/orders">Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex gap-2">
              <Button asChild variant="ghost">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          )}

          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
            {showMobileMenu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {showMobileMenu && isMobile && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b z-50 animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            <div className="relative mb-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search products..."
                className="w-full rounded-md border border-input bg-background pl-8 py-2 text-sm"
              />
            </div>
            <Link to="/" className="px-2 py-2 text-sm font-medium" onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link to="/products" className="px-2 py-2 text-sm font-medium" onClick={toggleMobileMenu}>
              Products
            </Link>
            <Link to="/categories" className="px-2 py-2 text-sm font-medium" onClick={toggleMobileMenu}>
              Categories
            </Link>
            {!isAuthenticated && (
              <>
                <Link to="/login" className="px-2 py-2 text-sm font-medium" onClick={toggleMobileMenu}>
                  Login
                </Link>
                <Link to="/signup" className="px-2 py-2 text-sm font-medium" onClick={toggleMobileMenu}>
                  Sign Up
                </Link>
              </>
            )}
            {isAuthenticated && (
              <>
                <Link to="/profile" className="px-2 py-2 text-sm font-medium" onClick={toggleMobileMenu}>
                  Profile
                </Link>
                <Link to="/orders" className="px-2 py-2 text-sm font-medium" onClick={toggleMobileMenu}>
                  Orders
                </Link>
                <button 
                  className="px-2 py-2 text-sm font-medium text-left text-red-500"
                  onClick={() => {
                    logout();
                    toggleMobileMenu();
                  }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
