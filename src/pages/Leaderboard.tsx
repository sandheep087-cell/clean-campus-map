import { Card } from "@/components/ui/card";
import { Trophy, Medal, Award, TrendingUp } from "lucide-react";

const Leaderboard = () => {
  const topUsers = [
    {
      rank: 1,
      name: "EcoWarrior123",
      points: 2850,
      reports: 57,
      cleanups: 23,
      badge: "Diamond",
      avatar: "🌟",
    },
    {
      rank: 2,
      name: "GreenChampion",
      points: 2640,
      reports: 53,
      cleanups: 21,
      badge: "Platinum",
      avatar: "🌿",
    },
    {
      rank: 3,
      name: "CleanStreets",
      points: 2410,
      reports: 48,
      cleanups: 19,
      badge: "Gold",
      avatar: "♻️",
    },
    {
      rank: 4,
      name: "RecycleKing",
      points: 2190,
      reports: 44,
      cleanups: 17,
      badge: "Gold",
      avatar: "👑",
    },
    {
      rank: 5,
      name: "NatureLover",
      points: 2050,
      reports: 41,
      cleanups: 16,
      badge: "Silver",
      avatar: "🌱",
    },
    {
      rank: 6,
      name: "WasteWarrior",
      points: 1890,
      reports: 38,
      cleanups: 15,
      badge: "Silver",
      avatar: "⚡",
    },
    {
      rank: 7,
      name: "EcoHero",
      points: 1720,
      reports: 34,
      cleanups: 14,
      badge: "Bronze",
      avatar: "🦸",
    },
    {
      rank: 8,
      name: "GreenThumb",
      points: 1580,
      reports: 32,
      cleanups: 12,
      badge: "Bronze",
      avatar: "👍",
    },
  ];

  const badges = [
    { name: "First Report", icon: "🎯", description: "Submit your first report" },
    { name: "Team Player", icon: "🤝", description: "Join 5 cleanup events" },
    { name: "Top 10", icon: "🏆", description: "Reach top 10 on leaderboard" },
    { name: "Eco Master", icon: "⭐", description: "Earn 5000+ eco-points" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero py-12">
      <div className="container mx-auto px-4 space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Leaderboard</h1>
          <p className="text-muted-foreground">
            Top contributors making a difference in their communities
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {topUsers.slice(0, 3).map((user, index) => (
            <Card
              key={user.rank}
              className={`p-6 text-center relative overflow-hidden ${
                index === 0
                  ? "md:order-2 md:scale-110 bg-gradient-to-br from-yellow-50 to-background border-yellow-400"
                  : index === 1
                  ? "md:order-1 bg-gradient-to-br from-gray-50 to-background"
                  : "md:order-3 bg-gradient-to-br from-orange-50 to-background"
              }`}
            >
              <div className="absolute top-2 right-2">
                {index === 0 ? (
                  <Trophy className="w-8 h-8 text-yellow-500" />
                ) : index === 1 ? (
                  <Medal className="w-8 h-8 text-gray-400" />
                ) : (
                  <Medal className="w-8 h-8 text-orange-400" />
                )}
              </div>
              <div className="text-6xl mb-4">{user.avatar}</div>
              <div className="text-2xl font-bold mb-1">#{user.rank}</div>
              <div className="font-semibold text-lg mb-2">{user.name}</div>
              <div className="text-3xl font-bold text-primary mb-2">
                {user.points.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">eco-points</div>
              <div className="mt-4 pt-4 border-t border-border space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Reports:</span>
                  <span className="font-semibold">{user.reports}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cleanups:</span>
                  <span className="font-semibold">{user.cleanups}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Full Leaderboard */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-6">All Rankings</h2>
          <div className="space-y-2">
            {topUsers.map((user) => (
              <div
                key={user.rank}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <div className="text-2xl font-bold text-muted-foreground w-8">
                  {user.rank}
                </div>
                <div className="text-3xl">{user.avatar}</div>
                <div className="flex-1">
                  <div className="font-semibold">{user.name}</div>
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    {user.badge} Badge
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {user.points.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">points</div>
                </div>
                <div className="hidden md:flex items-center gap-4 text-sm">
                  <div>
                    <div className="font-semibold">{user.reports}</div>
                    <div className="text-muted-foreground">reports</div>
                  </div>
                  <div>
                    <div className="font-semibold">{user.cleanups}</div>
                    <div className="text-muted-foreground">cleanups</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Badges Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Available Badges</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {badges.map((badge, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-eco transition-all hover:-translate-y-1"
              >
                <div className="text-5xl mb-3">{badge.icon}</div>
                <div className="font-semibold mb-2">{badge.name}</div>
                <div className="text-sm text-muted-foreground">
                  {badge.description}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Your Stats */}
        <Card className="p-6 bg-gradient-eco text-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">Your Current Rank</h3>
              <p className="opacity-90">Keep climbing the leaderboard!</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">#24</div>
              <div className="opacity-90">out of 1,247</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">850</div>
              <div className="opacity-90">eco-points</div>
            </div>
            <TrendingUp className="w-12 h-12" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;
