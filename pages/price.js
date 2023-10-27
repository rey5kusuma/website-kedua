import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Home() {
  return (
    <MainLayout title="Free Trial - Cloud Hospitality Software Indonesia">
      <div className="h-[233vh] bg-blue-400">
        <div className="grid h-[38vh] mt-32 mx-16 text-center">
          <h1 className="text-3xl mt-8 text-gray-700">
            SIMPLIFY OPERATIONS TO MAXIMIZE YOUR REVENUE
          </h1>
          <p className="text-2xl mt-2 text-gray-700 text-gray-700">
            Find the perfect plan for your property
          </p>
          <h1 className="mt-2 text-4xl font-semibold text-gray-700">
            REQUEST FOR A QUOTE
          </h1>
          <p className="mt-3 px-2 rounded text-white text-[17px] bg-sky-950">
            Every properties are unique, and each has different sets of
            requirements. Therefore, with our modular pricing strategy, we
            provide you with a personalized quote, taking into account the
            number of rooms, modules, and interfaces. Complete the form below to
            get the most beneficial pricing plan for your hotel.
          </p>
        </div>
        <div className="grid h-[110vh] mx-16 mt-4 bg-blue-100">
          <div className="mx-6 mt-4 h-[620px] text-gray-700">
            <h1 className="text-xl font-bold">Request For a Quote</h1>
            <div className="flex mt-4">
              <div className="w-full">
                <label
                  for="first_name"
                  classNanme="block mb-2 text-[16px] text-gray-900"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="mt-2 bg-blue-100 border border-gray-400 border-2 text-gray-900 text-sm rounded-lg block w-full p-1.5 "
                  required
                />
              </div>
              <div className="w-full ml-4">
                <label
                  for="first_name"
                  classNanme="block mb-2 text-[16px] text-gray-900"
                >
                  E-Mail *
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="mt-2 bg-blue-100 border border-gray-400 border-2 text-gray-900 text-sm rounded-lg block w-full p-1.5 "
                  required
                />
              </div>
            </div>
            <div className="flex mt-4">
              <div className="w-full">
                <label
                  for="first_name"
                  classNanme="block mb-2 text-[16px] text-gray-900"
                >
                  Hotel Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="mt-2 bg-blue-100 border border-gray-400 border-2 text-gray-900 text-sm rounded-lg block w-full p-1.5 "
                  required
                />
              </div>
              <div className="w-full ml-4">
                <label
                  for="first_name"
                  classNanme="block mb-2 text-[16px] text-gray-900"
                >
                  Phone Number *
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="mt-2 bg-blue-100 border border-gray-400 border-2 text-gray-900 text-sm rounded-lg block w-full p-1.5 "
                  required
                />
              </div>
              <div className="w-full ml-4">
                <label
                  for="first_name"
                  classNanme="block mb-2 text-[16px] text-gray-900"
                >
                  Number of Rooms/Units
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="mt-2 bg-blue-100 border border-gray-400 border-2 text-gray-900 text-sm rounded-lg block w-full p-1.5 "
                  required
                />
              </div>
            </div>
            <div className="mt-4">
              <label for="message" class="block mb-2 text-[16px] text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full h-52 text-sm text-gray-900 bg-blue-100 rounded-lg border border-gray-400 border-2"
              ></textarea>
            </div>
            <div className="">
              <div className="">
                <button
                  type="button"
                  class="text-white bg-sky-600 border border-black border-2 hover:bg-red-400 font-semimedium rounded-3xl text-lg px-6 py-2 mr-2 mb-2 mt-12"
                >
                  REQUEST A QUOTE NOW!
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid h-[72vh] bg-blue-100 mt-16">
          <div className="w-full flex">
            <div className="w-full border border-white border-1">
              <div className="mt-20 ml-14 h-[280px]">
                <h1 className="text-3xl text-gray-700">ADD ONS</h1>
                <div className="flex">
                  <div className="ml-4 text-gray-700">
                    <div className="flex items-center mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        fill="currentColor"
                        class="bi bi-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      <div className="ml-4">POS (Point of Sale)</div>
                    </div>
                    <div className="flex items-center mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        fill="currentColor"
                        class="bi bi-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      <div className="ml-4">RATE SHOPPER</div>
                    </div>
                    <div className="flex items-center mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        fill="currentColor"
                        class="bi bi-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      <div className="ml-4">DYNAMIC PRICING</div>
                    </div>
                    <div className="flex items-center mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        fill="currentColor"
                        class="bi bi-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      <div className="ml-4">LOYALTY PROGRAM</div>
                    </div>
                    <div className="flex items-center mt-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        fill="currentColor"
                        class="bi bi-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      <div className="ml-4">BACK OFFICE SYSTEM</div>
                    </div>
                  </div>
                  <div className="mt-4 ml-16">
                    <div>
                      <button
                        type="button"
                        class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 mr-2 mb-2"
                      >
                        CONTACT US
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 mr-2 mb-2"
                      >
                        CONTACT US
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 mr-2 mb-2"
                      >
                        CONTACT US
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 mr-2 mb-2"
                      >
                        CONTACT US
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 mr-2 mb-2"
                      >
                        CONTACT US
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full border border-white border-1">
              <div className="mt-20 ml-14 h-[280px]">
                <h1 className="text-3xl text-gray-700">INFORMATION</h1>
                <div className="ml-4 text-gray-700">
                  <div className="flex items-center mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      fill="currentColor"
                      class="bi bi-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                    <div className="ml-4">1 MONTH FREE TRIAL</div>
                  </div>
                  <div className="flex items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      fill="currentColor"
                      class="bi bi-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                    <div className="ml-4">1 YEAR PAYMENT = 2 MONTH FREE</div>
                  </div>
                  <div className="flex items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      fill="currentColor"
                      class="bi bi-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                    <div className="ml-4">NO SETUP FEES</div>
                  </div>
                  <div className="flex items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      fill="currentColor"
                      class="bi bi-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                    <div className="ml-4">NO CANCELLATION PENALTIES</div>
                  </div>
                  <div className="flex items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      fill="currentColor"
                      class="bi bi-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                    <div className="ml-4">
                      TRAINING IN OUR OFFICE / AT LOCATION (WHEN POSSIBLE)/
                      ONLINE
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      fill="currentColor"
                      class="bi bi-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <circle cx="8" cy="8" r="8" />
                    </svg>
                    <div className="ml-4">SUPPORT VIA EMAIL/WHATSAPP</div>
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
