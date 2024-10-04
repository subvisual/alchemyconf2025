import Blob from "@/assets/icons/blob";
import Button from "../_components/Button";

export default function Practical() {
  return (
    <section
      id="practical"
      className="flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="font-koulen text-[128px] text-dark-blue">Practical</div>
      <div className="w-[472px] text-center font-zilla_slab text-[22px] text-dark-blue">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>

      <div className="flex py-20">
        <Blob className="h-[247px] w-[298px]" text="Eat" textSize="24px" />
        <Blob className="h-[247px] w-[298px]" text="Move" textSize="24px" />
        <Blob
          className="h-[247px] w-[298px]"
          text="Party & Mingle"
          textSize="24px"
        />
        <Blob className="h-[247px] w-[298px]" text="Sleep" textSize="24px" />
      </div>

      <Button text="View all information" className="bg-bordeux" href="/" />
    </section>
  );
}
