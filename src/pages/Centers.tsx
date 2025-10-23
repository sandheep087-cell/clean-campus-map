import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Recycle, CheckCircle2 } from "lucide-react";

const Centers = () => {
  const centers = [
    {
      id: 1,
      name: "Green Valley Recycling Center",
      address: "123 Eco Street, Green Valley, GV 12345",
      phone: "(555) 123-4567",
      hours: "Mon-Sat: 8:00 AM - 6:00 PM",
      types: ["Plastic", "Paper", "Metal", "Glass", "Electronics"],
      distance: "0.8 miles",
    },
    {
      id: 2,
      name: "EcoCycle Hub",
      address: "456 Recycle Road, Eco City, EC 67890",
      phone: "(555) 234-5678",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      types: ["Organic", "Plastic", "Paper", "Metal"],
      distance: "1.2 miles",
    },
    {
      id: 3,
      name: "Clean Earth Facility",
      address: "789 Nature Lane, Clean Town, CT 13579",
      phone: "(555) 345-6789",
      hours: "Tue-Sun: 7:00 AM - 7:00 PM",
      types: ["Hazardous", "Electronics", "Batteries", "Chemicals"],
      distance: "1.5 miles",
    },
    {
      id: 4,
      name: "Community Recycle Point",
      address: "321 Community Dr, Eco Village, EV 24680",
      phone: "(555) 456-7890",
      hours: "Mon-Sat: 10:00 AM - 4:00 PM",
      types: ["Plastic", "Paper", "Cardboard", "Metal"],
      distance: "2.1 miles",
    },
    {
      id: 5,
      name: "Zero Waste Station",
      address: "654 Green Path, Sustainability City, SC 98765",
      phone: "(555) 567-8901",
      hours: "Open 24/7",
      types: ["All Types", "Composting", "Textiles"],
      distance: "2.8 miles",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero py-12">
      <div className="container mx-auto px-4 space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Recycling Centers</h1>
          <p className="text-muted-foreground">
            Find nearby recycling facilities and drop-off locations
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-background">
            <Recycle className="w-12 h-12 text-primary mx-auto mb-2" />
            <div className="text-3xl font-bold text-primary mb-1">
              {centers.length}
            </div>
            <div className="text-sm text-muted-foreground">Centers Nearby</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-accent/5 to-background">
            <Clock className="w-12 h-12 text-accent mx-auto mb-2" />
            <div className="text-3xl font-bold text-accent mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">
              Always Available
            </div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-green-500/5 to-background">
            <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-green-600 mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Waste Types</div>
          </Card>
        </div>

        {/* Centers List */}
        <div className="space-y-4">
          {centers.map((center, index) => (
            <Card
              key={center.id}
              className="p-6 hover:shadow-eco transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Main Info */}
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{center.name}</h3>
                    <div className="flex items-start gap-2 text-muted-foreground mb-2">
                      <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>{center.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Phone className="w-5 h-5" />
                      <span>{center.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-5 h-5" />
                      <span>{center.hours}</span>
                    </div>
                  </div>

                  {/* Accepted Waste Types */}
                  <div>
                    <div className="text-sm font-semibold mb-2">
                      Accepted Waste Types:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {center.types.map((type, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col justify-between gap-3 lg:w-48">
                  <div className="text-center lg:text-right">
                    <div className="text-2xl font-bold text-primary">
                      {center.distance}
                    </div>
                    <div className="text-sm text-muted-foreground">away</div>
                  </div>
                  <div className="space-y-2">
                    <Button variant="hero" className="w-full">
                      <MapPin className="w-4 h-4" />
                      Get Directions
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Phone className="w-4 h-4" />
                      Call Center
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Info Card */}
        <Card className="p-6 bg-gradient-to-br from-secondary to-background">
          <h3 className="text-xl font-bold mb-4">💡 Recycling Tips</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Clean and dry all recyclables before drop-off</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Remove caps and labels from bottles</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Flatten cardboard boxes to save space</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Sort materials by type for faster processing</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Check center hours before visiting</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Call ahead for hazardous waste disposal</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Centers;
