import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <MainLayout title="Welcome Homepage">
      <div className="grid min-h-[230vh]"></div>
    </MainLayout>
  );
}
