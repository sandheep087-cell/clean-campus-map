import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Heart, Target, Users2, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const About = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent! 📬",
      description: "We'll get back to you within 24 hours.",
    });
  };

  const team = [
    { name: "Sarah Green", role: "Founder & CEO", emoji: "👩‍💼" },
    { name: "Mike Earth", role: "CTO", emoji: "👨‍💻" },
    { name: "Emma Eco", role: "Community Lead", emoji: "👩‍🌾" },
    { name: "John Clean", role: "Operations", emoji: "👨‍🔧" },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Creating cleaner communities through technology and collaboration",
    },
    {
      icon: Users2,
      title: "Community First",
      description: "Empowering citizens to take ownership of their environment",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Using cutting-edge tech to solve real-world problems",
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Building a greener future for generations to come",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero py-12">
      <div className="container mx-auto px-4 space-y-16">
        {/* Mission Section */}
        <section className="text-center space-y-6 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold">
            Our <span className="text-primary">Mission</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            TrashTrackr is revolutionizing waste management by empowering communities
            to track, report, and solve environmental challenges together. We believe
            that technology can bridge the gap between citizens and clean, sustainable
            neighborhoods.
          </p>
        </section>

        {/* Stats Section */}
        <section className="grid md:grid-cols-4 gap-6">
          <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-background">
            <div className="text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-accent/5 to-background">
            <div className="text-4xl font-bold text-accent mb-2">50K+</div>
            <div className="text-sm text-muted-foreground">Waste Reports</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-green-500/5 to-background">
            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Cleanup Events</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-blue-500/5 to-background">
            <div className="text-4xl font-bold text-blue-600 mb-2">25</div>
            <div className="text-sm text-muted-foreground">Cities Covered</div>
          </Card>
        </section>

        {/* Values Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center space-y-4 hover:shadow-eco transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto bg-gradient-eco rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Meet the Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className="p-6 text-center space-y-4 hover:shadow-eco transition-all hover:-translate-y-1"
              >
                <div className="text-6xl mb-4">{member.emoji}</div>
                <div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Get in Touch</h2>
            <p className="text-muted-foreground">
              Have questions or suggestions? We'd love to hear from you!
            </p>
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-muted-foreground">
                    contact@trashtrackr.com
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-sm text-muted-foreground">
                    (555) 123-4567
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-sm text-muted-foreground">
                    123 Green Street, Eco City, EC 12345
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us what's on your mind..."
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" variant="hero" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
