'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getSafeReturnToPath } from '../../../util/validation';
import ErrorMessage from '../../ErrorMessage';
import { LoginResponseBodyPost } from '../api/login/route';
import LoginButton from './LoginButton';

type Props = { returnTo?: string | string[] };

export default function LoginForm(props: Props) {
  // const [firstname, setFirstname] = useState('');
  // const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const router = useRouter();

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),

      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data: LoginResponseBodyPost = await response.json();

    if ('errors' in data) {
      setErrors(data.errors);
      return;
    }

    // This is not the secure way of doing returnTo
    // router.push(`/profile/${data.user.username}`);
    // if (props.returnTo) {
    //   console.log('Checks Return to: ', props.returnTo);
    //   router.push(props.returnTo);
    // }

    router.push(
      getSafeReturnToPath(props.returnTo) || `/profile/${data.user.username}`,
    );

    router.refresh();
  }

  return (
    <section className=" flex justify-center dark:bg-gray-900 mt-8">
      <div className=" flex flex-col justify-center p-6 space-y-4 md:space-y-6 sm:p-8 lg:w-2/5 md:w-3/5 w-4/5">
        <h1 className=" text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Login to your account
        </h1>
        <form
          className="space-y-4 md:space-y-6 text-left"
          onSubmit={async (event) => await handleLogin(event)}
        >
          <div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <label>
                <div className="mb-4">Username</div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Cowboy"
                  type="username"
                  onChange={(event) => setUsername(event.currentTarget.value)}
                />
              </label>
            </div>
          </div>

          <div>
            <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              <label>
                <div className="mb-4">Password</div>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                  type="password"
                  onChange={(event) => setPassword(event.currentTarget.value)}
                />
              </label>
            </div>
          </div>
          <div className="text-center">
            <LoginButton />
          </div>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
            Don't have an account?{' '}
            <a
              href="/register"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Register here
            </a>
          </p>
          <div className="flex justify-center">
            {errors.map((error) => (
              <div
                className="error text-center bg-red-500 rounded-md text-white p-2 w-2/3"
                key={`error-${error.message}`}
              >
                <ErrorMessage>{error.message}</ErrorMessage>
              </div>
            ))}
          </div>
        </form>
      </div>
    </section>
  );
}
