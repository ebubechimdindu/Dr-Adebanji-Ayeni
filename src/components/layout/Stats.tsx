export function Stats() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-20 -mt-12 sm:-mt-16 lg:-mt-20 mb-12 sm:mb-16 lg:mb-20 relative z-20">
      <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 p-6 sm:p-8 lg:p-10">
        {[
          { value: "15 Y.", label: "Experience" },
          { value: "250+", label: "Project Completed" },
          { value: "58", label: "Happy Client" }
        ].map((stat, index) => (
          <div 
            key={index}
            className="flex flex-col items-center text-center p-4 sm:p-6 hover:transform hover:scale-105 transition-all duration-500 bg-white/50 rounded-xl shadow-sm group animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-[#A53DFF] text-3xl sm:text-4xl font-bold mb-2 group-hover:animate-bounce">
              {stat.value}
            </div>
            <div className="text-[#697484] text-base sm:text-lg group-hover:text-[#A53DFF] transition-colors">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}