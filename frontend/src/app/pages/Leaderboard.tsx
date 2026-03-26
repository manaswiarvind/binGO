import { motion } from "motion/react";
import { Trophy, Medal, Award, TrendingUp, Users } from "lucide-react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

type LeaderboardEntry = {
  rank: number;
  name: string;
  department: string;
  points: number;
  itemsRecycled: number;
};

export function Leaderboard() {
  const topStudents: LeaderboardEntry[] = [
    { rank: 1, name: "Priya Sharma", department: "CSE", points: 4250, itemsRecycled: 189 },
    { rank: 2, name: "Rahul Verma", department: "ECE", points: 3890, itemsRecycled: 172 },
    { rank: 3, name: "Ananya Kumar", department: "ISE", points: 3567, itemsRecycled: 158 },
    { rank: 4, name: "Arjun Patel", department: "ME", points: 3124, itemsRecycled: 145 },
    { rank: 5, name: "Sneha Reddy", department: "CSE", points: 2985, itemsRecycled: 132 },
    { rank: 6, name: "You (Eco Champion)", department: "CSE", points: 2847, itemsRecycled: 127 },
    { rank: 7, name: "Karthik Rao", department: "CV", points: 2654, itemsRecycled: 118 },
    { rank: 8, name: "Divya Nair", department: "ISE", points: 2543, itemsRecycled: 112 },
  ];

  const topDepartments = [
    { rank: 1, name: "Computer Science (CSE)", students: 234, totalPoints: 125430, avgPoints: 536 },
    { rank: 2, name: "Information Science (ISE)", students: 198, totalPoints: 98765, avgPoints: 499 },
    { rank: 3, name: "Electronics (ECE)", students: 187, totalPoints: 89234, avgPoints: 477 },
    { rank: 4, name: "Mechanical (ME)", students: 165, totalPoints: 76543, avgPoints: 464 },
    { rank: 5, name: "Civil (CV)", students: 142, totalPoints: 65432, avgPoints: 461 },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="text-sm text-gray-500">#{rank}</span>;
    }
  };

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "from-yellow-400 to-amber-500";
      case 2:
        return "from-gray-300 to-gray-400";
      case 3:
        return "from-amber-500 to-orange-600";
      default:
        return "from-emerald-500 to-green-600";
    }
  };

  return (
    <div className="min-h-full px-4 py-6 max-w-lg mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl text-gray-800 mb-2">Campus Leaderboard</h1>
        <p className="text-gray-600">See how BMSCE students are making a difference!</p>
      </div>

      {/* Campus Stats */}
      <Card className="p-5 mb-6 bg-gradient-to-r from-emerald-500 to-green-600 text-white border-none">
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-5 h-5" />
          <h3 className="text-lg">BMSCE Impact</h3>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-emerald-100 text-xs mb-1">Active Students</p>
            <p className="text-2xl">926</p>
          </div>
          <div>
            <p className="text-emerald-100 text-xs mb-1">Total Items</p>
            <p className="text-2xl">12.4k</p>
          </div>
          <div>
            <p className="text-emerald-100 text-xs mb-1">CO₂ Saved</p>
            <p className="text-2xl">3.2T</p>
          </div>
        </div>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="students" className="mb-4">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
        </TabsList>

        {/* Students Leaderboard */}
        <TabsContent value="students" className="space-y-3">
          {topStudents.map((student, index) => {
            const isCurrentUser = student.rank === 6;
            
            return (
              <motion.div
                key={student.rank}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className={`p-4 ${isCurrentUser ? 'ring-2 ring-emerald-500 bg-emerald-50' : ''}`}>
                  <div className="flex items-center gap-4">
                    {/* Rank */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      student.rank <= 3 
                        ? `bg-gradient-to-br ${getRankColor(student.rank)}` 
                        : 'bg-gray-100'
                    }`}>
                      {student.rank <= 3 ? (
                        getRankIcon(student.rank)
                      ) : (
                        <span className="text-gray-700">{student.rank}</span>
                      )}
                    </div>

                    {/* Student Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-gray-800">{student.name}</h4>
                        {isCurrentUser && (
                          <Badge className="bg-emerald-600 text-white text-xs">You</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <span>{student.department}</span>
                        <span>•</span>
                        <span>{student.itemsRecycled} items</span>
                      </div>
                    </div>

                    {/* Points */}
                    <div className="text-right">
                      <p className="text-xl text-emerald-600">{student.points.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">points</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}

          <div className="text-center py-4">
            <p className="text-sm text-gray-500">Keep recycling to climb the ranks! 🌱</p>
          </div>
        </TabsContent>

        {/* Departments Leaderboard */}
        <TabsContent value="departments" className="space-y-3">
          {topDepartments.map((dept, index) => (
            <motion.div
              key={dept.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card className="p-4">
                <div className="flex items-center gap-4">
                  {/* Rank */}
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    dept.rank <= 3 
                      ? `bg-gradient-to-br ${getRankColor(dept.rank)}` 
                      : 'bg-gray-100'
                  }`}>
                    {dept.rank <= 3 ? (
                      getRankIcon(dept.rank)
                    ) : (
                      <span className="text-gray-700">{dept.rank}</span>
                    )}
                  </div>

                  {/* Department Info */}
                  <div className="flex-1">
                    <h4 className="text-gray-800 mb-1">{dept.name}</h4>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <span>{dept.students} students</span>
                      <span>•</span>
                      <span>{dept.avgPoints} avg pts</span>
                    </div>
                  </div>

                  {/* Total Points */}
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-emerald-600 mb-1">
                      <TrendingUp className="w-4 h-4" />
                      <p className="text-lg">{(dept.totalPoints / 1000).toFixed(1)}k</p>
                    </div>
                    <p className="text-xs text-gray-500">total pts</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}

          <div className="text-center py-4">
            <p className="text-sm text-gray-500">
              Department rankings based on total points 📈
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
