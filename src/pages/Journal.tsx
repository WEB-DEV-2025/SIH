import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";
import { 
  BookOpen,
  Plus,
  Calendar,
  MapPin,
  Camera,
  Heart,
  Star,
  Edit,
  Share2,
  Download,
  Search,
  Filter,
  Image,
  Video,
  Mic,
  Lock,
  Globe,
  Tag
} from "lucide-react";

const Journal = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<any>(null);

  const journalEntries = [
    {
      id: 1,
      title: "Magical Sunrise at Netarhat",
      date: "2024-03-15",
      location: "Netarhat, Jharkhand",
      excerpt: "Woke up at 5 AM to catch the sunrise from Magnolia Point. The view was absolutely breathtaking...",
      content: "Today was one of those days that remind you why you travel. Woke up at 5 AM to catch the sunrise from Magnolia Point. The view was absolutely breathtaking - rolling hills covered in mist, and the sun slowly painting the sky in shades of orange and pink. Met some local villagers who shared stories about their traditions. The hospitality here is incredible.",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop"
      ],
      mood: "Inspired",
      weather: "Clear",
      tags: ["Sunrise", "Nature", "Culture", "Netarhat"],
      privacy: "Private",
      rating: 5
    },
    {
      id: 2,
      title: "Learning Dhokra Art in Chaibasa",
      date: "2024-03-12",
      location: "Chaibasa, Jharkhand",
      excerpt: "Spent the day learning the ancient art of Dhokra metal casting from master artisan Suresh ji...",
      content: "Spent the day learning the ancient art of Dhokra metal casting from master artisan Suresh ji. The process is fascinating - using beeswax to create intricate designs, then coating with clay and burning out the wax. Created my first small elephant figurine! The artisans here have been practicing this craft for generations.",
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
      ],
      mood: "Creative",
      weather: "Sunny",
      tags: ["Art", "Handicrafts", "Learning", "Traditional"],
      privacy: "Public",
      rating: 5
    },
    {
      id: 3,
      title: "Tribal Village Feast",
      date: "2024-03-10",
      location: "Khunti Village",
      excerpt: "Invited to a traditional Munda family feast. The flavors were unlike anything I've tasted before...",
      content: "What an incredible experience! Was invited to a traditional Munda family feast. The flavors were unlike anything I've tasted before - handia (rice beer), pittha, and various local vegetables cooked in bamboo. The family shared stories about their customs and even taught me some basic Mundari phrases. Felt so welcomed and honored to be part of their celebration.",
      images: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
      ],
      mood: "Grateful",
      weather: "Pleasant",
      tags: ["Food", "Culture", "Family", "Traditional"],
      privacy: "Friends",
      rating: 5
    },
    {
      id: 4,
      title: "Trek to Lodh Falls",
      date: "2024-03-08",
      location: "Latehar, Jharkhand",
      excerpt: "3-hour trek through dense forests to reach Jharkhand's highest waterfall. The sound of cascading water...",
      content: "Started early morning for the 3-hour trek through dense forests to reach Jharkhand's highest waterfall. The sound of cascading water could be heard from kilometers away! The trek was challenging but so worth it. Spotted several bird species and even saw some deer. The local guide shared interesting facts about the flora and fauna. Perfect end to an adventurous day.",
      images: [
        "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop"
      ],
      mood: "Adventurous",
      weather: "Misty",
      tags: ["Trekking", "Waterfall", "Adventure", "Nature"],
      privacy: "Public",
      rating: 4
    }
  ];

  const stats = {
    totalEntries: 28,
    placesVisited: 12,
    photosAdded: 156,
    memoriesShared: 8
  };

  const moods = ["Happy", "Excited", "Peaceful", "Adventurous", "Grateful", "Inspired", "Creative", "Contemplative"];
  const weatherOptions = ["Sunny", "Cloudy", "Rainy", "Misty", "Clear", "Pleasant"];

  return (
    <Layout>
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/20 to-eco-green/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              My Travel Journal
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Capture and preserve your precious travel memories, experiences, and discoveries
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">{stats.totalEntries}</div>
              <div className="text-sm text-muted-foreground">Journal Entries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">{stats.placesVisited}</div>
              <div className="text-sm text-muted-foreground">Places Visited</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">{stats.photosAdded}</div>
              <div className="text-sm text-muted-foreground">Photos Added</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">{stats.memoriesShared}</div>
              <div className="text-sm text-muted-foreground">Memories Shared</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search your memories..." className="pl-10 w-64" />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
          
          <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <DialogTrigger asChild>
              <Button variant="cultural" size="lg">
                <Plus className="h-4 w-4 mr-2" />
                New Entry
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Create New Journal Entry
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input id="title" placeholder="Give your memory a title..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="Where were you?" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mood">Mood</Label>
                    <select className="w-full px-3 py-2 border border-input rounded-md">
                      <option value="">Select mood...</option>
                      {moods.map(mood => (
                        <option key={mood} value={mood}>{mood}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="content">Your Story</Label>
                  <Textarea 
                    id="content" 
                    placeholder="Tell the story of this moment..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tags">Tags</Label>
                  <Input id="tags" placeholder="Add tags separated by commas..." />
                </div>
                
                <div className="flex items-center space-x-4">
                  <Button variant="outline" className="flex-1">
                    <Camera className="h-4 w-4 mr-2" />
                    Add Photos
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Video className="h-4 w-4 mr-2" />
                    Add Video
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Mic className="h-4 w-4 mr-2" />
                    Voice Note
                  </Button>
                </div>
                
                <div className="flex justify-between items-center pt-4">
                  <div className="flex items-center space-x-2">
                    <Lock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Privacy: Private</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" onClick={() => setIsCreateOpen(false)}>
                      Cancel
                    </Button>
                    <Button variant="cultural">
                      Save Entry
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Journal Entries */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {journalEntries.map((entry) => (
            <Card key={entry.id} className="travel-card group overflow-hidden">
              {/* Entry Header */}
              <div className="relative">
                {entry.images.length > 0 && (
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={entry.images[0]} 
                      alt={entry.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {entry.images.length > 1 && (
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        +{entry.images.length - 1} more
                      </div>
                    )}
                  </div>
                )}
                
                <div className="absolute top-3 left-3 flex space-x-2">
                  <Badge className="bg-background/90 text-foreground">
                    {entry.mood}
                  </Badge>
                  <Badge variant="outline" className="bg-background/90">
                    {entry.weather}
                  </Badge>
                </div>
                
                <div className="absolute top-3 right-3 flex space-x-1">
                  <div className="flex">
                    {[...Array(entry.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="bg-background/90 rounded-full p-1">
                    {entry.privacy === "Private" ? (
                      <Lock className="h-3 w-3 text-muted-foreground" />
                    ) : (
                      <Globe className="h-3 w-3 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Date and Location */}
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(entry.date).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {entry.location}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground line-clamp-1">
                    {entry.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground line-clamp-3">
                    {entry.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {entry.tags.slice(0, 4).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                    {entry.tags.length > 4 && (
                      <Badge variant="secondary" className="text-xs">
                        +{entry.tags.length - 4} more
                      </Badge>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex justify-between items-center pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedEntry(entry)}
                    >
                      Read More
                    </Button>
                    <div className="flex space-x-1">
                      <Button variant="ghost" size="icon">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Entries
          </Button>
        </div>

        {/* Entry Detail Modal */}
        {selectedEntry && (
          <Dialog open={!!selectedEntry} onOpenChange={() => setSelectedEntry(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedEntry.title}</DialogTitle>
                <div className="flex items-center text-sm text-muted-foreground space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(selectedEntry.date).toLocaleDateString('en-IN', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {selectedEntry.location}
                  </div>
                </div>
              </DialogHeader>
              
              <div className="space-y-6 py-4">
                {/* Images */}
                {selectedEntry.images.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedEntry.images.map((image: string, index: number) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`${selectedEntry.title} - ${index + 1}`}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}
                
                {/* Mood and Weather */}
                <div className="flex items-center space-x-4">
                  <Badge className="bg-primary/10 text-primary">
                    Mood: {selectedEntry.mood}
                  </Badge>
                  <Badge variant="outline">
                    Weather: {selectedEntry.weather}
                  </Badge>
                  <div className="flex">
                    {[...Array(selectedEntry.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                {/* Content */}
                <div className="prose prose-sm max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedEntry.content}
                  </p>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {selectedEntry.tags.map((tag: string, index: number) => (
                    <Badge key={index} variant="secondary">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Actions */}
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button variant="outline" onClick={() => setSelectedEntry(null)}>
                    Close
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}

        {/* Journal Features */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Your Journey, Your Story
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="travel-card text-center p-6">
              <CardContent className="p-0">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Rich Media Support
                </h3>
                <p className="text-muted-foreground">
                  Add photos, videos, voice notes, and drawings to bring your memories to life
                </p>
              </CardContent>
            </Card>
            
            <Card className="travel-card text-center p-6">
              <CardContent className="p-0">
                <div className="bg-eco-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-eco-green" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Privacy Control
                </h3>
                <p className="text-muted-foreground">
                  Keep entries private, share with friends, or inspire the community
                </p>
              </CardContent>
            </Card>
            
            <Card className="travel-card text-center p-6">
              <CardContent className="p-0">
                <div className="bg-cultural-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="h-8 w-8 text-cultural-orange" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Export & Backup
                </h3>
                <p className="text-muted-foreground">
                  Download your journal as PDF or backup to cloud storage
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Journal;