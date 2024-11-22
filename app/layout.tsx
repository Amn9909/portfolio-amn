import { Toaster } from "@/components/ui/toaster";
import CustomDrawer from "./(components)/CustomDrawer";
import Navbar from "./(components)/Navbar";
import DarkModeProvider from "./(toggleDarkMode)/darkModeProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body 
      className="h-full w-full  3xs:w-[100%] xxs:w-[100%] xs:w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[100%] 2xl:w-[100%]"
      >
        <DarkModeProvider>
          <Navbar />
          {/* <CustomDrawer /> */}
          {children}
          <Toaster />
        </DarkModeProvider>
      </body>
    </html>
  );
}
