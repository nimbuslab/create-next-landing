import { Hero, Features, CTA, Footer } from "@/components/landing";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </main>
  );
}
