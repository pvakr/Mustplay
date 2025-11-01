
import gameplay1 from "../icon/MatchTreasure_Icon_Unity.png";

const GameDescription = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-100 to-purple-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-800 mb-8 animate-fade-in">
            🎮 Game Description
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-yellow-400">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Welcome to <span className="font-bold text-purple-600">Match Treasures</span> –  a fun and exciting triple match game! Test your logic and sorting skills
                as you match stunning 3D treasures, beat tricky levels, and unlock exciting rewards. Each level brings
                new surprises and challenges. Get ready to mix, match, and enjoy the adventure!
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Challenge yourself with tricky puzzles that test your logic, speed, and strategy—each level brings
                smarter gameplay and more satisfying triple match action.

                Challenge yourself with tricky puzzles that test your logic, speed, and strategy—each level brings
                smarter gameplay and more satisfying triple match action.

              </p>

               <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">

                Unlock hidden treasures as you progress—uncover surprise rewards and secret challenges that make
                each level more exciting and rewarding.
                
                Create powerful combos to trigger exciting power-ups—clear levels faster, earn bigger rewards, and
                make every smart move count in your matching journey.
              </p>
              
              <div className="bg-gradient-to-r from-yellow-200 to-pink-200 rounded-2xl p-6 mt-8">
                <p className="text-lg italic text-purple-800 font-medium">
                  "Get ready for a thrilling triple match adventure full of brain-boosting challenges and
                    dazzling 3D treasures—endless fun and satisfaction await!"
                </p>
                <p className="text-sm text-purple-600 mt-2">– A very happy player 🍬</p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={gameplay1} 
                alt="Match Treasures Gameplay"
                className="w-100  h-100 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameDescription;
