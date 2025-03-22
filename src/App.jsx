import React from "react";
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/herosection/HeroMain";
import HeroGradiant from "./components/herosection/HeroGradiant";
import SubHeroSection from "./components/herosection/SubHeroSection";

const App = () => {
  return (
    <main className="font-body  text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradiant />
      <SubHeroSection />
    </main>
  );
};

export default App;
