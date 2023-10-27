import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Channel() {
  return (
    <MainLayout title="Channel Manager - Bookandlink">
      <div className="h-[420vh]">
        <div
          className="grid min-h-[90vh] w-full bg-cover bg-no-repeat mt-24"
          style={{
            backgroundImage:
              'url(https://web.bookandlink.com/wp-content/uploads/2020/04/mainimage-channelku2.jpg)',
          }}
        >
          <div className="w-[500px] mt-12 ml-16 text-justify text-[17px]">
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
        <div className="h-[75vh] bg-cyan-600">
          <div className="border border-cyan-600">
            <h1 className="mt-10 text-4xl text-white font-semibold text-center">
              MENGAPA SERVICEKU?
            </h1>
            <div className="flex justify-center mt-12">
              <div className="w-[400px] text-white text-lg text-center justify-center items-center">
                <img
                  src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-services-01.png"
                  style={{ height: '170px' }}
                />
                <p className="mt-8">Drive pemesanan langsung</p>
              </div>

              <div className="w-[400px] text-white text-lg text-center justify-center items-center">
                <img
                  src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-services-02.png"
                  style={{ height: '170px' }}
                />
                <p className="mt-8">
                  Mendukung Anda untuk berkomunikasi dengan hal-hal yang
                  berkaitan dengan OTA
                </p>
              </div>
              <div className="w-[400px] text-white text-lg text-center justify-center items-center">
                <img
                  src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-services-03.png"
                  style={{ height: '170px' }}
                />
                <p className="mt-8">
                  Meningkatkan loyalitas, pengalaman, dan kepuasan pelanggan
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[85vh] bg-gray-50">
          <div className="flex ">
            <div className="mt-16 ml-20 mr-16 w-[50%] text-gray-700">
              <h1 className="text-4xl font-bold mt-12 mr-20">
                PEMASARAN DIGITAL & LAYANAN MEDIA SOSIAL
              </h1>
              <p className="text-justify mt-10 mr-6 text-[19px]">
                Industri perhotelan dapat menggunakan media sosial untuk
                melibatkan pelanggan dan klien dalam mengenali kebutuhan mereka.
                Pentingnya pemasaran digital hospitality sebagai upaya mendorong
                pemesanan, meningkatkan kesadaran dan keterlibatan merek, dan
                diperhatikan oleh pelanggan melalui iklan yang efektif.
                Pemasaran perhotelan akan menggambarkan pengalaman pelanggan
                sebelum dan sesudah menginap.
              </p>
            </div>
            <div className="mt-14 mr-16">
              <img
                src="https://web.bookandlink.com/wp-content/uploads/2020/04/digital-markerting-social-media-services.jpg"
                style={{ height: '450px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
