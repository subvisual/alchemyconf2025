import AltButton from "../_components/AltButton";
import Button from "../_components/Button";

export default function Workshops() {
  return (
    <section id="tickets" className="mt-[100px] tablet:mt-[100px]">
      <div className="mx-auto mb-16 max-w-screen-desktop border-l-4 border-yellow pl-5">
        <p className="mb-4 flex flex-row items-center font-alegreya_sans text-3xl font-bold leading-none text-dark-blue tablet:text-5xl">
          Workshops
        </p>
        <p className="w-fit font-alegreya_sans text-xl text-dark-blue tablet:w-[450px] tablet:text-2xl">
          Access to any of the 2-day workshops. They may have different number
          of slots available. Discount if you have a Regular Ticket.
        </p>
        <div className="mt-6 flex flex-row items-center tablet:mt-9">
          <Button
            className="font-medium"
            text="Get Tickets"
            href="https://membrz.club/alchemyconf/events?tag=workshop"
          />
        </div>
      </div>
    </section>
  );
}
