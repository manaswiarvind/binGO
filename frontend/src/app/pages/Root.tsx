import { Outlet, Link, useLocation, useNavigate } from "react-router";
import { Home, ScanLine, Gift, User, Trophy } from "lucide-react";
import { useEffect } from "react";

export function Root() {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("bmsce-student-authenticated");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  const navItems = [
    { path: "/app", icon: Home, label: "Home" },
    { path: "/app/scan", icon: ScanLine, label: "Scan" },
    { path: "/app/rewards", icon: Gift, label: "Points" },
    { path: "/app/leaderboard", icon: Trophy, label: "Board" },
    { path: "/app/profile", icon: User, label: "Profile" },
  ];

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-emerald-50 to-white">
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-20">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
          {navItems.map(({ path, icon: Icon, label }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                  isActive ? "text-emerald-600" : "text-gray-400"
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? "fill-emerald-100" : ""}`} />
                <span className="text-xs mt-1">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}