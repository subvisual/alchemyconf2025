export default function CodeConduct() {
  return (
    <section
      id="code-of-conduct"
      className="mb-[136px] flex flex-col items-center justify-start px-32"
    >
      <h1 className="relative pb-6 text-center font-koulen text-[50px] leading-[50px] text-dark-blue tablet:pb-10 tablet:text-[100px] tablet:leading-[100px] desktop:pb-16 desktop:text-[120px] desktop:leading-[120px]">
        Code of Conduct
        <span className="absolute left-0 top-0 -z-10 translate-x-1 translate-y-1 text-[#7D1D3F3D]">
          Code of Conduct
        </span>
      </h1>
      <div className="w-full min-w-[250px] max-w-screen-desktop text-left font-alegreya_sans text-xl text-dark-blue tablet:pb-20 tablet:text-[28px] tablet:leading-[36px] desktop:text-[32px] desktop:leading-[44px]">
        <p>
          Alchemy Conf 2025 is dedicated to providing a harassment-free
          conference experience for everyone.
        </p>
        <br />
        <div className="text-left font-bold">Harassment includes:</div>
        <ul className="list-inside list-disc pl-6 text-left marker:text-lg">
          <li>
            offensive verbal comments related to gender, gender identity and
            expression, sexual orientation, disability, physical appearance,
            body size, race, or religion;
          </li>
          <li>sexual images in public spaces;</li>
          <li>
            deliberate intimidation, stalking, following, harassing photography
            or recording;
          </li>
          <li>sustained disruption of talks or other events;</li>
          <li>inappropriate physical contact;</li>
          <li>unwelcome sexual attention.</li>
        </ul>
        <div className="mt-8 font-bold">
          We do not tolerate harassment of conference participants in any form.
          Participants violating these rules may be sanctioned or expelled from
          the conference without a refund at the discretion of the conference
          organizers.
        </div>
      </div>
    </section>
  );
}
