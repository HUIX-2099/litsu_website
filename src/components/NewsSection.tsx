'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const news = [
  { id: 1, title: 'LITSU Partners with Tech Giants for Student Internships', category: 'Announcement', date: 'January 10, 2025', image: '/images/495090771_4015117368634046_697969129381355444_n.jpg' },
  { id: 2, title: 'Annual Tech Summit Breaks Attendance Records', category: 'Events', date: 'December 28, 2024', image: '/images/487873106_2682700655252275_6456405986743497483_n.jpg' },
  { id: 3, title: 'New Chapter Opens at BlueCrest University', category: 'Chapters', date: 'December 15, 2024', image: '/images/487306504_2619005224961340_341044111677632384_n.jpg' },
];

const leaders = [
  { name: 'H.E. Archie Sehkro', role: 'President of LITSU', image: '/images/Archie.jpg' },
  { name: 'Hon. Sidiki Kamara', role: 'Vice President of LITSU', image: '/images/Sidiki kamara.jpg' },
];

export default function NewsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentLeader, setCurrentLeader] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentLeader((prev) => (prev + 1) % leaders.length), 4000);
    return () => clearInterval(timer);
  }, []);

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
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
          }}
        >
          {/* Leadership Column */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.7s ease',
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
                marginBottom: '12px',
              }}
            >
              Leadership
            </span>
            <h3
              style={{
                fontSize: 'clamp(24px, 3vw, 32px)',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '24px',
              }}
            >
              Current Leaders
            </h3>

            {/* Leader Slider */}
            <div
              style={{
                position: 'relative',
                aspectRatio: '3/4',
                borderRadius: '20px',
                overflow: 'hidden',
              }}
            >
              {leaders.map((leader, index) => (
                <div
                  key={index}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: index === currentLeader ? 1 : 0,
                    transition: 'opacity 0.6s ease',
                  }}
                >
                  <Image src={leader.image} alt={leader.name} fill style={{ objectFit: 'cover' }} />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
                    }}
                  />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: 600, color: '#fff' }}>{leader.name}</h4>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>{leader.role}</p>
                  </div>
                </div>
              ))}

              {/* Indicators */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  right: '24px',
                  display: 'flex',
                  gap: '6px',
                }}
              >
                {leaders.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentLeader(i)}
                    style={{
                      height: '4px',
                      width: i === currentLeader ? '24px' : '12px',
                      borderRadius: '9999px',
                      backgroundColor: i === currentLeader ? '#fff' : 'rgba(255,255,255,0.4)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* News Column */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.7s ease 0.2s',
              gridColumn: 'span 2',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                marginBottom: '24px',
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
                  Latest Updates
                </span>
                <h3
                  style={{
                    fontSize: 'clamp(24px, 3vw, 32px)',
                    fontWeight: 700,
                    color: '#fff',
                  }}
                >
                  News & Announcements
                </h3>
              </div>
              <Link
                href="/news"
                style={{
                  color: '#60a5fa',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                View All →
              </Link>
            </div>

            {/* News List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {news.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    padding: '12px',
                    marginLeft: '-12px',
                    marginRight: '-12px',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(24, 24, 27, 0.8)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '140px',
                      height: '100px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      flexShrink: 0,
                    }}
                  >
                    <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <span
                        style={{
                          padding: '4px 10px',
                          borderRadius: '9999px',
                          fontSize: '12px',
                          fontWeight: 500,
                          backgroundColor: 'rgba(59, 130, 246, 0.12)',
                          color: '#60a5fa',
                        }}
                      >
                        {item.category}
                      </span>
                      <span style={{ fontSize: '12px', color: '#71717a' }}>{item.date}</span>
                    </div>
                    <h4
                      style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#fff',
                        lineHeight: 1.4,
                      }}
                    >
                      {item.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
