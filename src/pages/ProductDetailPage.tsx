
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useShop } from "@/context/ShopContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, ArrowLeft } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { products, addToCart } = useShop();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(products.find(p => p.id === id));
  
  // If product not found, redirect
  useEffect(() => {
    if (!product && id) {
      setProduct(products.find(p => p.id === id));
    }
  }, [id, product, products]);
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="container py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <p className="mb-6">The product you're looking for might have been removed or doesn't exist.</p>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${quantity} ${quantity > 1 ? 'items' : 'item'} added to cart`);
  };
  
  // Get related products
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8">
        <div className="container">
          <Link to="/products" className="flex items-center text-sm text-muted-foreground mb-6 hover:text-foreground">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to products
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Product Image */}
            <div className="md:w-1/2">
              <div className="border rounded-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full object-cover aspect-square"
                />
              </div>
            </div>
            
            {/* Product Info */}
            <div className="md:w-1/2">
              <div className="product-category-pill mb-2">{product.category}</div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-2">{product.rating.toFixed(1)}</span>
              </div>
              
              <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
              
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex items-center">
                  <button 
                    className="w-8 h-8 flex items-center justify-center border rounded-l-md"
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  >
                    -
                  </button>
                  <div className="w-12 h-8 flex items-center justify-center border-t border-b">
                    {quantity}
                  </div>
                  <button 
                    className="w-8 h-8 flex items-center justify-center border rounded-r-md"
                    onClick={() => setQuantity(prev => prev + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                <Button onClick={handleAddToCart} className="w-full bg-shop-purple hover:bg-shop-dark-purple">
                  <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
                </Button>
              </div>
              
              <div className="mt-8 text-sm">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Free shipping on orders over $50
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  30-day money-back guarantee
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">You may also like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map(product => (
                  <div key={product.id} className="product-card">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{product.category}</p>
                        <p className="font-bold mt-2">${product.price.toFixed(2)}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
