"use client";
import { cards } from "@/constants";
import { useBreakpoint } from "@/hooks/userBreakpoint";
import { gsap } from "@/libs/gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function TestimonialSection() {
  const vdRef = useRef<HTMLVideoElement[]>([]);

  const { isMobile } = useBreakpoint();

  const startPoint = isMobile ? 0 : 200;

  const cardTlStartPoint = isMobile ? "20% bottom" : "-10% bottom";

  useGSAP(() => {
    gsap.to(".testimonials-section", {
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: `-${startPoint}% bottom`,
        scrub: true,
      },
      marginTop: "-190vh",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "200% top",
        scrub: true,
      },
    });

    tl.to(".testimonials-section .first-title", {
      xPercent: 70,
    })
      .to(
        ".testimonials-section .second-title",
        {
          xPercent: 25,
        },
        "<"
      )
      .to(
        ".testimonials-section .third-title",
        {
          xPercent: -50,
        },
        "<"
      );

    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: cardTlStartPoint,
        end: " +=300px",
        scrub: 1.5,
        pin: true,
      },
    });

    pinTl.from(".vd-card", {
      yPercent: 150,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  });

  const handlePlay = (index: number) => {
    const video = vdRef.current[index];
    video.play();
  };

  const handlePause = (index: number) => {
    const video = vdRef.current[index];
    video.pause();
  };
  return (
    <section className="testimonials-section ">
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title"> What&apos;s </h1>
        <h1 className="text-light-brown second-title"> Everyone </h1>
        <h1 className="text-black third-title"> Talking </h1>
      </div>

      <div className="pin-box h-full top-1">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`vd-card ${card.translation} ${card.rotation}`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
          >
            <video
              ref={el => {
                if (el) vdRef.current[index] = el;
              }}
              src={card.src}
              playsInline
              muted
              loop
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
