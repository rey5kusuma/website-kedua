import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Blog() {
  return (
    <MainLayout title="Berita tentang Bookandlink">
      <div className="min-h-[320vh] bg-white">
        <div className="mt-16">
          <img
            src="https://web.bookandlink.com/wp-content/uploads/2020/05/main-blog-1500x323.jpg"
            style={{ height: '320px' }}
          />
        </div>
        <div className="h-[260vh]">
          <h1 className="text-4xl text-gray-700 text-center mt-14">Blog</h1>
          <div className="h-[230vh] flex mt-6 mx-16">
            <div className="w-[400px]">
              <div className="border border-gray-400 h-[470px] shadow-md">
                <div className="">
                  <img src="https://web.bookandlink.com/wp-content/uploads/2023/01/tony-yakovlenko-lDxxeAJrWpE-unsplash-705x529.webp" />
                </div>
                <div className="px-4 border-t-[6px] border-amber-400">
                  <div className="mt-8">
                    <h1 className="text-blue-500 text-xl font-semibold">
                      [Hotelier Insight] - Most Popular Online Booking Channel
                    </h1>
                    <p className="text-gray-700 text-lg">
                      We recently interviewed one of our hotel partners, who is
                      effectively...
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-400 h-[450px] shadow-md mt-4">
                <div className="">
                  <img src="https://web.bookandlink.com/wp-content/uploads/2023/01/kobu-agency-7okkFhxrxNw-unsplash-705x470.webp" />
                </div>
                <div className="px-4 border-t-[6px] border-amber-400">
                  <div className="mt-8">
                    <h1 className="text-blue-500 text-xl font-semibold">
                      Do My Hotel Need Channel Manager?
                    </h1>
                    <p className="text-gray-700 text-lg">Introduction</p>
                    <p className="text-gray-700 text-lg">
                      Hotel owners and operators are faced with more...
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-400 h-[440px] shadow-md mt-4">
                <div className="">
                  <img src="https://web.bookandlink.com/wp-content/uploads/2022/12/tyler-nix-V3dHmb1MOXM-unsplash-1-705x470.webp" />
                </div>
                <div className="px-4 border-t-[6px] border-amber-400">
                  <div className="mt-8">
                    <h1 className="text-blue-500 text-xl font-semibold">
                      Hotelier Insight: How Hotel Can Generate Extras Revenue
                    </h1>
                    <p className="text-gray-700 text-lg">
                      The holiday season is the most critical time of year for
                      tourism...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[400px] mx-2">
              <div className="border border-gray-400 h-[440px] shadow-md">
                <div className="">
                  <img src="https://web.bookandlink.com/wp-content/uploads/2022/12/dylan-gillis-xKmXZ4Fv63w-unsplash-705x470.jpg" />
                </div>
                <div className="px-4 border-t-[6px] border-amber-400">
                  <div className="mt-8">
                    <h1 className="text-blue-500 text-xl font-semibold">
                      How Hotel Can Rank Better in Online Travel Agent
                    </h1>
                    <p className="text-gray-700 text-lg">
                      The online travel agent (OTA) industry has revolutionized
                      how...
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-400 h-[460px] shadow-md mt-4">
                <div className="">
                  <img src="https://web.bookandlink.com/wp-content/uploads/2023/02/age-barros-rBPOfVqROzY-unsplash-705x470.webp" />
                </div>
                <div className="px-4 border-t-[6px] border-amber-400">
                  <div className="mt-8">
                    <h1 className="text-blue-500 text-xl font-semibold">
                      Early Bird Promotion and Why Hotels Need It
                    </h1>
                    <p className="text-gray-700 text-lg">Introduction</p>
                    <p className="text-gray-700 text-lg">
                      Hotels need to create an early bird promotion to...
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-400 h-[440px] shadow-md mt-4">
                <div className="">
                  <img src="https://web.bookandlink.com/wp-content/uploads/2022/12/dylan-gillis-xKmXZ4Fv63w-unsplash-705x470.jpg" />
                </div>
                <div className="px-4 border-t-[6px] border-amber-400">
                  <div className="mt-8">
                    <h1 className="text-blue-500 text-xl font-semibold">
                      The Advantages of Hotel Direct Booking Introduction
                    </h1>
                    <p className="text-gray-700 text-lg">
                      Nowadays, most hotels have websites, social media
                      accounts, and...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[400px]">
              <div className="border border-gray-400 h-[220px] shadow-md">
                <div className="px-4 border-t-[6px] border-amber-400">
                  <div className="mt-8">
                    <h1 className="text-blue-500 text-xl font-semibold">
                      Bookandlink Selected as Premier Connectivity Partner 2023
                      by Booking.com
                    </h1>
                    <p className="text-gray-700 text-lg">
                      Booking.com has named Bookandlink, a prominent hotel
                      technology....
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-400 h-[470px] shadow-md mt-4">
                <div className="">
                  <img src="https://web.bookandlink.com/wp-content/uploads/2022/10/campaign-creators-pypeCEaJeZY-unsplash-705x510.jpg" />
                </div>
                <div className="px-4 border-t-[6px] border-amber-400">
                  <div className="mt-8">
                    <h1 className="text-blue-500 text-xl font-semibold">
                      Rate Plan Hacks That Hotelier Need To Know
                    </h1>
                    <p className="text-gray-700 text-lg">
                      What is the Rate Plan? Booking.com says a rate plan is a
                      label...
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-gray-400 h-[440px] shadow-md mt-4">
                <div className="">
                  <img src="https://web.bookandlink.com/wp-content/uploads/2023/02/john-schnobrich-2FPjlAyMQTA-unsplash-705x470.webp" />
                </div>
                <div className="px-4 border-t-[6px] border-amber-400">
                  <div className="mt-8">
                    <h1 className="text-blue-500 text-xl font-semibold">
                      7 Hotel Pricing Strategy That You Can Use
                    </h1>
                    <p className="text-gray-700 text-lg">
                      The right pricing strategy can help a business attract new
                      customers...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <button
              type="button"
              class="tracking-wider text-white bg-orange-600 hover:bg-orange-700 font-medium rounded-3xl text-lg px-14 py-5 mr-2 mb-2 dark:focus:ring-blue-800"
            >
              LOAD MORE
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
