import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/layout/Layout";
import { 
  BookOpen, 
  Music, 
  Utensils, 
  Palette, 
  Users, 
  Calendar,
  MapPin,
  Play,
  Clock,
  ArrowRight
} from "lucide-react";

const CulturalInsights = () => {
  const culturalTopics = [
    {
      id: 1,
      title: "Tribal Communities",
      description: "Learn about the rich heritage of Munda, Santhali, and Ho tribes",
      icon: Users,
      color: "bg-cultural-orange/10 text-cultural-orange"
    },
    {
      id: 2,
      title: "Traditional Arts",
      description: "Discover Dhokra casting, Paitkar paintings, and tribal crafts",
      icon: Palette,
      color: "bg-primary/10 text-primary"
    },
    {
      id: 3,
      title: "Folk Music & Dance",
      description: "Experience Jhumair, Paika, and other traditional performances",
      icon: Music,
      color: "bg-adventure-blue/10 text-adventure-blue"
    },
    {
      id: 4,
      title: "Cuisine & Traditions",
      description: "Taste authentic tribal recipes and cooking methods",
      icon: Utensils,
      color: "bg-eco-green/10 text-eco-green"
    }
  ];

  const articles = [
    {
      id: 1,
      title: "The Art of Dhokra: Ancient Metal Casting Traditions",
      excerpt: "Explore the 4000-year-old lost-wax casting technique that creates beautiful bronze artifacts...",
      author: "Dr. Anita Kumari",
      readTime: "8 min read",
      category: "Traditional Arts",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Sarna: The Sacred Grove Traditions of Jharkhand",
      excerpt: "Understanding the spiritual connection between tribal communities and nature...",
      author: "Tribhuvan Mahato",
      readTime: "12 min read",
      category: "Spirituality",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      featured: true
    },
    {
      id: 3,
      title: "Jhumair: The Soul of Tribal Festivals",
      excerpt: "Dance forms that celebrate harvest, love, and community bonding...",
      author: "Suraj Munda",
      readTime: "6 min read",
      category: "Music & Dance",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "Tribal Cuisine: Beyond Handia and Dhuska",
      excerpt: "A culinary journey through traditional recipes and ingredients...",
      author: "Maya Soren",
      readTime: "10 min read",
      category: "Food Culture",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      featured: false
    }
  ];

  const festivals = [
    {
      name: "Sarhul Festival",
      date: "March 2024",
      description: "Celebration of spring and nature worship",
      location: "Across Jharkhand",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
    },
    {
      name: "Karma Festival",
      date: "August 2024",
      description: "Harvest festival with traditional dance",
      location: "Tribal villages",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
    },
    {
      name: "Tusu Parab",
      date: "December 2024",
      description: "Winter harvest celebration",
      location: "Rural Jharkhand",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=200&fit=crop"
    }
  ];

  const videos = [
    {
      title: "Dhokra Artisans at Work",
      duration: "5:23",
      views: "12K",
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop"
    },
    {
      title: "Sarhul Festival Celebrations",
      duration: "8:15",
      views: "25K",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
    },
    {
      title: "Traditional Cooking Methods",
      duration: "6:42",
      views: "18K",
      thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cultural-orange/20 to-primary/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cultural Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Dive deep into Jharkhand's rich tribal heritage, traditions, and living culture
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {culturalTopics.map((topic) => (
              <Card key={topic.id} className="travel-card p-4 min-w-[200px]">
                <CardContent className="p-0 text-center">
                  <div className={`w-12 h-12 rounded-full ${topic.color} flex items-center justify-center mx-auto mb-3`}>
                    <topic.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{topic.title}</h3>
                  <p className="text-sm text-muted-foreground">{topic.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Articles */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">Featured Articles</h2>
            <Button variant="outline">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {articles.filter(article => article.featured).map((article) => (
              <Card key={article.id} className="travel-card group overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-cultural-orange text-white">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>By {article.author}</span>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <Button variant="cultural" className="w-full">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* More Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.filter(article => !article.featured).map((article) => (
              <Card key={article.id} className="travel-card group">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-24 h-24 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2">
                        {article.category}
                      </Badge>
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{article.author}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cultural Videos */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">Cultural Videos</h2>
            <Button variant="outline">
              View All Videos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="travel-card group overflow-hidden">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" className="bg-white/20 hover:bg-white/30 text-white">
                      <Play className="h-8 w-8" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{video.views} views</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Festivals */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Upcoming Cultural Events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {festivals.map((festival, index) => (
              <Card key={index} className="travel-card overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={festival.image} 
                    alt={festival.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <Calendar className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-medium text-primary">{festival.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {festival.name}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {festival.description}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {festival.location}
                  </div>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Interactive Cultural Map */}
        <section>
          <h2 className="text-3xl font-bold text-foreground mb-8">Cultural Heritage Map</h2>
          
          <Card className="travel-card">
            <CardContent className="p-8 text-center">
              <div className="bg-muted rounded-lg h-96 flex items-center justify-center mb-6">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Interactive Cultural Map
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Explore cultural sites, tribal villages, and heritage locations across Jharkhand
                  </p>
                </div>
              </div>
              <Button variant="cultural" size="lg">
                Explore Cultural Map
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default CulturalInsights;