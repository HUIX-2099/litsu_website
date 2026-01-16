'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MembershipPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    institution: '',
    chapter: '',
    program: '',
    year: '',
    agreeToTerms: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const chapters = [
    'Starz University Chapter',
    'UMU Chapter',
    'BlueCrest Chapter',
    'AMEU Chapter',
    'Cuttington Chapter',
    'Other',
  ];

  const benefits = [
    { icon: '💼', title: 'Career Opportunities', description: 'Access internships, job postings, and career guidance.' },
    { icon: '📚', title: 'Learning Resources', description: 'Get access to workshops, bootcamps, and exclusive materials.' },
    { icon: '🤝', title: 'Networking', description: 'Connect with tech enthusiasts, mentors, and professionals.' },
    { icon: '🏆', title: 'Recognition', description: 'Earn certificates, awards, and recognition for achievements.' },
  ];

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    border: '1px solid rgba(63, 63, 70, 0.6)',
    backgroundColor: 'rgba(39, 39, 42, 0.6)',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: 500,
    color: '#fff',
    marginBottom: '8px',
  };

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
            top: '0',
            right: '25%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
          }}
        />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#71717a',
              textDecoration: 'none',
              marginBottom: '32px',
              fontSize: '14px',
            }}
          >
            <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <div style={{ maxWidth: '700px' }}>
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
              Join the Movement
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
              Join{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                LITSU
              </span>
            </h1>
            <p style={{ fontSize: '18px', color: '#a1a1aa', lineHeight: 1.7 }}>
              Become part of Liberia&apos;s largest community of tech students and unlock exclusive opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section style={{ padding: '80px 24px', backgroundColor: '#18181b' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
              Why Join Us
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, color: '#fff' }}>Member Benefits</h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
            }}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                style={{
                  padding: '32px',
                  borderRadius: '20px',
                  backgroundColor: 'rgba(24, 24, 27, 0.9)',
                  border: '1px solid rgba(63, 63, 70, 0.5)',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>{benefit.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>{benefit.title}</h3>
                <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.6 }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section style={{ padding: '80px 24px', backgroundColor: '#09090b' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div
            style={{
              padding: '48px',
              borderRadius: '24px',
              backgroundColor: 'rgba(24, 24, 27, 0.9)',
              border: '1px solid rgba(63, 63, 70, 0.5)',
            }}
          >
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div
                  style={{
                    width: '96px',
                    height: '96px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(34, 197, 94, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 32px',
                  }}
                >
                  <svg style={{ width: '48px', height: '48px', color: '#22c55e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Application Submitted!</h2>
                <p style={{ fontSize: '16px', color: '#a1a1aa', marginBottom: '32px', lineHeight: 1.6 }}>
                  Thank you for applying to join LITSU. We&apos;ll review your application and get back to you soon.
                </p>
                <Link
                  href="/"
                  style={{
                    display: 'inline-flex',
                    padding: '14px 28px',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                    color: '#fff',
                    fontWeight: 600,
                    borderRadius: '12px',
                    textDecoration: 'none',
                  }}
                >
                  Return to Home
                </Link>
              </div>
            ) : (
              <>
                {/* Progress Steps */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '48px' }}>
                  {[1, 2].map((s) => (
                    <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <button
                        onClick={() => setStep(s)}
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 600,
                          fontSize: '16px',
                          border: 'none',
                          cursor: 'pointer',
                          backgroundColor: step >= s ? '#3b82f6' : 'rgba(39, 39, 42, 0.8)',
                          color: step >= s ? '#fff' : '#71717a',
                        }}
                      >
                        {s}
                      </button>
                      {s < 2 && (
                        <div
                          style={{
                            width: '60px',
                            height: '4px',
                            borderRadius: '9999px',
                            backgroundColor: step > s ? '#3b82f6' : 'rgba(39, 39, 42, 0.8)',
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                      <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', textAlign: 'center', marginBottom: '8px' }}>
                        Personal Information
                      </h3>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                        <div>
                          <label style={labelStyle}>First Name</label>
                          <input
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            placeholder="John"
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Last Name</label>
                          <input
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            placeholder="Doe"
                            style={inputStyle}
                          />
                        </div>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                        <div>
                          <label style={labelStyle}>Email Address</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Phone Number</label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+231 XXX XXX XXX"
                            style={inputStyle}
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          width: '100%',
                          padding: '16px',
                          background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                          color: '#fff',
                          fontWeight: 600,
                          fontSize: '16px',
                          borderRadius: '12px',
                          border: 'none',
                          cursor: 'pointer',
                          marginTop: '8px',
                        }}
                      >
                        Continue
                        <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  )}

                  {step === 2 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                      <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', textAlign: 'center', marginBottom: '8px' }}>
                        Academic Information
                      </h3>
                      <div>
                        <label style={labelStyle}>Institution</label>
                        <input
                          type="text"
                          required
                          value={formData.institution}
                          onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                          placeholder="e.g., Starz University"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label style={labelStyle}>Select Chapter</label>
                        <select
                          required
                          value={formData.chapter}
                          onChange={(e) => setFormData({ ...formData, chapter: e.target.value })}
                          style={inputStyle}
                        >
                          <option value="">Select a chapter</option>
                          {chapters.map((chapter) => (
                            <option key={chapter} value={chapter}>{chapter}</option>
                          ))}
                        </select>
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                        <div>
                          <label style={labelStyle}>Program of Study</label>
                          <input
                            type="text"
                            required
                            value={formData.program}
                            onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                            placeholder="e.g., Computer Science"
                            style={inputStyle}
                          />
                        </div>
                        <div>
                          <label style={labelStyle}>Year of Study</label>
                          <select
                            required
                            value={formData.year}
                            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                            style={inputStyle}
                          >
                            <option value="">Select year</option>
                            <option value="1">Year 1</option>
                            <option value="2">Year 2</option>
                            <option value="3">Year 3</option>
                            <option value="4">Year 4</option>
                            <option value="graduate">Graduate</option>
                          </select>
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '12px',
                          padding: '16px',
                          borderRadius: '12px',
                          backgroundColor: 'rgba(39, 39, 42, 0.6)',
                        }}
                      >
                        <input
                          type="checkbox"
                          required
                          checked={formData.agreeToTerms}
                          onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                          style={{ marginTop: '4px', width: '18px', height: '18px', accentColor: '#3b82f6' }}
                        />
                        <label style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.5 }}>
                          I agree to the LITSU membership terms and conditions, and I understand that my information will be used in accordance with the privacy policy.
                        </label>
                      </div>
                      <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            flex: 1,
                            padding: '16px',
                            backgroundColor: 'rgba(39, 39, 42, 0.8)',
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: '16px',
                            borderRadius: '12px',
                            border: '1px solid rgba(63, 63, 70, 0.6)',
                            cursor: 'pointer',
                          }}
                        >
                          <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                          </svg>
                          Back
                        </button>
                        <button
                          type="submit"
                          style={{
                            flex: 1,
                            padding: '16px',
                            background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: '16px',
                            borderRadius: '12px',
                            border: 'none',
                            cursor: 'pointer',
                          }}
                        >
                          Submit Application
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
