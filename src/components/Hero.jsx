import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    // SplitText animations
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const pSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(pSplit.lines, {
      yPercent: 100,
      delay: 1,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.08,
      opacity: 0,
    });

    // Leaf scroll animation
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          scrub: true,
          end: "bottom top",
        },
      })
      .to(".left-leaf", { y: -200 }, 0)
      .to(".right-leaf", { y: 250 }, 0);

      const startValue = isMobile ? "top 50%" : "center 60%" 
      const endValue = isMobile ? "120% top" : "bottom top"

    // Video scroll animation
    const video = videoRef.current;
    const tl = gsap.timeline({
        scrollTrigger : {
            trigger : 'video'  , 
            start :startValue , 
            end : endValue , 
            scrub : true , 
            pin : true 
        }
    }
    
) 
video.onloadedmetadata = ()=>{
    tl.to(video,{
        currentTime  : video.duration  , 
    } )
}
  }, []);

  return (
    <>
      <section id="hero" className="noisy relative z-10">
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />
        <h1 className="title">MOJITO</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden sm:block">
              <p>Cool, crisp & classic</p>
              <p className="subtitle">
                Sip the spirit <br /> of summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.
              </p>
              <a href="#cocktails">view cocktails</a>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0 z-0 ">
        <video
          ref={videoRef}
          src="/videos/input.mp4"
          muted
          playsInline
          preload="auto"
        ></video>
      </div>
    </>
  );
};

export default Hero;
