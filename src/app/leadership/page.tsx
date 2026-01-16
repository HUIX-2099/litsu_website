'use client';

import Image from 'next/image';
import Link from 'next/link';

const leadershipTeam = [
  {
    name: 'Archie Sehkro',
    role: 'President',
    image: '/images/Archie.jpg',
    bio: 'Leading LITSU towards a brighter tech future for Liberia.',
  },
  {
    name: 'Sidiki Kamara',
    role: 'Vice President',
    image: '/images/Sidiki kamara.jpg',
    bio: 'Supporting initiatives and member engagement across chapters.',
  },
  {
    name: 'David D. Kin',
    role: 'Secretary General',
    image: '/images/David D. Kin.jpg',
    bio: 'Managing communications and organizational records.',
  },
  {
    name: 'Gaynor Z. Worzi',
    role: 'Financial Secretary',
    image: '/images/Gaynor Z.  Worzi.jpg',
    bio: 'Overseeing financial operations and transparency.',
  },
];

export default function LeadershipPage() {
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
            top: '30%',
            left: '20%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
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
              Leadership
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
                Leadership
              </span>
            </h1>
            <p style={{ fontSize: '18px', color: '#a1a1aa', lineHeight: 1.7 }}>
              Meet the dedicated individuals leading LITSU towards a brighter tech future for Liberia.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section style={{ padding: '100px 24px', backgroundColor: '#09090b' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
              Current Term 2024-2025
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#fff' }}>Executive Board</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
            }}
          >
            {leadershipTeam.map((member, index) => (
              <div
                key={index}
                style={{
                  textAlign: 'center',
                  padding: '32px',
                  borderRadius: '24px',
                  backgroundColor: 'rgba(24, 24, 27, 0.9)',
                  border: '1px solid rgba(63, 63, 70, 0.5)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '160px',
                    height: '160px',
                    margin: '0 auto 24px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '3px solid rgba(59, 130, 246, 0.3)',
                  }}
                >
                  <Image src={member.image} alt={member.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>{member.name}</h3>
                <p style={{ fontSize: '14px', color: '#60a5fa', fontWeight: 500, marginBottom: '12px' }}>{member.role}</p>
                <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.5 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section
        style={{
          padding: '100px 24px',
          background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '64px', color: 'rgba(255,255,255,0.3)', marginBottom: '24px' }}>&ldquo;</div>
          <blockquote
            style={{
              fontSize: 'clamp(24px, 3vw, 32px)',
              fontWeight: 600,
              color: '#fff',
              lineHeight: 1.4,
              marginBottom: '24px',
            }}
          >
            Together, we are building a tech-savvy generation that will transform Liberia and Africa.
          </blockquote>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>— LITSU Leadership Team</p>
        </div>
      </section>

      {/* Want to Lead CTA */}
      <section style={{ padding: '100px 24px', backgroundColor: '#18181b' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
            Want to Lead?
          </h2>
          <p style={{ fontSize: '16px', color: '#a1a1aa', marginBottom: '32px', lineHeight: 1.6 }}>
            LITSU provides opportunities for members to develop leadership skills and run for elected positions.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
            <Link
              href="/membership"
              style={{
                padding: '16px 32px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                color: '#fff',
                fontWeight: 600,
                fontSize: '16px',
                borderRadius: '9999px',
                textDecoration: 'none',
                boxShadow: '0 8px 30px rgba(59, 130, 246, 0.35)',
              }}
            >
              Become a Member First
            </Link>
            <Link
              href="/contact"
              style={{
                padding: '16px 32px',
                backgroundColor: 'transparent',
                color: '#fff',
                fontWeight: 600,
                fontSize: '16px',
                borderRadius: '9999px',
                textDecoration: 'none',
                border: '2px solid rgba(255,255,255,0.3)',
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
