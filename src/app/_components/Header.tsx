import SubvisualIcon from "@/assets/icons/subvisual_icon";

export default function Header() {
  return (
    <header className="flex border-b border-dark_blue pb-1 pt-10 sm:pb-2">
      <div className="ml-auto flex items-center gap-2 text-dark_blue sm:gap-4">
        <span className="text-md flex-1 font-zilla_slab leading-10 sm:text-[1.75rem]">
          Powered by
        </span>
        <SubvisualIcon className="w-[94px] sm:w-[188px]" />
      </div>
    </header>
  );
}
