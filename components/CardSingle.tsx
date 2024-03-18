import Link from 'next/link';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { hotels } from '../database/hotel-db';
import BtnBook from './BtnBook';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export default function CardSingle() {
  console.log(hotels);
  return (
    <div className="grid-cols-1 grid lg:grid-cols-3 md:grid-cols-2 font-poppins mb-16">
      {hotels.map((hotel) => (
        <Card
          key={hotel.id}
          className="mx-3 my-6 flex flex-col rounded-md bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 text-left justify-between"
        >
          <div className="flex flex-col justify-between">
            <div>
              <img
                className="rounded-t-md"
                src={hotel.img}
                alt="Hotel to book"
              />
              <CardHeader className="flex-col gap-4">
                <CardTitle className="mb-2 text-xl font-medium leading-tight">
                  {hotel.hotelname}
                </CardTitle>
                <CardDescription>{hotel.address}</CardDescription>
              </CardHeader>
              <CardContent className="mb-4 text-base">
                {hotel.description}
              </CardContent>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <CardFooter className="flex justify-between">
              <div>
                <h4 className="text-xl font-bold ">Price per night:</h4>
                {hotel.pricepernight}
              </div>
              <div>
                <h4 className="text-xl font-bold ">Rating</h4>
                {hotel.rating}/5
                <br />
              </div>
            </CardFooter>

            <div className="text-center mb-8">
              <BtnBook />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
