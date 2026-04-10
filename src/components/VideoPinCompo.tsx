"use client";
import { useBreakpoint } from "@/hooks/userBreakpoint";
import { gsap } from "@/libs/gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function VideoPinCompo() {
  const { isMobile } = useBreakpoint();
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".vd-pin-section",
        start: "-15% top",
        end: "200% bottom",
        scrub: 1.5,
        pin: true,
      },
    });

    if (!isMobile) {
      tl.to(".video-box", {
        duration: 5,
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    }

    tl.to(".video-box", {
      duration: 10,
    });
  });
  return (
    <div className="vd-pin-section">
      <div
        style={{
          clipPath: !isMobile
            ? "circle(6% at 50% 50%)"
            : "circle(100% at 50% 50%)",
        }}
        className="size-full video-box"
      >
        <video src={"/videos/pin-video.mp4"} playsInline muted loop autoPlay />

        <div className="abs-center md:scale-100 scale-200">
          <Image
            src={"/images/circle-text.svg"}
            width={100}
            height={100}
            alt=""
            className="spin-circle"
          />
          <div className="play-btn">
            <Image
              src="/images/play.svg"
              alt=""
              width={100}
              height={100}
              className="size-[3vw] ml-[.5vw]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
