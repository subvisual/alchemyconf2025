import SubvisualIcon from "@/assets/icons/subvisual_icon";

export default function Header() {
  return (
    <header className="flex border-b border-dark_blue pt-10 pb-4">
      <div className="ml-auto text-dark_blue items-center flex gap-4">
        <span className="flex-1 text-[1.75rem] font-zilla_slab leading-10">
          Powered by
        </span>
        <SubvisualIcon />
      </div>
    </header>
  );
}
