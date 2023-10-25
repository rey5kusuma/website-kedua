import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Partner() {
  return (
    <MainLayout title="Welcome Homepage">
      <div className="h-[230vh] bg-blue-100">
        <div className="flex flex-row h-[60vh] place-items-center mt-16">
          <img
            src="https://web.bookandlink.com/wp-content/uploads/2020/04/main-partners-1500x323.jpg"
            className=""
            alt="image"
            style={{ height: '300px' }}
          />
        </div>
        <div className="h-[160vh] mx-14">
          <h1 className="text-4xl text-center text-gray-700 mt-8">
            Mitra BookandLink
          </h1>
          <div className="flex h-[45px] mt-14 bg-sky-500 text-[15px]">
            <div className="px-8 py-3 bg-yellow-500">OTA</div>
            <div className="px-7 py-3">WHOLESALER</div>
            <div className="px-7 py-3">PMS</div>
            <div className="px-7 py-3">BOOKING ENGINE</div>
            <div className="px-7 py-3">PAYMENT GATEWAY</div>
            <div className="px-7 py-3">ICALENDAR SYNC</div>
            <div className="px-7 py-3">METASEARCH</div>
            <div className="px-7 py-3">RMS</div>
            <div className="px-7 py-3">HOTEL APP</div>
          </div>
          <div className="text-gray-700 text-center mt-10 mx-12">
            <h1 className="text-2xl">Agen Perjalanan Online (OTA)</h1>
            <p className="mt-6">
              <b>OTA</b> adalah singkatan Agen Perjalanan Online. <b>OTA</b>{' '}
              adalah perusahaan online yang situs webnya memungkinkan konsumen
              memesan berbagai layanan terkait perjalanan langsung melalui
              Internet. Mereka adalah agen pihak ke-3 yang menjual kembali
              perjalanan, hotel, mobil, penerbangan, paket liburan, dan
              lain-lain yang diisediakan atau diorganisir oleh orang lain.
            </p>
            <div className="flex">
              <div className="w-56 mt-8">
                <div className="place-items-center mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/agoda.png"
                    style={{ height: '75px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/pegipegi.png"
                    style={{ height: '75px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/hoterip.png"
                    style={{ height: '75px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/explorin.png"
                    style={{ height: '75px' }}
                  />
                </div>
              </div>
              <div className="w-56 mt-8 ml-6">
                <div className="place-items-center mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/airbnb.png"
                    style={{ height: '75px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/traveloka.png"
                    style={{ height: '75px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/darmawisata.png"
                    style={{ height: '75px' }}
                  />
                </div>
              </div>
              <div className="w-56 mt-8 ml-6">
                <div className="place-items-center mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/bookingcom.png"
                    style={{ height: '75px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/ctrip.png"
                    style={{ height: '75px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/misteraladin.png"
                    style={{ height: '75px' }}
                  />
                </div>
              </div>
              <div className="w-56 mt-8 ml-6">
                <div className="place-items-center mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/expedia.png"
                    style={{ height: '75px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/goibibo.png"
                    style={{ height: '75px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/tiket-com.png"
                    style={{ height: '75px' }}
                  />
                </div>
              </div>
              <div className="w-56 mt-8 ml-6">
                <div className="place-items-center mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/priceline.png"
                    style={{ height: '75px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/hostelworld.png"
                    style={{ height: '75px' }}
                  />
                </div>
                <div className="place-items-center  mt-16">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2020/04/travelsquare.png"
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
