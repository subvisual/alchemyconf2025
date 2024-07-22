import Header from "./_components/Header";
import Banner from "./_components/Banner";
import CloudsContainer from "./_components/CloudsContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <Header />
      <section className="flex flex-grow items-center justify-evenly gap-24">
        <Banner />
        <CloudsContainer />
      </section>
    </main>
  );
}
