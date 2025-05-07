
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { categories } from "@/data/products";
import { useShop } from "@/context/ShopContext";

const CategoriesPage = () => {
  const { products } = useShop();
  
  // Get counts of products by category
  const categoryCounts = categories.slice(1).reduce((acc, category) => {
    acc[category] = products.filter(p => p.category === category).length;
    return acc;
  }, {} as Record<string, number>);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-12">
        <div className="container">
          <h1 className="text-3xl font-bold mb-6">Shop by Category</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories.slice(1).map(category => (
              <Link
                key={category}
                to={`/products?category=${category}`}
                className="group relative overflow-hidden rounded-lg border aspect-video"
              >
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/40 transition-colors z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-1">{category}</h3>
                    <p className="text-sm opacity-80">
                      {categoryCounts[category] || 0} {categoryCounts[category] === 1 ? 'item' : 'items'}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-0" />
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoriesPage;
