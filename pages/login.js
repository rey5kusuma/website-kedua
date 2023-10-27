import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Service() {
  return (
    <div
      className="grid min-h-[110vh] w-full place-items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          'url(https://www.bookandlink.com/admin/assets/img/bg-home.jpg)',
      }}
    >
      <div className="h-[520px] w-[370px] bg-gray-50 shadow-lg rounded-sm">
        <div className="grid justify-center items-center w-[280px] ml-[44px] mt-8">
          <img
            src="https://www.bookandlink.com/admin/assets/images/channelku3.png"
            alt=""
          />
        </div>
        <div className="mx-5 mt-6">
          <h1 className="text-center text-gray-700 text-[15px]">
            Log in to start your session
          </h1>
          <div className="mt-4">
            <input
              type="text"
              id="small-input"
              className="block w-full p-2 text-gray-900 border border-gray-400 rounded-sm bg-gray-50 text-sm"
              placeholder="Email address"
            />
          </div>
          <div className="mt-4">
            <input
              type="text"
              id="small-input"
              className="block w-full p-2 text-gray-900 border border-gray-400 rounded-sm bg-gray-50 text-sm"
              placeholder="Password"
            />
          </div>
          <div className="mt-4 border border-gray-400 rounded-sm bg-gray-50 h-20"></div>
          <div className="flex mt-4 items-center justify-center">
            <Link href="#" className="text-[14px] text-blue-700">
              Forget Password?
            </Link>
            <Link href="#">
              <div className="flex items-center justify-center ml-24 px-5 py-1.5 border bg-cyan-500 font-semibold text-white text-sm">
                <svg
                  class="w-4 h-4 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 15"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3"
                  />
                </svg>
                <div className="ml-4">Sign In</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
