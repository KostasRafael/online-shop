import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Product, CartItem, User } from '../types';
import { toast } from "@/components/ui/sonner";

interface ShopContextType {
  products: Product[];
  cart: CartItem[];
  user: User | null;
  isAuthenticated: boolean;
  featuredProducts: Product[];
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemsCount: () => number;
}

// Here is the data that the components use
const ShopContext = createContext<ShopContextType>({
  products: [],
  cart: [],
  user: null,
  isAuthenticated: false,
  featuredProducts: [],
  login: async () => false,
  logout: () => {},
  signup: async () => false,
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItemQuantity: () => {},
  clearCart: () => {},
  getCartTotal: () => 0,
  getCartItemsCount: () => 0,
});

export const useShop = () => useContext(ShopContext);

// exports ShopProvider, which is then imported and used in the App.tsx component.
export const ShopProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  // From all the state, I want to be changing only the folowing:
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);



  // Methods that change the state

  // sets the user
  // Initialize with some dummy users
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "Demo User",
      email: "user@example.com",
      password: "password123" // This is just for demo purposes
    }
  ]);

  // sets products
  // ✅ Fetch products from API on mount
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then(data => setProducts(data))
      .catch(err => {
        console.error("Product fetch error:", err);
        toast.error("Failed to load products");
      });
  }, []);

  
  // Get featured products
  const featuredProducts = products.filter(product => product.featured);

  // Check if there's a saved user session
  useEffect(() => {
    const savedUser = localStorage.getItem('shop_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('shop_user');
      }
    }
    
    // Load cart from localStorage
    const savedCart = localStorage.getItem('shop_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        localStorage.removeItem('shop_cart');
      }
    }
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shop_cart', JSON.stringify(cart));
  }, [cart]);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch("https://salty-garden-11374-8b5d46746fbc.herokuapp.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || "Invalid email or password");
        return false;
      }

      setUser(data.user);
      console.log("user", data.user);
      localStorage.setItem("shop_user", JSON.stringify(data.user));
      toast.success("Successfully logged in!");
      return true;
    } catch (error: any) {
      toast.error("Login request failed");
      console.error("Login error:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('shop_user');
    toast.success('Logged out successfully');
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      const res = await fetch("https://salty-garden-11374-8b5d46746fbc.herokuapp.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        const error = await res.json();
        toast.error(error.message || "Signup failed");
        return false;
      }

      const newUser = await res.json();
      setUser(newUser);
      localStorage.setItem("shop_user", JSON.stringify(newUser));
      toast.success("Account created successfully!");
      return true;
    } catch (err) {
      toast.error("Signup request failed");
      return false;
    }
  };

  const addToCart = (product: Product, quantity = 1) => {
    console.log("product", product);
    console.log("product_id", product._id);
    console.log("quantity", quantity);
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product._id === product._id);
      if (existingItem) {
        return prevCart.map(item => 
          item.product._id === product._id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      } else {
        return [...prevCart, { product, quantity }];
      }
    });
    toast.success(`${product.name} added to cart`);
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.product._id !== productId));
    toast.success('Item removed from cart');
  };

  const updateCartItemQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.product._id === productId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    toast.success('Cart cleared');
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <ShopContext.Provider value={{
      products,
      cart,
      user,
      isAuthenticated: !!user,
      featuredProducts,
      login,
      logout,
      signup,
      addToCart,
      removeFromCart,
      updateCartItemQuantity,
      clearCart,
      getCartTotal,
      getCartItemsCount
    }}>
      {children}
    </ShopContext.Provider>
  );
};
