export function Stats() {
  return (
    <section className="container mx-auto px-5 lg:px-20 -mt-20 mb-20 relative z-20">
      <div className="bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
        <div className="flex flex-col items-center text-center p-6 hover:transform hover:scale-105 transition-all duration-300">
          <div className="text-[#A53DFF] text-4xl font-bold mb-2 animate-fade-in">
            15 Y.
          </div>
          <div className="text-[#697484] text-lg animate-fade-in">
            Experience
          </div>
        </div>
        <div className="flex flex-col items-center text-center p-6 hover:transform hover:scale-105 transition-all duration-300">
          <div className="text-[#A53DFF] text-4xl font-bold mb-2 animate-fade-in">
            250+
          </div>
          <div className="text-[#697484] text-lg animate-fade-in">
            Project Completed
          </div>
        </div>
        <div className="flex flex-col items-center text-center p-6 hover:transform hover:scale-105 transition-all duration-300">
          <div className="text-[#A53DFF] text-4xl font-bold mb-2 animate-fade-in">
            58
          </div>
          <div className="text-[#697484] text-lg animate-fade-in">
            Happy Client
          </div>
        </div>
      </div>
    </section>
  );
}