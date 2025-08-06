'use client';

export default function Footer() {
  return (
    <footer className="bg-[#004526] text-white py-3 px-6 text-center mt-auto">
      <p className="text-sm">&copy; {new Date().getFullYear()} CafeName. All rights reserved.</p>
    </footer>
  );
}
