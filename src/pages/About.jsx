import Navigation from './Navigation';
import Footer from './Footer';
import StickyFooter from './StickyFooter';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <section id="about-section" className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 flex-grow">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in">
            🧑‍💻 About Must Play Games
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <p className="text-xl text-white mb-6 leading-relaxed">
              We don't just build games — we <span className="font-bold text-yellow-300">craft joyful experiences</span>.
            </p>
            
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Founded in 2014 in Hyderabad, Must Play Games is an award-winning gaming studio that brings imagination to life through cutting-edge mobile games, VR, and AR experiences.
            </p>
            
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Our mission? To blend world-class design, immersive storytelling, and bleeding-edge technology into unforgettable digital adventures. From building our own playful universes to creating immersive apps for global partners, we do it all — and we do it with passion.
            </p>
            
            <p className="text-lg text-white/90 leading-relaxed">
              With a team of dreamers, developers, and artists, we're not just building games — we're building <span className="font-bold text-yellow-300">smiles, excitement, and moments of magic</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
      <StickyFooter />
      <Footer />
    </div>
  );
};

export default About;
