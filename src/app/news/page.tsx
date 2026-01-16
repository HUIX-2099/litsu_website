'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const news = [
  {
    id: 1,
    title: 'LITSU Partners with Tech Giants for Student Internships',
    category: 'Announcement',
    date: 'January 10, 2025',
    image: '/images/495090771_4015117368634046_697969129381355444_n.jpg',
    excerpt: 'New partnership opens doors for LITSU members to gain real-world experience at leading tech companies.',
    featured: true,
  },
  {
    id: 2,
    title: 'Annual Tech Summit Breaks Attendance Records',
    category: 'Events',
    date: 'December 28, 2024',
    image: '/images/487873106_2682700655252275_6456405986743497483_n.jpg',
    excerpt: 'Over 500 students attended this year\'s technology summit in Monrovia, making it the largest gathering yet.',
  },
  {
    id: 3,
    title: 'New Chapter Opens at BlueCrest University',
    category: 'Chapters',
    date: 'December 15, 2024',
    image: '/images/487306504_2619005224961340_341044111677632384_n.jpg',
    excerpt: 'LITSU expands its reach with the opening of a new chapter, bringing more opportunities to students.',
  },
  {
    id: 4,
    title: 'LITSU Members Win National Coding Competition',
    category: 'Achievement',
    date: 'November 30, 2024',
    image: '/images/503240716_3972473886350492_4933304496750629387_n.jpg',
    excerpt: 'A team of LITSU members took first place in the national coding competition, showcasing exceptional skills.',
  },
  {
    id: 5,
    title: 'Tech Scholarship Program Announced for 2025',
    category: 'Announcement',
    date: 'November 15, 2024',
    image: '/images/547418950_1231566829016381_909490679170633643_n.jpg',
    excerpt: 'LITSU announces new scholarship opportunities for outstanding tech students across all chapters.',
  },
  {
    id: 6,
    title: 'Community Outreach Reaches 1000 Students',
    category: 'Community',
    date: 'October 28, 2024',
    image: '/images/549417263_1238746744965056_5057421483382561117_n.jpg',
    excerpt: 'Our community tech education program has now reached over 1000 students in underserved areas.',
  },
];

export default function NewsPage() {
  const [email, setEmail] = useState('');
  const featuredNews = news.find((item) => item.featured);
  const regularNews = news.filter((item) => !item.featured);

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
            bottom: '0',
            left: '30%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
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
              News
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
              News &{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Updates
              </span>
            </h1>
            <p style={{ fontSize: '18px', color: '#a1a1aa', lineHeight: 1.7 }}>
              Stay updated with the latest news, announcements, and stories from LITSU.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (
        <section style={{ padding: '48px 24px', backgroundColor: '#09090b' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <Link href={`/news/${featuredNews.id}`} style={{ textDecoration: 'none', display: 'block' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                  gap: '32px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(24, 24, 27, 0.9)',
                  border: '1px solid rgba(63, 63, 70, 0.5)',
                }}
              >
                <div style={{ position: 'relative', height: '320px' }}>
                  <Image src={featuredNews.image} alt={featuredNews.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <span
                      style={{
                        padding: '6px 14px',
                        borderRadius: '9999px',
                        fontSize: '12px',
                        fontWeight: 600,
                        backgroundColor: '#ef4444',
                        color: '#fff',
                      }}
                    >
                      Featured
                    </span>
                    <span style={{ fontSize: '14px', color: '#71717a' }}>{featuredNews.date}</span>
                  </div>
                  <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#fff', marginBottom: '16px', lineHeight: 1.3 }}>
                    {featuredNews.title}
                  </h2>
                  <p style={{ fontSize: '16px', color: '#a1a1aa', lineHeight: 1.6, marginBottom: '24px' }}>
                    {featuredNews.excerpt}
                  </p>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#60a5fa',
                      fontWeight: 600,
                    }}
                  >
                    Read Full Story
                    <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section style={{ padding: '48px 24px 100px', backgroundColor: '#09090b' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '32px' }}>Latest Updates</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '32px',
            }}
          >
            {regularNews.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(24, 24, 27, 0.9)',
                  border: '1px solid rgba(63, 63, 70, 0.5)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      padding: '6px 14px',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: 600,
                      backgroundColor: 'rgba(24, 24, 27, 0.9)',
                      color: '#fff',
                      border: '1px solid rgba(63, 63, 70, 0.5)',
                    }}
                  >
                    {item.category}
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <p style={{ fontSize: '13px', color: '#71717a', marginBottom: '8px' }}>{item.date}</p>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '12px', lineHeight: 1.4 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#a1a1aa', lineHeight: 1.6 }}>{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ padding: '80px 24px', backgroundColor: '#18181b' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Never Miss an Update</h2>
          <p style={{ fontSize: '16px', color: '#a1a1aa', marginBottom: '32px' }}>
            Subscribe to our newsletter and get the latest news delivered to your inbox.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: 'flex', gap: '12px', maxWidth: '450px', margin: '0 auto' }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: '14px 20px',
                borderRadius: '9999px',
                border: '1px solid rgba(63, 63, 70, 0.6)',
                backgroundColor: 'rgba(39, 39, 42, 0.8)',
                color: '#fff',
                fontSize: '14px',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              style={{
                padding: '14px 28px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                color: '#fff',
                fontWeight: 600,
                fontSize: '14px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
