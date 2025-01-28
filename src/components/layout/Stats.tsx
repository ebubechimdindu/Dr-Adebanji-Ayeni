export function Stats() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-20 -mt-12 sm:-mt-16 lg:-mt-20 mb-12 sm:mb-16 lg:mb-20 relative z-20">
      <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col items-center text-center p-4 sm:p-6 hover:transform hover:scale-105 transition-all duration-300 bg-white/50 rounded-xl shadow-sm">
          <div className="text-[#A53DFF] text-3xl sm:text-4xl font-bold mb-2 animate-fade-in">
            15 Y.
          </div>
          <div className="text-[#697484] text-base sm:text-lg animate-fade-in">
            Experience
          </div>
        </div>
        <div className="flex flex-col items-center text-center p-4 sm:p-6 hover:transform hover:scale-105 transition-all duration-300 bg-white/50 rounded-xl shadow-sm">
          <div className="text-[#A53DFF] text-3xl sm:text-4xl font-bold mb-2 animate-fade-in">
            250+
          </div>
          <div className="text-[#697484] text-base sm:text-lg animate-fade-in">
            Project Completed
          </div>
        </div>
        <div className="flex flex-col items-center text-center p-4 sm:p-6 hover:transform hover:scale-105 transition-all duration-300 bg-white/50 rounded-xl shadow-sm">
          <div className="text-[#A53DFF] text-3xl sm:text-4xl font-bold mb-2 animate-fade-in">
            58
          </div>
          <div className="text-[#697484] text-base sm:text-lg animate-fade-in">
            Happy Client
          </div>
        </div>
      </div>
    </section>
  );
}