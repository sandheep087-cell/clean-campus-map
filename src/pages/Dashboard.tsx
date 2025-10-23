import { Card } from "@/components/ui/card";
import {
  BarChart3,
  Users,
  MapPin,
  TrendingUp,
  Calendar,
  AlertCircle,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Reports",
      value: "1,247",
      change: "+12.5%",
      icon: MapPin,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Active Users",
      value: "10,432",
      change: "+8.2%",
      icon: Users,
      color: "text-primary",
      bgColor: "bg-green-50",
    },
    {
      title: "Cleanup Events",
      value: "84",
      change: "+15.3%",
      icon: Calendar,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Pending Reports",
      value: "23",
      change: "-5.1%",
      icon: AlertCircle,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const recentActivity = [
    {
      user: "EcoWarrior123",
      action: "Reported waste",
      location: "Green Valley Park",
      time: "2 mins ago",
    },
    {
      user: "CleanStreets",
      action: "Completed cleanup",
      location: "Downtown Area",
      time: "15 mins ago",
    },
    {
      user: "RecycleKing",
      action: "Joined event",
      location: "Beach Cleanup 2024",
      time: "1 hour ago",
    },
    {
      user: "NatureLover",
      action: "Reported waste",
      location: "City Center",
      time: "2 hours ago",
    },
    {
      user: "GreenChampion",
      action: "Earned badge",
      location: "Gold Badge",
      time: "3 hours ago",
    },
  ];

  const wasteStats = [
    { type: "Organic", count: 412, percentage: 33 },
    { type: "Recyclable", count: 498, percentage: 40 },
    { type: "Hazardous", count: 187, percentage: 15 },
    { type: "Electronic", count: 150, percentage: 12 },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero py-12">
      <div className="container mx-auto px-4 space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor waste management activities and community engagement
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <span
                  className={`text-sm font-semibold ${
                    stat.change.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.title}</div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Waste Distribution */}
          <Card className="p-6 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Waste Distribution</h2>
            </div>
            <div className="space-y-4">
              {wasteStats.map((waste, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{waste.type}</span>
                    <span className="text-muted-foreground">
                      {waste.count} reports ({waste.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-eco h-full transition-all duration-500 rounded-full"
                      style={{
                        width: `${waste.percentage}%`,
                        animationDelay: `${index * 0.2}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Monthly Growth */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Growth</h2>
            </div>
            <div className="space-y-6">
              <div className="text-center p-6 bg-gradient-hero rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">+24%</div>
                <div className="text-sm text-muted-foreground">
                  User Growth This Month
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    New Reports
                  </span>
                  <span className="font-semibold">+156</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    New Users
                  </span>
                  <span className="font-semibold">+892</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Events Created
                  </span>
                  <span className="font-semibold">+12</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-eco flex items-center justify-center text-white font-bold">
                    {activity.user[0]}
                  </div>
                  <div>
                    <div className="font-medium">
                      <span className="text-primary">{activity.user}</span>{" "}
                      {activity.action}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {activity.location}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
