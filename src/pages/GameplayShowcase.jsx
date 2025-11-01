import relaxMind from "../assets/images/relax-mind.png";
import challengeYourself from "../assets/images/MT_Banner_3.png";
import gameplay2 from "../assets/images/MT_Banner_4.png";

const GameplayShowcase = () => {
  const screenshots = [
    {
      image: relaxMind,
      title: "Relax Your Mind!",
      description: "Unwind with satisfying puzzle-solving gameplay"
    },
    {
      image: challengeYourself,
      title: "Challenge Yourself!",
      description: "Test your strategic thinking with complex levels"
    },
    {
      image: gameplay2,
      title: "Clear The Board!",
      description: "Master the art of matching and clearing puzzles"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-fade-in">
          ✨ Gameplay Showcase
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index}
              className="relative group transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src={screenshot.image} 
                  alt={screenshot.title}
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold mb-2">{screenshot.title}</h3>
                  <p className="text-sm">{screenshot.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center mt-16">
          <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in">
            Ready to immerse yourself in the captivating world of Match Treasures? Each level brings a new challenge and a chance to unlock amazing rewards.
          </p>
          <p className="text-lg text-yellow-300 font-semibold animate-pulse">
            Dive in now and experience the magic!
          </p>
        </div>
      </div>
    </section>
  );
};

export default GameplayShowcase;
