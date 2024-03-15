import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getUser } from '../../../database/users';

type Props = {
  params: {
    username: string;
  };
};

export default async function UserProfilePage(props: Props) {
  // Coming up in subsequent lectures
  // Task: Add redirect to login page if user is not logged in
  // 1. Check if the sessionToken cookie exists
  // 2. Query the current user with the sessionToken
  // 3. If user doesn't exist, redirect to login page
  // 4. If user exists, render the page

  // 1. Check if the sessionToken cookie exists
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. Query the current user with the sessionToken
  const user = sessionTokenCookie && (await getUser(sessionTokenCookie.value));

  // 3. If user doesn't exist, redirect to login page
  if (!user) {
    redirect('/login');
  }

  // 4. If user exists, render the page
  return (
    <main className="text-neutral-900  bg-[#e8e8e8]">
      <section className=" max-w-7xl pt-16 justify-center text-center text-[#373737] mx-auto flex lg:flex-row flex-col">
        <section className="flex font-medium items-center lg:mx-0 mx-auto">
          <section className="w-64 bg-[#2D5886] rounded-lg px-8 py-6 shadow-lg">
            <div className="mt-6 w-fit mx-auto">
              <img
                src="/aff.png"
                className="rounded-full w-28 "
                alt="profile"
              />
            </div>

            <div className="mt-8 ">
              <h2 className="text-white font-bold text-2xl tracking-wide">
                {props.params.username}'s Profile
              </h2>
            </div>
            <p className="text-emerald-400 font-semibold mt-2.5">Active</p>
          </section>
        </section>

        <section className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-left lg:mx-0 mx-auto lg:mt-0 mt-8">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Wulius
          </h5>
          <div className="font-normal text-gray-700 dark:text-gray-400">
            <p className="mt-4">
              Here are the most interesting infos about the most uninteresting
              person.
            </p>
            <p className="mt-4">Active since: 2024</p>
            <p className="mb-8">Number of Hotels: 4</p>
            <a
              href="/hotels/dashboard"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#374151] border-2 border-[#374151] rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create Hotel
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
        </section>
      </section>
    </main>
  );
}
