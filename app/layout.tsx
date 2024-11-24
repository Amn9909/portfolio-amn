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
      className="h-full w-full"
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
