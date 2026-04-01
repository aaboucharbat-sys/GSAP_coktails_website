import React from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText);

const app = () => {
  return <div className="flex-center h-[100vh] noisy ">
    <h1 className="text-3xl ">hello GSAP  </h1>
  </div>;
};

export default app;
