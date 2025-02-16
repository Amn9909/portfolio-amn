import { Toaster } from "@/components/ui/toaster";
import Navbar from "./(components)/Navbar";
import DarkModeProvider from "./(toggleDarkMode)/darkModeProvider";
import "./globals.css";
import AskitHeroSection from "./(components)/askit/HeroSection";
import { AskNavbar } from "./(components)/askit/components/AskNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="h-full w-full  3xs:w-[100%] xxs:w-[100%] xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%]">
        <DarkModeProvider>
          {/* <Navbar /> */}
          {/* <AskNavbar /> */}
          {children}
        </DarkModeProvider>
      </body>
    </html>
  );
}
