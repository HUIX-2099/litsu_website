'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const programs = [
  {
    id: 1,
    title: 'International Girls in ICT Day 2025',
    date: 'April 2025',
    image: '/images/514263092_1192869766219421_1489603603709129562_n.jpg',
    description: 'LITSU Celebrates International Girls in ICT Day with over 100 promising students. This event empowers young women to pursue careers in technology.',
    category: 'Event',
  },
  {
    id: 2,
    title: 'Tech Innovation Summit',
    date: 'March 2025',
    image: '/images/547418950_1231566829016381_909490679170633643_n.jpg',
    description: 'Annual summit bringing together tech leaders, innovators, and students to discuss the future of technology in Liberia.',
    category: 'Conference',
  },
  {
    id: 3,
    title: 'Coding Bootcamp Series',
    date: 'Ongoing',
    image: '/images/549417263_1238746744965056_5057421483382561117_n.jpg',
    description: 'Intensive programming training sessions for aspiring developers, covering web development, mobile apps, and more.',
    category: 'Training',
  },
  {
    id: 4,
    title: 'LITSU Annual Conference',
    date: 'December 2025',
    image: '/images/503240716_3972473886350492_4933304496750629387_n.jpg',
    description: 'The biggest gathering of IT students in Liberia, featuring workshops, competitions, and networking opportunities.',
    category: 'Conference',
  },
  {
    id: 5,
    title: 'Community Tech Outreach',
    date: 'Monthly',
    image: '/images/495090771_4015117368634046_697969129381355444_n.jpg',
    description: 'Monthly community service programs where LITSU members teach basic computer skills to underserved communities.',
    category: 'Community',
  },
  {
    id: 6,
    title: 'Hackathon Challenge',
    date: 'June 2025',
    image: '/images/487873106_2682700655252275_6456405986743497483_n.jpg',
    description: '48-hour coding competition where teams build innovative solutions to real-world problems in Liberia.',
    category: 'Competition',
  },
];

const categories = ['All', 'Event', 'Conference', 'Training', 'Community', 'Competition'];

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPrograms = activeCategory === 'All' 
    ? programs 
    : programs.filter(p => p.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          paddingTop: '140px',
          paddingBottom: '80px',
          background: 'linear-gradient(135deg, #09090b 0%, #18181b 100%)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            right: '0',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
            transform: 'translateY(-50%)',
          }}
        />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '700px' }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#71717a',
                textDecoration: 'none',
                marginBottom: '24px',
                fontSize: '14px',
              }}
            >
              <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <span
              style={{
                display: 'inline-flex',
                padding: '8px 16px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: 500,
                backgroundColor: 'rgba(59, 130, 246, 0.12)',
                color: '#60a5fa',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                marginBottom: '20px',
              }}
            >
              Programs
            </span>
            <h1
              style={{
                fontSize: 'clamp(40px, 6vw, 64px)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.1,
                marginBottom: '24px',
              }}
            >
              Our{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Programs
              </span>
            </h1>
            <p style={{ fontSize: '18px', color: '#a1a1aa', lineHeight: 1.7 }}>
              Discover our events, workshops, and initiatives designed to empower tech students across Liberia.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section style={{ padding: '80px 24px', backgroundColor: '#09090b' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Categories */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '48px', justifyContent: 'center' }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  fontWeight: 500,
                  fontSize: '14px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: activeCategory === category ? '#3b82f6' : 'rgba(39, 39, 42, 0.8)',
                  color: activeCategory === category ? '#fff' : '#a1a1aa',
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '32px',
            }}
          >
            {filteredPrograms.map((program) => (
              <div
                key={program.id}
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(24, 24, 27, 0.9)',
                  border: '1px solid rgba(63, 63, 70, 0.5)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <Image src={program.image} alt={program.title} fill style={{ objectFit: 'cover' }} />
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      padding: '6px 14px',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: 600,
                      backgroundColor: '#ef4444',
                      color: '#fff',
                    }}
                  >
                    {program.category}
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: '#71717a', fontSize: '14px' }}>
                    <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {program.date}
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>{program.title}</h3>
                  <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.6, marginBottom: '20px' }}>{program.description}</p>
                  <Link
                    href={`/programs/${program.id}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#60a5fa',
                      fontWeight: 600,
                      fontSize: '14px',
                      textDecoration: 'none',
                    }}
                  >
                    Learn More
                    <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '100px 24px',
          background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)',
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>
            Want to Participate in Our Programs?
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', marginBottom: '32px', lineHeight: 1.6 }}>
            Join LITSU to get access to all our events, workshops, and exclusive opportunities.
          </p>
          <Link
            href="/membership"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 32px',
              backgroundColor: '#fff',
              color: '#1e40af',
              fontWeight: 600,
              fontSize: '16px',
              borderRadius: '9999px',
              textDecoration: 'none',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
            }}
          >
            Become a Member
          </Link>
        </div>
      </section>
    </>
  );
}
