import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Affiliate() {
  return (
    <MainLayout title="Welcome Homepage">
      <div className="min-h-[210vh]">
        <div className="flex flex-row bg-no-repeat h-[60vh] place-items-center mt-16">
          <img
            src="https://web.bookandlink.com/wp-content/uploads/2020/05/main-hiring-1500x323.jpg"
            className=""
            alt="image"
            style={{ height: '300px' }}
          />
        </div>
        <div className="h-[230vh]">
          <div className="border border-black mx-6 mt-4 h-[190vh]">
            <div className="text-gray-700 mx-12 mt-2">
              <h1 className="text-4xl">
                Bergabunglah dengan Program Reseller kami!
              </h1>
              <p className="mt-4 text-[17px]">
                Anda dapat menerima <b>bonus komisi</b> saat memperkenalkan Book
                and Link ke pengguna hotel baru. Banyak kalangan konsultan
                perhotelan, desainer website, dan lainnya hingga kini dengan
                senang hati merekomendasikan <b>Book and Link</b> dengan
                banyaknya manfaat yang diberikan kepada pemilik properti. Dengan{' '}
                <b>Program Reseller</b> ini, kami berharap dapat memberikan
                manfaat kepada orang-orang yang juga merekomendasikan brand
                kami.
              </p>
              <p className="mt-4 text-[17px]">
                Kami memiliki dua program berbeda, atau model kompensasi;{' '}
                <b> Program Referral dan Program Mitra. </b> Pilih yang paling
                cocok untuk Anda maupun bisnis Anda.
              </p>
            </div>
            <div className="border border-black h-[90vh] mx-52 mt-20 px-6">
              <div className="mx-20">
                <div className="mt-6">
                  <label
                    for="small-input"
                    className="block text-sm text-gray-900"
                  >
                    Nama Perusahaan *
                  </label>
                  <input
                    type="text"
                    id="small-input"
                    className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:tex-lg"
                    placeholder="Nama Perusahaan"
                  />
                </div>
                <div className="mt-6">
                  <label
                    for="small-input"
                    className="block text-sm text-gray-900"
                  >
                    Nama Kontak *
                  </label>
                  <input
                    type="text"
                    id="small-input"
                    className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:tex-lg"
                    placeholder="Nama Kontak"
                  />
                </div>
                <div className="mt-6">
                  <label for="countries" class="block text-sm text-gray-900">
                    Negara *
                  </label>
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 sm:tex-lg"
                  >
                    <option>Indonesia</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </select>
                </div>
                <div className="mt-6">
                  <label
                    for="small-input"
                    className="block text-sm text-gray-900"
                  >
                    Email *
                  </label>
                  <input
                    type="text"
                    id="small-input"
                    className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:tex-lg"
                    placeholder="Email"
                  />
                </div>
                <div className="mt-6">
                  <label for="countries" class="block text-sm text-gray-900">
                    Program komisi *
                  </label>
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 sm:tex-lg"
                  >
                    <option>Pilih program mana yang ingin Anda gunakan</option>
                    <option>Program Referensi</option>
                    <option>Program Mitra</option>
                  </select>
                </div>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mt-10">
                  <button
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 rounded-lg text-sm px-16 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
                  >
                    SEND
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
