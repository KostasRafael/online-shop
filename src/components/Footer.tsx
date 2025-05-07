
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="container py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-shop-purple">ShopDream</h3>
            <p className="text-sm text-gray-600">
              Shop for the best quality products at affordable prices.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-sm text-gray-600 hover:text-shop-purple">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm text-gray-600 hover:text-shop-purple">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/featured" className="text-sm text-gray-600 hover:text-shop-purple">
                  Featured
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Account</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/profile" className="text-sm text-gray-600 hover:text-shop-purple">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-sm text-gray-600 hover:text-shop-purple">
                  Orders
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-sm text-gray-600 hover:text-shop-purple">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-sm text-gray-600 hover:text-shop-purple">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-shop-purple">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-shop-purple">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} ShopDream. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-sm text-gray-600 hover:text-shop-purple">
              Terms
            </Link>
            <Link to="/privacy" className="text-sm text-gray-600 hover:text-shop-purple">
              Privacy
            </Link>
            <Link to="/cookies" className="text-sm text-gray-600 hover:text-shop-purple">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
