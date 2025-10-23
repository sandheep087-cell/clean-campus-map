import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Lightbulb, BookOpen, ArrowRight } from "lucide-react";

const Community = () => {
  const events = [
    {
      title: "Beach Cleanup Drive",
      date: "March 15, 2024",
      time: "9:00 AM - 12:00 PM",
      location: "Sunset Beach",
      participants: 45,
      maxParticipants: 50,
    },
    {
      title: "Park Restoration Day",
      date: "March 22, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Central Park",
      participants: 32,
      maxParticipants: 40,
    },
    {
      title: "Recycling Workshop",
      date: "March 29, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Community Center",
      participants: 18,
      maxParticipants: 30,
    },
  ];

  const tips = [
    {
      title: "Reduce Plastic Usage",
      description:
        "Switch to reusable bags, bottles, and containers. Small changes make a big difference!",
      icon: "♻️",
    },
    {
      title: "Compost at Home",
      description:
        "Turn food scraps into nutrient-rich soil. It's easier than you think and great for gardens.",
      icon: "🌱",
    },
    {
      title: "Buy Local",
      description:
        "Support local farmers and reduce transportation emissions. Fresh and eco-friendly!",
      icon: "🛒",
    },
    {
      title: "Energy Conservation",
      description:
        "Switch to LED bulbs, unplug devices, and use natural light when possible.",
      icon: "💡",
    },
  ];

  const blogPosts = [
    {
      title: "The Impact of Community-Led Waste Management",
      excerpt:
        "Discover how small communities are making big changes in waste reduction and recycling...",
      author: "Sarah Green",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Impact Story",
    },
    {
      title: "10 Creative Ways to Upcycle Household Items",
      excerpt:
        "Transform trash into treasure with these innovative upcycling ideas for your home...",
      author: "Mike Eco",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "DIY Guide",
    },
    {
      title: "Understanding Different Types of Recyclables",
      excerpt:
        "A comprehensive guide to sorting and recycling various materials properly...",
      author: "Emma Earth",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Education",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero py-12">
      <div className="container mx-auto px-4 space-y-12">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Community Hub</h1>
          <p className="text-muted-foreground">
            Connect, learn, and make a difference together
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Calendar className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card
                key={index}
                className="p-6 space-y-4 hover:shadow-eco transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <span>⏰</span>
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <span>📍</span>
                        {event.location}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-border space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>
                        {event.participants} / {event.maxParticipants} joined
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-gradient-eco h-full rounded-full transition-all"
                      style={{
                        width: `${
                          (event.participants / event.maxParticipants) * 100
                        }%`,
                      }}
                    />
                  </div>
                  <Button variant="hero" className="w-full">
                    Join Event
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Eco Tips */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Lightbulb className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Eco Tips</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, index) => (
              <Card
                key={index}
                className="p-6 hover:bg-secondary/50 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-4">
                  <div className="text-5xl">{tip.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
                    <p className="text-muted-foreground">{tip.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Blog Posts */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Latest from the Blog</h2>
          </div>
          <div className="space-y-4">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-eco transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold">{post.title}</h3>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>By {post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="whitespace-nowrap">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <Card className="p-12 text-center bg-gradient-eco text-white">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Connect with thousands of eco-warriors, share your experiences, and
            learn from others making a difference.
          </p>
          <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
            <Users className="w-5 h-5" />
            Join Now
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Community;
