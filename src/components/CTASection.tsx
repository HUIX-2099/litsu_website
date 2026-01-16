'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section
      style={{
        padding: '100px 24px',
        backgroundColor: '#18181b',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div
          style={{
            padding: '60px 48px',
            borderRadius: '28px',
            textAlign: 'center',
            backgroundColor: 'rgba(24, 24, 27, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(63, 63, 70, 0.6)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
          }}
        >
          {/* Badge */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '8px 16px',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: 500,
              backgroundColor: 'rgba(59, 130, 246, 0.12)',
              color: '#60a5fa',
              border: '1px solid rgba(59, 130, 246, 0.25)',
              marginBottom: '24px',
            }}
          >
            Join the Movement
          </span>

          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '20px',
              lineHeight: 1.2,
            }}
          >
            Ready to Shape the Future of{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Tech in Liberia?
            </span>
          </h2>

          <p
            style={{
              fontSize: '18px',
              color: '#a1a1aa',
              marginBottom: '36px',
              maxWidth: '600px',
              margin: '0 auto 36px',
              lineHeight: 1.6,
            }}
          >
            Being a member of LITSU means belonging to a community of young innovators, dreamers, and problem-solvers who share the same vision.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
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
                transition: 'all 0.2s ease',
              }}
            >
              Apply for Membership
              <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '16px 32px',
                backgroundColor: 'rgba(63, 63, 70, 0.8)',
                color: '#fff',
                fontWeight: 600,
                fontSize: '16px',
                borderRadius: '9999px',
                textDecoration: 'none',
                border: '1px solid rgba(82, 82, 91, 0.6)',
                transition: 'all 0.2s ease',
              }}
            >
              Contact Us
            </Link>
          </div>

          {/* Stats */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '48px',
              marginTop: '48px',
              paddingTop: '36px',
              borderTop: '1px solid rgba(63, 63, 70, 0.5)',
            }}
          >
            {[
              { value: '15+', label: 'Active Chapters' },
              { value: '500+', label: 'Members' },
              { value: '100%', label: 'Free to Join' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: 700, color: '#fff' }}>{item.value}</div>
                <div style={{ fontSize: '14px', color: '#71717a', marginTop: '4px' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
