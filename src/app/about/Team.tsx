import team from "../_constants/team.json";
import Image from "next/image";

export default function Team() {
  const borderColors = ["#84ACCE", "#F4AC45", "#827191", "#B6B980"];

  const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const getShuffledColors = (prevColors: string[]) => {
    let shuffledColors = shuffleArray([...borderColors]);

    while (shuffledColors.some((color, index) => color === prevColors[index])) {
      shuffledColors = shuffleArray([...borderColors]);
    }

    return shuffledColors;
  };

  let prevColors: string[] = [];

  return (
    <section className="my-[136px] flex flex-col items-center justify-start px-32">
      <div className="mb-16 font-koulen text-9xl text-dark-blue">
        Alchemy Conf Team
      </div>
      <div className="grid gap-8 font-zilla_slab mobile:grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4">
        {team.map((member, key) => {
          if (key % 4 === 0) {
            prevColors = getShuffledColors(prevColors);
          }
          const randomColor = prevColors[key % 4];
          return (
            <div
              key={key}
              className="flex flex-col items-center justify-center font-medium"
            >
              <div className="relative">
                <div
                  className="h-[176px] w-[176px] rounded-lg border-8 bg-grey"
                  style={{ borderColor: randomColor }}
                >
                  <Image
                    src={member.photo}
                    alt="Member photo"
                    width={176}
                    height={176}
                  ></Image>
                </div>
                <div className="absolute right-[-10px] top-[-10px] flex h-[50px] w-[50px] items-center justify-center rounded-full border-4 border-bordeux bg-white">
                  <Image
                    src={member.company_logo}
                    alt="Company logo"
                    width={36}
                    height={36}
                    className="h-[36px] w-[36px] rounded-full"
                  />
                </div>
              </div>
              <div className="pt-2 text-[20px] uppercase">{member.name}</div>
              <div className="text-[16px]">{member.title}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
