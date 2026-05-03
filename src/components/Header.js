"use client";
import React, { useState } from 'react';
import OrdersModal from './OrdersModal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
    <header className="glass" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>
          <span className="font-serif" style={{ color: 'var(--primary)' }}>Magzine</span> <span className="font-serif" style={{ color: '#000' }}>Memories</span>
        </div>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 500, fontSize: '0.9rem' }}>Home</a>
          <a href="#samples" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 500, fontSize: '0.9rem' }}>Samples</a>
          <a href="#features" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 500, fontSize: '0.9rem' }}>Features</a>
          <button 
            onClick={() => setIsModalOpen(true)}
            style={{ background: 'none', border: 'none', color: 'var(--text-main)', fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer' }}
          >
            Saved Invoice
          </button>
          <a href="#order" className="btn-primary" style={{ padding: '0.7rem 1.8rem', fontSize: '0.9rem', borderRadius: '12px' }}>Order Now</a>
        </nav>
      </div>
    </header>
    <OrdersModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
