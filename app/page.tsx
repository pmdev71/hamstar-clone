"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Coins } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useTonConnect } from "@/hooks/useTonConnect";
import { Hamster } from "@/components/hamster";

export default function Home() {
  const [coins, setCoins] = useState(0);
  const [isClicking, setIsClicking] = useState(false);
  const { toast } = useToast();
  const { connected } = useTonConnect();

  const handleTap = () => {
    if (!connected) {
      toast({
        title: "Connect Wallet",
        description: "Please connect your TON wallet to start earning coins!",
        variant: "destructive",
      });
      return;
    }

    setIsClicking(true);
    setCoins((prev) => prev + 1);
    setTimeout(() => setIsClicking(false), 100);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-gradient-to-b from-purple-500 to-pink-500 pb-24">
      <div className="w-full max-w-md flex justify-end">
        <TonConnectButton />
      </div>

      <div className="flex flex-col items-center gap-8">
        <motion.div
          animate={{ scale: isClicking ? 0.95 : 1 }}
          transition={{ type: "spring", stiffness: 500 }}
          className="relative"
        >
          <Hamster onClick={handleTap} />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-white/20 backdrop-blur-lg rounded-full px-6 py-3 flex items-center gap-2"
        >
          <Coins className="w-6 h-6 text-yellow-300" />
          <span className="text-2xl font-bold text-white">{coins}</span>
        </motion.div>
      </div>

      <div className="w-full max-w-md text-center text-white/60 text-sm">
        Tap the hamster to earn coins!
      </div>
    </main>
  );
}