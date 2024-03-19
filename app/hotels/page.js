import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
// import { hotels } from '../../database/hotel-db';
import { getHotelsInsecure } from '../../database/hotels';

export const metadata = {
  title: 'Hotels page',
  description: 'All Hotels from bookingwulf',
};

export default async function HotelsPage() {
  const hotels = await getHotelsInsecure();

  return (
    <main className="text-neutral-900  bg-[#e8e8e8]">
      <section className=" max-w-7xl mx-auto pt-16 text-center text-[#373737]">
        <h1 className="font-bold text-5xl font-heading mb-16">
          Current Hotels
        </h1>
        <div className="grid-cols-1 grid lg:grid-cols-3 md:grid-cols-2 font-poppins mb-16">
          <div className="mx-3 my-6 flex flex-col rounded-md bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
            {hotels.map((hotel) => {
              return (
                <Card
                  className="flex flex-col rounded-md bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 text-left justify-between"
                  key={`hotels-${hotel.hotelName}`}
                  data-test-id={`hotel-type-${hotel.hotelName}`}
                >
                  {/* <Link href={`/hotel/${hotel.hotelName}`}>
                    <div>{hotel.hotelName}</div>
                    <Image
                      className="rounded-t-md"
                      src={`/images/${hotel.hotelName.toLowerCase()}.png`}
                      width={600}
                      height={300}
                      alt={hotel.hotelName}
                    />
                  </Link> */}

                  <Link
                    className="flex flex-col justify-between"
                    href={`/hotel/${hotel.hotelName}`}
                  >
                    <img
                      className="rounded-t-md"
                      src={`/images/${hotel.hotelName.toLowerCase()}.png`}
                      alt="Hotel to book"
                    />
                    <CardHeader className="flex-col gap-4">
                      <div className="text-2xl font-medium leading-tight">
                        {hotel.hotelName}
                      </div>
                      <CardDescription>{hotel.address}</CardDescription>
                    </CardHeader>
                    <CardContent className="mb-4 text-base">
                      {hotel.description}
                    </CardContent>
                  </Link>

                  <div className="flex flex-col justify-end">
                    <CardFooter className="flex justify-between">
                      <div>
                        <h4 className="text-xl font-bold ">Price per night:</h4>
                        $ {hotel.pricePerNight},-
                      </div>
                      <div>
                        <h4 className="text-xl font-bold ">Rating</h4>
                        {hotel.rating}/5
                        <br />
                      </div>
                    </CardFooter>

                    <div className="text-center mb-8">{/* <BtnBook /> */}</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
