import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/layout/Layout";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Star,
  Ticket,
  Filter,
  Search,
  Heart,
  Share2,
  Music,
  Camera,
  Utensils,
  TreePine,
  Mountain
} from "lucide-react";

const Events = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const events = [
    {
      id: 1,
      title: "Sarhul Festival Celebration",
      date: "2024-03-15",
      time: "06:00 AM - 10:00 PM",
      location: "Ranchi, Various Villages",
      category: "Cultural Festival",
      price: "Free",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Join the grand celebration of spring and nature worship by tribal communities",
      organizer: "Jharkhand Tourism Board",
      attendees: 5000,
      rating: 4.9,
      featured: true,
      tags: ["Cultural", "Free", "Family-friendly", "Traditional"]
    },
    {
      id: 2,
      title: "Eco-Tourism Photography Workshop",
      date: "2024-03-20",
      time: "07:00 AM - 05:00 PM",
      location: "Netarhat, Jharkhand",
      category: "Workshop",
      price: "₹2,500",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      description: "Learn wildlife and landscape photography in Jharkhand's scenic locations",
      organizer: "Nature Lens Studio",
      attendees: 25,
      rating: 4.8,
      featured: true,
      tags: ["Photography", "Nature", "Small Group", "Skill Building"]
    },
    {
      id: 3,
      title: "Tribal Cooking Masterclass",
      date: "2024-03-25",
      time: "10:00 AM - 04:00 PM",
      location: "Khunti Village",
      category: "Culinary Experience",
      price: "₹1,200",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      description: "Learn authentic tribal recipes and traditional cooking methods",
      organizer: "Munda Cultural Center",
      attendees: 15,
      rating: 4.9,
      featured: false,
      tags: ["Food", "Cultural", "Hands-on", "Traditional"]
    },
    {
      id: 4,
      title: "Lodh Falls Trekking Expedition",
      date: "2024-03-30",
      time: "05:00 AM - 08:00 PM",
      location: "Lodh Falls, Latehar",
      category: "Adventure",
      price: "₹800",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
      description: "Guided trek to Jharkhand's highest waterfall with local experts",
      organizer: "Adventure Jharkhand",
      attendees: 30,
      rating: 4.7,
      featured: false,
      tags: ["Adventure", "Trekking", "Nature", "Guide Included"]
    },
    {
      id: 5,
      title: "Dhokra Art Workshop",
      date: "2024-04-05",
      time: "09:00 AM - 05:00 PM",
      location: "Chaibasa Art Center",
      category: "Art Workshop",
      price: "₹1,800",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Learn the ancient lost-wax casting technique from master artisans",
      organizer: "Traditional Arts Collective",
      attendees: 12,
      rating: 4.8,
      featured: true,
      tags: ["Art", "Traditional", "Handicraft", "Small Group"]
    },
    {
      id: 6,
      title: "Karma Festival Folk Music Concert",
      date: "2024-08-15",
      time: "06:00 PM - 11:00 PM",
      location: "Jamshedpur Cultural Complex",
      category: "Music Festival",
      price: "₹500",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      description: "Experience traditional folk music and dance performances",
      organizer: "Folk Music Society",
      attendees: 800,
      rating: 4.6,
      featured: false,
      tags: ["Music", "Dance", "Cultural", "Evening Event"]
    }
  ];

  const categories = [
    { id: "all", name: "All Events", icon: Calendar },
    { id: "cultural", name: "Cultural", icon: Music },
    { id: "adventure", name: "Adventure", icon: Mountain },
    { id: "workshop", name: "Workshops", icon: Camera },
    { id: "food", name: "Food & Culinary", icon: Utensils },
    { id: "nature", name: "Nature & Eco", icon: TreePine }
  ];

  const getEventIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "cultural festival": return Music;
      case "workshop": return Camera;
      case "culinary experience": return Utensils;
      case "adventure": return Mountain;
      case "art workshop": return Camera;
      case "music festival": return Music;
      default: return Calendar;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "cultural festival": return "bg-cultural-orange/10 text-cultural-orange border-cultural-orange/20";
      case "workshop": return "bg-primary/10 text-primary border-primary/20";
      case "culinary experience": return "bg-eco-green/10 text-eco-green border-eco-green/20";
      case "adventure": return "bg-adventure-blue/10 text-adventure-blue border-adventure-blue/20";
      case "art workshop": return "bg-accent/10 text-accent border-accent/20";
      case "music festival": return "bg-cultural-orange/10 text-cultural-orange border-cultural-orange/20";
      default: return "bg-secondary text-secondary-foreground border-border";
    }
  };

  const filteredEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    const today = new Date();
    
    if (activeTab === "upcoming") {
      return eventDate >= today;
    } else if (activeTab === "past") {
      return eventDate < today;
    } else {
      return event.featured;
    }
  });

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/20 to-cultural-orange/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cultural Events & Experiences
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover festivals, workshops, and unique experiences that celebrate Jharkhand's rich heritage
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Events Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">15K+</div>
              <div className="text-sm text-muted-foreground">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">25+</div>
              <div className="text-sm text-muted-foreground">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">4.8★</div>
              <div className="text-sm text-muted-foreground">Avg Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Card key={category.id} className="travel-card group cursor-pointer">
                <CardContent className="p-4 text-center">
                  <category.icon className="h-8 w-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-foreground">{category.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Events Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <TabsList className="grid w-full sm:w-auto grid-cols-3">
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>
            
            <div className="flex gap-2 w-full sm:w-auto">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>

          <TabsContent value={activeTab}>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredEvents.map((event) => {
                const EventIcon = getEventIcon(event.category);
                return (
                  <Card key={event.id} className="travel-card group overflow-hidden">
                    <div className="relative">
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-3 left-3">
                        <Badge className={getCategoryColor(event.category)}>
                          <EventIcon className="h-3 w-3 mr-1" />
                          {event.category}
                        </Badge>
                      </div>
                      
                      <div className="absolute top-3 right-3 flex gap-2">
                        {event.featured && (
                          <Badge className="bg-warning-amber text-white">
                            Featured
                          </Badge>
                        )}
                        <Button variant="ghost" size="icon" className="bg-background/80 hover:bg-background">
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      {/* Price Badge */}
                      <div className="absolute bottom-3 right-3">
                        <Badge className="bg-background/90 text-foreground font-bold">
                          {event.price}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="space-y-3">
                        {/* Date and Time */}
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{new Date(event.date).toLocaleDateString('en-IN', { 
                            day: 'numeric', 
                            month: 'short', 
                            year: 'numeric' 
                          })}</span>
                          <span className="mx-2">•</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{event.time}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-foreground line-clamp-2">
                          {event.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground line-clamp-2">
                          {event.description}
                        </p>

                        {/* Location */}
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{event.location}</span>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {event.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="flex items-center justify-between text-sm pt-2">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span>{event.attendees} going</span>
                            </div>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                              <span>{event.rating}</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2 pt-3">
                          <Button variant="outline" size="sm" className="flex-1">
                            View Details
                          </Button>
                          <Button variant="cultural" size="sm" className="flex-1">
                            <Ticket className="h-4 w-4 mr-1" />
                            {event.price === "Free" ? "Register" : "Book Now"}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Events
          </Button>
        </div>

        {/* Event Calendar Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Event Calendar</h2>
          <Card className="travel-card">
            <CardContent className="p-8 text-center">
              <div className="bg-muted rounded-lg h-96 flex items-center justify-center mb-6">
                <div className="text-center">
                  <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Interactive Event Calendar
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    View all events in a calendar format and plan your cultural journey
                  </p>
                </div>
              </div>
              <Button variant="default" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                View Full Calendar
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Create Event CTA */}
        <section className="mt-16 bg-gradient-to-r from-primary to-cultural-orange rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Organize Your Own Event</h2>
          <p className="text-xl mb-6 text-white/90">
            Share your cultural knowledge and create memorable experiences for travelers
          </p>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground">
            Become an Event Organizer
          </Button>
        </section>
      </div>
    </Layout>
  );
};

export default Events;