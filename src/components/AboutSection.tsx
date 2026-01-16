'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: '🎯', text: 'Leadership Development' },
    { icon: '💼', text: 'Career Opportunities' },
    { icon: '🤝', text: 'Community Service' },
    { icon: '💡', text: 'Tech Innovation' },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '100px 24px',
        backgroundColor: '#09090b',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Image */}
          <div
            style={{
              position: 'relative',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.7s ease',
            }}
          >
            <div
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                aspectRatio: '4/3',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              }}
            >
              <Image src="/images/cover2.jpg" alt="LITSU Event" fill style={{ objectFit: 'cover' }} />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                }}
              />
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px', color: '#fff' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: 500,
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(10px)',
                    marginBottom: '12px',
                  }}
                >
                  Featured Event
                </span>
                <h4 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '4px' }}>International Girls in ICT Day</h4>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>Celebrating with over 100 promising students</p>
              </div>
            </div>

            {/* Floating Card */}
            <div
              style={{
                position: 'absolute',
                bottom: '-24px',
                right: '-24px',
                padding: '24px',
                borderRadius: '20px',
                backgroundColor: 'rgba(24, 24, 27, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(39, 39, 42, 0.8)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              }}
            >
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                10+
              </div>
              <div style={{ fontSize: '14px', color: '#a1a1aa', marginTop: '4px' }}>Years of Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.7s ease 0.2s',
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#60a5fa',
                marginBottom: '16px',
              }}
            >
              About LITSU
            </span>
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 44px)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.2,
                marginBottom: '24px',
              }}
            >
              Empowering Liberia&apos;s{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Tech Future
              </span>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#a1a1aa', lineHeight: 1.7 }}>
              <p>
                LITSU is a student organization devoted exclusively to the needs of information communication technology
                students who are presently enrolled in or have completed Technology Education courses.
              </p>
              <p>
                Established on June 24, 2015, by Willie Bee Tingba Jr. and dedicated students from various ICT
                institutions, LITSU has grown to become Liberia&apos;s largest technology student community.
              </p>
            </div>

            {/* Features Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                marginTop: '32px',
              }}
            >
              {features.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(24, 24, 27, 0.8)',
                    border: '1px solid rgba(39, 39, 42, 0.6)',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span style={{ fontSize: '24px' }}>{item.icon}</span>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: '#fff' }}>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
              <Link
                href="/about"
                style={{
                  padding: '14px 28px',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: 600,
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
                }}
              >
                Learn More
              </Link>
              <Link
                href="/membership"
                style={{
                  padding: '14px 28px',
                  backgroundColor: 'rgba(39, 39, 42, 0.8)',
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: 600,
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  border: '1px solid rgba(63, 63, 70, 0.6)',
                }}
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
