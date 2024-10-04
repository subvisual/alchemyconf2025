import Link from "next/link";

type ButtonProps = {
  text: string;
  href: string;
  className?: string;
};

export default function Button({ text, href, className }: ButtonProps) {
  return (
    <button
      className={`${className} rounded-lg px-4 py-2 font-zilla_slab text-[18px] text-background`}
    >
      <Link target="_blank" href={href}>
        {text}
      </Link>
    </button>
  );
}
