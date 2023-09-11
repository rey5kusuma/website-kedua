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
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-blue-600 md:text-5xl lg:text-6xl dark:text-blue">
            We invest in the world’s potential
          </h1>
          <p className="mb-8 text-lg font-normal text-white-300 lg:text-xl sm:px-16 lg:px-48 text-white">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
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
