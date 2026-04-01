import { useGSAP } from "@gsap/react";
import { navLinks } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navbar = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
        scrub: true,
      },
    });
    navTween.fromTo(
      "nav",
      {
      
        backdropFilter: "blur(0px)",
        webkitBackdropFilter: "blur(0px)",
      },
      {
        backgroundColor: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(1px)",
        webkitBackdropFilter: "blur(1px)",
        ease: "none",
      },
    );
  });
  return (
    <nav>
      <div className="flex max-w-6xl ">
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="velvet" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
