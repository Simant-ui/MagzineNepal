"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Srijana Thapa",
      location: "Kathmandu",
      text: "I ordered a mini magazine for my husband's birthday. He was so surprised! The quality is amazing and the delivery was very fast.",
      stars: 5
    },
    {
      name: "Anish Gupta",
      location: "Pokhara",
      text: "The best gift idea in Nepal. Magzine Nepal handled everything professionally. The design is very high-end.",
      stars: 5
    },
    {
      name: "Maya Rai",
      location: "Lalitpur",
      text: "Love the romantic theme! It's such a unique way to keep our memories alive. Highly recommend the premium package.",
      stars: 5
    },
    {
      name: "Rohan Sharma",
      location: "Butwal",
      text: "I was worried about the print quality, but it exceeded my expectations. The colors are vibrant and the paper feels premium.",
      stars: 5
    },
    {
      name: "Pooja Karki",
      location: "Biratnagar",
      text: "A perfect anniversary gift. The team helped me arrange my photos beautifully. Very helpful customer service!",
      stars: 5
    },
    {
      name: "Deepak Silwal",
      location: "Chitwan",
      text: "Quick turnaround time and beautiful layout. It's much better than a traditional photo album.",
      stars: 5
    }
  ];

  return (
    <section style={{ background: '#fffdf0', padding: '100px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '800' }}>What Our Customers Say</h2>
          <p style={{ color: 'var(--text-muted)' }}>Real stories from our happy customers.</p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ padding: '40px 0 60px' }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <motion.div 
                className="glass"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ 
                  padding: '2.5rem', 
                  borderRadius: 'var(--radius-md)', 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#fff',
                  boxShadow: 'var(--shadow-soft)',
                  border: '1px solid rgba(0,0,0,0.05)'
                }}
              >
                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.5rem' }}>
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={18} fill="#d4a373" color="#d4a373" />
                  ))}
                </div>
                <p style={{ 
                  fontStyle: 'italic', 
                  marginBottom: '2rem', 
                  color: '#444',
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  flexGrow: 1 
                }}>
                  "{t.text}"
                </p>
                <div>
                  <strong style={{ display: 'block', fontSize: '1.1rem', color: '#1a1a1a' }}>{t.name}</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.location}</span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: var(--primary) !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
