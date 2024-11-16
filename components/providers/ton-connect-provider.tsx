'use client';

import { TonConnectUIProvider as Provider } from '@tonconnect/ui-react';

const manifestUrl =
  'https://tg-mini-app-iota-five.vercel.app/tonconnect-manifest.json';

export function TonConnectUIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider
      manifestUrl={manifestUrl}
      actionsConfiguration={{
        twaReturnUrl: 'https://t.me/topupoffer_bd_bot/local123',
      }}
    >
      {children}
    </Provider>
  );
}
