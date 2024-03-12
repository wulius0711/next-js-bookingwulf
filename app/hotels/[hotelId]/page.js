import React from 'react';

export default function HotelPage(props) {
  console.log('Check: ', props);
  return (
    <main className="text-neutral-900  bg-[#e8e8e8]">
      <section className="max-w-7xl mx-auto pt-16 text-center text-[#373737]">
        <h1 className="font-bold text-5xl font-heading">Hotel Detail Page</h1>
      </section>
      <section className="max-w-7xl mx-auto pt-16 text-left text-[#373737] justify-around">
        <a
          href="/"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="rounded-md h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
            alt="Hollywood Sign on The Hill"
            width="50%"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Hotel 01
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              I'm baby deep v vibecession chartreuse distillery kombucha sus
              skateboard semiotics pok pok cray four loko brunch affogato ennui
              meditation. +1 etsy kinfolk kitsch cred cupping meggings try-hard,
              enamel pin offal chartreuse butcher.
            </p>
          </div>
        </a>
      </section>
    </main>
  );
}
