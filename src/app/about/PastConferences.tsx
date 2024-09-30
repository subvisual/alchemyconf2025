import Blob from "@/assets/icons/blob";
import Link from "next/link";

export default function PastConferences() {
  return (
    <section className="flex flex-col items-center justify-start px-32 pb-[120px]">
      <div className="text-dark-blue pb-8 font-koulen text-[128px]">
        Past Conferences
      </div>
      <div className="flex gap-8 font-zilla_slab">
        <div className="flex flex-col items-center justify-center py-20 font-medium">
          <div>
            <div className="border-yellow h-[176px] w-[176px] rounded-lg border-8 bg-sage"></div>
          </div>
          <div className="pt-2 text-[20px] uppercase">Conference #1</div>
          <div className="text-[16px]">Month, Year</div>
        </div>
        <div className="flex flex-col items-center justify-center py-20 font-medium">
          <div>
            <div className="h-[176px] w-[176px] rounded-lg border-8 border-bordeux bg-sage"></div>
          </div>
          <div className="pt-2 text-[20px] uppercase">Conference #2</div>
          <div className="text-[16px]">Month, Year</div>
        </div>
        <div className="flex flex-col items-center justify-center py-20 font-medium">
          <div>
            <div className="h-[176px] w-[176px] rounded-lg border-8 border-purple bg-sage"></div>
          </div>
          <div className="pt-2 text-[20px] uppercase">Conference #3</div>
          <div className="text-[16px]">Month, Year</div>
        </div>
        <div className="flex flex-col items-center justify-center py-20 font-medium">
          <div>
            <div className="h-[176px] w-[176px] rounded-lg border-8 border-blue bg-sage"></div>
          </div>
          <div className="pt-2 text-[20px] uppercase">Conference #4</div>
          <div className="text-[16px]">Month, Year</div>
        </div>
      </div>

      <div className="flex justify-between gap-36 pt-20 text-center align-middle">
        <Blob stroke="#84ACCE" className="h-[376px] w-[446px]" />

        <div className="flex w-[432px] flex-col justify-center text-center font-zilla_slab">
          <p className="text-[36px] font-medium uppercase">Code of Conduct</p>
          <p className="pb-[30px] text-[24px] font-light leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link className="text-[16px] uppercase" href="#">
            See more
          </Link>
        </div>
      </div>
    </section>
  );
}
