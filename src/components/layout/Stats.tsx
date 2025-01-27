export function Stats() {
  return (
    <section className="justify-center items-center border border-[color:var(--Gray-White,#FFF)] bg-[rgba(237,216,255,0.50)] z-10 flex mt-[-106px] gap-3 text-center flex-wrap rounded-md border-solid max-md:max-w-full">
      <div className="self-stretch flex flex-col w-[200px] my-auto">
        <div className="text-[#424E60] text-[32px] font-semibold leading-none">
          15 Y.
        </div>
        <div className="text-[#697484] text-base font-normal mt-2">
          Experience
        </div>
      </div>
      <div className="bg-white self-stretch w-0 shrink-0 h-[106px] my-auto border-white border-solid border-[3px]" />
      <div className="self-stretch flex flex-col w-[200px] my-auto">
        <div className="text-[#424E60] text-[32px] font-semibold leading-none">
          250+
        </div>
        <div className="text-[#697484] text-base font-normal mt-2">
          Project Completed
        </div>
      </div>
      <div className="bg-white self-stretch w-0 shrink-0 h-[106px] my-auto border-white border-solid border-[3px]" />
      <div className="self-stretch flex flex-col w-[200px] my-auto">
        <div className="text-[#424E60] text-[32px] font-semibold leading-none">
          58
        </div>
        <div className="text-[#697484] text-base font-normal mt-2">
          Happy Client
        </div>
      </div>
    </section>
  );
}