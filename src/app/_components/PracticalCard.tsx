import Image from "next/image";
import Link from "next/link";
import ArrowRight from "@/assets/icons/arrow_right";

type PracticalCardProps = {
  position: "left" | "right";
  cardTitle: string;
  description: string;
  linkText: string;
  link: string;
  image: string;
  color: string;
};

export default function PracticalCard({
  position,
  cardTitle,
  description,
  linkText,
  link,
  image,
  color,
}: PracticalCardProps) {
  return (
    <div
      className={`flex h-[270px] w-[670px] items-center gap-[22px] rounded-lg border-8 border-${color} bg-${color} bg-opacity-30 py-[51px] pl-[48px] pr-[34px] ${position === "right" ? "ml-auto flex-row-reverse" : "mr-auto"} relative z-10`}
    >
      <Image
        src={image}
        width={170}
        height={170}
        alt={cardTitle}
        className="flex-shrink-0 justify-center rounded-[15px] bg-grey"
      />
      <div className="flex flex-col justify-center">
        <p className="text-[32px] font-semibold uppercase">{cardTitle}</p>
        <p className="text-[22px] leading-[22px]">{description}</p>
        <Link
          className="ml-auto flex flex-row items-center justify-center gap-2 text-right text-[16px] font-semibold uppercase"
          href={link}
          target="_blank"
        >
          {linkText}
          <ArrowRight
            color="#003049"
            className="h-[20px] animate-bounce-horizontal"
          ></ArrowRight>
        </Link>
      </div>
    </div>
  );
}
