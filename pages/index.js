import MainLayout from '@/components/layouts/mainLayout';

export default function Home() {
  return (
    <MainLayout title="Welcome Homepage">
      <div className="grid min-h-[100vh] w-full place-items-center bg-cyan-200">
        <div>Slider</div>
      </div>
      <div className="min-h-[400px] bg-blue-200">section 2</div>
    </MainLayout>
  );
}
