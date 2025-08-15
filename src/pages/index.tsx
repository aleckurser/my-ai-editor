// pages/index.js

import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about">
        <button>Go to About Page</button>
      </Link>
    </div>
  );
}