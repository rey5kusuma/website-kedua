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
      <div className="h-[500px] w-[370px] bg-gray-50">
        <div className="border border-black grid justify-center items-center w-[280px]">
          <img
            src="https://www.bookandlink.com/admin/assets/images/channelku3.png"
            alt=""
          />
        </div>
        <div className="border border-black mx-5 mt-4">
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
        </div>
      </div>
    </div>
  );
}
