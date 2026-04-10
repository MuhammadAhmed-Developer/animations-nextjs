"use client";
import { flavorlists } from "@/constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/libs/gsap";
import Image from "next/image";
import { useRef } from "react";
import { useBreakpoint } from "@/hooks/userBreakpoint";

export default function FlavorSlider() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const { isMd, isLg, isXl } = useBreakpoint();

  useGSAP(() => {
    if (!sliderRef.current) return;
    if (!isMd && !isLg && !isXl) return;

    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    const isLgEnd =
      isLg || isXl
        ? `+=${scrollAmount + 1500}px`
        : `+=${scrollAmount - 1800}px`;
    const isItLg =
      isLg || isXl
        ? `-=${scrollAmount + 1500}px`
        : `-=${scrollAmount - 1800}px`;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: " .flavor-section",
        start: "20% top",
        end: isLgEnd,
        scrub: true,
        pin: true,
      },
    });

    tl.to(".flavor-section", {
      x: isItLg,
    });

    if (isXl) {
      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "10% top",
          end: "bottom 80%",
          scrub: true,
        },
      });

      titleTl
        .to(".first-text-split", {
          xPercent: -30,
          ease: "power1.inOut",
        })
        .to(
          ".flavor-text-scroll",
          {
            xPercent: -22,
            ease: "power1.inOut",
          },
          "<"
        )
        .to(
          ".second-text-split",
          {
            xPercent: -10,
            ease: "power1.inOut",
          },
          "<"
        );
    }
  });
  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors md:translate-x-[255vw] lg:translate-x-0 mt-30">
        {flavorlists.map(flavor => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[80vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
          >
            <Image
              src={`images/${flavor.color}-bg.svg`}
              alt={`${flavor.name}`}
              height={900}
              width={900}
              className="absolute bottom-0 md:h-100 lg:h-auto"
            />
            <Image
              src={`/images/${flavor.color}-drink.webp`}
              alt=""
              height={600}
              width={600}
              className="drinks w-65 md:w-95 lg:w-110 "
            />
            <Image
              src={`/images/${flavor.color}-elements.webp`}
              alt=""
              height={400}
              width={400}
              className="elements"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
