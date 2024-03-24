import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getHotelInsecure } from '../../../database/hotels';

export async function generateMetadata(props) {
  const singleHotel = await getHotelInsecure(
    decodeURIComponent(props.params.hotelName),
  );
  return {
    title: singleHotel?.hotelName,
  };
}

export default async function HotelPage(props) {
  console.log(props.params.hotelId);
  const singleHotel = await getHotelInsecure(
    decodeURIComponent(props.params.hotelName),
  );

  if (!singleHotel) {
    notFound();
  }

  return (
    <main className="text-neutral-900  bg-[#e8e8e8]">
      <section className="max-w-7xl pt-16 pb-16 justify-center text-center text-[#373737] mx-auto flex lg:flex-row flex-col ">
        <section className="flex font-medium items-center lg:mx-4 md:mx-4 mx-auto justify-around">
          <section className=" bg-[#2D5886] rounded-lg shadow-lg">
            <div className="w-fit mx-auto">
              <img
                className="rounded-md"
                src={`/images/${singleHotel.hotelName.toLowerCase()}.webp`}
                alt={singleHotel.hotelName.toLowerCase()}
              />
            </div>
          </section>
        </section>

        <section className="block max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-left lg:mx-0 mx-auto lg:mt-0 mt-8 md:mb-16">
          <div className="text-center mb-8">
            <div className="mb-2">
              <h2 className="text-black font-bold text-2xl tracking-wide">
                {singleHotel.hotelName}
              </h2>
            </div>
            <div>{singleHotel.address}</div>
          </div>
          <div className="font-normal text-gray-700 dark:text-gray-400">
            <div className="mt-4 mb-8">{singleHotel.description}</div>
            <div className="flex justify-between mb-8">
              <div>
                <h4 className="text-xl font-bold ">Price per night:</h4>
                <p className="mt-2">$ {singleHotel.pricePerNight},-</p>
              </div>
              <div>
                <h4 className="text-xl font-bold ">Rating</h4>
                <p className="mt-2">{singleHotel.rating}/5</p>
              </div>
            </div>
            <div className="text-center mb-4">
              <a
                href="/hotels/dashboard"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#374151] border-2 border-[#374151] rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Book
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
