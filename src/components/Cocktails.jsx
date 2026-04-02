import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../../constants";
import gsap from "gsap";

const Cocktails = () => {
  useGSAP(() => {
    const parTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    parTimeline.from("#c-left-leaf", {
      x: -100,
      y: 100,
    });
    parTimeline.from("#c-right-leaf", {
      x: 100,
      y: 100,
    });
  });
  return (
    <section id="cocktails" className="noisy relative  ">
      <img
        src="/images/cocktail-left-leaf.png"
        id="c-left-leaf"
        alt="cocktail-left-leaf"
        className="absolute bottom-0 -left-10 w-40 sm:w-60"
      />
      <img
        src="/images/cocktail-right-leaf.png"
        alt="cocktail-right-leaf"
        id="c-right-leaf"
        className="absolute bottom-10 right-10  w-40 sm:w-60"
      />
      <div className="max-w-7xl mx-auto lg:flex items-center lg:justify-center lg:h-screen   ">
        <div className="list  ">
          <div className="popular">
            <h2>Most Poular Cocktails : </h2>
            <ul>
              {cocktailLists.map((drink, key) => (
                <li key={key}>
                  <div className="md:me-28">
                    <h3>{drink.name}</h3>
                    <p>
                      {drink.country} | {drink.detail}{" "}
                    </p>
                  </div>
                  <span>-{drink.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="loved">
            <h2>Most loved Cocktails : </h2>
            <ul>
              {mockTailLists.map((drink, key) => (
                <li key={key}>
                  <div className="me-28">
                    <h3>{drink.name}</h3>
                    <p>
                      {drink.country} | {drink.detail}{" "}
                    </p>
                  </div>
                  <span>-{drink.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
