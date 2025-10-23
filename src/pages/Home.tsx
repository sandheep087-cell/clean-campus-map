import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, Camera, Trophy, Recycle, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const features = [
    {
      icon: MapPin,
      title: "Interactive Map",
      description: "View waste locations and collection zones in real-time",
    },
    {
      icon: Camera,
      title: "Report Waste",
      description: "Snap a photo and report waste in your area instantly",
    },
    {
      icon: Trophy,
      title: "Earn Rewards",
      description: "Collect eco-points and climb the leaderboard",
    },
    {
      icon: Recycle,
      title: "Find Centers",
      description: "Locate nearby recycling centers with ease",
    },
    {
      icon: Users,
      title: "Join Community",
      description: "Connect with eco-warriors in your neighborhood",
    },
    {
      icon: TrendingUp,
      title: "Track Impact",
      description: "See your positive environmental impact grow",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Track, Report & Reward{" "}
                <span className="bg-gradient-eco bg-clip-text text-transparent">
                  Clean Living
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Join the movement to make our communities cleaner and greener. Report waste,
                earn rewards, and make a real difference in your neighborhood.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/report">
                  <Button variant="hero" size="lg">
                    <Camera className="w-5 h-5" />
                    Report Waste
                  </Button>
                </Link>
                <Link to="/map">
                  <Button variant="outline" size="lg">
                    <MapPin className="w-5 h-5" />
                    View Map
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Reports Made</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">2.5M</div>
                  <div className="text-sm text-muted-foreground">Eco Points</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-eco opacity-20 blur-3xl rounded-full"></div>
              <img
                src={heroImage}
                alt="Community working together for waste management"
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              How <span className="text-primary">TrashTrackr</span> Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple, effective, and rewarding. Join thousands making a difference every day.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-eco transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Make a Difference?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Start tracking waste, earning rewards, and building a cleaner future today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/report">
              <Button variant="hero" size="lg">
                Get Started
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
