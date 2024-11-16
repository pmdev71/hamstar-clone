"use client";

import { useTonConnectUI } from "@tonconnect/ui-react";
import { useEffect, useState } from "react";

export function useTonConnect() {
  const [tonConnectUI] = useTonConnectUI();
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const checkConnection = () => {
      const isConnected = tonConnectUI.connected;
      setConnected(isConnected);
    };

    checkConnection();
    
    // Use the correct event listener method
    const unsubscribe = tonConnectUI.onStatusChange(checkConnection);

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [tonConnectUI]);

  return {
    connected,
    tonConnectUI,
  };
}