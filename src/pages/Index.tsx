
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { categories } from "@/data/products";

const Index = () => {
  // Display only a subset of categories for the homepage
  const displayedCategories = categories.slice(1, 5);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        
        <FeaturedProducts />
        
        {/* Categories Section */}
        <section className="py-12 bg-gray-50">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Shop by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {displayedCategories.map((category) => (
                <Link
                  key={category}
                  to={`/products?category=${category}`}
                  className="group relative overflow-hidden rounded-lg aspect-square"
                >
                  <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/40 transition-colors z-10" />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{category}</h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0" />
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button asChild variant="outline">
                <Link to="/categories">View All Categories</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12">
          <div className="container">
            <div className="bg-shop-light-purple rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-white md:w-3/5">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Join Our Community
                </h2>
                <p className="mb-6">
                  Sign up today and get 10% off your first order. Be the first to know about our latest products and exclusive offers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-white text-shop-purple hover:bg-gray-100">
                    <Link to="/signup">Sign Up Now</Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-2/5">
                <img
                  src="https://images.unsplash.com/photo-1603906402138-dfc2a3331f35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                  alt="Sign up promotion"
                  className="rounded-lg w-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
