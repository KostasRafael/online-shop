
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useShop } from "@/context/ShopContext";
import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { ShoppingCart, ArrowRight } from "lucide-react";

const CartPage = () => {
  const { cart, getCartTotal, clearCart, isAuthenticated } = useShop();
  const cartTotal = getCartTotal();
  
  const handleCheckout = () => {
    if (!isAuthenticated) {
      toast.error("Please sign in to checkout", {
        description: "You need to be signed in to complete your purchase",
        action: {
          label: "Sign In",
          onClick: () => window.location.href = "/login",
        },
      });
      return;
    }
    
    // In a real app, this would redirect to a checkout process
    toast.success("Order placed successfully!", {
      description: "Thank you for your purchase!",
    });
    clearCart();
  };
  
  if (cart.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container py-12">
          <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
          <div className="text-center py-16">
            <div className="mb-6">
              <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground" />
            </div>
            <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Button asChild>
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-12">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="border rounded-lg bg-white p-6">
              <div className="flow-root">
                <div className="divide-y">
                  {cart.map((item) => (
                    <CartItem key={item.product._id} item={item} />
                  ))}
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <Button
                  variant="outline"
                  onClick={clearCart}
                  className="text-sm"
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="border rounded-lg bg-white p-6">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{cartTotal >= 50 ? "Free" : "$5.00"}</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-bold">
                  <span>Total</span>
                  <span>${(cartTotal >= 50 ? cartTotal : cartTotal + 5).toFixed(2)}</span>
                </div>
              </div>
              
              <Button
                onClick={handleCheckout}
                className="w-full mt-6 bg-shop-purple hover:bg-shop-dark-purple"
              >
                Checkout <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <p className="text-xs text-muted-foreground mt-4 text-center">
                By checking out, you agree to our{" "}
                <Link to="/terms" className="underline hover:text-foreground">
                  Terms
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="underline hover:text-foreground">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
