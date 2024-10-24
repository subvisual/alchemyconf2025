import Link from "next/link";

type ButtonProps = {
  text: string;
  href: string;
  className?: string;
};

export default function Button({ text, href, className }: ButtonProps) {
  return (
    <button
      className={`${className} to-99% rounded-[48px] bg-bordeux from-[#A4365D] via-bordeux to-dark-blue px-8 py-3 font-alegreya_sans text-xl text-background hover:bg-gradient-to-br hover:drop-shadow-xl`}
    >
      <Link target="_blank" href={href}>
        {text}
      </Link>
    </button>
  );
}
