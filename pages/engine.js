import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Engine() {
  return (
    <MainLayout title="Channel Manager - Bookandlink">
      <div className="h-[400vh]">
        <div
          className="grid min-h-[96vh] w-full bg-cover bg-no-repeat mt-24"
          style={{
            backgroundImage:
              'url(https://web.bookandlink.com/wp-content/uploads/2020/05/bg-bookingku03.jpg)',
          }}
        >
          <div className="w-[430px] mt-12 ml-16 text-justify text-[17px] text-gray-900">
            <div>
              <img
                src="https://web.bookandlink.com/wp-content/uploads/2020/04/logo-bookingku-1.png"
                style={{ height: '120px' }}
              />
              <p className="mt-12">
                <span className="text-orange-500 font-semibold">
                  Mesin Pemesanan
                </span>{' '}
                kami berfungsi dengan menghubungkan ke situs web hotel Anda dan
                memproses pemesanan yang terjamin melalui situs web. Tampilan
                interface ini memungkinkan para tamu untuk memilih tanggal dan
                menyelesaikan pemesanan berdasarkan ketersediaan dan tampilan
                tarif.
              </p>
              <p className="mt-6">
                Dibanding mengelola pemesanan online secara manual, BookingKu
                akan memprosesnya dengan sistem pembayaran terintegrasi yang
                kami miliki yang memungkinkan Anda menerima pembayaran secara
                instan, dan memproses pengembalian uang dengan cara yang mudah.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[82vh] bg-orange-500">
          <div className="border border-orange-500">
            <h1 className="mt-16 text-4xl text-white font-semibold text-center">
              MENGAPA BOOKINGKU?
            </h1>
            <div className="flex justify-center mt-12">
              <div className="w-[260px] text-white text-lg text-center justify-center items-center mx-4">
                <div className="ml-8">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/bookingku-icon-01.png"
                    style={{ height: '140px' }}
                  />
                </div>
                <p className="mt-8">Komisi 0%</p>
              </div>
              <div className="w-[260px] text-white text-lg text-center justify-center items-center mx-4">
                <div className="ml-8">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/bookingku-icon-02.png"
                    style={{ height: '140px' }}
                  />
                </div>
                <p className="mt-8">Terintegrasi dengan ChannelKu</p>
              </div>
              <div className="w-[260px] text-white text-lg text-center justify-center items-center mx-4">
                <div className="ml-14">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/bookingku-icon3.png"
                    style={{ height: '140px' }}
                  />
                </div>
                <p className="mt-8">
                  Fitur tambahan tersedia untuk memberikan pengalaman khusus
                  bagi para tamu
                </p>
              </div>
              <div className="w-[260px] text-white text-lg text-center justify-center items-center mx-4">
                <div className="ml-6">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/bookingku-icon-03.png"
                    style={{ height: '140px' }}
                  />
                </div>
                <p className="mt-8">
                  Mengumpulkan informasi kartu kredit untuk memproses setoran
                  dan pembayaran
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid h-[110vh] bg-blue-50">
          <h1 className="text-4xl mt-16 font-semibold text-center mr-20 text-orange-500">
            FITUR BOOKINGKU
          </h1>
          <div className="flex">
            <div className="ml-20 mr-16 text-[17px] text-gray-700">
              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="orange"
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <div className="ml-4">
                  Widget tersedia untuk situs web properti
                </div>
              </div>
              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="orange"
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <div className="ml-4">Modern, cepat, dan responsif</div>
              </div>
              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="orange"
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <div className="ml-4">Promosi dan ekstra</div>
              </div>
              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="orange"
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <div className="ml-4">Integrasi sistem pembayaran lokal</div>
              </div>
              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="orange"
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <div className="ml-4">Laporan dan analisis</div>
              </div>
              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="orange"
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <div className="ml-4">
                  Halaman pemesanan untuk beberapa properti
                </div>
              </div>
              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="orange"
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <div className="ml-4">
                  Pemasaran melalui Meta Search (Google Hotel Ads, Trivago,
                  Hotel Combined, dan lainnya)
                </div>
              </div>
            </div>
            <div className="mt- mr-16">
              <img
                src="https://web.bookandlink.com/wp-content/uploads/2020/04/channelku-pc-01.png"
                style={{ height: '400px' }}
              />
            </div>
          </div>
        </div>
        <div className="grid h-[120vh] bg-stone-100">
          <div className="mx-8 mt-6">
            <h1 className="text-4xl font-bold text-center text-orange-500 mt-8">
              MITRA KAMI
            </h1>
            <div className="flex flex-wrap">
              <div className="w-56 mt-4 ml-20">
                <div className="place-items-center mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-ezy-300x120.jpg"
                    style={{ height: '100px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-roiback-300x120.jpg"
                    style={{ height: '100px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-edge-300x120.jpg"
                    style={{ height: '100px' }}
                  />
                </div>
              </div>
              <div className="w-56 mt-4 ml-20">
                <div className="place-items-center mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-booknpay-300x120.jpg"
                    style={{ height: '100px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-chronoz-300x120.jpg"
                    style={{ height: '100px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-sojern-300x120.jpg"
                    style={{ height: '100px' }}
                  />
                </div>
              </div>
              <div className="w-56 mt-4 ml-20">
                <div className="place-items-center mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-the-bukig-300x120.jpg"
                    style={{ height: '100px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-pelican-300x120.jpg"
                    style={{ height: '100px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-trip-300x120.jpg"
                    style={{ height: '100px' }}
                  />
                </div>
              </div>
              <div className="w-56 mt-4 ml-20">
                <div className="place-items-center mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-alpome-300x120.jpg"
                    style={{ height: '100px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-omnih-300x120.jpg"
                    style={{ height: '100px' }}
                  />
                </div>
                <div className="place-items-center justify-center mt-20 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                  <div className="border border-black border-2 w-36 rounded-3xl px-2.5 py-1.5 text-center text-lg">
                    dan lainnya...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
