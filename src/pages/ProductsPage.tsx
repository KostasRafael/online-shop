
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import CategoryFilters from "@/components/CategoryFilters";
import { useShop } from "@/context/ShopContext";
import { Product } from "@/types";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ProductsPage = () => {
  const { products } = useShop();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("featured");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query)
      );
    }
    
    // Apply sorting
    switch (sortOption) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "featured":
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      default:
        break;
    }
    
    setFilteredProducts(result);
  }, [products, selectedCategory, searchQuery, sortOption]);
  
  // Update URL when category changes
  useEffect(() => {
    if (selectedCategory !== "All") {
      setSearchParams({ category: selectedCategory });
    } else {
      setSearchParams({});
    }
  }, [selectedCategory, setSearchParams]);
  
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-8">
        <div className="container">
          <h1 className="text-3xl font-bold mb-6">All Products</h1>
          
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/4">
              <div className="bg-white p-6 rounded-lg border mb-6">
                <h2 className="font-semibold text-lg mb-4">Filter Products</h2>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Search</label>
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Sort by</label>
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select sort option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-asc">Price: Low to High</SelectItem>
                      <SelectItem value="price-desc">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Top Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Categories</label>
                  <div className="flex flex-col gap-2">
                    {[...new Set(["All", ...products.map(p => p.category)])].map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="radio"
                          checked={selectedCategory === category}
                          onChange={() => handleCategorySelect(category)}
                          className="mr-2 h-4 w-4 border-gray-300 text-shop-purple focus:ring-shop-purple"
                        />
                        {category}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-3/4">
              <div className="mb-6">
                <CategoryFilters
                  selectedCategory={selectedCategory}
                  onSelectCategory={handleCategorySelect}
                />
              </div>
              
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">No products match your filters</h3>
                  <p className="text-muted-foreground">Try changing your search or filter criteria</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
