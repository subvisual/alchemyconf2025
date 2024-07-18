import Header from "./_components/Header";
import CloudTextContainer from "./_components/CloudTextContainer";
import CloudButton from "./_components/CloudButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-10">
      <Header />
      <div className="flex flex-1 items-center justify-end">
        <div className="relativ flex flex-1">
          <CloudTextContainer>
            <div className="mb-2 font-unbutton text-[20px] font-normal md:text-[50px]">
              DONT MISS A BEAT!
            </div>
            <div>Be the first to learn about:</div>
            <div>Call for proposals, Tickets, Workshops,</div>
            <div>Meetups, Discounts and so much more</div>
          </CloudTextContainer>
          <div className="absolute bottom-0 left-[-38px]">
            <CloudButton>Get your ticket here!</CloudButton>
          </div>
        </div>
      </div>
    </main>
  );
}
