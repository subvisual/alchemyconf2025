import Link from "next/link";

type ButtonProps = {
  text: string;
  href: string;
  className?: string;
};

export default function AltButton({ text, href, className }: ButtonProps) {
  return (
    <Link target="_blank" href={href}>
      <button
        className={`${className} to-99% rounded-[48px] border-2 border-bordeux from-[#A4365D] via-bordeux to-dark-blue px-4 py-2 font-alegreya_sans text-[16px] text-bordeux hover:border-none hover:bg-gradient-to-br hover:py-[10px] hover:text-background hover:drop-shadow-xl tablet:px-8 tablet:text-xl tablet:hover:px-[34px] tablet:hover:py-[10px]`}
      >
        {text}
      </button>
    </Link>
  );
}
