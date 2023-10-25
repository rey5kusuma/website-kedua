import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Service() {
  return (
    <MainLayout title="Servis - Bookandlink">
      <div className="min-h-[240vh]">
        <div
          className="grid min-h-[100vh] w-full bg-cover bg-no-repeat mt-24"
          style={{
            backgroundImage:
              'url(https://web.bookandlink.com/wp-content/uploads/2020/05/bg-services03.jpg)',
          }}
        >
          <div className="border border-black w-[450px] mt-12 ml-16 text-justify text-[17px]">
            <div>
              <img
                src="https://web.bookandlink.com/wp-content/uploads/2020/04/logo-serviceku.png"
                style={{ height: '120px' }}
              />
              <p className="mt-12">
                Dunia pemasaran perhotelan menuntut untuk meminta dan mendorong
                keterlibatan pelanggan, umpan balik, dan mendukung brand hotel
                Anda lebih cepat dari sebelumnya. Ini termasuk bagaimana cara
                hotel dapat berkomunikasi, membedakan dan memperkuat komitmen
                merek Anda kepada para tamu hotel.
              </p>
              <p className="mt-6">
                ServiceKu sebagai pemasaran digital dalam industri perhotelan
                berupaya meningkatkan pemesanan di antara perubahan yang terjadi
                pada OTA, harapan tamu, serta iklan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
