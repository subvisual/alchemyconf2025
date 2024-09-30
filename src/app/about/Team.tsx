import team from "../_constants/team.json";
// import Image from "next/image";

export default function Team() {
  const borderColors = ["#84ACCE", "#F4AC45", "#827191", "#D7D9B1"];

  const getRandomColor = () => {
    return borderColors[Math.floor(Math.random() * borderColors.length)];
  };

  return (
    <section className="flex flex-col items-center justify-start px-32">
      <div className="text-dark-blue pb-24 font-koulen text-[128px]">
        Alchemy Conf Team
      </div>
      <div className="grid grid-cols-1 gap-8 font-zilla_slab md:grid-cols-2 lg:grid-cols-4">
        {team.map((member, key) => {
          const randomColor = getRandomColor();

          return (
            <div
              key={key}
              className="flex flex-col items-center justify-center font-medium"
            >
              <div className="relative">
                <div
                  className="h-[176px] w-[176px] rounded-lg border-8 bg-background"
                  style={{ borderColor: randomColor }} // Set the random border color here
                >
                  {/* <Image src={member.photo} alt="Member photo" width={176} height={176}></Image> */}
                  {member.photo}
                </div>
                <div className="bg-white absolute right-[-10px] top-[-10px] flex h-[50px] w-[50px] items-center justify-center rounded-full border-4 border-bordeux">
                  {/* <Image src={member.company_logo} alt="Company logo" width={36} height={36} className="h-[36px] w-[36px] rounded-full"/> */}
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
