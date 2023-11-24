import Image from 'next/image';

export default function section1() {
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">{Slide()}</div>
    </section>
  );
}

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Image
          src={
            'https://web.bookandlink.com/wp-content/uploads/2020/04/banner-image-bookandlink3.jpg'
          }
          width={''}
        />
      </div>
      <div className="info"></div>
    </div>
  );
}
