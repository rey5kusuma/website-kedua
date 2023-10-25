import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Affiliate() {
  return (
    <MainLayout title="Welcome Homepage">
      <div className="min-h-[210vh]">
        <div className="h-[60vh] mt-16">
          <img
            src="https://web.bookandlink.com/wp-content/uploads/2020/05/main-hiring-1500x323.jpg"
            style={{ height: '300px' }}
          />
        </div>
      </div>
    </MainLayout>
  );
}
