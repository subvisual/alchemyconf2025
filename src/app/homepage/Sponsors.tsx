import Button from "../_components/Button";
import sponsors from "../_constants/sponsors.json";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="flex flex-col items-center justify-center gap-24 overflow-hidden py-[220px]"
    >
      <div className="text-dark-blue font-koulen text-[128px]">Sponsors</div>
      <div className="grid w-full grid-cols-4 grid-rows-2 gap-[40px]">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="bg-sage p-4">
            <img
              src={sponsor.logo}
              alt={`Sponsor ${sponsor.id}`}
              className="h-auto w-full"
            />
          </div>
        ))}
      </div>

      <Button text="Sponsorship Prospectus" href="/" />
    </section>
  );
}
