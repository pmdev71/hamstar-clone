"use client";

import { Home, Users, Trophy, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Users, label: "Referral", href: "/referral" },
  { icon: Trophy, label: "Leaderboard", href: "/leaderboard" },
  { icon: User, label: "Profile", href: "/profile" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/10 backdrop-blur-lg border-t border-white/20">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map(({ icon: Icon, label, href }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex flex-col items-center py-2 px-3 min-w-[4rem]",
              "text-white/60 hover:text-white transition-colors",
              pathname === href && "text-white"
            )}
          >
            <Icon className="w-6 h-6" />
            <span className="text-xs mt-1">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}