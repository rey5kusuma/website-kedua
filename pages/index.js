import MainLayout from '@/components/layouts/mainLayout';

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
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-14 mx-12 text-xl font-bold tracking-tight leading-none text-gray-50 md:text-4xl lg:text-5xl dark:text-blue">
            SATU-SATUNYA CHANNEL MANAGER YANG BERBASIS DI INDONESIA
          </h1>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="border rounded-xl border-gray-50 border-4 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-900"
            >
              Menonton Video Kami
            </a>
          </div>
        </div>
      </div>
      <div className="min-h-[400px] bg-blue-200">section 2</div>
    </MainLayout>
  );
}
