import { cookies } from 'next/headers';
import { redirect, useRouter } from 'next/navigation';
import { getValidSession } from '../../../database/sessions';
import { getSafeReturnToPath } from '../../../util/validation';
import LoginForm from './LoginForm';

type Props = {
  searchParams: {
    returnTo?: string | string[];
  };
};

export default async function LoginPage({ searchParams }: Props) {
  // Task: Add redirect to home if user is logged in

  // 1. Checking if the sessionToken cookie exists
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. Check if the sessionToken cookie is still valid
  const session =
    sessionTokenCookie && (await getValidSession(sessionTokenCookie.value));

  // 3. If the sessionToken cookie is valid, redirect to home
  // if (session) redirect(getSafeReturnToPath(searchParams.returnTo) || '/');

  if (session) redirect('/hotels');

  // 4. If the sessionToken cookie is invalid or doesn't exist, show the login form
  return <LoginForm returnTo={searchParams.returnTo} />;
}
