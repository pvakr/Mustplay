
import { Button } from "@/components/ui/button";

const StickyFooter = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 border-t-4 border-yellow-400 shadow-2xl ">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-1">
              🎉 Ready to Match, Play, and Win?
            </h3>
            <p className="text-white/90">
              Tap the treasure chest and start your candy adventure now!
            </p>
          </div>
          
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold px-8 py-3 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
            <span className="text-2xl">📱</span>
            Get it on Google Play
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
