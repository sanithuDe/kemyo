"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

    useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: '/projects', label: 'PROJECTS' },
    { href: '/design', label: 'DESIGN & BUILD' },
    { href: '/services', label: 'SERVICES' },
    { href: '/about', label: 'ABOUT US' },
   
     { href: '/team', label: 'CAREERS' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
   if (!mounted) {
    return null;
  }

  return (

    
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="max-w-8xl mx-auto relative">
  <div className="flex items-center justify-between px-4 py-2 bg-black/40 border-b border-white/10">
          {/* Left: logo */}
          <div className="flex items-center flex-none">
            <div className="relative w-16 h-8">
              <Image src="/KEMYO-LOGO.png" alt="Kemyo logo" fill style={{ objectFit: 'contain' }} />
            </div>
          </div>

          {/* Center: nav links */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-yellow-400 hover:text-yellow-300 transition-colors duration-300 text-xs tracking-wider font-medium py-2 px-2
                    ${pathname === item.href ? 'border-b-2 border-yellow-400' : 'border-b-2 border-transparent hover:border-yellow-300'}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: CTA & mobile button */}
          <div className="flex items-center gap-3 flex-none">
            <Link href="/contact" className="hidden md:inline-block bg-yellow-600 text-white text-xs px-4 py-2 rounded-sm font-medium shadow">
              CONTACT US →
            </Link>
            <button onClick={toggleMenu} className="md:hidden text-yellow-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm md:hidden">
            <div className="flex flex-col space-y-3 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={toggleMenu}
                  className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 text-xs py-1"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 text-xs py-1"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}