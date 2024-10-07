import Button from "../_components/Button";
import tickets from "../_constants/tickets.json";

export default function Tickets() {
  return (
    <section
      id="tickets"
      className="my-20 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="mb-10 font-koulen text-9xl leading-[1] text-dark-blue">
        Tickets
      </div>
      <div className="w-[760px] text-center font-zilla_slab text-[32px] font-medium text-dark-blue">
        Join us in celebrating Elixir! Choose the ticket option that best suits
        your needs and secure your spot at the most unique event the community’s
        ever seen.
      </div>
      <div className="grid grid-cols-3 gap-8 pt-[74px] mobile:grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3">
        {tickets.map((ticket, index) => (
          <div
            key={ticket.id}
            className={`flex h-[475px] w-[312px] flex-col text-center font-zilla_slab text-dark-blue ${
              index === tickets.length - 1
                ? "tablet:col-span-2 tablet:mx-auto desktop:col-span-1"
                : ""
            }`}
          >
            <div className={`h-[60px] bg-${ticket.color}`}></div>
            <div className="flex flex-1 flex-col border-4 border-b-0 border-t-2 border-dark-blue">
              <div className="whitespace-nowrap border-b-2 py-2 text-[32px] font-semibold">
                {ticket.title}
              </div>
              <div className="flex flex-grow flex-col border-b-8 border-dotted">
                <div className="pb-2 pt-8 text-center text-2xl font-medium">
                  {ticket.aboutTitle}
                </div>
                <div className="mx-4 whitespace-pre-line text-center text-lg">
                  {ticket.aboutText}
                </div>
              </div>
            </div>
            <div className="h-[130px] border-x-4 border-b-4">
              <div className="pt-4 text-2xl font-semibold">
                {ticket.priceText}
              </div>
              <Button
                text={ticket.priceText}
                href={ticket.buttonLink}
                className="mt-2 whitespace-nowrap bg-bordeux text-xl font-semibold uppercase"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
