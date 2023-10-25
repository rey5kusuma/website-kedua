import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Contact() {
  return (
    <MainLayout title="Tentang Kami - Bookandlink">
      <div className="grid min-h-[240vh]">
        <div className="flex flex-row bg-no-repeat h-[60vh] place-items-center mt-16">
          <img
            src="https://web.bookandlink.com/wp-content/uploads/2020/04/main-about-1500x323.jpg"
            className=""
            alt="image"
            style={{ height: '300px' }}
          />
        </div>
        <div className="h-[150vh]">
          <div className="mx-48 mt-6 text-gray-700">
            <h1 className="text-center text-4xl">Tentang Kami</h1>
            <p className="text-justify text-lg mt-6">
              BookandLink didirikan pada tahun 2014, saat itu melihat tidak ada
              solusi perangkat lunak yang komprehensif dan nyata di industri
              perhotelan. Sistem kami yang cepat dan andal serta mesin reservasi
              yang didukung melalui Internet dengan memungkinkan pelanggan untuk
              menentukan persyaratan dan kebutuhan perjalanannya. Ini juga
              membantu pemilik properti mengendalikan distribusi online dan
              meningkatkan kapasitas pemesanan langsung dengan mendapatkan dan
              mengarahkan reservasi baru pada situs web properti.
            </p>
            <div className="flex flex-row justify-center">
              <div className="text-center">
                <div className="rounded-full w-48 h-48 bg-sky-500 mt-12 mx-14 p-9">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="120"
                      height="120"
                      fill="white"
                      class="bi bi-building"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
                      <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" />
                    </svg>
                  </div>
                </div>
                <h1 className="text-lg font-semibold mt-3">2,000 Properti</h1>
              </div>
              <div className="text-center">
                <div className="rounded-full w-48 h-48 bg-sky-500 mt-12 mx-14 p-9">
                  <div className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="120"
                      height="120"
                      fill="white"
                      class="bi bi-person-raised-hand"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a.998.998 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207Z" />
                      <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
                    </svg>
                  </div>
                </div>
                <h1 className="text-lg font-semibold mt-3">70 Mitra</h1>
              </div>
            </div>
          </div>
          <div className="text-justify text-lg mx-48 mt-14 text-gray-700">
            <p>
              Hingga saat ini, BookandLink telah berhasil mengembangkan sistem
              yang canggih dengan menjangkau lebih dari 750 properti di seluruh
              Indonesia dan mengintegrasikan sistem dengan 50 mitra. Tim
              BookandLink menggabungkan dua faktor utama untuk kesuksesan
              pemesanan kamar.
            </p>
            <p className="mt-4">
              Pertama, kami berusaha untuk mempertahankan tingkat keunggulan
              dalam Bisnis Perhotelan. Kedua, kami mengintegrasikan bisnis
              perhotelan dengan pengetahuan ahli kami tentang teknologi
              internet. Kami memiliki pengalaman lebih dari 10 tahun pada sektor
              teknologi internet dan itu membuat kami optimal dalam membantu
              setiap klien. Ini menjadi hal utama yang telah membuat kami diakui
              sebagai salah satu pemimpin industri terbaru di bidang kami.
            </p>
            <p className="mt-4">
              Ada cara yang lebih baik untuk meningkatkan semua aspek dari
              proses reservasi. Kami ingin memungkinkan akses mudah bagi
              pelanggan, meningkatkan keamanan, memaksimalkan transaksi, dan
              fokus pada kecepatan akses bagi pelanggan potensial secara online.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
