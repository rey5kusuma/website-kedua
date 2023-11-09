import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Front() {
  return (
    <MainLayout title="Front Office - Bookandlink">
      <div className="h-[380vh]">
        <div
          className="grid min-h-[90vh] w-full bg-cover bg-no-repeat mt-24"
          style={{
            backgroundImage:
              'url(https://web.bookandlink.com/wp-content/uploads/2020/05/bg-hotelku02.jpg)',
          }}
        >
          <div className="w-[480px] mt-12 ml-16 text-justify text-[17px] text-gray-700">
            <div>
              <img
                src="https://web.bookandlink.com/wp-content/uploads/2020/04/logo-hotelku-1.png"
                style={{ height: '120px' }}
              />
              <p className="mt-12">
                <span className="text-green-600">Sistem front office</span>{' '}
                adalah perangkat lunak yang memberikan kemampuan untuk
                meningkatkan efisiensi operasional dan menambahkan tugas yang
                berbeda. Sistem front office berbasis cloud ini dapat menangani
                semua pemesanan, check-in / check-out, tarif kamar, dan analisis
                kinerja sehingga ini dapat memberikan pengalaman yang baik bagi
                para tamu hotel Anda.
              </p>
              <p className="mt-6">
                HotelKu layak untuk hotel dengan jumlah kamar kecil-menengah dan
                untuk mengumpulkan semua pemesanan dari pemesanan situs web
                online, walk-in atau agen tur.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[82vh] bg-lime-600">
          <div className="border border-lime-600">
            <h1 className="mt-10 text-4xl text-white font-semibold text-center">
              MENGAPA HOTELKU?
            </h1>
            <div className="flex justify-center mt-16">
              <div className="w-[360px] text-white text-lg text-center justify-center items-center mx-4">
                <div className="ml-24">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/05/icn-hotelku01.png"
                    style={{ height: '140px' }}
                  />
                </div>
                <p className="mt-8">
                  Pemilik dapat mengendalikan front office lebih efektif dan
                  akurat.
                </p>
              </div>

              <div className="w-[360px] text-white text-lg text-center justify-center items-center mx-4">
                <div className="ml-24">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/05/icn-hotelku02.png"
                    style={{ height: '140px' }}
                  />
                </div>
                <p className="mt-8">Laporan yang jelas dan lengkap.</p>
              </div>
              <div className="w-[360px] text-white text-lg text-center justify-center items-center mx-4">
                <div className="ml-24">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/05/icn-hotelku03.png"
                    style={{ height: '140px' }}
                  />
                </div>
                <p className="mt-8">
                  Terintegrasi dengan akses ChannelKu dan BookingKu.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid h-[110vh] bg-blue-50">
          <h1 className="text-4xl mt-16 font-semibold text-center mr-20 text-lime-800">
            FITUR HOTELKU
          </h1>
          <div className="flex">
            <div className="ml-20 mr-16 text-[18px] text-gray-700">
              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="green"
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <div className="ml-4">Memindahkan pemesanan pada kalender</div>
              </div>
              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="green"
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <div className="ml-4">
                  Mudah diakses melalui perangkat seluler
                </div>
              </div>
              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="green"
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <div className="ml-4">Tersedia pemetaan interface</div>
              </div>
              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="green"
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <div className="ml-4">Pembaruan log Instan</div>
              </div>
              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="green"
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <div className="ml-4">Menggandakan tarif saluran</div>
              </div>
              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="green"
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <div className="ml-4">Akses untuk banyak pengguna</div>
              </div>
              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="green"
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <div className="ml-4">Bagan dan laporan lengkap</div>
              </div>
              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="green"
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <div className="ml-4">Level Persediaan pada basis saluran</div>
              </div>
              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="green"
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <div className="ml-4">Promosi dan API Terhubung</div>
              </div>
            </div>
            <div className="ml-[160px]">
              <img
                src="https://web.bookandlink.com/wp-content/uploads/2020/04/hotelku-pc-01.png"
                style={{ height: '400px' }}
              />
            </div>
          </div>
        </div>
        <div className="grid h-[100vh] bg-stone-100">
          <div className="mx-8 mt-6">
            <h1 className="text-4xl font-bold text-center text-lime-700 mt-8">
              MITRA PMS KAMI DAN LAINNYA
            </h1>
            <div className="flex flex-wrap">
              <div className="w-56 mt-4 ml-20">
                <div className="place-items-center mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-hotelmu-300x120.jpg"
                    style={{ height: '85px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-cakra-300x120.jpg"
                    style={{ height: '85px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-big-300x120.jpg"
                    style={{ height: '85px' }}
                  />
                </div>
              </div>
              <div className="w-56 mt-4 ml-20">
                <div className="place-items-center mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-urbane-room-300x120.jpg"
                    style={{ height: '85px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-power-pro-300x120.jpg"
                    style={{ height: '85px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-x-pert-300x120.jpg"
                    style={{ height: '85px' }}
                  />
                </div>
              </div>
              <div className="w-56 mt-4 ml-20">
                <div className="place-items-center mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-guest-pro-300x120.jpg"
                    style={{ height: '85px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-comanche-300x120.jpg"
                    style={{ height: '85px' }}
                  />
                </div>
                <div className="place-items-center justify-center mt-20 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                  <div className="border border-black border-2 w-36 rounded-3xl px-2.5 py-1.5 text-center text-lg">
                    dan lainnya...
                  </div>
                </div>
              </div>
              <div className="w-56 mt-4 ml-20">
                <div className="place-items-center mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-pyxis-300x120.jpg"
                    style={{ height: '85px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-vhp-300x120.jpg"
                    style={{ height: '85px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
