"use client";
import { nutrientLists } from "@/constants";
import { useBreakpoint } from "@/hooks/userBreakpoint";
import { gsap } from "@/libs/gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import Image from "next/image";

export default function NutritionSection() {
  const { isMobile } = useBreakpoint();

  const list = isMobile ? nutrientLists.slice(0, 3) : nutrientLists;

  useGSAP(() => {
    const titleSplit = SplitText.create(".nutrition-title", {
      type: "chars",
    });
    const paragraphSplit = SplitText.create(".nutrition-section p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    gsap.from(titleSplit.chars, {
      yPercent: 400,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 50%",
        toggleActions: "play  play reverse",
      },
    });

    gsap.from(paragraphSplit.words, {
      yPercent: 400,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 40%",
        toggleActions: "play  play reverse",
      },
    });

    gsap.from(".nutrition-text-scroll", {
      clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 45%",
        toggleActions: "play  play reverse",
      },
    });
  });

  return (
    <section className="nutrition-section">
      <Image
        src={"/images/slider-dip.png"}
        alt=""
        height={600}
        width={600}
        className="w-full object-cover"
      />

      <Image
        src={"/images/big-img.png"}
        alt=""
        height={2000}
        width={2000}
        className="big-img z-9"
      />

      <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
        <div className="relative inline-block md:translate-y-20 z-10">
          <div className="general-title relative flex flex-col justify-center items-center gap-24">
            <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title">It still does</h1>
            </div>
            <div
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
              className="nutrition-text-scroll place-self-start"
            >
              <div className="bg-yellow-brown pb-3 md:pt-0 pt-3 md:px-5 px-3">
                <h2 className="text-milk-yellow">Body Good</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center items-center translate-y-5">
          <div className="md:max-w-xs max-w-md">
            <p className="text-lg md:text-right text-balance font-paragraph max-w-75 ">
              Milk contains a wide array of nutrients, including vitamins,
              minerals, and protein, and this is lactose free
            </p>
          </div>
        </div>

        <div className="nutrition-box z-10">
          <div className="list-wrapper">
            {list.map((nutrient, index) => (
              <div key={index} className="relative flex-1 col-center">
                <div>
                  <p className="md:text-lg font-paragraph">{nutrient.label}</p>
                  <p className="font-paragraph text-sm mt-2">up to</p>
                  <p className="text-2xl md:text-4xl tracking-tighter font-bold">
                    {nutrient.amount}
                  </p>
                </div>

                {index !== list.length - 1 && <div className="spacer-border" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
