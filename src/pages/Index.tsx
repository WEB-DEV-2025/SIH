import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import { 
  Search, 
  MapPin, 
  Users, 
  Calendar, 
  Star, 
  Heart, 
  Shield, 
  Phone, 
  Map,
  BookOpen,
  Compass,
  CheckCircle,
  ArrowRight,
  Play,
  Clock,
  Headphones,
  Smartphone,
  Monitor
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import heroBackground from "@/assets/hero-background.jpg";
import marketplaceHero from "@/assets/marketplace-hero.jpg";
import aiPlanner from "@/assets/ai-planner.jpg";

const Index = () => {
  const featuredExperiences = [
    {
      id: 1,
      title: "Netarhat Eco Retreat",
      location: "Netarhat",
      category: "Eco Tourism",
      price: "₹2,500/night",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=640&h=360&fit=crop",
      description: "Stay in eco-friendly cottages amidst lush forests with stunning valley views."
    },
    {
      id: 2,
      title: "Tribal Village Experience",
      location: "Khunti",
      category: "Cultural",
      price: "₹1,500/person",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=640&h=360&fit=crop",
      description: "Immerse in Munda tribal culture with traditional dance, food and crafts."
    },
    {
      id: 3,
      title: "Lodh Falls Trekking",
      location: "Lodh Falls",
      category: "Adventure",
      price: "₹800/person",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=640&h=360&fit=crop",
      description: "Trek to Jharkhand's highest waterfall through dense forests with local guides."
    }
  ];

  const marketplaceItems = [
    {
      title: "Dhokra Tribal Art",
      price: "₹1,200",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=320&h=240&fit=crop"
    },
    {
      title: "Tribal Cooking Class",
      price: "₹800/person",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=320&h=240&fit=crop"
    },
    {
      title: "Tussar Silk Saree",
      price: "₹3,500",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=320&h=240&fit=crop"
    },
    {
      title: "Bamboo Craft Set",
      price: "₹1,800",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=320&h=240&fit=crop"
    }
  ];

  const safetyFeatures = [
    {
      icon: Phone,
      title: "24/7 Emergency Hotline",
      description: "Instant access to local emergency services and medical help"
    },
    {
      icon: MapPin,
      title: "Real-time Location Sharing",
      description: "Share your location with family and emergency contacts"
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive coverage for all your adventures"
    }
  ];

  // Carousel state for marketplace left card
  const [leftMarketApi, setLeftMarketApi] = useState<CarouselApi | null>(null);
  const [leftMarketIndex, setLeftMarketIndex] = useState(0);

  useEffect(() => {
    if (!leftMarketApi) return;
    const onSelect = () => setLeftMarketIndex(leftMarketApi.selectedScrollSnap());
    onSelect();
    leftMarketApi.on("select", onSelect);
    return () => leftMarketApi.off("select", onSelect);
  }, [leftMarketApi]);

  return (
    <Layout>
      {/* Hero Section */}
      <div 
        className="h-screen flex items-center justify-center text-white travel-hero-bg"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBackground})` }}
      >
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Jharkhand's Hidden Treasures
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Experience eco-tourism and rich tribal culture like never before
          </p>
          
          {/* Search Bar */}
          <Card className="max-w-4xl mx-auto bg-background/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Destination</label>
                  <Input placeholder="Where to?" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Dates</label>
                  <Input placeholder="Add dates" className="bg-background" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">Travelers</label>
                  <Input placeholder="Add guests" className="bg-background" />
                </div>
                <div className="flex items-end">
                  <Button variant="hero" size="lg" className="w-full">
                    <Search className="h-5 w-5 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Featured Experiences */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Experiences</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover authentic eco-tourism and cultural experiences crafted by local communities
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredExperiences.map((experience) => (
            <Card key={experience.id} className="overflow-hidden border-border">
              {/* Image with badge and rating */}
              <div className="relative h-48">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-3 top-3">
                  <Badge className="bg-emerald-600 text-white">{experience.category}</Badge>
                </div>
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/60 text-white px-2 py-1 text-xs">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span>{experience.rating}</span>
                </div>
              </div>

              <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-foreground">{experience.title}</h3>
                <div className="mt-1 flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 mr-1" />
                  <span>{experience.location}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {experience.description}
                </p>

                {/* tags (static examples) */}
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-muted text-foreground">Sunrise Point</Badge>
                  <Badge variant="secondary" className="bg-muted text-foreground">Hill Station</Badge>
                  <Badge variant="secondary" className="bg-muted text-foreground">Photography</Badge>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm">
                    <span className="font-semibold">From {experience.price}</span>
                    <span className="text-muted-foreground"> per person</span>
                  </div>
                  <Link to="/marketplace">
                    <Button size="sm" className="px-5">Explore</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/marketplace">
            <Button variant="eco" size="lg">
              View All Experiences
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* AR/VR Experience Previews */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">AR/VR Experience Previews</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Explore Jharkhand like never before with cutting-edge virtual and augmented reality experiences
            </p>
          </div>

          {/* Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "Virtual Trek to Netarhat Sunrise",
                tag: "VR",
                quality: "4K",
                stats: "12.5k",
                time: "8 minutes",
                rating: "4.9",
                image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=700&fit=crop",
              },
              {
                title: "AR Wildlife Safari - Betla National Park",
                tag: "AR",
                quality: "HD",
                stats: "8.7k",
                time: "12 minutes",
                rating: "4.8",
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=700&fit=crop",
              },
              {
                title: "Virtual Temple Tour - Deoghar",
                tag: "VR",
                quality: "4K",
                stats: "15.2k",
                time: "15 minutes",
                rating: "4.9",
                image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1200&h=700&fit=crop",
              },
            ].map((card, idx) => (
              <div key={idx} className="relative rounded-xl overflow-hidden bg-background/10">
                <div
                  className="h-56 bg-cover bg-center"
                  style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${card.image})` }}
                >
                  <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                    <div className="absolute left-3 top-3 flex items-center gap-2 text-xs">
                      <span className="px-2 py-1 rounded-full bg-indigo-600/90">{card.tag}</span>
                      <span className="px-2 py-1 rounded-full bg-black/60">{card.quality}</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="h-14 w-14 rounded-full bg-white/25 hover:bg-white/35 transition-colors flex items-center justify-center">
                        <Play className="h-6 w-6 text-white" />
                      </button>
                    </div>
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <div className="mt-2 flex items-center gap-4 text-sm text-gray-200">
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" /> {card.stats}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" /> {card.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> {card.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Device tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-background p-8 text-center">
              <Headphones className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h4 className="text-lg font-semibold mb-1 text-foreground">VR Headset</h4>
              <p className="text-muted-foreground mb-4">Full immersion with 360° experiences</p>
              <Button variant="secondary">Try VR</Button>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 p-8 text-center text-white">
              <Smartphone className="h-10 w-10 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-1">Mobile AR</h4>
              <p className="text-white/80 mb-4">Augmented reality on your smartphone</p>
              <Button className="bg-white text-foreground hover:bg-gray-100">Open AR</Button>
            </div>
            <div className="rounded-xl bg-background p-8 text-center">
              <Monitor className="h-10 w-10 mx-auto mb-4 text-primary" />
              <h4 className="text-lg font-semibold mb-1 text-foreground">Web Preview</h4>
              <p className="text-muted-foreground mb-4">360° preview in your browser</p>
              <Button variant="outline">View Now</Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Itinerary Section */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Smart AI Itinerary Planner
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our AI creates personalized travel plans based on your preferences, budget and travel style. 
                Get the perfect mix of adventure, culture and relaxation.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Budget optimization",
                  "Local expert recommendations", 
                  "Real-time availability",
                  "Cultural insights integration"
                ].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckCircle className="text-primary mr-3 h-5 w-5 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/itinerary">
                <Button variant="adventure" size="lg">
                  <Map className="mr-2 h-5 w-5" />
                  Plan Your Trip
                </Button>
              </Link>
            </div>
            <Card className="travel-card overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src={aiPlanner} 
                  alt="AI Itinerary Planner" 
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Local Marketplace</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Support local artisans and communities by purchasing authentic handicrafts and booking unique experiences
          </p>
        </div>

        {/* Two-column: product card (left) and features panel (right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Left: Featured product card carousel (full-card) */}
          <Card className="overflow-hidden relative">
            <Carousel opts={{ loop: true }} className="w-full" setApi={(api) => setLeftMarketApi(api)}>
              <CarouselContent>
                {marketplaceItems.slice(0, 4).map((item, idx) => (
                  <CarouselItem key={idx}>
                    <div className="relative h-56">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute left-3 top-3 flex gap-2 text-xs font-medium">
                        <span className="bg-orange-500 text-white px-2 py-1 rounded">Bestseller</span>
                        <span className="bg-emerald-600 text-white px-2 py-1 rounded flex items-center gap-1">
                          <CheckCircle className="h-3 w-3" /> Verified
                        </span>
                      </div>
                      <div className="absolute left-3 bottom-3">
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">22% OFF</span>
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-base font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">Tribal Artisan Cooperative</p>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        Handcrafted bronze art using ancient lost-wax technique
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-foreground font-medium">{item.rating}</span>
                        <span>(127)</span>
                      </div>
                      <div className="mt-3 flex items-end gap-2">
                        <span className="text-lg font-bold text-foreground">{item.price}</span>
                        <span className="text-sm text-muted-foreground line-through">₹3,200</span>
                      </div>
                    </CardContent>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-3 top-28 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground border-0" />
              <CarouselNext className="right-3 top-28 -translate-y-1/2 bg-white/80 hover:bg-white text-foreground border-0" />
            </Carousel>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {marketplaceItems.slice(0, 4).map((_, i) => (
                <button
                  key={i}
                  onClick={() => leftMarketApi?.scrollTo(i)}
                  aria-label={`Go to product ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    leftMarketIndex === i ? "bg-foreground w-6" : "bg-muted-foreground/50 w-2.5"
                  }`}
                />
              ))}
            </div>
          </Card>

          {/* Right: Trust features & CTA */}
          <div className="rounded-xl bg-muted/50 border border-border p-6 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="h-10 w-10 rounded-full mx-auto mb-3 bg-orange-100 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-orange-500" />
                </div>
                <div className="font-semibold text-foreground">Blockchain Verified</div>
                <div className="text-sm text-muted-foreground mt-1">All products and sellers are verified using blockchain technology for authenticity</div>
              </div>
              <div className="text-center">
                <div className="h-10 w-10 rounded-full mx-auto mb-3 bg-emerald-100 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="font-semibold text-foreground">Support Local Artisans</div>
                <div className="text-sm text-muted-foreground mt-1">Direct support to local communities and craftspeople</div>
              </div>
              <div className="text-center">
                <div className="h-10 w-10 rounded-full mx-auto mb-3 bg-blue-100 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div className="font-semibold text-foreground">Secure Transactions</div>
                <div className="text-sm text-muted-foreground mt-1">Safe and secure payment processing with buyer protection</div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link to="/marketplace">
                <Button variant="marketplace" className="px-6">Explore Full Marketplace</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Travel With Confidence</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Your safety is our priority. Comprehensive safety features to ensure a worry-free journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => (
              <Card key={index} className="bg-background/10 border-background/20 text-center p-6">
                <CardContent className="p-0">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-background mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/safety">
              <Button variant="safety" size="lg" className="sos-pulse">
                <Shield className="mr-2 h-5 w-5" />
                Learn More About Safety
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-hero py-16 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join thousands of travelers discovering Jharkhand's cultural and ecological wonders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/itinerary">
              <Button variant="hero" size="xl">
                <Map className="mr-2 h-5 w-5" />
                Plan Your Trip
              </Button>
            </Link>
            <Link to="/cultural-insights">
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-foreground">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Culture
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
