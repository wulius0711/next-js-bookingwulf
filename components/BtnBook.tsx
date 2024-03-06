import React from 'react';

export default function BtnBook() {
  return (
    <button
      type="button"
      className="text-white bg-[#ea5403] hover:bg-[#ff945a] focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-[#ff945a] dark:hover:bg-[#EA5503] dark:focus:ring-[#ff945a]"
    >
      Book now
      <svg
        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </button>
  );
}
