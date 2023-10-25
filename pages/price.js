import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <MainLayout title="Free Trial - Cloud Hospitality Software Indonesia">
      <div className="h-[230vh]">
        <div className="border h-[38vh] mt-32 mx-16 text-center">
          <h1 className="text-3xl">
            SIMPLIFY OPERATIONS TO MAXIMIZE YOUR REVENUE
          </h1>
          <p className="text-2xl mt-2">
            Find the perfect plan for your property
          </p>
          <h1 className="mt-2 text-4xl font-semibold">REQUEST FOR A QUOTE</h1>
          <p className="mt-3 px-2 rounded text-white text-lg bg-sky-950">
            Every properties are unique, and each has different sets of
            requirements. Therefore, with our modular pricing strategy, we
            provide you with a personalized quote, taking into account the
            number of rooms, modules, and interfaces. Complete the form below to
            get the most beneficial pricing plan for your hotel.
          </p>
        </div>
        <div className="h-[100vh] mx-16 mt-4 bg-blue-200"></div>
      </div>
    </MainLayout>
  );
}
