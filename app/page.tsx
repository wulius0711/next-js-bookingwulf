import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section
        className="h-screen bg-cover bg-no-repeat bg-blend-darken -mt-[96px] bg-fixed"
        style={{
          backgroundImage: "url('/images/home-hero-image.jpeg')",
          height: 'cover',
        }}
      >
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="mt-28 text-center">
              <h1 className="font-semibold text-center text-4xl md:text-6xl lg:text-7xl text-gray-900 leading-normal mb-6 mt-32">
                Book your dream <br /> holiday now
              </h1>

              <p className="font-normal text-xl text-center text-gray-900 leading-relaxed mb-12">
                Having a sweet home is everyone's dream. Have you <br /> lived
                in your dream house yet?
              </p>
              <div className="text-center">
                <Link href="/hotels">
                  <button className="px-4 py-3 bg-[#ea5503] text-white text-lg rounded-lg hover:bg-[#ea5503cc] transition ease-in-out duration-200">
                    Check out the hotels
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e8e8e8] py-20 xl:relative -skew-y-4">
        <div className="container max-w-screen-xl mx-auto px-4 skew-y-4">
          <div className="flex flex-col xl:flex-row justify-around">
            <div>
              <img
                className="rounded-md mt-4 lg:visible"
                alt="hotel-site"
                src="/images/hotel-features-sm.jpg"
                width={450}
              />
            </div>
            <div className="">
              <h1 className="font-semibold text-gray-900 text-xl md:text-4xl lg:text-left text-center leading-normal mb-6">
                Choice of various types of <br /> hotels
              </h1>

              <p className="font-normal text-gray-800 text-md md:text-xl lg:text-left text-center mb-16">
                We provide a wide of selection of hotel types for you and your{' '}
                <br /> family and are free to choose a model.
              </p>

              <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-20">
                <div className="px-8 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-16 h-16"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                </div>

                <div className="text-center md:text-left">
                  <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                    Best Hotel Guarantee
                  </h4>
                  <p className="font-normal text-gray-800 text-xl leading-relaxed">
                    We guarantees the quality of your holiday stay <br /> from
                    bookingwulf
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4 mb-20">
                <div className="px-8 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-16 h-16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                </div>

                <div className="text-center md:text-left">
                  <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                    Safe Transaction
                  </h4>
                  <p className="font-normal text-gray-800 text-xl leading-relaxed">
                    Your transactions will always be kept confidential <br />{' '}
                    and will get discounted
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center xl:justify-start space-x-4">
                <div className="px-8 h-20 mx-auto md:mx-0 bg-gray-200 rounded-lg flex items-center justify-center mb-5 md:mb-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-16 h-16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>

                <div className="text-center md:text-left">
                  <h4 className="font-semibold text-gray-900 text-2xl mb-2">
                    Low Taxes
                  </h4>
                  <p className="font-normal text-gray-800 text-xl leading-relaxed">
                    By in a hotel from bookingwulf, you will get a tax <br />{' '}
                    discount
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
