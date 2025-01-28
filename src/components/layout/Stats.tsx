export function Stats() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-20 -mt-12 sm:-mt-16 lg:-mt-20 mb-12 sm:mb-16 lg:mb-20 relative z-20">
      <div className="bg-white/60 backdrop-blur-xl shadow-2xl rounded-[30px] grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 p-8 sm:p-10 lg:p-12 border border-white/20">
        {[
          { value: "15 Y.", label: "Experience" },
          { value: "250+", label: "Project Completed" },
          { value: "58", label: "Happy Client" }
        ].map((stat, index) => (
          <div 
            key={index}
            className="flex flex-col items-center text-center p-6 sm:p-8 hover:transform hover:scale-105 transition-all duration-500 bg-gradient-to-b from-white/80 to-purple-50/50 rounded-2xl shadow-lg group animate-fade-in border border-white/40"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-4xl sm:text-5xl font-bold mb-3 group-hover:animate-bounce">
              {stat.value}
            </div>
            <div className="text-[#697484] text-base sm:text-lg group-hover:text-[#6E59A5] transition-colors font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}