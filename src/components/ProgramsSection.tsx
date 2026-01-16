'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const programs = [
  { id: 1, title: 'International Girls in ICT Day 2025', date: 'April 2025', image: '/images/514263092_1192869766219421_1489603603709129562_n.jpg', category: 'Event' },
  { id: 2, title: 'Tech Innovation Summit', date: 'March 2025', image: '/images/547418950_1231566829016381_909490679170633643_n.jpg', category: 'Conference' },
  { id: 3, title: 'Coding Bootcamp Series', date: 'Ongoing', image: '/images/549417263_1238746744965056_5057421483382561117_n.jpg', category: 'Training' },
  { id: 4, title: 'LITSU Annual Conference', date: 'December 2025', image: '/images/503240716_3972473886350492_4933304496750629387_n.jpg', category: 'Conference' },
];

export default function ProgramsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '100px 24px',
        backgroundColor: '#18181b',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginBottom: '48px',
            gap: '16px',
          }}
        >
          <div>
            <span
              style={{
                display: 'block',
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#60a5fa',
                marginBottom: '12px',
              }}
            >
              What We Do
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#fff' }}>
              Our Programs & Events
            </h2>
          </div>
          <Link
            href="/programs"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#60a5fa',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            View All Programs
            <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {programs.map((program, index) => (
            <Link
              key={program.id}
              href={`/programs/${program.id}`}
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                textDecoration: 'none',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.5s ease ${index * 0.1}s`,
                gridColumn: index === 0 ? 'span 2' : 'span 1',
                gridRow: index === 0 ? 'span 2' : 'span 1',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  height: index === 0 ? '420px' : '240px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '6px 12px',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: 500,
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(10px)',
                      color: '#fff',
                      width: 'fit-content',
                      marginBottom: '10px',
                    }}
                  >
                    {program.category}
                  </span>
                  <h3
                    style={{
                      fontSize: index === 0 ? '22px' : '16px',
                      fontWeight: 600,
                      color: '#fff',
                      marginBottom: '6px',
                    }}
                  >
                    {program.title}
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '13px',
                    }}
                  >
                    <svg style={{ width: '14px', height: '14px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {program.date}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
