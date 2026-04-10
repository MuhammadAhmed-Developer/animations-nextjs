"use client";

import { gsap } from "@/libs/gsap";
import { useGSAP } from "@gsap/react";

type Props = {
  title: string;
  color: string;
  bg: string;
  className: string;
  borderColor: string;
  aniStart: number;
};

export default function ClipPathTitle({
  title,
  color,
  bg,
  className,
  borderColor,
  aniStart,
}: Props) {
  useGSAP(() => {
    gsap.to(`.${className}`, {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
      ease: "circ.out",
      scrollTrigger: {
        trigger: ".benefit-section",
        start: `${aniStart}% 90%`,
        end: `${aniStart + 10}% 90%`,
        scrub: 0.5,
      },
    });
  });
  return (
    <div className="general-title">
      <div
        style={{
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
          borderColor,
        }}
        className={`${className} border-[.5vw] text-nowrap opacity-0`}
      >
        <div
          className="pb-5 md:px-14 px-3 md:pt-0 pt-3"
          style={{
            backgroundColor: bg,
          }}
        >
          <h2
            style={{
              color,
            }}
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
}
