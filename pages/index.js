import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <MainLayout title="Welcome Homepage">
      <div
        className="grid min-h-[100vh] w-full place-items-center bg-light bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://web.bookandlink.com/wp-content/uploads/2020/04/banner-image-bookandlink3.jpg)',
        }}
      >
        <div className="bg-slate-900 bg-opacity-50 min-h-[620px] w-full py-8 px-14 text-center lg:py-16">
          <h1 className="mb-14 mx-12 mt-32 text-xl font-bold tracking-tight leading-none text-gray-50 md:text-4xl lg:text-5xl dark:text-blue">
            SATU-SATUNYA CHANNEL MANAGER YANG BERBASIS DI INDONESIA
          </h1>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link
              href="#"
              className="border rounded-xl border-gray-50 border-4 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-900"
            >
              Menonton Video Kami
            </Link>
          </div>
        </div>
      </div>
      <div className="min-h-[600px] mt-4 bg-gray-100 p-4">
        <h1 className="text-4xl font-semibold text-center mt-6 mb-4 text-gray-700">
          BookandLink
        </h1>
        <p className="text-center text-xl mx-12 mt-10 text-gray-700">
          BookandLink Hospitality Software adalah perangkat untuk hospitality
          berbasis cloud based. Kami mengutamakan kecepatan dan kelengkapan
          fitur sistem kami untuk mengelola properti Anda; hotel, hostel,
          vacation rental, hingga manajemen perhotelan di mana saja dan kapan
          saja. Tingkatkan pendapatan Anda dengan menggunakan akses platform
          yang sederhana dan komprehensif.
        </p>
        <div className="flex flex-row mt-4 justify-center p-4 mt-10">
          <div className="rounded-full w-64 h-64 bg-blue-600 mx-4 p-6 text-center">
            <h1 className="text-5xl text-white font-semibold mt-14">3,000</h1>
            <p className="text-lg font-semibold text-white mt-2">
              Di Asia Tenggara
            </p>
          </div>
          <div className="rounded-full w-64 h-64 bg-orange-500 mx-4 p-6 text-center">
            <h1 className="text-5xl text-white font-semibold mt-14">20,000</h1>
            <p className="text-lg font-semibold text-white mt-2">
              Reservasi/hari
            </p>
          </div>
          <div className="rounded-full w-64 h-64 bg-lime-700 mx-4 p-6 text-center">
            <h1 className="text-5xl text-white font-semibold mt-14">80</h1>
            <p className="text-lg font-semibold text-white mt-2">
              Mitra Terhubung
            </p>
          </div>
        </div>
        <div className="flex flex-row place-items-center justify-center">
          <div className="border-2 border-gray-800 mt-8 flex flex-row place-items-center justify-center rounded-3xl h-10 w-44">
            <Link href="#">Lihat lebih banyak</Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
