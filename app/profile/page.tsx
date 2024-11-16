"use client";

import { User, Coins, Clock } from "lucide-react";
import { useTonConnect } from "@/hooks/useTonConnect";
import { Button } from "@/components/ui/button";
import { TonConnectButton } from "@tonconnect/ui-react";

export default function ProfilePage() {
  const { connected } = useTonConnect();

  if (!connected) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-purple-500 to-pink-500 pb-24">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-white">Connect Wallet</h1>
          <p className="text-white/80">Please connect your wallet to view your profile</p>
          <TonConnectButton />
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-6 bg-gradient-to-b from-purple-500 to-pink-500 pb-24">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <div className="w-20 h-20 bg-white/20 rounded-full mx-auto flex items-center justify-center">
            <User className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">My Profile</h1>
        </div>

        <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex items-center gap-4">
            <Coins className="w-6 h-6 text-yellow-300" />
            <div>
              <p className="text-white/60">Total Coins</p>
              <p className="text-white text-xl font-bold">1,234</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 flex items-center gap-4">
            <Clock className="w-6 h-6 text-blue-300" />
            <div>
              <p className="text-white/60">Member Since</p>
              <p className="text-white">March 2024</p>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full bg-white/20 hover:bg-white/30 text-white border-white/20"
          >
            Disconnect Wallet
          </Button>
        </div>
      </div>
    </main>
  );
}