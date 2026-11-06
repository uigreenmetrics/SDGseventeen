import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Overview from "@/components/Overview";
import Partnerships from "@/components/Partnerships";
import Initiatives from "@/components/Initiatives";
import AboutFooter from "@/components/AboutFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-emerald-50/40 text-emerald-950 antialiased">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Overview />
        <Partnerships />
        <Initiatives />
        <AboutFooter />
      </main>
    </div>
  );
}
