'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'News', href: '/news' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: isScrolled ? '12px 0' : '20px 0',
          backgroundColor: isScrolled ? 'rgba(9, 9, 11, 0.95)' : 'rgba(9, 9, 11, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: isScrolled ? '1px solid rgba(39, 39, 42, 0.5)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Logo */}
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <div
                style={{
                  position: 'relative',
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid #3f3f46',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                }}
              >
                <Image src="/images/logo.jpg" alt="LITSU Logo" fill style={{ objectFit: 'cover' }} />
              </div>
              <div>
                <h1 style={{ fontWeight: 700, color: '#fff', fontSize: '16px', lineHeight: 1.2, margin: 0 }}>LITSU</h1>
                <p style={{ fontSize: '11px', color: '#71717a', margin: 0 }}>Tech Students Union</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '6px 8px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(24, 24, 27, 0.9)',
                border: '1px solid rgba(63, 63, 70, 0.6)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
              }}
              className="hidden lg:flex"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{
                    padding: '10px 18px',
                    fontSize: '14px',
                    fontWeight: 500,
                    borderRadius: '9999px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    backgroundColor: pathname === item.href ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
                    color: pathname === item.href ? '#60a5fa' : '#a1a1aa',
                  }}
                  onMouseEnter={(e) => {
                    if (pathname !== item.href) {
                      e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
                      e.currentTarget.style.color = '#fff';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== item.href) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#a1a1aa';
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(39, 39, 42, 0.9)',
                  border: '1px solid rgba(63, 63, 70, 0.6)',
                  color: '#a1a1aa',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(63, 63, 70, 1)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(39, 39, 42, 0.9)';
                  e.currentTarget.style.color = '#a1a1aa';
                }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {/* Join Button */}
              <Link
                href="/membership"
                className="hidden lg:flex"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: 600,
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.35)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 25px rgba(59, 130, 246, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(59, 130, 246, 0.35)';
                }}
              >
                Join LITSU
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(39, 39, 42, 0.9)',
                  border: '1px solid rgba(63, 63, 70, 0.6)',
                  color: '#fff',
                  cursor: 'pointer',
                }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 40,
          }}
          className="lg:hidden"
        >
          {/* Backdrop */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(4px)',
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              height: '100%',
              width: '320px',
              maxWidth: '85vw',
              backgroundColor: '#18181b',
              borderLeft: '1px solid #27272a',
              boxShadow: '-10px 0 40px rgba(0,0,0,0.5)',
            }}
          >
            <div style={{ padding: '100px 24px 24px 24px' }}>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    style={{
                      padding: '16px 20px',
                      fontSize: '18px',
                      fontWeight: 500,
                      color: pathname === item.href ? '#60a5fa' : '#fff',
                      backgroundColor: pathname === item.href ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div style={{ marginTop: '32px', paddingTop: '32px', borderTop: '1px solid #27272a' }}>
                <Link
                  href="/membership"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    padding: '16px',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    color: '#fff',
                    fontWeight: 600,
                    borderRadius: '12px',
                    textDecoration: 'none',
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Join LITSU
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
