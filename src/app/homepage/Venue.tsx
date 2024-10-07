export default function Venue() {
  return (
    <section
      id="venue"
      className="my-[136px] flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="mb-10 w-[1007px] text-center font-koulen text-9xl leading-[1.1] text-dark-blue">
        Far and beyond a simple conference
      </div>
      <div className="mb-20 w-[1007px] text-center font-zilla_slab text-2.5xl font-medium text-dark-blue">
        Held at the majestic Theatro Circo, one of the most beautiful venues in
        Europe, Alchemy Conf wants to provide the Elixir programming community
        something just a little larger than life. The organizers are
        single-mindedly dedicated to providing a week-long experience that will
        celebrate all things Elixir, from the technical prowess of its
        developers to the fun-loving spirit of its community.
      </div>

      <div className="flex rounded-2xl border-8 border-bordeux bg-grey">
        <video className="aspect-video h-[440px]" src="" autoPlay loop />
      </div>
    </section>
  );
}
