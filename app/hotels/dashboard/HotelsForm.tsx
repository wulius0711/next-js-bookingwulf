'use client';

import { CldUploadButton } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { RegisterResponseBodyPost } from '../../api/hotels/route';
import ErrorMessage from '../../ErrorMessage';

export default function HotelsForm() {
  const [hotelName, setHotelName] = useState('');
  const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');
  const [rating, setRating] = useState(0);
  const [pricePerNight, setPricePerNight] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);

  const router = useRouter();

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch('/api/hotels/', {
      method: 'POST',
      body: JSON.stringify({
        hotelName: hotelName,
        description: description,
        address: address,
        rating: rating,
        pricePerNight: pricePerNight,
        imageUrl: imageUrl, // Include the uploaded image URL in your request payload
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data: RegisterResponseBodyPost = await response.json();

    if ('errors' in data) {
      setErrors(data.errors);
      return;
    }
    router.push(`/hotels/${data.hotel.hotelName}`);
  }

  function handleUploadSuccess(response: any) {
    setImageUrl(response.info.secure_url);
  }
  console.log(imageUrl);

  return (
    <section className="flex justify-center dark:bg-gray-900 mt-8">
      <div className="flex flex-col justify-center p-6 space-y-4 md:space-y-6 sm:p-8 lg:w-2/5 md:w-3/5 w-4/5">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
          Create a Hotel
        </h1>
        <form
          className="space-y-4 md:space-y-6 text-left"
          onSubmit={async (event) => await handleRegister(event)}
        >
          <div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <label>
                <div className="mb-4">Hotel Name</div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Hotel California"
                  onChange={(event) => setHotelName(event.currentTarget.value)}
                />
              </label>
            </div>
          </div>
          <div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <label>
                <div className="mb-4">Description</div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Experience Flower Power"
                  onChange={(event) =>
                    setDescription(event.currentTarget.value)
                  }
                />
              </label>
            </div>
          </div>
          <div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <label>
                <div className="mb-4">Address</div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="1670 Ocean Avenue, Santa Monica, CA, 90401, US"
                  onChange={(event) => setAddress(event.currentTarget.value)}
                />
              </label>
            </div>
          </div>
          <div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <label>
                <div className="mb-4">Rating</div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="1-5"
                  onChange={(event) =>
                    setRating(Number(event.currentTarget.value))
                  }
                />
              </label>
            </div>
          </div>
          <div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Price per night
            </div>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="120"
              onChange={(event) => setPricePerNight(event.currentTarget.value)}
            />
          </div>
          <div className="flex justify-center">
            <div className="text-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-1/3">
              <CldUploadButton
                onSuccess={handleUploadSuccess} // Handle upload success
                uploadPreset="bookingwulf"
              />
            </div>
          </div>
          <div className="text-center ">
            <button
              // type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Submit
            </button>
          </div>

          {errors.map((error) => (
            <div className="error" key={`error-${error.message}`}>
              <ErrorMessage>{error.message}</ErrorMessage>
            </div>
          ))}
        </form>
      </div>
    </section>
  );
}
