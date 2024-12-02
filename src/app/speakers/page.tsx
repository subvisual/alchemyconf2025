import SpeakersGeneral from "./SpeakersGeneral";
import SpeakersMobile from "./SpeakersMobile";

export default function Speakers() {
  return (
    <>
      <div className="hidden tablet:flex">
        <SpeakersGeneral />
      </div>
      <div className="tablet:hidden flex">
        <SpeakersMobile />
      </div>
    </>
  );
}
