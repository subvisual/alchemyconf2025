import Button from "../_components/Button";
import PracticalBlob from "@/assets/icons/practical_blob";
import PracticalBlobMobile from "@/assets/icons/practical_blob mobile";
import CurvedArrow from "@/assets/icons/curved_arrow";
import CurvedArrowMobile from "@/assets/icons/curved_arrow mobile";
export default function Practical() {
  return (
    <section
      id="practical"
      className="flex flex-col items-center justify-center tablet:mb-[500px] desktop:mb-[800px] desktop:mt-32"
    >
      {/* DESKTOP / TABLET */}
      <div className="hidden justify-center tablet:flex">
        <div className="relative z-0 flex w-full max-w-[1440px] flex-col items-center justify-center">
          <div className="absolute -z-10 h-0 w-0">
            <PracticalBlob className="relative -z-10 translate-x-[-890px] mobile:scale-[0.9] tablet:translate-x-[-550px] tablet:scale-[0.9] desktop:translate-x-[-700px] desktop:scale-[1.2]" />
          </div>
          <div className="flex w-full flex-col items-center justify-center tablet:w-[1500px] tablet:translate-x-[-350px] tablet:translate-y-[240px] tablet:flex-row tablet:items-start desktop:translate-x-[-450px] desktop:translate-y-[190px]">
            <div className="mb-16 border-l-4 border-yellow pl-5">
              <p className="w-full font-alegreya_sans text-xl font-bold text-background tablet:text-[26px] tablet:leading-[36px] desktop:text-[32px] desktop:leading-[44px]">
                Where to stay? <br /> What to do? <br /> What to eat?
              </p>
            </div>
          </div>
          <div className="relative flex translate-x-[60px] translate-y-[240px] flex-row items-center justify-center tablet:gap-20 desktop:gap-40">
            <p className="font-alegreya_sans text-xl text-background tablet:w-[450px] tablet:text-2xl desktop:w-[450px]">
              We’ve gathered all the stuff you need to prepare for your trip to
              Braga in our <span className="font-bold">practical guide</span>
            </p>
            <Button
              className="font-medium"
              text="See Practical Guide"
              href=""
            />
          </div>
          <div className="relative flex translate-x-[100px] translate-y-[240px] flex-row items-center justify-center">
            <CurvedArrow className="relative -z-10 mobile:scale-[0.9] desktop:scale-[1.2]" />
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex tablet:hidden">
        <div className="mx-auto mb-40 mt-32 flex w-full flex-col items-center justify-center">
          <div className="relative -z-10 h-0 w-0">
            <PracticalBlobMobile className="absolute -z-10 translate-x-[-730px] translate-y-[-100px] scale-[0.9]" />
          </div>
          <div className="flex w-full translate-x-[10px] translate-y-[50px] flex-col items-start justify-center">
            <div className="mb-12 border-l-4 border-yellow pl-5">
              <p className="w-full font-alegreya_sans text-xl font-bold text-background">
                Where to stay? <br /> What to do? <br /> What to eat?
              </p>
            </div>
            <p className="w-[290px] font-alegreya_sans text-xl text-background">
              We’ve gathered all the stuff you need to prepare for your trip to
              Braga in our <span className="font-bold">practical guide</span>
            </p>
            <div className="relative flex flex-row items-start translate-x-[30px] translate-y-[10px]">
              <CurvedArrowMobile className="relative -z-10 scale-[1.0]" />
              <Button
                className="font-medium translate-x-[20px] translate-y-[60px]"
                text="See Practical Guide"
                href=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
