import Hero from "./Hero";
import Intro from "./Intro";
import Venue from "./Venue";
import Speakers from "./Speakers";
import Tickets from "./Tickets";
import Sponsors from "./Sponsors";

export default function Homepage() {
  return (
    <>
      <Hero />
      <Venue />
      <Speakers />
      <Tickets />
      <Sponsors />
    </>
  );
}
