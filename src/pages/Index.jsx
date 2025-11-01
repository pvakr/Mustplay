
import Hero from "./Hero";
import GameDescription from "./GameDescription";
import StickyFooter from "./StickyFooter";
import Navigation from "./Navigation";
import Footer from "./Footer";
import FeatureHighlights from "./FeatureHighlights";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation/>
      <Hero />
      <GameDescription />
      <FeatureHighlights/>
      <StickyFooter />
      <Footer/>
    </div>
  );
};

export default Index;
