'use client';

import { Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useTonConnect } from '@/hooks/useTonConnect';

export default function ReferralPage() {
  const { toast } = useToast();
  const { connected } = useTonConnect();

  const handleShare = async () => {
    if (!connected) {
      toast({
        title: 'Connect Wallet',
        description: 'Please connect your wallet to share your referral link!',
        variant: 'destructive',
      });
      return;
    }

    try {
      const referralLink = `https://t.me/topupoffer_bd_bot/local123?start=ref_${Date.now()}`;
      await navigator.clipboard.writeText(referralLink);
      toast({
        title: 'Referral Link Copied!',
        description: 'Share this link with friends to earn bonus coins!',
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to copy referral link. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-6 bg-gradient-to-b from-purple-500 to-pink-500 pb-24">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-white">Invite Friends</h1>
          <p className="text-white/80">
            Get 10 coins for each friend who joins!
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-white">How it works</h2>
            <ul className="space-y-2 text-white/80">
              <li>1. Share your referral link with friends</li>
              <li>2. Friends join using your link</li>
              <li>3. Both you and your friend get 10 coins!</li>
            </ul>
          </div>

          <Button
            onClick={handleShare}
            className="w-full bg-white/20 hover:bg-white/30 flex items-center justify-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            Share Referral Link
          </Button>
        </div>
      </div>
    </main>
  );
}
