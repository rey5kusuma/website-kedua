import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Front() {
  return (
    <MainLayout title="Payku - Bookandlink Credit Card Payment Processing">
      <div className="h-[710vh]">
        <div
          className="grid min-h-[90vh] w-full bg-cover bg-no-repeat mt-24"
          style={{
            backgroundImage:
              'url(https://web.bookandlink.com/wp-content/uploads/2022/02/banner-4.jpg)',
          }}
        >
          <div className="w-[450px] mt-12 ml-16 text-justify text-[17px] text-gray-600">
            <div className="ml-4 mt-10">
              <img
                src="https://web.bookandlink.com/wp-content/uploads/2022/02/logo-payku-1.png"
                style={{ height: '120px' }}
              />
              <p className="mt-12">
                <b>Capture and Charge Guest’s Credit card</b> at any steps of
                the Reservation and from any Sources: whether from the{' '}
                <b>Direct Bookings</b>, from the <b>OTAs</b> or simply by adding
                the card <b>manually in the system.</b>
              </p>
              <p className="mt-6">
                <b>Payku</b> makes Guest Payments <b>fast, easy and secured.</b>
              </p>
            </div>
          </div>
        </div>
        <div className="h-[100vh] m-6 flex flex-row">
          <div className="w-[600px] mt-8 ml-12">
            <h1 className=" text-4xl font-semibold">
              From the Booking Engine to the PMS through the channel manager –
              we can help you processing Guest’s Credit Card at any steps.
            </h1>
            <p className="mt-8 text-gray-600">
              It becomes so easy to capture the Credit Cards from the Booking
              Engine or from the OTA’s Channels – or simply add the Card
              manually and store it in a vault.
            </p>
            <p className="mt-8 text-gray-600">
              <span className="font-bold text-purple-800">
                {' '}
                Payku will help you{' '}
              </span>
              to easily Charge, Preauth or Refund at any time the Guest’s
              CreditCard.
            </p>
            <div className="mt-6">
              <div className="px-3 py-2.5 bg-orange-500 w-44 rounded-3xl text-center text-white cursor-pointer hover:bg-orange-600">
                Get Started Now
              </div>
            </div>
          </div>
          <div className="ml-12 mt-8">
            <img
              src="https://web.bookandlink.com/wp-content/uploads/2022/02/PayKuPage-Invoice-1.jpg"
              style={{ height: '580px' }}
            />
          </div>
        </div>
        <div className="min-h-[65vh] bg-gray-100 justify-center place-items-center flex flex-row">
          <div className="h-[300px] w-[350px] bg-gray-50 mr-8">
            <div className="text-center mt-14 mx-6">
              <div className="flex flex-row justify-center">
                <img
                  src="https://web.bookandlink.com/wp-content/uploads/2022/02/icon1.png"
                  style={{ height: '25px' }}
                />
              </div>
              <div className="font-semibold mt-2">Less Fees!</div>
              <p className="mt-4 text-gray-600">
                Get started immediately with no setup fees or monthly fees . We
                only apply a small percentage charge on each transaction to
                cover everything.
              </p>
            </div>
          </div>
          <div className="h-[300px] w-[350px] bg-gray-50 mr-8">
            <div className="text-center mt-14 mx-6">
              <div className="flex flex-row justify-center">
                <img
                  src="https://web.bookandlink.com/wp-content/uploads/2022/02/icon2.png"
                  style={{ height: '25px' }}
                />
              </div>
              <div className="font-semibold mt-2">Less work!</div>
              <p className="mt-4 text-gray-600">
                Payku makes reconciliation easy and very fast: all Payments can
                be done via a single solution!
              </p>
            </div>
          </div>
          <div className="h-[300px] w-[350px] bg-gray-50">
            <div className="text-center mt-14 mx-6">
              <div className="flex flex-row justify-center">
                <img
                  src="https://web.bookandlink.com/wp-content/uploads/2022/02/icon3.png"
                  style={{ height: '25px' }}
                />
              </div>
              <div className="font-semibold mt-2">Less risks!</div>
              <p className="mt-4 text-gray-600">
                We using 3DS extra card verification to detect fraud – which is
                particularly important for international cards.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[90vh] m-6 flex flex-row">
          <div className="w-[500px] mt-14 ml-12">
            <h1 className="text-xl font-semibold text-blue-900">
              We Save You Money
            </h1>
            <h1 className=" text-5xl font-semibold mt-4">
              Easy and Fast Guest’s Payments
            </h1>
            <p className="mt-8 text-gray-600">
              Payku will let you Gain Control of Guest’s payment to charge the
              Guest’s credit card at any moment in a secure way and according to
              Hotel’s Policy.
            </p>
            <p className="mt-8 text-gray-600">
              We also provide FREE Charge back so don’t worry about refunds and
              extra fees…
            </p>
            <div className="mt-6">
              <div className="px-3 py-2.5 bg-orange-500 w-52 rounded-3xl text-center text-white cursor-pointer hover:bg-orange-600">
                Submit Your Application
              </div>
            </div>
          </div>
          <div className="w-[650px] ml-12">
            <div className="flex flex-row">
              <div className="w-72 ml-14">
                <div className="mt-14">
                  <div className="flex flex-row">
                    <img
                      src="https://web.bookandlink.com/wp-content/uploads/2022/02/icon4.png"
                      style={{ height: '25px' }}
                    />
                  </div>
                  <div className="font-semibold mt-2">No extra fees</div>
                  <p className="mt-4 text-gray-600">
                    We charge no set-up fees, monthly service fees or flat
                    amounts on transactions. The percentage charge on each
                    transaction covers everything.
                  </p>
                </div>
                <div className="mt-14">
                  <div className="flex flex-row">
                    <img
                      src="https://web.bookandlink.com/wp-content/uploads/2022/02/icon5.png"
                      style={{ height: '25px' }}
                    />
                  </div>
                  <div className="font-semibold mt-2">Less chargebacks</div>
                  <p className="mt-4 text-gray-600">
                    We help cut many of the costs you incur and losses you
                    experience handling chargebacks and processing claims for
                    no-shows.
                  </p>
                </div>
              </div>
              <div className="w-72 ml-14">
                <div className="mt-14">
                  <div className="flex flex-row">
                    <img
                      src="https://web.bookandlink.com/wp-content/uploads/2022/02/icon6.png"
                      style={{ height: '25px' }}
                    />
                  </div>
                  <div className="font-semibold mt-2">Control your funds</div>
                  <p className="mt-4 text-gray-600">
                    We provide you with the ability to decide when you want
                    funds transferred to your account so you avoid inward bank
                    fees on small amounts.
                  </p>
                </div>
                <div className="mt-14">
                  <div className="flex flex-row">
                    <img
                      src="https://web.bookandlink.com/wp-content/uploads/2022/02/icon7.png"
                      style={{ height: '25px' }}
                    />
                  </div>
                  <div className="font-semibold mt-2">Easy process</div>
                  <p className="mt-4 text-gray-600">
                    We don’t force accommodations to put up expensive financial
                    bonds or term deposits as a security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[95vh] bg-blue-50 p-6 flex flex-row">
          <div className="w-[500px] mt-14 ml-12">
            <h1 className="text-xl font-semibold text-blue-900">
              We cut your workload
            </h1>
            <h1 className=" text-5xl font-semibold mt-4">
              Easy accounting with Bookings & Payments in the same place
            </h1>
            <p className="mt-8 text-gray-600">
              Use Payku to capture and charge payments for Reservations from ANY
              SOURCES, including additional Extras Invoices – in just a few
              clicks.
            </p>
            <div className="mt-6">
              <div className="px-3 py-2.5 bg-orange-500 w-64 rounded-3xl text-center text-white cursor-pointer hover:bg-orange-600">
                Setting up is quick & FREE!
              </div>
            </div>
          </div>
          <div className="w-[650px] ml-12">
            <div className="flex flex-row">
              <div className="w-72 ml-14">
                <div className="mt-14">
                  <div className="flex flex-row">
                    <img
                      src="https://web.bookandlink.com/wp-content/uploads/2022/02/icon10.png"
                      style={{ height: '25px' }}
                    />
                  </div>
                  <div className="font-semibold mt-2">Auto sync</div>
                  <p className="mt-4 text-gray-600">
                    Auto-syncing with your booking policies provides hands-off
                    control on when client cards are charged and
                    pre-authorisations made… right down to the room level.
                  </p>
                </div>
                <div className="mt-20">
                  <div className="flex flex-row">
                    <img
                      src="https://web.bookandlink.com/wp-content/uploads/2022/02/icon11.png"
                      style={{ height: '25px' }}
                    />
                  </div>
                  <div className="font-semibold mt-2">Reports</div>
                  <p className="mt-4 text-gray-600">
                    In-built reports provide real-time visibility, saving time.
                  </p>
                </div>
              </div>
              <div className="w-72 ml-14">
                <div className="mt-14">
                  <div className="flex flex-row">
                    <img
                      src="https://web.bookandlink.com/wp-content/uploads/2022/02/icon8.png"
                      style={{ height: '25px' }}
                    />
                  </div>
                  <div className="font-semibold mt-2">Integrated</div>
                  <p className="mt-4 text-gray-600">
                    Payku is built right into your booking engine / channel
                    manager and PMS so all the booking data and payments data is
                    in one place. This makes reconciliation easy and very fast…
                    saving you lots of time.
                  </p>
                </div>
                <div className="mt-14">
                  <div className="flex flex-row">
                    <img
                      src="https://web.bookandlink.com/wp-content/uploads/2022/02/icon9.png"
                      style={{ height: '25px' }}
                    />
                  </div>
                  <div className="font-semibold mt-2">Support</div>
                  <p className="mt-4 text-gray-600">
                    We do most of the heavy lifting handling chargeback claims
                    and claims for no-shows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[80vh]">
          <div className="flex flex-row">
            <div className="w-2/4 mt-14 ml-14">
              <h1 className="text-xl font-semibold text-blue-900">
                We reduce your risks
              </h1>
              <h1 className=" text-5xl font-semibold mt-4">
                Security and Compliance
              </h1>
            </div>
            <div className="w-2/4 mt-14 mr-14">
              <h1 className="text-xl font-semibold text-blue-900">
                We speed things up
              </h1>
              <h1 className=" text-5xl font-semibold mt-4">
                Straightforward Approval
              </h1>
            </div>
          </div>
          <div className="flex flex-row mt-8 mx-14">
            <div className="mt-8 w-72 mr-10">
              <div className="flex flex-row">
                <img
                  src="https://web.bookandlink.com/wp-content/uploads/2022/02/icon12.png"
                  style={{ height: '25px' }}
                />
              </div>
              <div className="font-semibold mt-2">Tokenization</div>
              <p className="mt-4 text-gray-600">
                We store the credit car din a Vault so its not possible for
                anyone to read the full credit card details of the Guest. The
                system is fully PCI DSS v3.2.2 Level 1 compliant.
              </p>
            </div>
            <div className="mt-8 w-72 mr-10">
              <div className="flex flex-row">
                <img
                  src="https://web.bookandlink.com/wp-content/uploads/2022/02/icon13.png"
                  style={{ height: '25px' }}
                />
              </div>
              <div className="font-semibold mt-2">Secure</div>
              <p className="mt-4 text-gray-600">
                We have extra steps in card verification designed to detect
                fraud (called 3DS)- which is particularly important for
                international cards..
              </p>
            </div>
            <div className="mt-8 w-72 mr-10">
              <div className="flex flex-row">
                <img
                  src="https://web.bookandlink.com/wp-content/uploads/2022/02/icon14.png"
                  style={{ height: '25px' }}
                />
              </div>
              <div className="font-semibold mt-2">Payouts</div>
              <p className="mt-4 text-gray-600">
                Withdraw to Hotel’s Account is usually made every 2 working days
                and once Reservation already checked out to increase security
                and to protect all parties.
              </p>
            </div>
            <div className="mt-8 w-72 mr-10">
              <div className="flex flex-row">
                <img
                  src="https://web.bookandlink.com/wp-content/uploads/2022/02/icon15.png"
                  style={{ height: '25px' }}
                />
              </div>
              <div className="font-semibold mt-2">Sign up process</div>
              <p className="mt-4 text-gray-600">
                There are no setup fees and you can start accepting Credit Card
                in 1 or 2 working days.
              </p>
            </div>
          </div>
        </div>
        <div className="h-[115vh] flex flex-row bg-gray-100">
          <div className="w-[580px] mt-14 ml-16">
            <h1 className=" text-5xl font-semibold">
              PAYKU solve a real problem for anyone having difficulties
              processing Credit Cards
            </h1>
            <div className="flex flex-row">
              <div className="mt-8 w-72 mr-10">
                <div className="flex flex-row">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2022/02/icon16.png"
                    style={{ height: '25px' }}
                  />
                </div>
                <p className="mt-4 text-gray-600">
                  Risks are on our side and we adapt the flow to the Hospitality
                  Industry. Make online payment finally available and affordable
                  for any Property Owner!
                </p>
              </div>
              <div className="mt-8 w-72 mr-10">
                <div className="flex flex-row">
                  <img
                    src="https://web.bookandlink.com/wp-content/uploads/2022/02/icon17.png"
                    style={{ height: '25px' }}
                  />
                </div>
                <p className="mt-4 text-gray-600">
                  We work in many countries where no local service was
                  previously available.
                </p>
              </div>
            </div>
            <div className="mt-6">
              <div className="px-3 py-2.5 bg-orange-500 w-44 rounded-3xl text-center text-white cursor-pointer hover:bg-orange-600">
                Contact Sales
              </div>
            </div>
          </div>
          <div className="ml-20 mt-14">
            <img
              src="https://web.bookandlink.com/wp-content/uploads/2022/02/PayKuPage-CreditCard.jpg"
              style={{ height: '580px' }}
            />
          </div>
        </div>
        <div className="h-[60vh] bg-violet-950 flex flex-col">
          <div className="place-items-center justify-center text-white text-center">
            <h1 className="text-5xl font-semibold mt-20">
              Accept Online Payments Now!
            </h1>
            <div className="place-items-center justify-center mt-6">
              Make payments easy, fast, secure and a natural part of the guest
              experience. With Payku, you have the flexibility to take payments
              at any step of the booking process.
            </div>
            <div className="mt-6 flex flex-row justify-center">
              <div className="px-3 py-2.5 bg-orange-500 w-44 rounded-3xl text-center text-white cursor-pointer hover:bg-orange-600">
                Contact Sales
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
