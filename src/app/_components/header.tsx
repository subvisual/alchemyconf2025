import SubvisualIcon from "@/assets/icons/subvisual_icon";

export default function Header() {
  return (
    <header className="flex border-b border-dark_blue pb-4 pt-10">
      <div className="ml-auto flex items-center gap-4 text-dark_blue">
        <span className="flex-1 font-zilla_slab text-[1.75rem] leading-10">
          Powered by
        </span>
        <SubvisualIcon />
      </div>
    </header>
  );
}
