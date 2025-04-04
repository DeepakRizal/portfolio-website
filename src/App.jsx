import React from "react";
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/herosection/HeroMain";
import HeroGradiant from "./components/herosection/HeroGradiant";
import SubHeroSection from "./components/herosection/SubHeroSection";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import HelperSection from "./components/HelperSection";
import SkillsMain from "./components/skillssection/SkillsMain";
import SubSkill from "./components/skillssection/SubSkill";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";

const App = () => {
  return (
    <main className="font-body  text-white relative overflow-hidden">
      <NavbarMain />
      <HeroMain />
      <HeroGradiant />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkill />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  );
};

export default App;
