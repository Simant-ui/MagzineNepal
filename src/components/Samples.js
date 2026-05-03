"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Samples = () => {
  const samples = [
    {
      title: "Birthday Special",
      desc: "Celebrate another year with a story told through photos.",
      img: "/birthday_magazine_preview_1777788411005.png"
    },
    {
      title: "Anniversary Edition",
      desc: "Relive your journey together in a premium layout.",
      img: "/anniversary_magazine_preview_1777788443681.png"
    },
    {
      title: "Minimalist Style",
      desc: "Clean, modern, and focused on your best shots.",
      img: "/minimal_magazine_preview_1777788511454.png"
    },
    {
      title: "Proposal Story",
      desc: "A romantic and timeless way to ask the big question.",
      img: "/proposal_magazine_preview_1777789995970.png"
    },
    {
      title: "Graduation Memory",
      desc: "Commemorate your academic achievement in style.",
      img: "/graduation_magazine_preview_1777790034968.png"
    }
  ];

  return (
    <section id="samples" style={{ background: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '800' }}>Magazine Samples</h2>
          <p style={{ color: 'var(--text-muted)' }}>Swipe to see our different styles.</p>
        </div>

        <div style={{ padding: '0 20px' }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ padding: '40px 0' }}
          >
            {samples.map((sample, idx) => (
              <SwiperSlide key={idx}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  style={{
                    background: '#fcfcfc',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-soft)',
                    border: '1px solid rgba(0,0,0,0.05)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ height: '400px', overflow: 'hidden' }}>
                    <img 
                      src={sample.img} 
                      alt={sample.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '1.5rem', flexGrow: 1 }}>
                    <h3 style={{ marginBottom: '0.5rem' }}>{sample.title}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{sample.desc}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: var(--primary);
        }
        .swiper-pagination-bullet-active {
          background: var(--primary);
        }
      `}</style>
    </section>
  );
};

export default Samples;
