import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/layout/Layout";
import { 
  Search, 
  Filter, 
  Star, 
  Heart, 
  ShoppingCart, 
  MapPin,
  Verified,
  Grid3X3,
  List,
  SortAsc
} from "lucide-react";
import marketplaceHero from "@/assets/marketplace-hero.jpg";

const Marketplace = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Items", count: 156 },
    { id: "handicrafts", name: "Handicrafts", count: 42 },
    { id: "textiles", name: "Textiles", count: 28 },
    { id: "experiences", name: "Experiences", count: 35 },
    { id: "food", name: "Food & Spices", count: 24 },
    { id: "home-decor", name: "Home Decor", count: 27 }
  ];

  const products = [
    {
      id: 1,
      title: "Traditional Dhokra Elephant",
      description: "Handcrafted bronze metal casting by tribal artisans",
      price: "₹1,200",
      originalPrice: "₹1,500",
      rating: 4.8,
      reviews: 124,
      vendor: "Munda Craft Collective",
      location: "Khunti",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      verified: true,
      category: "handicrafts",
      tags: ["Eco-friendly", "Fair Trade", "Handmade"]
    },
    {
      id: 2,
      title: "Tribal Cooking Experience",
      description: "Learn authentic Santhali recipes with local families",
      price: "₹800/person",
      originalPrice: null,
      rating: 4.9,
      reviews: 87,
      vendor: "Santhali Cultural Center",
      location: "Dumka",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      verified: true,
      category: "experiences",
      tags: ["Cultural", "Food", "Group Activity"]
    },
    {
      id: 3,
      title: "Handwoven Tussar Silk Saree",
      description: "Premium quality silk saree with traditional motifs",
      price: "₹3,500",
      originalPrice: "₹4,200",
      rating: 4.7,
      reviews: 203,
      vendor: "Jharkhand Silk Weavers",
      location: "Chaibasa",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=300&fit=crop",
      verified: true,
      category: "textiles",
      tags: ["Handwoven", "Premium", "Traditional"]
    },
    {
      id: 4,
      title: "Bamboo Home Decor Set",
      description: "Eco-friendly bamboo items for modern homes",
      price: "₹1,800",
      originalPrice: "₹2,100",
      rating: 4.6,
      reviews: 156,
      vendor: "Green Bamboo Crafts",
      location: "Ranchi",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      verified: true,
      category: "home-decor",
      tags: ["Sustainable", "Modern", "Bamboo"]
    },
    {
      id: 5,
      title: "Organic Honey Collection",
      description: "Pure forest honey collected by tribal communities",
      price: "₹450/jar",
      originalPrice: null,
      rating: 4.9,
      reviews: 92,
      vendor: "Forest Honey Collective",
      location: "Gumla",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400&h=300&fit=crop",
      verified: true,
      category: "food",
      tags: ["Organic", "Natural", "Tribal"]
    },
    {
      id: 6,
      title: "Pottery Workshop Experience",
      description: "2-hour hands-on pottery making session",
      price: "₹600/person",
      originalPrice: null,
      rating: 4.8,
      reviews: 67,
      vendor: "Clay Art Studio",
      location: "Jamshedpur",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      verified: true,
      category: "experiences",
      tags: ["Art", "Hands-on", "Creative"]
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <div 
        className="h-64 flex items-center justify-center text-white travel-hero-bg"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${marketplaceHero})` }}
      >
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Local Marketplace</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Support local artisans and experience authentic Jharkhand culture
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search for products, experiences, or artisans..." 
                className="pl-10"
              />
            </div>
            
            {/* Filters */}
            <div className="flex gap-2">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="flex rounded-lg border border-input">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="h-9"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${viewMode === "grid" 
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
          : "grid-cols-1"
        }`}>
          {filteredProducts.map((product) => (
            <Card key={product.id} className="travel-card group overflow-hidden">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                    viewMode === "grid" ? "h-48" : "h-64 sm:h-48"
                  }`}
                />
                
                {/* Badges */}
                <div className="absolute top-3 right-3 space-y-1">
                  {product.verified && (
                    <Badge className="bg-background/90 text-foreground">
                      <Verified className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                  <Button variant="ghost" size="icon" className="bg-background/80 hover:bg-background">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                {/* Price Badge */}
                {product.originalPrice && (
                  <div className="absolute top-3 left-3">
                    <Badge variant="destructive">
                      {Math.round(((parseInt(product.originalPrice.replace(/[₹,]/g, '')) - parseInt(product.price.replace(/[₹,]/g, ''))) / parseInt(product.originalPrice.replace(/[₹,]/g, ''))) * 100)}% OFF
                    </Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-4">
                <div className="space-y-2">
                  {/* Vendor Info */}
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>{product.vendor}</span>
                    <span className="mx-1">•</span>
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{product.location}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-foreground line-clamp-1">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {product.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Rating and Price */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="text-right">
                      {product.originalPrice && (
                        <div className="text-xs text-muted-foreground line-through">
                          {product.originalPrice}
                        </div>
                      )}
                      <div className="font-bold text-foreground">{product.price}</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Details
                    </Button>
                    <Button variant="marketplace" size="sm" className="flex-1">
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </div>

        {/* Featured Vendors Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Featured Artisans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Munda Craft Collective",
                specialty: "Traditional Metal Crafts",
                location: "Khunti",
                products: 25,
                rating: 4.9,
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop"
              },
              {
                name: "Jharkhand Silk Weavers",
                specialty: "Handwoven Textiles",
                location: "Chaibasa", 
                products: 18,
                rating: 4.8,
                image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=200&h=200&fit=crop"
              },
              {
                name: "Forest Honey Collective",
                specialty: "Organic Forest Products",
                location: "Gumla",
                products: 12,
                rating: 4.9,
                image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=200&h=200&fit=crop"
              }
            ].map((vendor, index) => (
              <Card key={index} className="travel-card">
                <CardContent className="p-6 text-center">
                  <img 
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-foreground mb-1">{vendor.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{vendor.specialty}</p>
                  <div className="flex items-center justify-center text-xs text-muted-foreground mb-3">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{vendor.location}</span>
                    <span className="mx-2">•</span>
                    <span>{vendor.products} products</span>
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">{vendor.rating}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Marketplace;