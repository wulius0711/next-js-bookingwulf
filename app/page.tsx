import CardOverview from '../components/CardOverview';
import Footer from '../components/Footer';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';

// // NEW TRY

// interface Hotels {
//   id: string;
//   hotelname: string;
//   image: string;
//   description: string;
//   address: string;
//   rating: number;
//   pricepernight: string;
// }

// async function getHotels(): Promise<Hotels[]> {
//   const result = await fetch('http://localhost:4000/hotels');

//   return result.json();
// }

// export default async function Home() {
//   const hotels = await getHotels();

//   return (
//     <main>
//       <div className="grid grid-cols-3 gap-8">
//         {hotels.map((hotel) => (
//           <Card key={hotel.id}>
//             <CardHeader>
//               <div>
//                 <CardTitle>{hotel.hotelname}</CardTitle>
//                 <CardDescription>{hotel.address}</CardDescription>
//               </div>
//             </CardHeader>
//             <CardContent>{hotel.description}</CardContent>
//             <CardFooter>
//               <button>{hotel.rating}</button>
//               {hotel.pricepernight}
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </main>
//   );
// }

// // END NEW TRY

export default function Home() {
  return (
    <main className="text-neutral-900  bg-[#e8e8e8]">
      <section className=" max-w-7xl mx-auto pt-16 text-center text-[#373737]">
        <h1 className="font-bold text-5xl font-heading">
          Book Your Dream Stay
        </h1>
        <h2 className="py-5 text-xl font-heading">
          Discover the world's hidden gems on hotels, flights and much more...
        </h2>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-10 text-left font-body">
        <CardOverview />
      </section>

      <Footer />
    </main>
  );
}
