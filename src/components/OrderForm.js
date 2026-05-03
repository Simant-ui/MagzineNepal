"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    occasion: '',
    package: 'standard',
    description: '',
    theme: 'romantic',
    language: 'english',
    delivery: 'printed',
    pages: 8,
    driveLink: ''
  });

  const totalPrice = formData.pages * 105;

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === 'phone') {
      const value = e.target.value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, [e.target.name]: value });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const isDrive = formData.driveLink.includes('drive.google.com') || formData.driveLink.includes('google.com/drive');
    const isPhotos = formData.driveLink.includes('photos.google.com') || formData.driveLink.includes('photos.app.goo.gl') || formData.driveLink.includes('goo.gl/photos');

    if (!isDrive && !isPhotos) {
      alert("Error: Only Google Drive or Google Photos links are accepted. Please provide a valid link to your photos.");
      return;
    }

    // Create order object
    const newOrder = {
      ...formData,
      date: new Date().toISOString(),
      totalPrice: totalPrice
    };

    // Save to localStorage
    try {
      const existingOrders = JSON.parse(localStorage.getItem('magzine_orders') || '[]');
      localStorage.setItem('magzine_orders', JSON.stringify([...existingOrders, newOrder]));
    } catch (err) {
      console.error('Failed to save order to localStorage:', err);
    }

    // Send email via our API
    fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newOrder)
    }).then(async res => {
      const data = await res.json();
      if (!res.ok || !data.success) {
        console.error('Failed to send email notification:', data.error);
        alert("Wait! Your order was saved locally, but we couldn't send the email to the admin. Error: " + (data.error || 'Unknown error'));
      } else {
        console.log('Email sent successfully!');
      }
    }).catch(err => {
      console.error('Error calling email API:', err);
      alert("Network Error: Could not reach the email server. Please check your internet.");
    });

    console.log('Order Saved & Email Sent:', newOrder);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="order" className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass"
          style={{ padding: '4rem', borderRadius: 'var(--radius-lg)', maxWidth: '600px', margin: '0 auto' }}
        >
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
          <h2 style={{ marginBottom: '1rem' }}>Your order has been received!</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Thank you, {formData.fullName}. Your order for a {formData.pages}-page magazine (Total: Rs. {totalPrice}) has been received!
            We've sent a confirmation to {formData.email}.
            Our team will contact you on {formData.phone} shortly to finalize the photos.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-primary"
            style={{ marginTop: '2rem' }}
          >
            Place Another Order
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="order">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '800' }}>Place Your Order</h2>
          <p style={{ color: 'var(--text-muted)' }}>Fill in the details below and we'll handle the rest.</p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass"
          style={{
            padding: '3rem',
            borderRadius: 'var(--radius-lg)',
            maxWidth: '800px',
            margin: '0 auto',
            boxShadow: 'var(--shadow-soft)'
          }}
        >
          <h3 style={{ marginBottom: '2rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '1rem', fontWeight: '800' }}>1. Personal Information</h3>
          <div className="grid grid-2">
            <div className="input-group">
              <label>Full Name *</label>
              <input type="text" name="fullName" required placeholder="Simant Shrestha" onChange={handleChange} />
            </div>
            <div className="input-group">
              <label>Phone Number *</label>
               <input 
                type="tel" 
                name="phone" 
                required 
                placeholder="98XXXXXXXX" 
                 value={formData.phone}
                maxLength="10"
                pattern="[0-9]{10}"
                title="Please enter exactly 10 digits"
                onChange={handleChange} 
              />
            </div>
          </div>
          <div className="input-group">
            <label>Email Address *</label>
            <input type="email" name="email" required placeholder="john@example.com" onChange={handleChange} />
          </div>

          <h3 style={{ margin: '2rem 0 1.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '1rem', fontWeight: '800' }}>2. Magazine Details</h3>
          <div className="grid grid-2">
            <div className="input-group">
              <label>Occasion Category</label>
              <select name="occasion" required onChange={handleChange}>
                <option value="">Select Occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="love">Love / Proposal</option>
                <option value="friendship">Friendship</option>
                <option value="surprise">Surprise Gift</option>
                <option value="graduation">Graduation</option>
                <option value="memory">Memory Book</option>
              </select>
            </div>
            <div className="input-group">
              <label>Number of Pages (Min 8, +4 steps)</label>
              <select name="pages" value={formData.pages} onChange={(e) => setFormData({ ...formData, pages: parseInt(e.target.value) })}>
                {[...Array(24)].map((_, i) => {
                  const p = 8 + (i * 4);
                  return <option key={p} value={p}>{p} Pages</option>;
                })}
              </select>
            </div>
          </div>

          <div className="glass" style={{
            padding: '1.5rem',
            borderRadius: 'var(--radius-md)',
            marginBottom: '2rem',
            textAlign: 'center',
            background: 'rgba(212, 163, 115, 0.1)',
            border: '1px solid var(--primary)'
          }}>
            <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Estimated Total Price:</span>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary)' }}>Rs. {totalPrice}</div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>(@ Rs. 105 per page)</span>
          </div>

          <div className="input-group">
            <label>Description (What should we write?)</label>
            <textarea name="description" rows="4" placeholder="Tell us about the memories, messages, or quotes you'd like to include..." onChange={handleChange}></textarea>
          </div>

          <div className="input-group">
            <label>Google Drive or Google Photos Link *</label>
            <div style={{
              border: '2px solid var(--primary)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(212, 163, 115, 0.05)',
              transition: 'var(--transition)'
            }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Please upload your photos to <strong>Google Drive</strong> or <strong>Google Photos</strong>, set the access to "Anyone with the link", and paste the link here.
              </p>
              <input 
                type="url" 
                name="driveLink" 
                required 
                placeholder="https://drive.google.com/... or https://photos.app.goo.gl/..." 
                value={formData.driveLink}
                onChange={handleChange}
                style={{ width: '100%', padding: '1rem', borderRadius: '0.5rem', border: '1px solid var(--primary)' }}
              />
            </div>
          </div>

          <h3 style={{ margin: '2rem 0 1.5rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '1rem', fontWeight: '800' }}>3. Customization</h3>
          <div className="grid grid-3">
            <div className="input-group">
              <label>Theme Style</label>
              <select name="theme" onChange={handleChange}>
                <option value="romantic">Romantic</option>
                <option value="minimal">Minimal</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
              </select>
            </div>
            <div className="input-group">
              <label>Language</label>
              <select name="language" onChange={handleChange}>
                <option value="english">English</option>
                <option value="nepali">Nepali</option>
                <option value="both">Both</option>
              </select>
            </div>
            <div className="input-group">
              <label>Delivery</label>
              <select name="delivery" onChange={handleChange}>
                <option value="digital">Digital PDF</option>
                <option value="printed">Printed Copy</option>
              </select>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button type="submit" className="btn-primary" style={{ width: '100%', fontSize: '1.2rem' }}>
              Place Your Order
            </button>
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              No immediate payment required. We will contact you for confirmation.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default OrderForm;
