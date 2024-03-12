'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ErrorMessage from '../../../app/ErrorMessage';
import { getSafeReturnToPath } from '../../../util/validation';
import { RegisterResponseBodyPost } from '../api/register/route';

export default function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);

  const router = useRouter();

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch('api/register', {
      method: 'POST',
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password,
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
    router.push(
      getSafeReturnToPath(props.returnTo) || `/profile/${data.user.username}`,
    );

    router.refresh();
  }

  return (
    <section className=" flex justify-center dark:bg-gray-900 mt-8">
      <div className=" flex flex-col justify-center p-6 space-y-4 md:space-y-6 sm:p-8 lg:w-2/5 md:w-3/5 w-4/5">
        <h1 className=" text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Create an account
        </h1>
        <form
          className="space-y-4 md:space-y-6 text-left"
          onSubmit={async (event) => await handleRegister(event)}
        >
          <div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <label>
                <div className="mb-4">First Name</div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Jolly"
                  onChange={(event) => setFirstName(event.currentTarget.value)}
                />
              </label>
            </div>
          </div>
          <div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <label>
                <div className="mb-4">Last Name</div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Jumper"
                  onChange={(event) => setLastName(event.currentTarget.value)}
                />
              </label>
            </div>
          </div>
          <div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <label>
                <div className="mb-4">Username</div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="besthorse"
                  onChange={(event) => setUsername(event.currentTarget.value)}
                />
              </label>
            </div>
          </div>
          <div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <label>
                <div className="mb-4">E-Mail</div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="jollyjumper@horse.com"
                  onChange={(event) => setEmail(event.currentTarget.value)}
                />
              </label>
            </div>
          </div>
          <div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Password
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(event) => setPassword(event.currentTarget.value)}
            />
          </div>
          <div className="text-center">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Create an account
            </button>
          </div>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
            Already have an account?{' '}
            <a
              href="http://localhost:3000/login"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Login here
            </a>
          </p>
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
