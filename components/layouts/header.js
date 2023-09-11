import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-400">
      <div className="mx-20">
        <ul className="flex flex-row gap-4 ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/post">Post</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
