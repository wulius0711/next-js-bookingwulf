import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getHotelInsecure } from '../../../database/hotels';

export async function generateMetadata(props) {
  const singleHotel = await getHotelInsecure(props.params.hotelName);
  return {
    title: singleHotel?.hotelName,
  };
}

export default async function HotelPage(props) {
  const singleHotel = await getHotelInsecure(props.params.hotelId);

  if (!singleHotel) {
    notFound();
  }

  return (
    <div>
      Single hotel page
      <h1>{singleHotel.hotelName}</h1>
      <div>{singleHotel.address}</div>
      <div>{singleHotel.description}</div>
      <Image
        src={`/images/${singleHotel.hotelName.toLowerCase()}.png`}
        alt={singleHotel.firstName}
        width={200}
        height={200}
      />
    </div>
  );
}
