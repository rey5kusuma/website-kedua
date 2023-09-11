import MainLayout from '@/components/layouts/mainLayout';

export default function Home() {
  return (
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
          </div>
        <div>Slider</div>
      </div>
      <div className="min-h-[400px] bg-blue-200">section 2</div>
    </MainLayout>
  );
}
