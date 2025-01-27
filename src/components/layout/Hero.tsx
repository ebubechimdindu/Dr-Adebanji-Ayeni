export function Hero() {
  return (
    <section className="self-center flex w-full max-w-[1320px] flex-col mt-[126px] pt-[52px] max-md:max-w-full max-md:mt-10">
      <div className="z-10 flex w-[648px] max-w-full flex-col text-[#132238] font-semibold mt-[52px] max-md:mt-10">
        <h1 className="text-7xl leading-[84px] max-md:max-w-full max-md:text-[40px] max-md:leading-[52px]">
          Hello, I'm
          <br />
          Brooklyn Gilbert
        </h1>
        <p className="text-lg font-normal leading-6 self-stretch mt-6 max-md:max-w-full">
          I'm a Freelance <span className="text-[#132238]">UI/UX Designer</span> and{" "}
          <span className="text-[#132238]">Developer</span> based in London, England. 
          I strives to build immersive and beautiful web applications through 
          carefully crafted code and user-centric design.
        </p>
        <button className="self-stretch rounded bg-[#A53DFF] gap-3 text-base text-white mt-6 px-6 py-3 max-md:px-5">
          Say Hello!
        </button>
      </div>
      <div className="bg-[rgba(255,200,200,1)] flex mt-[-131px] w-[133px] shrink-0 h-1.5 ml-[140px] max-md:ml-2.5" />
      <div className="bg-[rgba(255,200,200,1)] z-10 flex w-[92px] shrink-0 h-1.5 ml-[314px] -mt-1.5 max-md:ml-2.5" />
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f5b7607dc7e7dd76883247c2efe66e31ad764b678493a79a036b44c106ea4f81?placeholderIfAbsent=true"
        className="aspect-[0.84] object-contain w-[536px] shadow-[0px_24px_116px_rgba(43,56,76,0.09)] z-10 mt-[-263px] max-w-full rounded-[25px] max-md:mt-[-200px]"
        alt="Brooklyn Gilbert"
      />
    </section>
  );
}