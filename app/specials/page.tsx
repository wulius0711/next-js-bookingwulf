import React from 'react';

export default function HolidayPackages() {
  return (
    <section className="bg-[#E8E8E8] py-24">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="-mx-4 flex flex-wrap items-center justify-center mb-6">
          <div className="px-4 w-full md:w-10/12">
            <h2 className="font-medium mb-1 text-primary-500 text-xl text-center">
              Special Holiday Packages
            </h2>
            <h3 className="capitalize font-bold mb-4 text-4xl text-gray-900 text-center">
              Unforgettable experiences await!
            </h3>
            <div className="bg-primary-500 mb-6 pb-1 w-2/12" />
          </div>
        </div>
        <div className="-mx-3 flex flex-wrap justify-center mb-12">
          {/* First Holiday Package */}
          <div className="p-3 w-full md:w-6/12 lg:w-4/12">
            <div className="bg-white border shadow-md text-gray-500 rounded-lg">
              <a href="/">
                <img
                  src="/images/holiday01.webp"
                  className="hover:opacity-90 w-full rounded-t-lg"
                  alt="Holiday Package 1"
                  width="600"
                  height="450"
                />
              </a>
              <div className="p-6">
                <h4 className="font-bold mb-2 text-gray-900 text-xl">
                  <a href="/" className="hover:text-gray-500">
                    Holiday Package 01
                  </a>
                </h4>
                <p className="mb-2 text-sm">
                  Description of Holiday Package 01
                </p>
                <hr className="border-gray-200 my-4" />
                <div className="flex items-center justify-between">
                  <p className="font-bold text-gray-900">$ 820,-</p>
                </div>
              </div>
            </div>
          </div>
          {/* Second Holiday Package */}
          <div className="p-3 w-full md:w-6/12 lg:w-4/12">
            <div className="bg-white border shadow-md text-gray-500 rounded-lg">
              <a href="/">
                <img
                  src="images/holiday02.webp"
                  className="hover:opacity-90 w-full rounded-t-md"
                  alt="Holiday Package 02"
                  width="600"
                  height="450"
                />
              </a>
              <div className="p-6">
                <h4 className="font-bold mb-2 text-gray-900 text-xl">
                  <a href="/" className="hover:text-gray-500">
                    Holiday Package 02
                  </a>
                </h4>
                <p className="mb-2 text-sm">
                  Description of Holiday Package 02
                </p>
                <hr className="border-gray-200 my-4" />
                <div className="flex items-center justify-between">
                  <p className="font-bold text-gray-900">$ 600,-</p>
                </div>
              </div>
            </div>
          </div>

          {/* Third Holiday Package */}
          <div className="p-3 w-full md:w-6/12 lg:w-4/12">
            <div className="bg-white border shadow-md text-gray-500 rounded-lg">
              <a href="/">
                <img
                  src="images/holiday04.webp"
                  className="hover:opacity-90 w-full rounded-t-md"
                  alt="Holiday Package 04"
                  width="600"
                  height="450"
                />
              </a>
              <div className="p-6">
                <h4 className="font-bold mb-2 text-gray-900 text-xl">
                  <a href="/" className="hover:text-gray-500">
                    Holiday Package Name 03
                  </a>
                </h4>
                <p className="mb-2 text-sm">
                  Description of Holiday Package 03
                </p>
                <hr className="border-gray-200 my-4" />
                <div className="flex items-center justify-between">
                  <p className="font-bold text-gray-900">$ 450,-</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
