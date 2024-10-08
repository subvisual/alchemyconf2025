import ArrowRight from "@/assets/icons/arrow_right";
import Blob from "@/assets/icons/blob";
import Link from "next/link";

export default function Practical() {
  return (
    <section className="flex flex-col items-center justify-start px-32 py-[120px]">
      <div className="mb-16 font-koulen text-[128px] text-dark-blue">
        Practical
      </div>
      <div className="mb-10 text-center font-zilla_slab text-[22px] text-dark-blue">
        <div className="flex justify-between gap-36 text-center align-middle">
          <Blob variant={4} stroke="#84ACCE" className="h-[376px] w-[446px]" />
          <div className="flex w-[432px] flex-col justify-center text-center font-zilla_slab">
            <p className="text-[36px] font-semibold uppercase">Move</p>
            <p className="pb-6 text-2xl font-light leading-[30px]">
              Getting around Braga shouldn&apos;t be a hassle. Walking, biking,
              or even catching a bus are all comfortable ways of getting to the{" "}
              <span className="font-semibold text-bordeux">Theatro Circo</span>{" "}
              , and all local transportation and maps can be found below.
            </p>
            <div className="flex flex-row items-center justify-center gap-3">
              <Link
                className="text-[16px] font-semibold uppercase text-bordeux"
                href="/practical/move"
              >
                Getting around{" "}
              </Link>
              <ArrowRight color="#7D1D3F" className="h-[20px]"></ArrowRight>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center font-zilla_slab text-[22px] text-dark-blue">
        <div className="flex justify-between gap-36 text-center align-middle">
          <div className="flex w-[432px] flex-col justify-center text-center font-zilla_slab">
            <p className="text-[36px] font-semibold uppercase">Sleep</p>
            <p className="pb-6 text-2xl font-light leading-[30px]">
              We&apos;ve partnered with nearby hotels to offer you comfort and
              convenience during your stay. Our recommendations are just minutes
              from the venue, and they&apos;re lovely. Check out our top choices
            </p>
            <div className="flex flex-row items-center justify-center gap-3">
              <Link
                className="text-[16px] font-semibold uppercase text-bordeux"
                href="/practical/sleep"
              >
                See more{" "}
              </Link>
              <ArrowRight color="#7D1D3F" className="h-[20px]"></ArrowRight>
            </div>
          </div>
          <Blob variant={5} stroke="#F4AC45" className="h-[376px] w-[446px]" />
        </div>
      </div>
    </section>
  );
}
