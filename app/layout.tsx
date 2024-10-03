'use client'

import "./globals.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Connect wallet</title>
      </head>
      <body>
        <TonConnectUIProvider manifestUrl="https://lavender-cheerful-wildfowl-845.mypinata.cloud/files/bafkreibxmgbf624dvfuq3zg4tycbzu2cv2pxtghn75ftc67hehx2urotym?X-Algorithm=PINATA1&X-Date=1727978490&X-Expires=30&X-Method=GET&X-Signature=61f37e69e290d31e002d2ec0f5a81390acc34e611df053575ed9a4e9e721f575">
          {children}
        </TonConnectUIProvider>
      </body>
    </html>
  );
}