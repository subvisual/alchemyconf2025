export default function CodeConduct() {
  return (
    <section className="my-[136px] flex flex-col items-center justify-start px-32">
      <div className="mb-16 font-koulen text-9xl text-dark-blue">
        Code of Conduct
      </div>
      <div className="w-[800px] text-center font-zilla_slab text-2xl text-dark-blue">
        <p>
          Alchemy Conf 2025 is dedicated to providing a harassment-free
          conference experience for everyone.
        </p>
        <br />
        <div className="text-left font-semibold text-bordeux">
          Harassment includes:
        </div>
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
        <div className="mt-8 font-semibold text-bordeux">
          We do not tolerate harassment of conference participants in any form.
          Participants violating these rules may be sanctioned or expelled from
          the conference without a refund at the discretion of the conference
          organizers.
        </div>
      </div>
    </section>
  );
}
