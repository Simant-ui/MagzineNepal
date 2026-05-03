"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Eye, FileText, Calendar, User, Phone, Mail } from 'lucide-react';

const OrdersModal = ({ isOpen, onClose }) => {
  const [pin, setPin] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');

  const ADMIN_PIN = "2026"; // You can change this

  useEffect(() => {
    if (isOpen) {
      setPin('');
      setIsAuthorized(false);
      setError('');
      const savedOrders = JSON.parse(localStorage.getItem('magzine_orders') || '[]');
      setOrders(savedOrders);
    }
  }, [isOpen]);

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      setIsAuthorized(true);
      setError('');
    } else {
      setError('Incorrect PIN. Please try again.');
    }
  };

  const downloadImage = (base64Data, filename) => {
    const link = document.createElement('a');
    link.href = base64Data;
    link.download = filename || 'download.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const deleteOrder = (index) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      const actualIndex = orders.length - 1 - index;
      const updatedOrders = [...orders];
      updatedOrders.splice(actualIndex, 1);
      localStorage.setItem('magzine_orders', JSON.stringify(updatedOrders));
      setOrders(updatedOrders);
      setActiveMenu(null);
      if (selectedOrder && selectedOrder.index === index) setSelectedOrder(null);
    }
  };



  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.8)',
      backdropFilter: 'blur(8px)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{
          background: '#fff',
          borderRadius: 'var(--radius-lg)',
          width: '100%',
          maxWidth: '800px',
          maxHeight: '90vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: '#f0f0f0',
            border: 'none',
            borderRadius: '50%',
            width: '35px',
            height: '35px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100
          }}
        >
          <X size={18} />
        </button>

        {!isAuthorized ? (
          <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '1rem', fontWeight: '800' }}>Admin Access</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Please enter the 4-digit PIN.</p>
            <form onSubmit={handlePinSubmit} style={{ maxWidth: '300px', margin: '0 auto' }}>
              <input 
                type="password" 
                maxLength="4"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="****"
                style={{
                  fontSize: '2rem',
                  textAlign: 'center',
                  letterSpacing: '1rem',
                  padding: '1rem',
                  width: '100%',
                  marginBottom: '1rem',
                  borderRadius: '10px',
                  border: '1px solid #ddd'
                }}
                autoFocus
              />
              {error && <p style={{ color: 'red', fontSize: '0.8rem', marginBottom: '1rem' }}>{error}</p>}
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>Verify PIN</button>
            </form>
          </div>
        ) : (
          <>
            <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid #eee', background: '#fcfcfc' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '800' }}>
                  {selectedOrder ? 'Order Details' : 'Saved Orders'}
                </h2>
                {selectedOrder && (
                  <button 
                    onClick={() => setSelectedOrder(null)}
                    style={{ background: 'var(--primary)', color: 'white', border: 'none', padding: '0.4rem 1rem', borderRadius: '5px', cursor: 'pointer', fontSize: '0.8rem' }}
                  >
                    Back to List
                  </button>
                )}
              </div>
            </div>
            
            <div style={{ flexGrow: 1, overflowY: 'auto', padding: '1.5rem' }}>
              {orders.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '4rem' }}>
                  <p style={{ color: '#ccc', fontSize: '1.2rem' }}>No orders found yet.</p>
                </div>
              ) : selectedOrder ? (
                /* DETAIL VIEW */
                <div style={{ animation: 'fadeIn 0.3s ease' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', fontWeight: '800' }}>{selectedOrder.fullName}</h3>
                      <p style={{ color: 'var(--text-muted)' }}>{new Date(selectedOrder.date).toLocaleString()}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>Rs. {selectedOrder.totalPrice}</div>
                      <p style={{ fontSize: '0.9rem' }}>{selectedOrder.pages} Pages</p>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                    <div className="glass" style={{ padding: '1rem', borderRadius: '10px' }}>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Phone</p>
                      <p style={{ fontWeight: '600' }}>{selectedOrder.phone}</p>
                    </div>
                    <div className="glass" style={{ padding: '1rem', borderRadius: '10px' }}>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email</p>
                      <p style={{ fontWeight: '600' }}>{selectedOrder.email}</p>
                    </div>
                    <div className="glass" style={{ padding: '1rem', borderRadius: '10px' }}>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Theme</p>
                      <p style={{ fontWeight: '600' }}>{selectedOrder.theme}</p>
                    </div>
                    <div className="glass" style={{ padding: '1rem', borderRadius: '10px' }}>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Occasion</p>
                      <p style={{ fontWeight: '600', textTransform: 'capitalize' }}>
                        {selectedOrder.occasion === 'other' ? selectedOrder.otherOccasion : selectedOrder.occasion}
                      </p>
                    </div>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ marginBottom: '1rem', fontWeight: '800' }}>Photos Access:</h4>
                    <div style={{ padding: '1.5rem', background: '#f9f9f9', borderRadius: '10px', border: '1px solid #eee' }}>
                      <p style={{ wordBreak: 'break-all', marginBottom: '1rem', fontSize: '0.9rem' }}>{selectedOrder.driveLink}</p>
                      <a 
                        href={selectedOrder.driveLink} 
                        target="_blank" 
                        className="btn-primary" 
                        style={{ display: 'inline-block', textDecoration: 'none', textAlign: 'center', width: '100%' }}
                      >
                        Open Photos (Drive/Photos)
                      </a>
                    </div>
                  </div>

                  {selectedOrder.description && (
                    <div>
                      <h4 style={{ marginBottom: '0.5rem', fontWeight: '800' }}>Special Instructions:</h4>
                      <p style={{ background: '#fcfcfc', padding: '1rem', border: '1px solid #eee', borderRadius: '10px', fontStyle: 'italic' }}>
                        {selectedOrder.description}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                /* LIST VIEW */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {[...orders].reverse().map((order, idx) => (
                    <div key={idx} style={{ 
                      padding: '1rem 1.5rem', 
                      borderRadius: '12px', 
                      border: '1px solid #eee',
                      background: '#fff',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      position: 'relative',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                    }}>
                      <div>
                        <strong style={{ fontSize: '1.1rem', color: '#333' }}>{order.fullName}</strong>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                          {new Date(order.date).toLocaleDateString()} • {order.phone}
                        </div>
                      </div>

                      <div style={{ position: 'relative' }}>
                        <button 
                          onClick={() => setActiveMenu(activeMenu === idx ? null : idx)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999', padding: '0.5rem' }}
                        >
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>

                        {activeMenu === idx && (
                          <div style={{
                            position: 'absolute',
                            right: '0',
                            top: '100%',
                            background: '#fff',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                            borderRadius: '8px',
                            zIndex: 10,
                            minWidth: '150px',
                            border: '1px solid #eee',
                            overflow: 'hidden',
                            background: '#fff'
                          }}>
                            <button 
                              onClick={() => { setSelectedOrder({...order, index: idx}); setActiveMenu(null); }}
                              style={{ width: '100%', padding: '10px 15px', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem', color: '#333' }}
                            >
                              View Detail
                            </button>
                            <button 
                              onClick={() => deleteOrder(idx)}
                              style={{ width: '100%', padding: '10px 15px', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.9rem', color: 'red', borderTop: '1px solid #f5f5f5' }}
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default OrdersModal;
