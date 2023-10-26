import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Affiliate() {
  return (
    <MainLayout title="Welcome Homepage">
      <div className="min-h-[85vh] bg-blue-100">
        <div className="mt-16">
          <img
            src="https://web.bookandlink.com/wp-content/uploads/2020/05/main-hiring-1500x323.jpg"
            style={{ height: '300px' }}
          />
        </div>
        <div className="text-center text-gray-600">
          <h1 className="text-4xl mt-14 mb-6">Lowongan Pekerjaan</h1>
          <p className="text-lg">
            Maaf, saat ini tidak ada posisi yang tersedia.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
