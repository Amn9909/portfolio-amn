import AskitHeroSection from "./(components)/askit/HeroSection";
import Navbar from "./(components)/Navbar";
import ThemeSwitcher from "./(toggleDarkMode)/ThemeSwitcher";
import Home from "./home/page";


export default function RootPage() {
  return (
    <div className="h-full w-full text-black dark:text-white">
      {/* <Home/> */}
      <AskitHeroSection />
    </div>
  );
}
