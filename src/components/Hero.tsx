'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    image: '/images/benner1.jpg',
    subtitle: 'We Walk Together, We Move Together',
    title: 'We Push',
    highlight: 'Technology',
  },
  {
    image: '/images/benner2.jpg',
    subtitle: 'Message of Appreciation',
    title: 'From',
    highlight: 'LITSU',
  },
  {
    image: '/images/benner3.jpg',
    subtitle: 'In this digital age',
    title: 'The Symbol of',
    highlight: 'Transformation',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#09090b',
        overflow: 'hidden',
      }}
    >
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: index === currentSlide ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0}
          />
          {/* Overlays */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(9,9,11,1) 0%, rgba(9,9,11,0.85) 40%, transparent 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(9,9,11,1) 0%, transparent 50%, rgba(9,9,11,0.6) 100%)',
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '100px',
          paddingBottom: '60px',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
          <div style={{ maxWidth: '720px' }}>
            {/* Badge */}
            <div style={{ marginBottom: '32px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  fontWeight: 500,
                  backgroundColor: 'rgba(59, 130, 246, 0.12)',
                  color: '#60a5fa',
                  border: '1px solid rgba(59, 130, 246, 0.25)',
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#60a5fa',
                    animation: 'pulse 2s infinite',
                  }}
                />
                Empowering Tech Students Since 2015
              </span>
            </div>

            {/* Title */}
            <div style={{ marginBottom: '32px' }}>
              <p
                style={{
                  color: '#a1a1aa',
                  fontSize: '20px',
                  fontWeight: 500,
                  marginBottom: '16px',
                }}
              >
                {slides[currentSlide].subtitle}
              </p>
              <h1
                style={{
                  fontSize: 'clamp(48px, 8vw, 80px)',
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                {slides[currentSlide].title}{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {slides[currentSlide].highlight}
                </span>
              </h1>
            </div>

            {/* Description */}
            <p
              style={{
                color: '#a1a1aa',
                fontSize: '18px',
                lineHeight: 1.7,
                maxWidth: '600px',
                marginBottom: '40px',
              }}
            >
              Join Liberia&apos;s largest community of technology students. Build skills, 
              connect with innovators, and shape the future of tech in Africa.
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '48px' }}>
              <Link 
                href="/about" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 28px',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '16px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 30px rgba(59, 130, 246, 0.35)',
                  transition: 'all 0.2s ease',
                }}
              >
                Discover LITSU
                <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                href="/membership" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 28px',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '16px',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.2s ease',
                }}
              >
                Become a Member
              </Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: '48px' }}>
              {[
                { value: '15+', label: 'Chapters' },
                { value: '500+', label: 'Members' },
                { value: '10+', label: 'Years' },
              ].map((stat, index) => (
                <div key={index}>
                  <div
                    style={{
                      fontSize: '36px',
                      fontWeight: 700,
                      color: '#fff',
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '14px', color: '#71717a', marginTop: '4px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          display: 'flex',
          gap: '8px',
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              height: '4px',
              width: index === currentSlide ? '32px' : '16px',
              borderRadius: '9999px',
              backgroundColor: index === currentSlide ? '#3b82f6' : '#52525b',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '40px',
          zIndex: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
        className="hidden lg:flex"
      >
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, transparent, #52525b, transparent)',
          }}
        />
        <span
          style={{
            fontSize: '11px',
            color: '#71717a',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
