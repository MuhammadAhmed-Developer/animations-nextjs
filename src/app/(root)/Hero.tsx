"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "@/libs/gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import { useBreakpoint } from "@/hooks/userBreakpoint";

export default function Hero() {
  const { isMobile, isTablet } = useBreakpoint();

  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });
    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5"
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });

    heroTl.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });
  });
  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        {isTablet ? (
          <>
            {isMobile && (
              <Image
                src={"/images/hero-bg.png"}
                alt="hero-image"
                height={1000}
                width={1000}
                className="absolute bottom-50 left-1/2 -translate-x-1/2 object-auto scale-200 md:scale-300 w-120"
              />
            )}
            <Image
              src={"/images/hero-img.png"}
              alt="hero-image"
              height={1000}
              width={1000}
              className="absolute top-110 md:top-130 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150 w-120"
            />
          </>
        ) : (
          <video
            src={"videos/hero-bg.mp4"}
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">Freaking Delicious</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Protein + Caffeine</h1>
            </div>
          </div>
          <h2>
            Live life to the fullest with SPYLT: Shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </h2>
          <div className="hero-button cursor-pointer">
            <p>chug a spylt</p>
          </div>
        </div>
      </div>
    </section>
  );
}
