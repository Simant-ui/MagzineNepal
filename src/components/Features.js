"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Truck, Camera, Heart, Clock, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Camera size={32} />,
      title: "High Quality Prints",
      desc: "We use premium 200gsm glossy paper for a professional magazine feel."
    },
    {
      icon: <Palette size={32} />,
      title: "Custom Design",
      desc: "Our designers hand-craft each page to tell your unique story perfectly."
    },
    {
      icon: <Truck size={32} />,
      title: "Fast Delivery",
      desc: "Get your printed magazine delivered to your doorstep within 4-6 days in Nepal."
    },
    {
      icon: <Heart size={32} />,
      title: "Perfect Gift",
      desc: "The most thoughtful and personalized gift for birthdays and anniversaries."
    },
    {
      icon: <Clock size={32} />,
      title: "Quick Process",
      desc: "Just send your photos, and we handle the design and printing for you."
    },
    {
      icon: <Award size={32} />,
      title: "Digital Copy",
      desc: "Every order comes with a free high-resolution digital PDF version."
    }
  ];

  return (
    <section id="features" style={{ padding: '100px 0', background: '#fff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '800' }}>Why Choose Magzine Nepal?</h2>
          <p style={{ color: 'var(--text-muted)' }}>We provide the best personalized magazine experience in Nepal.</p>
        </div>

        <div className="grid grid-3">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{
                textAlign: 'center',
                padding: '2rem',
                borderRadius: 'var(--radius-md)',
                transition: 'var(--transition)'
              }}
            >
              <div style={{ 
                width: '70px', 
                height: '70px', 
                background: 'rgba(212, 163, 115, 0.1)', 
                color: 'var(--primary)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.3rem' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
