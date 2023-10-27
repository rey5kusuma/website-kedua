import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Channel() {
  return (
    <MainLayout title="Channel Manager - Bookandlink">
      <div className="h-[395vh]">
        <div
          className="grid min-h-[90vh] w-full bg-cover bg-no-repeat mt-24"
          style={{
            backgroundImage:
              'url(https://web.bookandlink.com/wp-content/uploads/2020/04/mainimage-channelku2.jpg)',
          }}
        >
          <div className="w-[500px] mt-12 ml-16 text-justify text-[16px] text-gray-700">
            <div>
              <img
                src="https://web.bookandlink.com/wp-content/uploads/2020/04/logo-channelku-1.png"
                style={{ height: '120px' }}
              />
              <p className="mt-12">
                Channel Manager adalah alat untuk mengelola penjualan melalui
                saluran distribusi online untuk menumbuhkan bisnis hotel dan
                menghindari terjadinya overbooking. Perangkat lunak ini sangat
                berguna untuk memaksimalkan penjualan properti dengan jumlah
                kamar kecil hingga ratusan kamar, sewa liburan, dan bahkan agen
                multi-properti.
              </p>
              <p className="mt-6">
                ChannelKu akan secara otomatis menghubungkan dan memperbarui
                tarif dan kalender ke semua OTA lokal maupun internasional yang
                terdaftar. Untuk itu, Anda dapat secara efektif menghemat waktu
                dan mengurangi kesalahan manual dan mendapatkan lebih banyak
                pemesanan kamar.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[75vh] bg-cyan-600">
          <div className="border border-cyan-600">
            <h1 className="mt-10 text-4xl text-white font-semibold text-center">
              MENGAPA CHANNELKU?
            </h1>
            <div className="flex justify-center mt-12">
              <div className="w-[400px] text-white text-lg text-center justify-center items-center mx-4">
                <img
                  src="https://web.bookandlink.com/wp-content/uploads/2020/04/channelku-icon-01.png"
                  style={{ height: '170px' }}
                />
                <p className="mt-8">
                  Dapat berintegrasi dengan sistem hotel yang ada, seperti PMS
                  dan Booking Engine.
                </p>
              </div>

              <div className="w-[400px] text-white text-lg text-center justify-center items-center mx-4">
                <img
                  src="https://web.bookandlink.com/wp-content/uploads/2020/04/channelku-icon-02.png"
                  style={{ height: '170px' }}
                />
                <p className="mt-8">
                  ChannelKu dapat mengatur proses reservasi yang berubah-ubah
                  dari saluran yang terhubung (Online Travel Agents).
                </p>
              </div>
              <div className="w-[400px] text-white text-lg text-center justify-center items-center mx-4">
                <img
                  src="https://web.bookandlink.com/wp-content/uploads/2020/04/channelku-icon-03.png"
                  style={{ height: '170px' }}
                />
                <p className="mt-8">
                  Didukung oleh tim lokal untuk mengatur ketersediaan dan harga
                  yang kompetitif.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid h-[110vh] bg-blue-50">
          <h1 className="text-4xl mt-16 font-semibold text-center mr-20 text-sky-800">
            FITUR CHANNELKU
          </h1>
          <div className="flex">
            <div className="ml-20 mr-16 text-[17px] text-gray-700">
              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="blue"
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <div className="ml-4">
                  Sinkronisasi 2 Cara Instan dengan semua OTA/Wholesaler
                  Internasional dan Lokal
                </div>
              </div>
              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="blue"
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <div className="ml-4">
                  Terhubung dengan perencanaan tarif dan pembaruan secara
                  otomatis
                </div>
              </div>
              <div className="flex items-center mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  fill="blue"
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
                  fill="blue"
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
                  fill="blue"
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
                  fill="blue"
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
                  fill="blue"
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
                  fill="blue"
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
                  fill="blue"
                  class="bi bi-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
                <div className="ml-4">Promosi dan API Terhubung</div>
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
            <h1 className="text-4xl font-bold text-center text-sky-700 mt-8">
              MITRA KAMI
            </h1>
            <div className="flex flex-wrap">
              <div className="w-56 mt-4 ml-20">
                <div className="place-items-center mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-booking-300x120.jpg"
                    style={{ height: '75px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-ctrip-300x120.jpg"
                    style={{ height: '75px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-hostelbed-300x120.jpg"
                    style={{ height: '75px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-mg-300x120.jpg"
                    style={{ height: '75px' }}
                  />
                </div>
              </div>
              <div className="w-56 mt-4 ml-20">
                <div className="place-items-center mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-agoda-300x120.jpg"
                    style={{ height: '75px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-expedia-300x120.jpg"
                    style={{ height: '75px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-airbnb-300x120.jpg"
                    style={{ height: '75px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-hostel-combined-300x120.jpg"
                    style={{ height: '75px' }}
                  />
                </div>
              </div>
              <div className="w-56 mt-4 ml-20">
                <div className="place-items-center mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-tiket-300x120.jpg"
                    style={{ height: '75px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-pegipegi-300x120.jpg"
                    style={{ height: '75px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-goibibo-300x120.jpg"
                    style={{ height: '75px' }}
                  />
                </div>
              </div>
              <div className="w-56 mt-4 ml-20">
                <div className="place-items-center mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-traveloka-300x120.jpg"
                    style={{ height: '75px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-hostelworld-300x120.jpg"
                    style={{ height: '75px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/icon-mister-aladin-300x120.jpg"
                    style={{ height: '75px' }}
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
