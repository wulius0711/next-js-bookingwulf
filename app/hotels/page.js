import Image from 'next/image';
import Link from 'next/link';
// import { hotels } from '../../database/hotel-db';
import { getHotelsInsecure } from '../../database/hotels';

export const metadata = {
  title: 'Hotels page',
  description: 'All Hotels from bookingwulf',
};

export default async function HotelsPage() {
  const hotels = await getHotelsInsecure();

  return (
    <div>
      These are the Hotels
      {hotels.map((hotel) => {
        return (
          <div
            key={`hotels-${hotel.hotelName}`}
            data-test-id={`hotel-type-${hotel.hotelName}`}
          >
            <Link href={`/hotel/${hotel.hotelName}`}>
              <div>{hotel.hotelName}</div>
              <Image
                src={`/images/${hotel.hotelName.toLowerCase()}.png`}
                width={300}
                height={200}
                alt={hotel.hotelName}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
