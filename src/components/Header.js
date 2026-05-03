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
        
        {/* Desktop Nav */}
        <nav className="nav-desktop" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="#" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 500, fontSize: '0.9rem' }}>Home</a>
          <a href="#samples" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 500, fontSize: '0.9rem' }}>Samples</a>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn-primary"
            style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
          >
            Saved Order
          </button>
          <a href="#order" className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem', borderRadius: '12px' }}>Order Now</a>
        </nav>

        {/* Mobile Nav */}
        <nav className="nav-mobile" style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn-primary"
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}
          >
            Orders
          </button>
          <a href="#order" className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', borderRadius: '8px' }}>Order</a>
        </nav>
      </div>
    </header>
    <OrdersModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
