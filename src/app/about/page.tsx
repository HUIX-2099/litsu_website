'use client';

import Image from 'next/image';
import Link from 'next/link';

const boardMembers = [
  { name: 'Willie Bee Tingba Jr.', role: 'Founder', image: '/images/Archie.jpg' },
  { name: 'Archie Sehkro', role: 'President', image: '/images/Archie.jpg' },
  { name: 'Sidiki Kamara', role: 'Vice President', image: '/images/Sidiki kamara.jpg' },
  { name: 'David D. Kin', role: 'Secretary General', image: '/images/David D. Kin.jpg' },
];

const values = [
  { icon: '🎯', title: 'Leadership', description: 'Developing future tech leaders through mentorship and training.' },
  { icon: '💡', title: 'Innovation', description: 'Fostering creativity and technological advancement.' },
  { icon: '🤝', title: 'Community', description: 'Building strong networks among tech students.' },
  { icon: '📚', title: 'Education', description: 'Promoting continuous learning and skill development.' },
];

export default function AboutPage() {
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
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
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
              About Us
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
              Empowering{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Tech Students
              </span>
            </h1>
            <p style={{ fontSize: '18px', color: '#a1a1aa', lineHeight: 1.7 }}>
              Learn about LITSU&apos;s mission, history, and the dedicated team working to advance technology education in Liberia.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section style={{ padding: '100px 24px', backgroundColor: '#09090b' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '60px',
              alignItems: 'center',
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
                  marginBottom: '16px',
                }}
              >
                Our Story
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#fff', marginBottom: '24px' }}>
                A Decade of Impact
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#a1a1aa', lineHeight: 1.7 }}>
                <p>
                  The Liberia Information Technology Students Union (LITSU) was established on June 24, 2015, by Willie Bee Tingba Jr. and a group of dedicated students from various ICT institutions across Liberia.
                </p>
                <p>
                  What started as a small gathering of passionate tech enthusiasts has grown into Liberia&apos;s largest technology student community, with over 15 chapters and 500+ active members.
                </p>
                <p>
                  Today, LITSU continues to empower students through workshops, bootcamps, conferences, and community outreach programs, shaping the next generation of tech leaders in Africa.
                </p>
              </div>
            </div>
            <div
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                aspectRatio: '4/3',
              }}
            >
              <Image src="/images/cover2.jpg" alt="LITSU History" fill style={{ objectFit: 'cover' }} />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: '100px 24px', backgroundColor: '#18181b' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
            }}
          >
            <div
              style={{
                padding: '48px',
                borderRadius: '24px',
                backgroundColor: 'rgba(24, 24, 27, 0.9)',
                border: '1px solid rgba(63, 63, 70, 0.6)',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(59, 130, 246, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                }}
              >
                <svg style={{ width: '32px', height: '32px', color: '#60a5fa' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Our Mission</h3>
              <p style={{ color: '#a1a1aa', lineHeight: 1.7 }}>
                To unite and empower technology students across Liberia, providing them with the skills, resources, and opportunities needed to excel in the digital age.
              </p>
            </div>
            <div
              style={{
                padding: '48px',
                borderRadius: '24px',
                backgroundColor: 'rgba(24, 24, 27, 0.9)',
                border: '1px solid rgba(63, 63, 70, 0.6)',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  backgroundColor: 'rgba(168, 85, 247, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                }}
              >
                <svg style={{ width: '32px', height: '32px', color: '#a855f7' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Our Vision</h3>
              <p style={{ color: '#a1a1aa', lineHeight: 1.7 }}>
                To be the leading force in developing a tech-savvy generation that will transform Liberia and Africa through innovation and digital excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
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
                marginBottom: '16px',
              }}
            >
              What We Stand For
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#fff' }}>Our Core Values</h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
            }}
          >
            {values.map((value, index) => (
              <div
                key={index}
                style={{
                  padding: '32px',
                  borderRadius: '20px',
                  backgroundColor: 'rgba(24, 24, 27, 0.8)',
                  border: '1px solid rgba(63, 63, 70, 0.5)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>{value.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>{value.title}</h3>
                <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.6 }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section style={{ padding: '100px 24px', backgroundColor: '#18181b' }}>
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
                marginBottom: '16px',
              }}
            >
              Leadership
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#fff' }}>Board Members</h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '32px',
            }}
          >
            {boardMembers.map((member, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    position: 'relative',
                    width: '180px',
                    height: '180px',
                    margin: '0 auto 20px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '2px solid rgba(63, 63, 70, 0.6)',
                  }}
                >
                  <Image src={member.image} alt={member.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>{member.name}</h3>
                <p style={{ fontSize: '14px', color: '#60a5fa' }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 24px', backgroundColor: '#09090b' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>
            Join Our Community
          </h2>
          <p style={{ fontSize: '18px', color: '#a1a1aa', marginBottom: '32px', lineHeight: 1.6 }}>
            Be part of Liberia&apos;s largest tech student community and unlock endless opportunities.
          </p>
          <Link
            href="/membership"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
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
            Become a Member
            <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
