import Blob from "@/assets/icons/blob";
import Button from "../_components/Button";

export default function Intro() {
  return (
    <>
      <section
        id="tickets"
        className="flex min-h-[740px] flex-col items-center justify-center"
      >
        <div className="relative flex justify-center">
          <div className="absolute bottom-[200px] left-[10px] whitespace-nowrap font-zilla_slab text-3xl font-semibold uppercase leading-[48px] text-dark-blue">
            We are back! <br /> Dont miss a moment!
          </div>
          <Blob
            variant={1}
            className="-rotate-21 absolute bottom-[10px] right-[20px] h-[320px] w-[340px]"
          />
          <Blob
            variant={3}
            className="absolute right-[-10px] top-[20px] h-[320px] w-[340px]"
          />
          <Blob
            variant={2}
            className="absolute bottom-[-140px] left-[30px] h-[320px] w-[340px]"
          />

          <Button
            text="Buy tickets"
            href="https://ti.to/subvisual/alchemy-conf-2025"
            className="absolute left-[60px] top-[220px] whitespace-nowrap bg-blue text-xl font-semibold uppercase text-dark-blue"
          />
          <div className="absolute right-[340px] top-[10px] flex flex-col items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-yellow bg-yellow bg-opacity-40 font-zilla_slab text-4xl font-semibold text-bordeux">
              #2
            </div>
            <div className="mt-1 font-zilla_slab text-2xl font-semibold uppercase text-dark-blue">
              Edition
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
