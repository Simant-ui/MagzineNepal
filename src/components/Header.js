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
        <div style={{ fontSize: 'clamp(1.1rem, 4vw, 1.5rem)', fontWeight: '800' }}>
          <span className="font-serif" style={{ color: 'var(--primary)' }}>Magzine</span> <span className="font-serif" style={{ color: '#000' }}>Nepal</span>
        </div>
        
        <nav style={{ display: 'flex', gap: 'clamp(0.5rem, 2vw, 1.5rem)', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          <a href="#" className="nav-link-hide" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 500, fontSize: '0.9rem' }}>Home</a>
          <a href="#samples" className="nav-link-hide" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 500, fontSize: '0.9rem' }}>Samples</a>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn-primary"
            style={{ padding: '0.5rem 1rem', fontSize: 'clamp(0.7rem, 2vw, 0.85rem)' }}
          >
            Saved Order
          </button>
          <a href="#order" className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: 'clamp(0.7rem, 2vw, 0.85rem)', borderRadius: '12px' }}>Order Now</a>
        </nav>
      </div>
    </header>
    <OrdersModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
