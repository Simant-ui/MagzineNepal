"use client";
import React from 'react';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const FacebookIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  return (
    <footer style={{ background: '#2d2d2d', color: '#fff', padding: '60px 0 30px' }}>
      <div className="container">
        <div className="grid grid-3">
          <div>
            <h3 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '1rem' }}>Magzine Nepal</h3>
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
              <Mail size={18} /> <span>krishna726175@gmail.com</span>
            </div>
            <div style={{ display: 'flex', gap: '1rem', color: '#aaa' }}>
              <MapPin size={18} /> <span>Kathmandu, Nepal</span>
            </div>
            
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem' }}>
              <a href="https://www.facebook.com/share/18QK1uAu2Y/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', transition: 'var(--transition)' }}>
                <FacebookIcon size={24} />
              </a>
              <a href="https://www.instagram.com/magzine.np?igsh=ZXYxcnowNXhsZjZ0" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', transition: 'var(--transition)' }}>
                <InstagramIcon size={24} />
              </a>
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
          &copy; {new Date().getFullYear()} Magzine Nepal. All rights reserved.
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
