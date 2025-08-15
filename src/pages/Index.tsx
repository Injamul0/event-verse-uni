import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventsPreview from "@/components/EventsPreview";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <EventsPreview />
      </main>
    </div>
  );
};

export default Index;
