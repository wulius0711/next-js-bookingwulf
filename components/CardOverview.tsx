import React from 'react';
import BtnBook from './BtnBook';

export default function CardOverview() {
  return (
    <div className="grid-cols-1 grid lg:grid-cols-3 md:grid-cols-2 font-poppins ">
      <div className="mx-3 mt-6 flex flex-col rounded-md bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
        <a href="#!">
          <img
            className="rounded-t-md"
            src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
            alt="Hollywood Sign on The Hill"
          />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight">
            Location 01
          </h5>
          <p className="mb-4 text-base">
            I'm baby deep v vibecession chartreuse distillery kombucha sus
            skateboard semiotics pok pok cray four loko brunch affogato ennui
            meditation. +1 etsy kinfolk kitsch cred cupping meggings try-hard,
            enamel pin offal chartreuse butcher.
          </p>
          <BtnBook />
        </div>
      </div>

      <div className="mx-3 mt-6 flex flex-col rounded-md bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
        <a href="#!">
          <img
            className="rounded-t-md"
            src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
            alt="Palm Springs Road"
          />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight">
            Location 02
          </h5>
          <p className="mb-4 text-base">
            I'm baby deep v vibecession chartreuse distillery kombucha sus
            skateboard semiotics pok pok cray four loko brunch affogato ennui
            meditation. +1 etsy kinfolk kitsch cred cupping meggings try-hard,
            enamel pin offal chartreuse butcher.
          </p>
          <BtnBook />
        </div>
      </div>

      <div className="mx-3 mt-6 flex flex-col rounded-md bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
        <a href="#!">
          <img
            className="rounded-t-md"
            src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
            alt="Skyscrapers"
          />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight">
            Location 03
          </h5>
          <p className="mb-4 text-base">
            I'm baby deep v vibecession chartreuse distillery kombucha sus
            skateboard semiotics pok pok cray four loko brunch affogato ennui
            meditation. +1 etsy kinfolk kitsch cred cupping meggings try-hard,
            enamel pin offal chartreuse butcher.
          </p>
          <BtnBook />
        </div>
      </div>

      <div className="mx-3 mt-6 flex flex-col rounded-md bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
        <a href="#!">
          <img
            className="rounded-t-md"
            src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
            alt="Los Angeles Skyscrapers"
          />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight">
            Location 04
          </h5>
          <p className="mb-4 text-base">
            I'm baby deep v vibecession chartreuse distillery kombucha sus
            skateboard semiotics pok pok cray four loko brunch affogato ennui
            meditation. +1 etsy kinfolk kitsch cred cupping meggings try-hard,
            enamel pin offal chartreuse butcher.
          </p>
          <BtnBook />
        </div>
      </div>
    </div>
  );
}
