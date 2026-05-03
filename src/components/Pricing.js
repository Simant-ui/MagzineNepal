"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Mini Magazine",
      price: "840",
      pages: "8 Pages",
      features: ["8 Handcrafted Pages", "Digital PDF Copy", "Printed Copy", "Standard Quality", "2-3 Days Delivery"],
      recommended: false
    },
    {
      name: "Standard",
      price: "1260",
      pages: "12 Pages",
      features: ["12 Handcrafted Pages", "Digital PDF Copy", "Printed Copy", "High Quality Print", "Priority Support", "Free Delivery"],
      recommended: true
    },
    {
      name: "Premium",
      price: "2100",
      pages: "20 Pages",
      features: ["20 Handcrafted Pages", "Digital PDF Copy", "Printed Copy", "Ultra Premium Paper", "VIP Design Service", "Free Delivery"],
      recommended: false
    }
  ];

  return (
    <section id="pricing" style={{ padding: '100px 0', background: '#fffdf0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '800' }}>Simple, Transparent Pricing</h2>
          <p style={{ color: 'var(--text-muted)' }}>Rs. 105 per page. Choose the package that fits your memories.</p>
        </div>

        <div className="grid grid-3">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={{
                background: plan.recommended ? 'var(--white)' : 'rgba(255,255,255,0.5)',
                padding: '3rem 2rem',
                borderRadius: 'var(--radius-lg)',
                boxShadow: plan.recommended ? '0 20px 40px -10px rgba(212, 163, 115, 0.2)' : 'var(--shadow-soft)',
                border: plan.recommended ? '2px solid var(--primary)' : '1px solid rgba(0,0,0,0.05)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {plan.recommended && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--primary)',
                  color: 'white',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  Most Popular
                </div>
              )}
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{plan.name}</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary)' }}>
                  Rs. {plan.price}
                </div>
                <div style={{ color: 'var(--text-muted)' }}>{plan.pages}</div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem', flexGrow: 1 }}>
                {plan.features.map((f, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.8rem', marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                    <Check size={18} color="var(--primary)" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#order" className={plan.recommended ? "btn-primary" : "btn-primary"} style={{ 
                width: '100%', 
                textAlign: 'center',
                background: plan.recommended ? 'linear-gradient(135deg, #d4a373 0%, #b3865c 100%)' : 'transparent',
                color: plan.recommended ? 'white' : 'var(--primary)',
                border: plan.recommended ? 'none' : '2px solid var(--primary)',
                boxShadow: plan.recommended ? '0 10px 20px -5px rgba(212, 163, 115, 0.4)' : 'none'
              }}>
                Choose {plan.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
