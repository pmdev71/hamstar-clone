"use client";

import { Trophy, Medal } from "lucide-react";

interface LeaderboardEntry {
  address: string;
  coins: number;
  rank: number;
}

const mockLeaderboard: LeaderboardEntry[] = [
  { address: "0x1234...5678", coins: 1500, rank: 1 },
  { address: "0x8765...4321", coins: 1200, rank: 2 },
  { address: "0x9876...1234", coins: 1000, rank: 3 },
];

export default function LeaderboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 bg-gradient-to-b from-purple-500 to-pink-500 pb-24">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
            <Trophy className="w-6 h-6" />
            Leaderboard
          </h1>
          <p className="text-white/80">Top Hamster Tappers</p>
        </div>

        <div className="space-y-4">
          {mockLeaderboard.map((entry) => (
            <div
              key={entry.address}
              className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex items-center gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold">{entry.rank}</span>
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">{entry.address}</p>
                <p className="text-white/60 text-sm">{entry.coins} coins</p>
              </div>
              {entry.rank <= 3 && (
                <Medal className={`w-6 h-6 ${
                  entry.rank === 1 ? "text-yellow-300" :
                  entry.rank === 2 ? "text-gray-300" :
                  "text-amber-600"
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}