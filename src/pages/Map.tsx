import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Filter, Trash2, Recycle, AlertTriangle } from "lucide-react";
import { useState } from "react";

const Map = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filters = [
    { id: "organic", label: "Organic", icon: Recycle, color: "text-green-600" },
    { id: "recyclable", label: "Recyclable", icon: Recycle, color: "text-blue-600" },
    { id: "hazardous", label: "Hazardous", icon: AlertTriangle, color: "text-red-600" },
  ];

  const wastePoints = [
    { id: 1, type: "organic", x: 25, y: 30, status: "reported" },
    { id: 2, type: "recyclable", x: 60, y: 45, status: "collected" },
    { id: 3, type: "hazardous", x: 80, y: 20, status: "pending" },
    { id: 4, type: "organic", x: 40, y: 70, status: "reported" },
    { id: 5, type: "recyclable", x: 70, y: 60, status: "reported" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero py-12">
      <div className="container mx-auto px-4 space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Waste Map</h1>
          <p className="text-muted-foreground">
            View reported waste locations and collection zones in your area
          </p>
        </div>

        {/* Filters */}
        <Card className="p-4">
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-medium">Filter by type:</span>
            <div className="flex gap-2 flex-wrap">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() =>
                    setActiveFilter(activeFilter === filter.id ? null : filter.id)
                  }
                  className="transition-all"
                >
                  <filter.icon className={`w-4 h-4 ${filter.color}`} />
                  {filter.label}
                </Button>
              ))}
              {activeFilter && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setActiveFilter(null)}
                >
                  Clear
                </Button>
              )}
            </div>
          </div>
        </Card>

        {/* Map Container */}
        <Card className="p-6 min-h-[600px] relative overflow-hidden">
          {/* Mock Map Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-muted/30">
            {/* Grid Pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                                linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          {/* Map Legend */}
          <div className="absolute top-4 right-4 bg-card border-2 border-border rounded-lg p-4 shadow-lg z-10">
            <h3 className="font-semibold mb-3 text-sm">Legend</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Organic Waste</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Recyclable</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span>Hazardous</span>
              </div>
            </div>
          </div>

          {/* Waste Points */}
          {wastePoints
            .filter((point) => !activeFilter || point.type === activeFilter)
            .map((point) => (
              <div
                key={point.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all group-hover:scale-125 ${
                    point.type === "organic"
                      ? "bg-green-500"
                      : point.type === "recyclable"
                      ? "bg-blue-500"
                      : "bg-red-500"
                  }`}
                >
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-card border-2 border-border rounded-lg p-2 shadow-lg whitespace-nowrap text-xs">
                    <div className="font-semibold capitalize">{point.type} Waste</div>
                    <div className="text-muted-foreground capitalize">
                      Status: {point.status}
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* Collection Zones */}
          <div className="absolute w-32 h-32 rounded-full bg-primary/10 border-2 border-primary border-dashed top-1/4 left-1/4 flex items-center justify-center">
            <Trash2 className="w-8 h-8 text-primary" />
          </div>
          <div className="absolute w-32 h-32 rounded-full bg-accent/10 border-2 border-accent border-dashed bottom-1/4 right-1/4 flex items-center justify-center">
            <Recycle className="w-8 h-8 text-accent" />
          </div>
        </Card>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">142</div>
            <div className="text-sm text-muted-foreground">Active Reports</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-accent mb-2">89</div>
            <div className="text-sm text-muted-foreground">Collection Zones</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1,234</div>
            <div className="text-sm text-muted-foreground">Items Collected</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Map;
