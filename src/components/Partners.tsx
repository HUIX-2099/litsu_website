'use client';

import Image from 'next/image';

const partners = [
  { name: 'Partner 1', image: '/images/pan1.jpg' },
  { name: 'Partner 2', image: '/images/pan2.png' },
  { name: 'Partner 3', image: '/images/pan3.png' },
  { name: 'Partner 4', image: '/images/pan4.jpg' },
  { name: 'Partner 5', image: '/images/pan6.jpg' },
];

export default function Partners() {
  return (
    <section
      style={{
        padding: '60px 24px',
        backgroundColor: '#09090b',
        borderTop: '1px solid rgba(39, 39, 42, 0.5)',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p
          style={{
            textAlign: 'center',
            fontSize: '12px',
            color: '#71717a',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginBottom: '36px',
          }}
        >
          Trusted by Leading Organizations
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '48px',
          }}
        >
          {partners.map((partner, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                width: '100px',
                height: '60px',
                filter: 'grayscale(100%)',
                opacity: 0.5,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'grayscale(0%)';
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'grayscale(100%)';
                e.currentTarget.style.opacity = '0.5';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Image src={partner.image} alt={partner.name} fill style={{ objectFit: 'contain' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
