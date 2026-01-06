import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhiteArrowCursor from "@/components/WhiteArrowCursor";

export const metadata: Metadata = {
  title: "TG Entertainment | Human Creativity × AI Efficiency",
  description: "A future-ready creative agency blending human creative ingenuity with AI augmentation to deliver high-end content, campaigns, and visuals—faster, smarter, and more efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="8c69b3a2-5933-485e-a6c8-06b4e3f0e72e"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
          <Navigation />
          <WhiteArrowCursor />
          <main>{children}</main>

        <Footer />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
