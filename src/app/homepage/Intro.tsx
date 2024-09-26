import Blob from "@/assets/icons/blob";
import Button from "../_components/Button";

export default function Intro() {
  return (
    <>
      <section
        id="tickets"
        className="flex min-h-screen flex-col items-center justify-center"
      >
        <div className="relative flex justify-center">
          <div className="text-dark-blue absolute bottom-[200px] left-[50px] whitespace-nowrap font-zilla_slab text-[36px] uppercase">
            We are back
          </div>
          <Blob className="absolute bottom-[10px] right-[20px] h-[320px] w-[340px] -rotate-12" />
          <Blob className="absolute right-[-90px] top-[50px] h-[320px] w-[340px] rotate-12" />
          <Blob className="absolute bottom-[-140px] left-[50px] h-[320px] w-[340px] rotate-45" />
          <Button
            text="Buy tickets"
            href="https://ti.to/subvisual/alchemy-conf-2025"
            className="absolute left-[140px] top-[260px] whitespace-nowrap uppercase"
          />
          <div className="absolute right-[260px] top-[25px] flex flex-col items-center">
            <div className="bg-dark-blue text-white flex h-20 w-20 items-center justify-center rounded-full font-zilla_slab text-2xl text-[36px] font-semibold">
              #2
            </div>
            <div className="text-dark-blue mt-1 font-zilla_slab text-[24px] text-lg font-medium uppercase">
              Edition
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
