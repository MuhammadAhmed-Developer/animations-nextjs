import { useBreakpoint } from "@/hooks/userBreakpoint";
import Image from "next/image";

export default function FooterSection() {
  const { isMobile } = useBreakpoint();
  return (
    <section className="footer-section  w-screen mt-100 md:-mt-50">
      <Image
        src={"/images/footer-dip.png"}
        alt=""
        height={600}
        width={600}
        className="w-full object-cover -translate-y-1"
      />

      <div className="relative 2xl:h-[110dvh] md:pt-[20vh] pt-[10vh] ">
        {isMobile ? (
          <Image
            src="/images/footer-drink.png"
            alt="Footer drink"
            width={600}
            height={600}
            className="absolute top-0 left-10 z-0 object-contain pointer-events-none"
          />
        ) : (
          <video
            src="/videos/splash.mp4"
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full scale-150  h-full object-contain z-0 mix-blend-lighten pointer-events-none"
          />
        )}

        <div className="relative z-10 overflow-hidden">
          <h1 className="general-title text-center text-milk py-5">
            #CHUGRESPONSIBLY
          </h1>
        </div>

        <div className="relative z-10 flex-center gap-5 md:mt-20 mt-5">
          <div className="social-btn">
            <img src="/images/yt.svg" alt="YouTube" />
          </div>
          <div className="social-btn">
            <img src="/images/insta.svg" alt="Instagram" />
          </div>
          <div className="social-btn">
            <img src="/images/tiktok.svg" alt="TikTok" />
          </div>
        </div>

        <div className="relative z-10 mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p>SPYLT Flavors</p>
            </div>
            <div>
              <p>Chug Club</p>
              <p>Student Marketing</p>
              <p>Dairy Dealers</p>
            </div>
            <div>
              <p>Company</p>
              <p>Contacts</p>
              <p>Tasty Talk</p>
            </div>
          </div>

          <div className="md:max-w-lg">
            <p>
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>

            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none placeholder:font-sans placeholder:text-[#999999]"
              />
              <img src="/images/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-20 px-5 md:px-10 flex justify-between items-center text-milk text-sm">
          <p>Copyright © 2025 Spylt - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </section>
  );
}
