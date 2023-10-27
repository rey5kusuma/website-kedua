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
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="white"
                  class="bi bi-box-arrow-in-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
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
