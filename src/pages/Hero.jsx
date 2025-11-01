import { Button } from "@/components/ui/button";
import gameLogo from "../assets/images/Foreground _MatchTreatures_Icon.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 flex flex-col items-center justify-center overflow-hidden text-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full animate-pulse opacity-20"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-pink-300 rounded-full animate-bounce opacity-30"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-purple-300 rounded-full animate-pulse opacity-25"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-yellow-400 rounded-full animate-bounce opacity-20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 py-16">
        {/* Game Logo */}
        <div className="mb-8 flex justify-center">
          <img
            src={gameLogo}
            alt="Match Treasures Game Logo"
            className="max-w-md w-full h-auto drop-shadow-2xl animate-pulse"
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg animate-fade-in">
          Uncover Sweet Surprises in <br />
          <span className="text-yellow-300 animate-pulse">Match Treasures!</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
          Dive into a world of candy-coated puzzles and treasure-packed adventures.
          Match, collect, and conquer – one sweet level at a time.
        </p>

        {/* CTA */}
        <Button
          size="lg"
          className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-bounce"
        >
          🍭 Start Your Sweet Adventure
        </Button>

        {/* Company Intro Section */}
        <div className="mt-20 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto text-left text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6 text-center">
            About Must Play Games
          </h2>
          <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
            {`Must Play Games is a pioneer and leading gaming studio based in Hyderabad, India. We established ourselves in 2014 with a notion to develop world class and unique games and commitment to deliver the best in the project we undertake. We design and develop our own products for cross-platform games, Virtual and Augmented Reality also cater to the demands of our business partners worldwide by developing AR, VR applications, and games customized according to the unique requirements. At Must Play Studio, we catalyze innovation and creativity to stay ahead with understanding of the latest technology and trends in the world of VR/AR applications and gaming.

We have deep expertise in gaming, VR and AR segments, which is backed by a team of highly skilled professionals having proven quality work experience. Our development experts ensure maximum emphasis as well as efforts for the project. The concept is to assist you in achieving your goals by understanding your customers, working adequately, delivering the best class product and bring success and growth to your business.

We are focused to bring your Idea into life and to provide the finest services and assistance which plots a strong and long run business relationship.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
