import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Contact() {
  return (
    <MainLayout title="Welcome Homepage">
      <div className="grid min-h-[60vh] place-items-center mt-16">
        <div className="flex flex-row bg-no-repeat">
          <img
            src="https://web.bookandlink.com/wp-content/uploads/2020/04/main-about-1500x323.jpg"
            className=""
            alt="image"
            style={{ height: '300px' }}
          />
        </div>
      </div>
      <div className="h-[150vh]">
        <div className="mx-48 mt-6 text-gray-700">
          <h1 className="text-center text-4xl">Tentang Kami</h1>
          <p className="text-justify text-lg mt-6">
            BookandLink didirikan pada tahun 2014, saat itu melihat tidak ada
            solusi perangkat lunak yang komprehensif dan nyata di industri
            perhotelan. Sistem kami yang cepat dan andal serta mesin reservasi
            yang didukung melalui Internet dengan memungkinkan pelanggan untuk
            menentukan persyaratan dan kebutuhan perjalanannya. Ini juga
            membantu pemilik properti mengendalikan distribusi online dan
            meningkatkan kapasitas pemesanan langsung dengan mendapatkan dan
            mengarahkan reservasi baru pada situs web properti.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
