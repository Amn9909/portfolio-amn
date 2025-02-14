import AskitHeroSection from "./(components)/askit/HeroSection";
import Navbar from "./(components)/Navbar";
import ThemeSwitcher from "./(toggleDarkMode)/ThemeSwitcher";
import Home from "./home/page";


export default function RootPage() {
  return (
    <div>
      {/* <Home/> */}
      <AskitHeroSection />
    </div>
  );
}
