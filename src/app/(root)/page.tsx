"use client";
import FlavorSection from "@/app/(root)/FlavorSection";
import Hero from "@/app/(root)/Hero";
import MessageSection from "@/app/(root)/MessageSection";
import NavBar from "@/components/NavBar";
import { ScrollSmoother } from "@/libs/gsap";
import { useEffect } from "react";
import NutritionSection from "./NutritionSection";
import BenefitSection from "./BenefitSection";
import TestimonialSection from "./TestimonialSection";
import FooterSection from "./FooterSection";

export default function Home() {
  useEffect(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <main>
      <NavBar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <BenefitSection />
          <TestimonialSection />
          <FooterSection />
        </div>
      </div>
    </main>
  );
}
