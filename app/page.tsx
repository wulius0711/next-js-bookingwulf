import CardOverview from '../components/CardOverview';

export default function Home() {
  return (
    <main className="text-neutral-900  bg-[#e8e8e8]">
      <section className="max-w-7xl mx-auto pt-16 text-center text-[#373737]">
        <h2 className="font-bold text-5xl font-heading">
          Book Your Dream Stay
        </h2>
        <h3 className="py-5 text-xl font-heading">
          Discover the world's hidden gems on hotels, flights and much more...
        </h3>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-10 text-left font-body">
        <CardOverview />
      </section>
    </main>
  );
}
