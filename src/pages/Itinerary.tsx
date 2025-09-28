import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import { 
  MapPin, 
  Calendar, 
  Users, 
  Download, 
  Share2, 
  Clock,
  Compass,
  Camera,
  Utensils,
  Bed,
  Mountain,
  TreePine,
  Waves
} from "lucide-react";

const Itinerary = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showItinerary, setShowItinerary] = useState(false);

  const handleGenerateItinerary = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowItinerary(true);
    }, 2000);
  };

  const sampleItinerary = {
    title: "3 Days in Netarhat",
    subtitle: "Adventure & Nature Trip • Budget: ₹2000/day",
    days: [
      {
        day: 1,
        title: "Arrival & Exploration",
        activities: [
          {
            time: "9:00 AM",
            title: "Arrival at Netarhat",
            description: "Check-in at Netarhat Eco Retreat",
            icon: Bed,
            type: "accommodation"
          },
          {
            time: "2:00 PM", 
            title: "Magnolia Point",
            description: "Visit the famous viewpoint with stunning valley views",
            icon: Camera,
            type: "sightseeing"
          },
          {
            time: "5:30 PM",
            title: "Sunset at Upper Ghaghri Falls",
            description: "Short trek to witness breathtaking sunset views",
            icon: Mountain,
            type: "adventure"
          }
        ]
      },
      {
        day: 2,
        title: "Adventure Day",
        activities: [
          {
            time: "7:00 AM",
            title: "Koel View Point Trek",
            description: "Moderate 3-hour trek through dense forests",
            icon: TreePine,
            type: "adventure"
          },
          {
            time: "1:00 PM",
            title: "Tribal Village Visit",
            description: "Experience local culture and traditional lunch",
            icon: Utensils,
            type: "cultural"
          },
          {
            time: "7:00 PM",
            title: "Bonfire & Folk Dance",
            description: "Enjoy local music and dance performances",
            icon: Users,
            type: "cultural"
          }
        ]
      },
      {
        day: 3,
        title: "Nature & Departure",
        activities: [
          {
            time: "6:00 AM",
            title: "Lower Ghaghri Falls",
            description: "Nature walk and photography session",
            icon: Waves,
            type: "nature"
          },
          {
            time: "11:00 AM",
            title: "Local Market Visit",
            description: "Shop for handicrafts and local produce",
            icon: MapPin,
            type: "shopping"
          },
          {
            time: "3:00 PM",
            title: "Departure",
            description: "Check-out and journey back",
            icon: Compass,
            type: "travel"
          }
        ]
      }
    ]
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case "adventure": return "bg-adventure-blue/10 text-adventure-blue border-adventure-blue/20";
      case "cultural": return "bg-cultural-orange/10 text-cultural-orange border-cultural-orange/20";
      case "nature": return "bg-eco-green/10 text-eco-green border-eco-green/20";
      case "accommodation": return "bg-muted/50 text-muted-foreground border-border";
      case "sightseeing": return "bg-primary/10 text-primary border-primary/20";
      default: return "bg-secondary text-secondary-foreground border-border";
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">AI Itinerary Planner</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our smart algorithm creates personalized travel plans based on your preferences
          </p>
        </div>
        
        {/* Itinerary Form */}
        <Card className="travel-card mb-12">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Compass className="h-6 w-6 mr-2 text-primary" />
              Plan Your Perfect Trip
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <Label htmlFor="destination">Destination</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ranchi">Ranchi</SelectItem>
                    <SelectItem value="jamshedpur">Jamshedpur</SelectItem>
                    <SelectItem value="netarhat">Netarhat</SelectItem>
                    <SelectItem value="deoghar">Deoghar</SelectItem>
                    <SelectItem value="hazaribagh">Hazaribagh</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="dates">Travel Dates</Label>
                <Input type="text" placeholder="Select dates" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="travelers">Travelers</Label>
                <Input type="number" min="1" placeholder="Number of people" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="budget">Budget</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Any Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="budget">Budget (₹500-₹1500/day)</SelectItem>
                    <SelectItem value="mid-range">Mid-range (₹1500-₹3000/day)</SelectItem>
                    <SelectItem value="luxury">Luxury (₹3000+/day)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="style">Travel Style</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="adventure">Adventure</SelectItem>
                    <SelectItem value="relaxation">Relaxation</SelectItem>
                    <SelectItem value="cultural">Cultural</SelectItem>
                    <SelectItem value="family">Family</SelectItem>
                    <SelectItem value="solo">Solo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="interests">Interests</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Interests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nature">Nature & Wildlife</SelectItem>
                    <SelectItem value="history">History & Heritage</SelectItem>
                    <SelectItem value="food">Food & Cuisine</SelectItem>
                    <SelectItem value="arts">Art & Crafts</SelectItem>
                    <SelectItem value="photography">Photography</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="transport">Transport</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Transport Preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public Transport</SelectItem>
                    <SelectItem value="private">Private Vehicle</SelectItem>
                    <SelectItem value="walking">Walking/Cycling</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <Button 
                  onClick={handleGenerateItinerary}
                  disabled={isGenerating}
                  variant="adventure" 
                  size="lg" 
                  className="w-full"
                >
                  {isGenerating ? "Generating..." : "Generate Itinerary"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Generated Itinerary */}
        {showItinerary && (
          <Card className="travel-card">
            {/* Itinerary Header */}
            <div className="bg-primary text-primary-foreground p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{sampleItinerary.title}</h3>
                  <p className="text-primary-foreground/90">{sampleItinerary.subtitle}</p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-2">
                  <Button variant="outline" size="sm" className="bg-white text-primary hover:bg-gray-50">
                    <Download className="mr-2 h-4 w-4" /> Download
                  </Button>
                  <Button variant="outline" size="sm" className="bg-white text-primary hover:bg-gray-50">
                    <Share2 className="mr-2 h-4 w-4" /> Share
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Itinerary Days */}
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {sampleItinerary.days.map((day) => (
                  <div key={day.day} className="p-6">
                    <div className="flex items-start">
                      <div className="bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4 font-bold">
                        {day.day}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-foreground mb-4">{day.title}</h4>
                        <div className="space-y-4">
                          {day.activities.map((activity, index) => (
                            <div key={index} className="relative pl-8 timeline-line">
                              <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                                <activity.icon className="h-4 w-4 text-primary-foreground" />
                              </div>
                              <div className="bg-muted/30 p-4 rounded-lg">
                                <div className="flex justify-between items-start mb-2">
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                      <h5 className="font-medium text-foreground">{activity.title}</h5>
                                      <Badge variant="outline" className={getActivityColor(activity.type)}>
                                        {activity.type}
                                      </Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                                  </div>
                                  <div className="flex items-center text-sm text-muted-foreground ml-4">
                                    <Clock className="h-4 w-4 mr-1" />
                                    {activity.time}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Pre-made Itineraries */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Popular Itineraries</h2>
            <p className="text-lg text-muted-foreground">
              Get inspired by these curated travel plans from our experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Weekend Getaway to Ranchi",
                duration: "2 Days",
                price: "₹3,500",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
                highlights: ["Tagore Hill", "Rock Garden", "Tribal Museum"]
              },
              {
                title: "Spiritual Journey to Deoghar",
                duration: "3 Days", 
                price: "₹4,200",
                image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=400&h=300&fit=crop",
                highlights: ["Baidyanath Temple", "Tapovan", "Satsang Ashram"]
              },
              {
                title: "Adventure in Dalma Hills",
                duration: "4 Days",
                price: "₹6,800", 
                image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
                highlights: ["Wildlife Safari", "Trekking", "Bird Watching"]
              }
            ].map((itinerary, index) => (
              <Card key={index} className="travel-card group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={itinerary.image} 
                    alt={itinerary.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-background/90 text-foreground">
                      {itinerary.duration}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {itinerary.title}
                  </h3>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {itinerary.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-foreground">
                      {itinerary.price}
                    </span>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Itinerary;