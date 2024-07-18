import Header from "./_components/Header";
import CloudTextContainer from "./_components/CloudTextContainer";
import CloudButton from "./_components/CloudButton";
import Banner from "./_components/banner";
import CloudsContainer from "./_components/CloudsContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row px-10">
      <div className="flex flex-1 flex-col">
        <Header />
        <div className="my-[58px] flex flex-1 flex-col items-center justify-center sm:flex-row">
          <Banner />
          <CloudsContainer />
        </div>
      </div>
    </main>
  );
}
