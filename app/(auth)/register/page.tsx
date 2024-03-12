import React from 'react';
import RegisterForm from './RegisterForm';

type Props = {
  searchParams: {
    returnTo?: string | string[];
  };
};

export default function RegisterPage() {
  return (
    <main className="text-neutral-900  bg-[#e8e8e8]">
      <section className="max-w-7xl mx-auto text-center text-[#373737]">
        <RegisterForm />
      </section>
    </main>
  );
}
