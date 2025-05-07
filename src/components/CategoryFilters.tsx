
import React from "react";
import { categories } from "@/data/products";
import { Button } from "@/components/ui/button";

interface CategoryFiltersProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilters: React.FC<CategoryFiltersProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          className={selectedCategory === category ? "bg-shop-purple hover:bg-shop-dark-purple" : ""}
          onClick={() => onSelectCategory(category)}
          size="sm"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilters;
