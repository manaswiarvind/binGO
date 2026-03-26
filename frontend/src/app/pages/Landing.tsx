import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { Leaf, Recycle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col max-w-lg mx-auto">
      {/* Header with Name */}
      <div className="px-6 py-4 flex items-center justify-between border-b">
        <button 
          onClick={() => {
            const isAuthenticated = localStorage.getItem("bmsce-student-authenticated");
            if (isAuthenticated) {
              navigate("/app");
            }
          }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl text-emerald-700 font-semibold">BinGo</span>
        </button>
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => navigate("/login")}
            className="border-emerald-600 text-emerald-600"
          >
            Login
          </Button>
          <Button
            onClick={() => navigate("/login?signup=true")}
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            Sign Up
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl">
            <Recycle className="w-20 h-20 text-white" />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl text-gray-900 mb-3">BinGo</h1>
          <p className="text-xl text-gray-600 mb-2">
            Turn Trash into Treasure
          </p>
          <p className="text-sm text-gray-500">
            BMSCE Campus Recycling Initiative
          </p>
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full mb-8"
        >
          <Card className="p-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl text-emerald-600 mb-1">926</div>
                <div className="text-xs text-gray-600">Students</div>
              </div>
              <div>
                <div className="text-2xl text-emerald-600 mb-1">12.4k</div>
                <div className="text-xs text-gray-600">Items</div>
              </div>
              <div>
                <div className="text-2xl text-emerald-600 mb-1">3.2T</div>
                <div className="text-xs text-gray-600">CO₂ Saved</div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="w-full space-y-3"
        >
          <Button
            onClick={() => navigate("/login?signup=true")}
            className="w-full h-14 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white text-lg"
          >
            Get Started
          </Button>
          <Button
            onClick={() => navigate("/login")}
            variant="outline"
            className="w-full h-14 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-lg"
          >
            I Have an Account
          </Button>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 text-center text-sm text-gray-500 border-t">
        <p>🌱 Making BMSCE greener, one item at a time</p>
      </div>
    </div>
  );
}