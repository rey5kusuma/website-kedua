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
        <div className="border border-black h-[180vh] mx-14">
          <h1 className="text-4xl text-center text-gray-700 mt-8">
            Mitra BookandLink
          </h1>
          <div className="border border-black flex h-[45px] mt-14 bg-sky-500 text-sm">
            <div className="px-8 py-2 bg-yellow-500">OTA</div>
            <div className="px-8 py-2">WHOLESALER</div>
            <div className="px-8 py-2">PMS</div>
            <div className="px-8 py-2">BOOKING ENGINE</div>
            <div className="px-8 py-2">PAYMENT GATEWAY</div>
            <div className="px-8 py-2">ICALENDAR SYNC</div>
            <div className="px-8 py-2">METASEARCH</div>
            <div className="px-8 py-2">RMS</div>
            <div className="px-8 py-2">HOTEL APP</div>
          </div>
          <div className="text-gray-700 text-center mt-10">
            <h1>Agen Perjalanan Online (OTA)</h1>
            <p>
              OTA adalah singkatan Agen Perjalanan Online. OTA adalah perusahaan
              online yang situs webnya memungkinkan konsumen memesan berbagai
              layanan terkait perjalanan langsung melalui Internet. Mereka
              adalah agen pihak ke-3 yang menjual kembali perjalanan, hotel,
              mobil, penerbangan, paket liburan, dan lain-lain yang diisediakan
              atau diorganisir oleh orang lain.
            </p>
          </div>
          <div className="flex">
            <div className="border border-black w-56"></div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
