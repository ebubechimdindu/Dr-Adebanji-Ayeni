import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/layout/Hero";
import { Stats } from "@/components/layout/Stats";

const Index = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch">
      <Header />
      
      <section id="home" className="pt-16 sm:pt-20">
        <Hero />
        <Stats />
      </section>

      <section id="about" className="min-h-screen px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-6 sm:mb-8 animate-fade-in">About Me</h2>
        <p className="text-base sm:text-lg text-[#697484] max-w-3xl animate-fade-in">
          With 15 years of experience in UI/UX design and development, I've helped numerous clients 
          bring their digital visions to life. My approach combines aesthetic excellence with 
          functional design, ensuring every project not only looks beautiful but performs exceptionally.
        </p>
      </section>

      <section id="process" className="min-h-screen bg-[#F8F9FA] px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">My Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {['Discovery', 'Design', 'Development', 'Testing', 'Launch', 'Maintenance'].map((step, index) => (
            <div key={step} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 animate-fade-in">
              <div className="text-[#A53DFF] font-bold mb-2 text-lg sm:text-xl">0{index + 1}</div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">{step}</h3>
              <p className="text-[#697484]">Brief description of the {step.toLowerCase()} phase and what it entails.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="min-h-screen px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="group relative overflow-hidden rounded-xl shadow-lg animate-fade-in">
              <div className="aspect-w-16 aspect-h-9 bg-[#F8F9FA]"></div>
              <div className="absolute inset-0 bg-[#A53DFF]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white font-semibold text-lg">Project {item}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="blog" className="min-h-screen bg-[#F8F9FA] px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3].map((post) => (
            <article key={post} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 animate-fade-in">
              <div className="aspect-w-16 aspect-h-9 bg-[#EDF2F7]"></div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Blog Post {post}</h3>
                <p className="text-[#697484] mb-4">Short description of the blog post content...</p>
                <button className="text-[#A53DFF] font-semibold hover:underline">Read More</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="min-h-screen px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            'UI/UX Design',
            'Web Development',
            'Mobile Apps',
            'Brand Identity',
            'Digital Marketing',
            'Consultation'
          ].map((service) => (
            <div key={service} className="p-6 sm:p-8 rounded-xl border-2 border-[#E2E8F0] hover:border-[#A53DFF] transition-colors shadow-lg hover:shadow-xl animate-fade-in">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">{service}</h3>
              <p className="text-[#697484]">Comprehensive {service.toLowerCase()} services tailored to your needs.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="min-h-screen bg-[#F8F9FA] px-4 sm:px-6 lg:px-20 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#132238] mb-8 sm:mb-12 animate-fade-in">Contact Me</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#A53DFF] focus:ring-2 focus:ring-[#A53DFF]/20 focus:outline-none transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#A53DFF] focus:ring-2 focus:ring-[#A53DFF]/20 focus:outline-none transition-all duration-300"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#A53DFF] focus:ring-2 focus:ring-[#A53DFF]/20 focus:outline-none transition-all duration-300"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#A53DFF] focus:ring-2 focus:ring-[#A53DFF]/20 focus:outline-none transition-all duration-300 resize-none"
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
    </div>
  );
}

export default Index;