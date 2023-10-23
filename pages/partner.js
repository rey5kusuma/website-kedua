import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Partner() {
  return (
    <MainLayout title="Welcome Homepage">
      <div className="h-[200vh] bg-blue-100">
        <div className="flex flex-row h-[60vh] place-items-center mt-16">
          <img
            src="https://web.bookandlink.com/wp-content/uploads/2020/04/main-partners-1500x323.jpg"
            className=""
            alt="image"
            style={{ height: '300px' }}
          />
        </div>
        <div className="border border-black h-[180vh] mx-16">
          <h1 className="text-4xl text-center text-gray-700 mt-8">
            Mitra BookandLink
          </h1>
          <div className="border border-black h-[50px] mt-14 bg-sky-600"></div>
        </div>
      </div>
    </MainLayout>
  );
}
