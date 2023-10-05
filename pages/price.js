import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <MainLayout title="Welcome Homepage">
      <div className="grid min-h-[230vh]">
        <div className="">
          <h1>SIMPLIFY OPERATIONS TO MAXIMIZE YOUR REVENUE</h1>
          <p>Find the perfect plan for your property</p>
          <h1>REQUEST FOR A QUOTE</h1>
          <p>
            Every properties are unique, and each has different sets of
            requirements. Therefore, with our modular pricing strategy, we
            provide you with a personalized quote, taking into account the
            number of rooms, modules, and interfaces. Complete the form below to
            get the most beneficial pricing plan for your hotel.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
