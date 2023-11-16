import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Addons() {
  return (
    <MainLayout title="Add-Ons - Bookandlink">
      <div className="h-[410vh]">
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
                  <span className="text-gray-700">add-ons</span> merupakan
                  servis berupa perangkat lunak yang dapat ditambahkan dalam
                  konfigurasi sistem BookandLink untuk meningkatkan kapabilitas
                  dan kegunaan pada program utama kami.
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
        <div className="h-[100vh] bg-gray-200">
          <div className="flex ">
            <div className="mt-10 ml-20 mr-16 w-[50%] text-gray-700">
              <h1 className="text-4xl font-bold mt-6 mr-20">RATE SHOPPER</h1>
              <div className="text-justify mt-8 mr-6 text-[19px]">
                <p className="mb-6">
                  Rate Shopper adalah sebuah alat analisis yang digunakan hotel
                  secara otomatis melakukan proses pembandingan harga.
                  Kepandaian untuk menganalisis harga sangat penting dalam
                  mengelola pendapatan hotel.
                </p>
                <p>
                  Melihat harga yang dipublikasikan kompetitor Anda, menyusun
                  strategi, menganalisa peluang, dan membuat harga properti Anda
                  menjadi kompetitif.
                </p>
              </div>
              <div className="ml-4 text-[18px]">
                <div className="flex items-center mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    fill="grey"
                    class="bi bi-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                  <div className="ml-4">
                    Bandingkan kompetisi harga secara real time
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    fill="grey"
                    class="bi bi-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                  <div className="ml-4">Mendefinisi ulang strategi Anda</div>
                </div>
                <div className="flex items-center mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="8"
                    fill="grey"
                    class="bi bi-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <circle cx="8" cy="8" r="8" />
                  </svg>
                  <div className="ml-4">
                    Mendapat gambaran harga dari beragam hotel
                  </div>
                </div>
              </div>
              <div className="mt-6 text-[19px] font-semibold">
                Harga dimulai dari: contact us
              </div>
            </div>
            <div className="mt-24 mr-20">
              <img
                src="https://web.bookandlink.com/wp-content/uploads/2020/04/rate-shopper.jpg"
                style={{ height: '470px' }}
              />
            </div>
          </div>
        </div>
        <div className="h-[120vh] bg-blue-50">
          <div className="flex ">
            <div className="mt-24 ml-20">
              <img
                src="https://web.bookandlink.com/wp-content/uploads/2020/04/dynamic-pricing.png"
                style={{ height: '500px' }}
              />
            </div>
            <div className="mt-20 ml-20 mr-16 w-[50%] text-gray-600">
              <h1 className="text-[34px] font-bold mr-20">
                DYNAMIC PRICING ATAU YIELD MANAGEMENT
              </h1>
              <div className="text-justify mt-4 mr-10 text-[19px]">
                <p className="mb-6">
                  Dynamic pricing atau yield management memberi saluran
                  distribusi (Online Travel Agent) dengan memberikan potongan
                  harga tertentu (harga terbaik yang tersedia) dibandingkan
                  dengan menetapkan harga sesuai kontrak. Harga korporat pada
                  dasarnya hanya menyesuaikan hasil yang diaplikasikan (tinggi
                  atau rendah) dari harga kamar hotel.
                </p>
                <p>
                  Dynamic pricing atau yield management dapat membuat strategi
                  pengaturan harga berdasar dari pemahaman, antisipasi dan
                  mempengaruhi perilaku konsumen dalam rangka memaksimalkan
                  pendapatan dari sumber waktu yang terbatas namun sudah
                  ditentukan.
                </p>
                <p>
                  Tawarkan produk terbaik pada konsumen, waktu, dan harga yang
                  tepat.
                </p>
                <div className="mt-6 text-[19px] font-semibold">
                  Harga: contact us
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[100vh] bg-gray-50">
          <div className="flex ">
            <div className="mt-16 ml-20 mr-16 w-[50%] text-gray-700">
              <h1 className="text-4xl font-bold mt-16 mr-20">
                POINT OF SALES (POS)
              </h1>
              <div className="text-justify mt-8 mr-6 text-[19px]">
                <p className="mb-6">
                  Point of Sales (POS) yakni waktu dan tempat dimana sebuah
                  retail dapat menyelesaikan sebuah transaksi. Dengan Point of
                  Sales, hotel dapat mengkalkulasi jumlah pembayaran yang
                  dimiliki para tamu saat menginap, menunjukan dan membuat
                  invoice untuk dibayarkan.
                </p>
                <p>
                  Pada properti hotel, sistem POS dapat menautkan sistem hotel
                  dengan restoran, jasa spa atau layanan hotel lainnya, sehingga
                  seluruh transaksi dan data dapat tersentralisasi.
                </p>
              </div>
              <div className="mt-6 text-[19px] font-semibold">
                Harga: contact us
              </div>
            </div>
            <div className="mt-16 mr-20">
              <img
                src="https://web.bookandlink.com/wp-content/uploads/2020/04/point-of-sale.jpg"
                style={{ height: '540px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
