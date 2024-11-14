import React from "react";

const CategoryGrid = () => {
    const categories = [
        {
          id: 1,
          name: "Cough, Cold & Flu",
          description: "Cough, Cold & Flu Essentials",
          imageUrl: "https://www.riteaid.com/content/dam/riteaid-web/shop-categories/home-page-shop-by-category/Cough-Cold-Flu-Tile.png",
          bgColor: "bg-green-500",
        },
        {
          id: 2,
          name: "Holiday",
          description: "Holiday",
          imageUrl: "https://www.riteaid.com/content/dam/riteaid-web/shop-categories/home-page-shop-by-category/hoilday.png",
          bgColor: "bg-red-600",
        },
        {
          id: 3,
          name: "Medicine & Health",
          description: "Medicine & Health",
          imageUrl: "https://www.riteaid.com/content/dam/riteaid-web/shop-categories/home-page-shop-by-category/medicine-health.png",
          bgColor: "bg-gray-200",
        },
        {
          id: 4,
          name: "Vitamins & Supplements",
          description: "Vitamins & Supplements",
          imageUrl: "https://www.riteaid.com/content/dam/riteaid-web/shop-categories/home-page-shop-by-category/5-19-24-updates/Nature-Made-Category-Bubble.png",
          bgColor: "bg-yellow-200",
        },
        {
          id: 5,
          name: "Personal Care",
          description: "Personal Care",
          imageUrl: "https://www.riteaid.com/content/dam/riteaid-web/shop-categories/home-page-shop-by-category/personal-care.png",
          bgColor: "bg-blue-200",
        },
        {
          id: 6,
          name: "Beauty",
          description: "Beauty",
          imageUrl: "https://www.riteaid.com/content/dam/riteaid-web/shop-categories/home-page-shop-by-category/Beauty.png",
          bgColor: "bg-gray-200",
        },
        {
          id: 7,
          name: "Grocery",
          description: "Grocery",
          imageUrl: "https://www.riteaid.com/content/dam/riteaid-web/shop-categories/home-page-shop-by-category/grocery.png",
          bgColor: "bg-gray-200",
        },
        {
          id: 8,
          name: "Households & Pets",
          description: "Households & Pets",
          imageUrl: "https://www.riteaid.com/content/dam/riteaid-web/shop-categories/home-page-shop-by-category/5-19-24-updates/Scott-Category-Bubble.png",
          bgColor: "bg-gray-200",
        },
        {
          id: 9,
          name: "Baby, Kids & Toys",
          description: "Baby, Kids & Toys",
          imageUrl: "https://www.riteaid.com/content/dam/riteaid-web/shop-categories/home-page-shop-by-category/5-19-24-updates/Huggies-Category-Bubble.png",
          bgColor: "bg-gray-200",
        },
        {
          id: 10,
          name: "Sexual Wellness",
          description: "Sexual Wellness",
          imageUrl: "https://www.riteaid.com/content/dam/riteaid-web/shop-categories/home-page-shop-by-category/sexual-wellness.png",
          bgColor: "bg-gray-200",
        },
        {
          id: 11,
          name: "Nutrition & Fitness",
          description: "Nutrition & Fitness",
          imageUrl: "https://www.riteaid.com/content/dam/riteaid-web/shop-categories/home-page-shop-by-category/CategoryTile-Whey.png",
          bgColor: "bg-gray-200",
        },
        {
          id: 12,
          name: "Rite Aid Brands",
          description: "Rite Aid Brands",
          imageUrl: "https://www.riteaid.com/content/dam/riteaid-web/shop-categories/home-page-shop-by-category/CategoryTile-RADBrands.png",
          bgColor: "bg-blue-500",
        },
      ];
      
  return (
    <div className="py-10 px-5 max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-800">Shop by Category</h2>
        <a href="#" className="text-blue-800 font-medium">
          Shop All Categories
        </a>
      </div>
      <div className="grid grid-cols-6 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center text-center">
            <div
              className={`w-24 h-24 rounded-full flex items-center justify-center ${category.bgColor}`}
            >
              <img src={category.imageUrl} alt={category.name} className="w-24 h-24 rounded-full" />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-gray-800">{category.description}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
