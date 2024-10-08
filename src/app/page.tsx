import Header from "./_components/Header";
import Banner from "./_components/Banner";
import CloudsContainer from "./_components/CloudsContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row px-8 sm:px-10">
      <div className="flex flex-1 flex-col">
        <Header />
        <div className="flex flex-1 flex-col pb-[155px] pt-[58px] md:flex-row md:items-center md:justify-center md:pb-0">
          <Banner />
          <CloudsContainer />
        </div>
      </div>
    </main>
  );
}
