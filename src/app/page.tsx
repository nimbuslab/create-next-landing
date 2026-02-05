import {
  Header,
  Hero,
  Features,
  HowItWorks,
  Showcase,
  TechStack,
  FAQ,
  CTA,
  Footer,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Features />
        <HowItWorks />
        <Showcase />
        <TechStack />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
