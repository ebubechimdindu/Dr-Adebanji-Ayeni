export function Stats() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-20 py-12 relative z-10">
      <div className="bg-white/60 backdrop-blur-xl shadow-2xl rounded-[30px] grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 p-8 sm:p-10 lg:p-12 border border-white/20">
        {[
          { value: "9+", label: "Years in Academia" },
          { value: "Ph.D.", label: "Business Administration" },
          { value: "2", label: "Current Institutions" }
        ].map((stat, index) => (
          <div 
            key={index}
            className="flex flex-col items-center text-center p-6 sm:p-8 hover:transform hover:scale-105 transition-all duration-500 bg-gradient-to-b from-white/80 to-gray-50/50 rounded-2xl shadow-lg group animate-fade-in border border-white/40"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E69AB] to-[#6E59A5] text-4xl sm:text-5xl font-bold mb-3 group-hover:animate-bounce">
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