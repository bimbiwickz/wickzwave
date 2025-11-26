import "@wickzwave/app/globals.css";
import Navbar from "@wickzwave/components/layout/Navbar";
import Footer from "@wickzwave/components/layout/Footer";
import AnimatedCursor from "@wickzwave/components/ui/AnimatedCursor";
import Loader from "@wickzwave/components/ui/Loader"

export const metadata = {
  title: "WickzWave | Portfolio",
  description: "Portfolio website of Bimsara Wickramarathne | Full Stack Developer",
  openGraph: {
    title: "WickzWave",
    description: "Portfolio website of Bimsara",
    url: "https://wickzwave.vercel.app",
    siteName: "WickzWave",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <div className="pt-20"> {/* prevents content hiding behind navbar */}
          {children}
        </div>
        <Footer />
        <AnimatedCursor />
        <Loader />
      </body>
    </html>
  );
}
