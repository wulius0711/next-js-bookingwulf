import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { getHotelsInsecure } from '../../database/hotels';

export const metadata = {
  title: 'Hotels page',
  description: 'Current Hotels from bookingwulf',
};

export default async function HotelsPage() {
  const hotels = await getHotelsInsecure();
  console.log(hotels);
  return (
    <main className="text-neutral-900  bg-[#e8e8e8]">
      <section className="max-w-7xl mx-auto pt-16 text-center text-[#373737]">
        <div className="flex justify-center">
          <div className="px-4 w-full md:w-10/12">
            <h2 className="font-medium mb-1 text-primary-500 text-xl text-center">
              Living In Paradise
            </h2>
            <h3 className="capitalize font-bold mb-4 text-4xl text-gray-900 text-center">
              Current Hotels
            </h3>
            <div className="bg-primary-500 mb-6 pb-1 w-2/12" />
          </div>
        </div>
        <div className="grid-cols-1 grid lg:grid-cols-3 md:grid-cols-2 font-poppins mb-16">
          {hotels.map((hotel) => {
            return (
              <div
                className="mx-3 my-6 flex flex-col rounded-md bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0"
                key={`hotels-${hotel.hotelName}`}
                data-test-id={`hotel-type-${hotel.hotelName.toLowerCase()}`}
              >
                <Card className="flex flex-col rounded-md bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 text-left justify-between">
                  <Link
                    className="flex flex-col justify-between overflow-hidden"
                    href={`/hotels/${hotel.hotelName}`}
                  >
                    <img
                      className="hover:opacity-90 rounded-t-md transition-all duration-500"
                      src={hotel.imageUrl}
                      alt={hotel.hotelName}
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

                    <div className="text-center mb-8">
                      <Link href={`/hotels/${hotel.hotelName}`}>
                        <Button variant="book" className=" text-white">
                          See details
                          <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
