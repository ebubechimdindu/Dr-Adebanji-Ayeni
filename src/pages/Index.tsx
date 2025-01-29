import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/layout/Hero";
import { Stats } from "@/components/layout/Stats";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch">
      <Header />
      
      <section id="home" className="pt-16 sm:pt-20">
        <Hero />
        <Stats />
      </section>

      <section id="about" className="min-h-screen px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-6 sm:mb-8 animate-fade-in">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-right">
              <p className="text-base sm:text-lg text-[#697484] leading-relaxed">
                With 15 years of experience in UI/UX design and development, I've helped numerous clients 
                bring their digital visions to life. My approach combines aesthetic excellence with 
                functional design, ensuring every project not only looks beautiful but performs exceptionally.
              </p>
              <p className="text-base sm:text-lg text-[#697484] leading-relaxed">
                I specialize in creating intuitive and engaging user experiences that drive results.
              </p>
            </div>
            <div className="relative h-[400px] animate-scale-in">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81"
                alt="About Me"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="min-h-screen bg-[#F8F9FA] px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">My Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {['Discovery', 'Design', 'Development', 'Testing', 'Launch', 'Maintenance'].map((step, index) => (
              <div 
                key={step} 
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:bg-[#A53DFF] hover:text-white group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-[#A53DFF] group-hover:text-white font-bold mb-2 text-lg sm:text-xl">0{index + 1}</div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">{step}</h3>
                <p className="text-[#697484] group-hover:text-white/90">Brief description of the {step.toLowerCase()} phase and what it entails.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="min-h-screen px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item} 
                className="group relative overflow-hidden rounded-xl shadow-lg animate-scale-in"
                style={{ animationDelay: `${item * 100}ms` }}
              >
                <div className="aspect-w-16 aspect-h-9 bg-[#F8F9FA]">
                  <img
                    src={`https://picsum.photos/seed/${item}/800/600`}
                    alt={`Project ${item}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-[#A53DFF]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-full group-hover:translate-y-0">
                  <div className="text-center p-6">
                    <h3 className="text-white font-semibold text-xl mb-2">Project {item}</h3>
                    <p className="text-white/90 mb-4">Brief project description goes here.</p>
                    <button className="px-6 py-2 bg-white text-[#A53DFF] rounded-full hover:bg-[#F8F9FA] transition-colors duration-300">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="min-h-screen bg-[#F8F9FA] px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3].map((post) => (
              <article 
                key={post} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${post * 100}ms` }}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={`https://picsum.photos/seed/blog${post}/800/600`}
                    alt={`Blog Post ${post}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4 hover:text-[#A53DFF] transition-colors">Blog Post {post}</h3>
                  <p className="text-[#697484] mb-4">Short description of the blog post content...</p>
                  <button className="text-[#A53DFF] font-semibold hover:text-[#8431CC] transition-colors group">
                    Read More
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="min-h-screen px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              'UI/UX Design',
              'Web Development',
              'Mobile Apps',
              'Brand Identity',
              'Digital Marketing',
              'Consultation'
            ].map((service, index) => (
              <div 
                key={service} 
                className="p-6 sm:p-8 rounded-xl border-2 border-[#E2E8F0] hover:border-[#A53DFF] transition-all duration-500 shadow-lg hover:shadow-xl group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 transform transition-transform duration-500 group-hover:scale-110">
                  <div className="w-16 h-16 bg-[#A53DFF]/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-[#A53DFF]">0{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 group-hover:text-[#A53DFF] transition-colors">{service}</h3>
                <p className="text-[#697484]">Comprehensive {service.toLowerCase()} services tailored to your needs.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen bg-[#F8F9FA] px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Contact Me</h2>
          <form className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#A53DFF] focus:ring-2 focus:ring-[#A53DFF]/20 focus:outline-none transition-all duration-300 hover:border-[#A53DFF]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#A53DFF] focus:ring-2 focus:ring-[#A53DFF]/20 focus:outline-none transition-all duration-300 hover:border-[#A53DFF]"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#A53DFF] focus:ring-2 focus:ring-[#A53DFF]/20 focus:outline-none transition-all duration-300 hover:border-[#A53DFF]"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#A53DFF] focus:ring-2 focus:ring-[#A53DFF]/20 focus:outline-none transition-all duration-300 hover:border-[#A53DFF] resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#A53DFF] text-white font-semibold py-3 rounded-lg hover:bg-[#8431CC] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
