import { useState } from "react";
import { motion } from "motion/react";
import { Coins, TrendingUp, Calendar, Recycle, Award, ArrowRight } from "lucide-react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

type PointTransaction = {
  id: number;
  activity: string;
  points: number;
  date: string;
  time: string;
  category: string;
  icon: string;
};

export function Rewards() {
  const [userPoints] = useState(2847);
  const activityPoints = Math.floor(userPoints / 50);
  const pointsToNextActivity = 50 - (userPoints % 50);
  const progressToNextActivity = ((userPoints % 50) / 50) * 100;

  const recentTransactions: PointTransaction[] = [
    { id: 1, activity: "Plastic Bottle Recycled", points: 15, date: "Mar 13, 2026", time: "2:30 PM", category: "Plastic", icon: "🍾" },
    { id: 2, activity: "Daily Challenge Completed", points: 50, date: "Mar 13, 2026", time: "11:15 AM", category: "Challenge", icon: "🎯" },
    { id: 3, activity: "Cardboard Box Recycled", points: 20, date: "Mar 12, 2026", time: "4:45 PM", category: "Paper", icon: "📦" },
    { id: 4, activity: "Glass Jar Recycled", points: 10, date: "Mar 12, 2026", time: "2:20 PM", category: "Glass", icon: "🫙" },
    { id: 5, activity: "Aluminum Can Recycled", points: 12, date: "Mar 12, 2026", time: "1:10 PM", category: "Metal", icon: "🥫" },
    { id: 6, activity: "Week Streak Bonus", points: 100, date: "Mar 11, 2026", time: "12:00 AM", category: "Bonus", icon: "🔥" },
    { id: 7, activity: "Plastic Container Recycled", points: 18, date: "Mar 10, 2026", time: "3:30 PM", category: "Plastic", icon: "🍾" },
    { id: 8, activity: "Paper Recycled", points: 8, date: "Mar 10, 2026", time: "11:00 AM", category: "Paper", icon: "📄" },
    { id: 9, activity: "Daily Challenge Completed", points: 75, date: "Mar 9, 2026", time: "5:15 PM", category: "Challenge", icon: "🎯" },
    { id: 10, activity: "Eco Quiz Completed", points: 25, date: "Mar 9, 2026", time: "2:00 PM", category: "Learning", icon: "📚" },
  ];

  const weeklyStats = [
    { day: "Mon", points: 85 },
    { day: "Tue", points: 120 },
    { day: "Wed", points: 95 },
    { day: "Thu", points: 140 },
    { day: "Fri", points: 110 },
    { day: "Sat", points: 75 },
    { day: "Sun", points: 90 },
  ];

  const totalThisWeek = weeklyStats.reduce((sum, day) => sum + day.points, 0);
  const totalThisMonth = 1245;

  return (
    <div className="min-h-full px-4 py-6 max-w-lg mx-auto pb-24">
      <div className="mb-6">
        <h1 className="text-2xl text-gray-900 mb-2">Points & Activity 💰</h1>
        <p className="text-gray-600">Track your recycling rewards</p>
      </div>

      {/* Activity Points Card */}
      <Card className="p-6 mb-6 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 text-white border-none shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1">
            <p className="text-purple-100 text-sm mb-1">Activity Points</p>
            <h2 className="text-6xl mb-3">{activityPoints}</h2>
            <div className="flex items-center gap-2 text-purple-100 text-sm">
              <Coins className="w-4 h-4" />
              <span>50 pts = 1 activity point</span>
            </div>
          </div>
          <div className="text-6xl">🏅</div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Next activity point</span>
            <span>{pointsToNextActivity} pts</span>
          </div>
          <Progress value={progressToNextActivity} className="h-2 bg-purple-400" />
        </div>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="mb-4">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="earned">History</TabsTrigger>
        </TabsList>

        {/* Points Overview Tab */}
        <TabsContent value="overview" className="space-y-4">
          {/* Current Balance */}
          <Card className="p-6 bg-gradient-to-r from-emerald-500 to-green-600 text-white border-none shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-100 text-sm mb-1">Total Points</p>
                <h2 className="text-5xl">{userPoints.toLocaleString()}</h2>
              </div>
              <Coins className="w-16 h-16 text-emerald-200" />
            </div>
          </Card>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-5 bg-blue-50 border-blue-200">
              <Calendar className="w-6 h-6 text-blue-600 mb-2" />
              <p className="text-3xl text-gray-900 mb-1">{totalThisWeek}</p>
              <p className="text-sm text-gray-600">This Week</p>
            </Card>

            <Card className="p-5 bg-emerald-50 border-emerald-200">
              <TrendingUp className="w-6 h-6 text-emerald-600 mb-2" />
              <p className="text-3xl text-gray-900 mb-1">{totalThisMonth}</p>
              <p className="text-sm text-gray-600">This Month</p>
            </Card>
          </div>

          {/* Weekly Chart */}
          <Card className="p-5">
            <h3 className="text-lg text-gray-900 mb-4">Weekly Points</h3>
            <div className="flex items-end justify-between gap-2 h-32">
              {weeklyStats.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-gray-100 rounded-t-lg relative flex items-end" style={{ height: '100%' }}>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${(data.points / 150) * 100}%` }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="w-full bg-gradient-to-t from-emerald-500 to-green-400 rounded-t-lg"
                    />
                  </div>
                  <p className="text-xs text-gray-600">{data.day}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Conversion Info */}
          <Card className="p-5 border-2 border-emerald-200 bg-emerald-50">
            <div className="flex items-start gap-3">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <ArrowRight className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <h4 className="text-gray-900 mb-1 font-medium">Point Conversion</h4>
                <p className="text-sm text-gray-600 mb-2">Every 50 recycling points = 1 activity point</p>
                <p className="text-xs text-gray-500">Activity points boost your campus ranking!</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Points Earned Tab */}
        <TabsContent value="earned" className="space-y-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Recent Transactions</p>
            <Badge variant="outline" className="text-emerald-700 border-emerald-700">
              {recentTransactions.length} total
            </Badge>
          </div>

          {recentTransactions.map((transaction, index) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="p-4">
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{transaction.icon}</div>
                  
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-1">{transaction.activity}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <span>{transaction.date}</span>
                      <span>•</span>
                      <span>{transaction.time}</span>
                    </div>
                    <Badge 
                      variant="outline" 
                      className="text-xs"
                    >
                      {transaction.category}
                    </Badge>
                  </div>

                  <div className="text-right">
                    <p className="text-2xl text-emerald-600">+{transaction.points}</p>
                    <p className="text-xs text-gray-500">pts</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}