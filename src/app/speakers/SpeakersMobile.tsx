export default function SpeakersMobile() {
    return (
      <section
      className="mb-20 mt-40 flex scroll-mt-32 flex-col items-center justify-center px-32"
      >
        <h1 className="relative pb-6 text-center font-koulen text-[50px] leading-[50px] text-dark-blue tablet:pb-10 tablet:text-[100px] tablet:leading-[100px] desktop:pb-16 desktop:text-[120px] desktop:leading-[120px]">
          Speakers Mobile
          <span className="absolute left-0 top-0 -z-10 translate-x-1 translate-y-1 text-[#7D1D3F3D]">
            Speakers Mobile
          </span>
        </h1>
        <div className="w-full min-w-[250px] max-w-screen-desktop text-left font-alegreya_sans text-xl text-dark-blue tablet:pb-20 tablet:text-[28px] tablet:leading-[36px] desktop:text-[32px] desktop:leading-[44px]">
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