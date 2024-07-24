import About from "@/components/About";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4">
      <Hero />
      <SectionDivider />
      <About />
    </div>
  );
}
