import React from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
gsap.registerPlugin(ScrollTrigger, SplitText);

const app = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  );
};

export default app;
