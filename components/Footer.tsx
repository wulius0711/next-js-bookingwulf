import Link from 'next/link';
import { AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoPinterestAlt } from 'react-icons/bi';
import { FaFacebookF } from 'react-icons/fa';

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
    { icon: <BiLogoPinterestAlt /> },
  ];
  return (
    <footer className="bg-white mt-32">
      <div className="container mx-auto  max-w-7xl py-[4rem]">
        {/* footer div all */}
        <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
          {/* logo side */}
          <div className="flex flex-col w-1/3 md:p-0 py-4 gap-8">
            <a href="/">
              <img
                src="/bookingwulf-logo.png"
                alt="footer_logo"
                className="w-[12rem]"
                width="50%"
              />
            </a>

            {/* socials */}
            <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
              {iconsTab.map(({ icon }, index) => {
                return (
                  <div
                    key={index}
                    className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#EA5303] hover:text-white"
                    style={{ transition: 'all 0.3s' }}
                  >
                    {icon}
                  </div>
                );
              })}
            </div>
          </div>

          {/* middle div */}
          <div className="flex flex-col gap-4 relative">
            <p className="text-[22px] font-bold footer-main">Quick Links</p>

            <Link
              href="/hotels"
              className="text-[16px] hover:text-[#EA5303] cursor-pointer text-[#646464] font-medium"
            >
              Trips
            </Link>
            <p className="text-[16px] hover:text-[#EA5303] cursor-pointer text-[#646464] font-medium">
              Specials
            </p>
            <p className="text-[16px] hover:text-[#EA5303] cursor-pointer text-[#646464] font-medium">
              Cars
            </p>
            <p className="text-[16px] hover:text-[#EA5303] cursor-pointer text-[#646464] font-medium">
              Sights
            </p>
          </div>

          {/* right div */}
          <div className="flex flex-col relative gap-4">
            <p className=" text-[22px] font-bold footer-main">Support Hours</p>

            <p className="text-[16px]  text-[#646464] font-bold">
              Monday - Friday:
            </p>
            <p className="text-[16px] text-[#646464] font-medium">
              7:00am - 21:00pm
            </p>
            <p className="text-[16px] text-[#646464] font-bold">Saturday:</p>
            <p className="text-[16px] text-[#646464] font-medium">
              7:00am - 19:00pm
            </p>
            <p className="text-[16px] text-[#646464] font-bold ">
              Sunday - Closed
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
