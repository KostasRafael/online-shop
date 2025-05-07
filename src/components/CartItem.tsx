
import React from "react";
import { CartItem as CartItemType } from "@/types";
import { useShop } from "@/context/ShopContext";
import { Button } from "@/components/ui/button";
import { X, Minus, Plus } from "lucide-react";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateCartItemQuantity, removeFromCart } = useShop();
  const { product, quantity } = item;

  const handleIncreaseQuantity = () => {
    updateCartItemQuantity(product._id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateCartItemQuantity(product._id, quantity - 1);
    } else {
      removeFromCart(product._id);
    }
  };

  const handleRemove = () => {
    removeFromCart(product._id);
  };

  return (
    <div className="flex items-center py-4 border-b">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between">
          <h3 className="text-sm font-medium">{product.name}</h3>
          <p className="text-sm font-medium">${(product.price * quantity).toFixed(2)}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border rounded-md">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-none" 
              onClick={handleDecreaseQuantity}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="w-8 text-center text-sm">{quantity}</span>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-none" 
              onClick={handleIncreaseQuantity}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          <Button 
            variant="ghost" 
            size="sm" 
            className="text-sm text-red-500 hover:text-red-700" 
            onClick={handleRemove}
          >
            <X className="h-4 w-4 mr-1" /> Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
