import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
// import { getAnimals } from '../../../database/animals';
import { getValidSession } from '../../../database/sessions';
import HotelsForm from './HotelsForm';

export const metadata = {
  title: 'Hotel Admin page',
  description: 'Create Your Next Hotel',
};

export default async function HotelsPage() {
  // This is no longer needed because we no run a secure query
  // const animals = await getAnimalsInsecure();

  // Task: Protect the dashboard page and redirect to login if the user is not logged in
  // 1. Checking if the sessionToken cookie exists
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. Check if the sessionToken cookie is still valid
  const session =
    sessionTokenCookie && (await getValidSession(sessionTokenCookie.value));

  // 3. If the sessionToken cookie is invalid or doesn't exist, redirect to login with returnTo

  if (!session) redirect('/login?returnTo=/hotels/dashboard');

  // 4. If the sessionToken cookie is valid, allow access to dashboard page
  // const hotels = await getHotels(session.token);
  return <HotelsForm />;
}
