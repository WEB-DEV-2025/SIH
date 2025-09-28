import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/layout/Layout";
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Facebook, 
  Github,
  Compass,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const benefits = [
    "Create personalized travel itineraries",
    "Access to exclusive cultural experiences",
    "Connect with local communities",
    "Private travel journal",
    "24/7 safety & emergency support",
    "Earn rewards for sustainable travel"
  ];

  return (
    <Layout>
      <div className="min-h-screen flex">
        {/* Left Side - Image and Benefits */}
        <div 
          className="hidden lg:flex lg:w-1/2 relative bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop')`
          }}
        >
          <div className="flex items-center justify-center p-12 text-white w-full">
            <div className="max-w-md text-center">
              <div className="mb-8">
                <Compass className="h-16 w-16 mx-auto mb-4" />
                <h1 className="text-4xl font-bold mb-4">
                  {isLogin ? "Welcome Back" : "Join KalpanaX"}
                </h1>
                <p className="text-xl text-gray-200">
                  {isLogin 
                    ? "Continue your journey through Jharkhand's cultural and ecological wonders"
                    : "Start your adventure through Jharkhand's hidden treasures"
                  }
                </p>
              </div>
              
              <div className="space-y-4 text-left">
                <h3 className="text-lg font-semibold mb-4">Why join our community?</h3>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-eco-green mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex space-x-4">
                <Button variant="ghost" className="text-white border-white hover:bg-white hover:text-foreground">
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </Button>
                <Button variant="ghost" className="text-white border-white hover:bg-white hover:text-foreground">
                  <Github className="h-4 w-4 mr-2" />
                  Google
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Mobile Header */}
            <div className="lg:hidden text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Compass className="h-8 w-8 text-primary mr-2" />
                <span className="text-2xl font-bold text-foreground">KalpanaX</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                {isLogin ? "Welcome Back" : "Create Account"}
              </h2>
            </div>

            <Card className="travel-card">
              <CardContent className="p-8">
                <div className="hidden lg:block text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    {isLogin ? "Sign In" : "Create Account"}
                  </h2>
                  <p className="text-muted-foreground">
                    {isLogin 
                      ? "Enter your details to access your account"
                      : "Join our community of cultural explorers"
                    }
                  </p>
                </div>
                
                <form className="space-y-6">
                  {!isLogin && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label htmlFor="password">Password</Label>
                      {isLogin && (
                        <Button variant="link" className="p-0 h-auto text-sm">
                          Forgot password?
                        </Button>
                      )}
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input 
                        id="password" 
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pl-10 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  
                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input 
                          id="confirmPassword" 
                          type="password"
                          placeholder="••••••••"
                          className="pl-10"
                        />
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm">
                      {isLogin ? "Remember me" : "I agree to the Terms & Conditions"}
                    </Label>
                  </div>
                  
                  <Button variant="cultural" size="lg" className="w-full">
                    {isLogin ? "Sign In" : "Create Account"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator className="w-full" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-background text-muted-foreground">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <Button variant="outline">
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                    <Button variant="outline">
                      <Github className="h-4 w-4 mr-2" />
                      Google
                    </Button>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-sm text-muted-foreground">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <Button 
                      variant="link" 
                      className="p-0 h-auto font-medium"
                      onClick={() => setIsLogin(!isLogin)}
                    >
                      {isLogin ? "Sign up" : "Sign in"}
                    </Button>
                  </p>
                </div>

                {/* Quick Links */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center mb-3">
                    Quick access for travelers:
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Link to="/safety">
                      <Button variant="outline" size="sm">
                        Emergency SOS
                      </Button>
                    </Link>
                    <Link to="/itinerary">
                      <Button variant="outline" size="sm">
                        Plan Trip
                      </Button>
                    </Link>
                    <Link to="/marketplace">
                      <Button variant="outline" size="sm">
                        Local Market
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;