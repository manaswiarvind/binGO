import { useState } from "react";
import { motion } from "motion/react";
import { Bell, Trophy, Leaf, Camera, Gift, User as UserIcon, Info } from "lucide-react";
import { useNavigate } from "react-router";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

export function Home() {
  const navigate = useNavigate();
  const [userPoints] = useState(2847);
  const [tier] = useState("Gold");
  const [itemsDisposed] = useState(127);
  const [co2Saved] = useState(45.3);

  const ecoFacts = [
    "♻️ Recycling 1 plastic bottle saves enough energy to power a light bulb for 3 hours!",
    "🌍 Recycling reduces greenhouse gas emissions by reducing energy consumption.",
    "💡 Recycling one aluminum can saves enough energy to run a TV for 3 hours.",
    "🌱 Every ton of recycled paper saves 17 trees!",
  ];

  const [currentFact] = useState(ecoFacts[Math.floor(Math.random() * ecoFacts.length)]);

  const navigationButtons = [
    { id: 1, label: "Scan Item", icon: Camera, color: "from-emerald-500 to-green-600", route: "/app/scan" },
    { id: 2, label: "Leaderboard", icon: Trophy, color: "from-amber-500 to-orange-600", route: "/app/leaderboard" },
    { id: 3, label: "My Points", icon: Gift, color: "from-purple-500 to-pink-600", route: "/app/rewards" },
    { id: 4, label: "Profile", icon: UserIcon, color: "from-blue-500 to-cyan-600", route: "/app/profile" },
  ];

  return (
    <div className="min-h-full px-4 py-6 max-w-lg mx-auto pb-24">
      {/* Header with Greeting and Notification */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl text-gray-900">Hey there! 👋</h1>
          <p className="text-sm text-gray-600">Welcome back to BinGo</p>
        </div>
        <button className="relative p-2">
          <Bell className="w-6 h-6 text-gray-600" />
          <div className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"></div>
        </button>
      </div>

      {/* Points Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <Card className="p-6 bg-gradient-to-br from-emerald-500 to-green-600 text-white border-none shadow-xl">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <p className="text-emerald-100 text-sm mb-1">Total Points</p>
              <h2 className="text-5xl mb-3">{userPoints.toLocaleString()}</h2>
              <div className="flex items-center gap-3">
                <Badge className="bg-white/20 text-white border-none text-base px-3 py-1">
                  <Trophy className="w-4 h-4 mr-1" />
                  {tier} Tier
                </Badge>
              </div>
            </div>
            <div className="text-6xl">🏆</div>
          </div>
        </Card>
      </motion.div>

      {/* Items Disposed and CO2 Saved */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="p-5">
          <div className="text-center">
            <p className="text-3xl mb-2">♻️</p>
            <p className="text-3xl text-gray-900 mb-1">{itemsDisposed}</p>
            <p className="text-sm text-gray-600">Items Disposed</p>
          </div>
        </Card>

        <Card className="p-5">
          <div className="text-center">
            <p className="text-3xl mb-2">🌱</p>
            <p className="text-3xl text-gray-900 mb-1">{co2Saved}kg</p>
            <p className="text-sm text-gray-600">CO₂ Saved</p>
          </div>
        </Card>
      </div>

      {/* Page Navigation Buttons */}
      <div className="mb-6">
        <h3 className="text-lg text-gray-900 mb-3">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-4">
          {navigationButtons.map((button) => (
            <Button
              key={button.id}
              onClick={() => navigate(button.route)}
              className={`h-24 bg-gradient-to-br ${button.color} hover:opacity-90 text-white flex flex-col items-center justify-center gap-2`}
            >
              <button.icon className="w-8 h-8" />
              <span>{button.label}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Fact Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <Card className="p-5 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-emerald-200">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Info className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-900 mb-1">Did You Know?</h4>
              <p className="text-sm text-gray-700">{currentFact}</p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}