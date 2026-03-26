import { motion } from "motion/react";
import { Trophy, TrendingUp, Target, Award, Leaf, Recycle, MapPin, Calendar, LogOut } from "lucide-react";
import { useNavigate } from "react-router";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Button } from "../components/ui/button";

export function Profile() {
  const navigate = useNavigate();
  
  const userStats = {
    name: "Eco Champion",
    level: 12,
    totalPoints: 2847,
    itemsRecycled: 127,
    co2Saved: 45.3,
    daysActive: 89,
    currentStreak: 12,
  };

  const achievements = [
    { id: 1, name: "First Steps", description: "Recycled your first item", icon: Trophy, earned: true },
    { id: 2, name: "Plastic Warrior", description: "Recycled 50 plastic items", icon: Recycle, earned: true },
    { id: 3, name: "Week Streak", description: "7 days in a row", icon: Target, earned: true },
    { id: 4, name: "Century Club", description: "Recycled 100 items", icon: Award, earned: true },
    { id: 5, name: "Green Master", description: "Reached Level 10", icon: Leaf, earned: true },
    { id: 6, name: "Explorer", description: "Scanned at 10 locations", icon: MapPin, earned: false },
  ];

  const monthlyProgress = [
    { month: "Sep", items: 32 },
    { month: "Oct", items: 45 },
    { month: "Nov", items: 38 },
    { month: "Dec", items: 50 },
  ];

  const handleLogout = () => {
    localStorage.removeItem("bmsce-student-authenticated");
    navigate("/login");
  };

  return (
    <div className="min-h-full px-4 py-6 max-w-lg mx-auto">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <Card className="p-6 bg-gradient-to-br from-emerald-500 to-green-600 text-white border-none">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl">
                🌱
              </div>
              <div>
                <h2 className="text-2xl mb-1">{userStats.name}</h2>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  <span>Level {userStats.level}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-emerald-100 text-sm">Total Points</p>
              <p className="text-2xl">{userStats.totalPoints.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-emerald-100 text-sm">Current Streak</p>
              <p className="text-2xl">{userStats.currentStreak} days 🔥</p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Recycle className="w-5 h-5 text-emerald-600" />
            <p className="text-sm text-gray-600">Items Recycled</p>
          </div>
          <p className="text-2xl text-gray-800">{userStats.itemsRecycled}</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Leaf className="w-5 h-5 text-green-600" />
            <p className="text-sm text-gray-600">CO₂ Saved</p>
          </div>
          <p className="text-2xl text-gray-800">{userStats.co2Saved}kg</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <p className="text-sm text-gray-600">Days Active</p>
          </div>
          <p className="text-2xl text-gray-800">{userStats.daysActive}</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
            <p className="text-sm text-gray-600">This Month</p>
          </div>
          <p className="text-2xl text-gray-800">{monthlyProgress[monthlyProgress.length - 1].items}</p>
        </Card>
      </div>

      {/* Monthly Activity */}
      <Card className="p-5 mb-6">
        <h3 className="text-lg text-gray-800 mb-4">Monthly Activity</h3>
        <div className="flex items-end justify-between gap-2 h-32">
          {monthlyProgress.map((data, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-gray-100 rounded-t-lg relative flex items-end" style={{ height: '100%' }}>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${(data.items / 50) * 100}%` }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="w-full bg-gradient-to-t from-emerald-500 to-green-400 rounded-t-lg"
                />
              </div>
              <p className="text-xs text-gray-600">{data.month}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Achievements */}
      <div className="mb-6">
        <h3 className="text-lg text-gray-800 mb-4">Achievements</h3>
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className={`p-4 ${achievement.earned ? '' : 'opacity-40'}`}>
                  <div className={`w-12 h-12 rounded-full mb-3 flex items-center justify-center ${
                    achievement.earned 
                      ? 'bg-gradient-to-br from-amber-400 to-orange-500' 
                      : 'bg-gray-200'
                  }`}>
                    <Icon className={`w-6 h-6 ${achievement.earned ? 'text-white' : 'text-gray-400'}`} />
                  </div>
                  <h4 className="text-sm text-gray-800 mb-1">{achievement.name}</h4>
                  <p className="text-xs text-gray-600">{achievement.description}</p>
                  {achievement.earned && (
                    <Badge className="mt-2 bg-emerald-100 text-emerald-700 border-emerald-200 text-xs">
                      Unlocked
                    </Badge>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Logout Button */}
      <Button
        onClick={handleLogout}
        variant="outline"
        className="w-full h-12 border-red-200 text-red-600 hover:bg-red-50"
      >
        <LogOut className="w-4 h-4 mr-2" />
        Logout
      </Button>
    </div>
  );
}