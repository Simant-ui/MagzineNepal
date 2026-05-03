"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section style={{ 
      paddingTop: 'clamp(100px, 15vh, 160px)', 
      paddingBottom: 'clamp(60px, 10vh, 100px)',
      background: '#fffdf0',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'rgba(212, 163, 115, 0.1)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', 
            marginBottom: '1.5rem',
            lineHeight: 1.1,
            fontWeight: '800',
            color: '#1a1a1a'
          }}
        >
          Turn Your Memories into a <br />
          <span style={{ color: 'var(--primary)', fontStyle: 'italic', fontWeight: '800' }}>Beautiful Magazine</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            fontSize: '1.1rem', 
            color: '#333',
            maxWidth: '700px',
            margin: '0 auto 3rem'
          }}
        >
          A premium, personalized gift for your loved ones in Nepal. 
          Perfect for birthdays, anniversaries, and all your special moments.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#order" className="btn-primary" style={{ 
            fontSize: '1rem', 
            padding: '1rem 2.5rem', 
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #d4a373 0%, #b3865c 100%)'
          }}>
            Order Your Magazine Now
          </a>
        </motion.div>
        
        <div className="flex-responsive" style={{ 
          marginTop: '4rem', 
          fontSize: '0.9rem', 
          color: '#1a1a1a', 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '2.5rem',
          fontWeight: '600'
        }}>
          <span>✓ 4-6 Days Delivery</span>
          <span>✓ Digital & Printed Copies</span>
          <span>✓ Premium Quality</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
