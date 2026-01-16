'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <section
      style={{
        padding: '100px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 50%, #db2777 100%)',
        }}
      />

      {/* Decorative Elements */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          left: '20%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.1)',
          filter: 'blur(80px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          right: '20%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          backgroundColor: 'rgba(0,0,0,0.15)',
          filter: 'blur(80px)',
        }}
      />

      <div
        style={{
          position: 'relative',
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {isSubmitted ? (
          <div>
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                backgroundColor: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <svg style={{ width: '40px', height: '40px', color: '#fff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 style={{ fontSize: '28px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>You&apos;re In!</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Welcome to the LITSU community.</p>
          </div>
        ) : (
          <>
            {/* Icon */}
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 28px',
                backgroundColor: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <svg style={{ width: '36px', height: '36px', color: '#fff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
              Stay Connected
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '18px', marginBottom: '36px', lineHeight: 1.6 }}>
              Subscribe to our newsletter and never miss an update on events, programs, and opportunities.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '12px', maxWidth: '480px', margin: '0 auto' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={{
                  flex: 1,
                  padding: '16px 24px',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255,255,255,0.25)',
                  backgroundColor: 'rgba(255,255,255,0.12)',
                  color: '#fff',
                  fontSize: '16px',
                  outline: 'none',
                  backdropFilter: 'blur(10px)',
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '16px 32px',
                  borderRadius: '9999px',
                  backgroundColor: '#fff',
                  color: '#1e40af',
                  fontWeight: 600,
                  fontSize: '16px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                }}
              >
                Subscribe
              </button>
            </form>

            <p style={{ marginTop: '20px', fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>
              Join 500+ subscribers. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
