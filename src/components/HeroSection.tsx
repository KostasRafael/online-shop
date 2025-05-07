
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-shop-dark-purple to-shop-light-purple py-16 md:py-24">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="lg:w-1/2 text-white z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Discover Amazing Products
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-md opacity-90">
            Shop the latest trends and must-have items at unbeatable prices. 
            Free shipping on orders over $50.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-shop-purple hover:bg-gray-100">
              <Link to="/products">Shop Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/categories">Browse Categories</Link>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="bg-white p-4 rounded-lg shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
              alt="Hero product"
              className="rounded w-full"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-lg shadow-lg hidden md:block">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 rounded-full p-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm font-medium">Free Shipping</span>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 bg-white p-3 rounded-lg shadow-lg hidden md:block">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 rounded-full p-2">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium">Limited Time Offer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
