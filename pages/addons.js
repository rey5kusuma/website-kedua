import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Addons() {
  return (
    <MainLayout title="Add-Ons - Bookandlink">
      <div className="h-[710vh]">
        <div
          className="grid min-h-[84vh] w-full bg-cover bg-no-repeat mt-24"
          style={{
            backgroundImage:
              'url(https://web.bookandlink.com/wp-content/uploads/2020/05/bg-addons-1.jpg)',
          }}
        >
          <div className="w-[390px] mt-12 ml-16 text-justify text-[17px] text-gray-600">
            <div className="ml-4 mt-10">
              <img
                src="https://web.bookandlink.com/wp-content/uploads/2020/04/logo-addons.png"
                style={{ height: '100px' }}
              />
              <div className="mt-10 text-white text-[17px]">
                <p className="mb-6">
                  <span className="text-gray-700">add-ons</span> merupakan servis berupa perangkat lunak yang dapat
                  ditambahkan dalam konfigurasi sistem BookandLink untuk
                  meningkatkan kapabilitas dan kegunaan pada program utama kami.
                </p>
                <p>
                  Program atau fitur tambahan berupa Rate Shopper, Dynamic
                  Pricing, Point of Sales (POS), Aplikasi Concierge, dan Loyalty
                  Program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
