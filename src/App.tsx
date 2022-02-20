import { Card, PercentageBar } from "@/atoms";
import ExperiencesCard from "@/organisms/ExperiencesCard";
import IntroductionCard from "@/organisms/IntroductionCard";
import SkillCard from "@/organisms/SkillCard";
import { useState } from "react";
import "./App.css";
function App() {
  return (
    <div className="app font-montserrat bg-gray-1 py-[70px] px-[140px] gap-5 grid overflow-x-hidden">
      {/* IntroductionCard */}
      <IntroductionCard />
      {/* SkillCard */}
      <div className="grid grid-cols-2 gap-5">
        <SkillCard />
        <ExperiencesCard />
      </div>
      {/* HobbiesCard */}
      {/* BlogCard */}
      {/* Projects */}
    </div>
  );
}

export default App;
