import Hero from "./Hero";
import Venue from "./Venue";
import Speakers from "./Speakers";
import Tickets from "./Tickets";
import Workshops from "./Workshops";
import Sponsors from "./Sponsors";
import Practical from "./Practical";

export default function Homepage() {
  return (
    <>
      <Hero />
      <Venue />
      <Speakers />
      <Tickets />
      <Workshops />
      <Practical />
      <Sponsors />
    </>
  );
}
