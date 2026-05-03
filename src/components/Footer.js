"use client";
import React from 'react';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: '#2d2d2d', color: '#fff', padding: '60px 0 30px' }}>
      <div className="container">
        <div className="grid grid-3">
          <div>
            <h3 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '1rem' }}>Magzine Memories</h3>
            <p style={{ color: '#aaa', fontSize: '0.9rem' }}>
              We turn your most precious memories into beautiful, professionally designed magazines. 
              The perfect gift for any occasion in Nepal.
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#aaa', textDecoration: 'none' }}>Home</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#samples" style={{ color: '#aaa', textDecoration: 'none' }}>Samples</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#order" style={{ color: '#aaa', textDecoration: 'none' }}>Order Form</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#" style={{ color: '#aaa', textDecoration: 'none' }}>Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>Contact Us</h4>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.8rem', color: '#aaa' }}>
              <Phone size={18} /> <span>+977 9863811729 / 9824718666</span>
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.8rem', color: '#aaa' }}>
              <Mail size={18} /> <span>magzinenepal@gmail.com</span>
            </div>
            <div style={{ display: 'flex', gap: '1rem', color: '#aaa' }}>
              <MapPin size={18} /> <span>Kathmandu, Nepal</span>
            </div>
          </div>
        </div>
        <div style={{ 
          marginTop: '40px', 
          paddingTop: '20px', 
          borderTop: '1px solid rgba(255,255,255,0.1)',
          textAlign: 'center',
          color: '#666',
          fontSize: '0.8rem'
        }}>
          &copy; {new Date().getFullYear()} Magzine Memories. All rights reserved.
        </div>
      </div>

      <a 
        href="https://wa.me/9779863811729" 
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </footer>
  );
};

export default Footer;
