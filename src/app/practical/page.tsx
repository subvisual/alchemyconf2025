import Blob from "@/assets/icons/blob";
import Link from "next/link";

export default function Practical() {
  return (
    <section className="flex flex-col items-center justify-start px-32 py-[120px]">
      <div className="text-dark-blue pb-8 font-koulen text-[128px]">
        Practical
      </div>
      <div className="text-dark-blue text-center font-zilla_slab text-[22px]">
        <div className="flex justify-between gap-36 pt-20 text-center align-middle">
          <Blob stroke="#84ACCE" className="h-[376px] w-[446px]" />

          <div className="flex w-[432px] flex-col justify-center text-center font-zilla_slab">
            <p className="text-[36px] font-medium uppercase">Move</p>
            <p className="pb-[30px] text-[24px] font-light leading-6">
              Getting around Braga shouldn&apos;t be a hassle. Walking, biking,
              or even catching a bus are all comfortable ways of getting to the{" "}
              <span className="font-medium text-bordeux">Theatro Circo</span> ,
              and all local transportation and maps can be found below.
            </p>
            <Link
              className="text-[16px] font-medium uppercase text-bordeux"
              href="/practical/move"
            >
              Getting around{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="text-dark-blue text-center font-zilla_slab text-[22px]">
        <div className="flex justify-between gap-36 pt-20 text-center align-middle">
          <div className="flex w-[432px] flex-col justify-center text-center font-zilla_slab">
            <p className="text-[36px] font-medium uppercase">Sleep</p>
            <p className="pb-[30px] text-[24px] font-light leading-6">
              We&apos;ve partnered with nearby hotels to offer you comfort and
              convenience during your stay. Our recommendations are just minutes
              from the venue, and they&apos;re lovely. Check out our top choices
            </p>
            <Link
              className="text-[16px] font-medium uppercase text-bordeux"
              href="/practical/sleep"
            >
              See more{" "}
            </Link>
          </div>
          <Blob stroke="#F4AC45" className="h-[376px] w-[446px]" />
        </div>
      </div>
    </section>
  );
}
