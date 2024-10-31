import pastConfs from "../_constants/past_confs.json";

export default function PastConferences() {
  return (
    <section className="my-[136px] flex flex-col items-center justify-start px-32">
      <div className="mb-16 font-koulen text-9xl text-dark-blue">
        Past Conferences
      </div>
      <div className="grid grid-cols-3 gap-8 font-zilla_slab mobile:grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-3">
        {pastConfs.map((conf, key) => (
          <div
            key={conf.id}
            className="flex flex-col items-center justify-center font-medium"
          >
            <div>
              <div
                className={`h-[176px] w-[176px] rounded-lg border-8 border-${conf.color} bg-grey`}
              ></div>
            </div>
            <div className="pt-2 text-[20px] uppercase">{conf.title}</div>
            <div className="text-[16px]">{conf.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
