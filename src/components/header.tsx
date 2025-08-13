'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#004526] text-white py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">CafeName</h1>
      <nav className="space-x-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/menu" className="hover:underline">Menu</Link>
        <Link href="/thank-you" className="hover:underline">Thank You</Link>
      </nav>
    </header>
  );
}