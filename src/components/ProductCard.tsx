
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@/types";
import { useShop } from "@/context/ShopContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  // use the addToCart method from the store
  const { addToCart } = useShop();
/*
const addToCart = (product: Product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      } else {
        return [...prevCart, { product, quantity }];
      }
    });
    toast.success(`${product.name} added to cart`);
  };
*/
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className={`product-card group ${featured ? 'md:col-span-2 lg:col-span-1' : ''}`}>
      <Link to={`/product/${product._id}`} className="flex flex-col h-full">
        <div className="relative overflow-hidden aspect-square">
          <img 
            src={product.image} 
            alt={product.name}
            className="h-full w-full object-cover"
          />
          {featured && (
            <Badge className="absolute top-2 right-2 bg-shop-purple">
              Featured
            </Badge>
          )}
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <div className="mb-2">
            <span className="product-category-pill mb-2">{product.category}</span>
            <h3 className="font-semibold mt-2 text-lg line-clamp-1">{product.name}</h3>
          </div>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-grow">{product.description}</p>
          <div className="flex items-center justify-between mt-auto">
            <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
            <Button size="sm" onClick={handleAddToCart} className="bg-shop-purple hover:bg-shop-dark-purple">
              <ShoppingCart className="h-4 w-4 mr-1" /> Add
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
