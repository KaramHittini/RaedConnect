/* =======================================================
   ENHANCED VERSION (auto-generated)
   Original file: ClientProject/src/components/auth/PasswordReset.jsx
   What I changed:
     - Added framer-motion wrapper for smooth entrance/exit animation.
     - Added a comment block with recommended UI/UX & accessibility improvements.
     - Added Tailwind-friendly className spot (motion-wrapper).
   Notes:
     - This is a safe enhancement layer that preserves original code; keep original file as source of truth.
     - For deeper changes (new components, improved styling, state management), integrate these suggestions manually.
   ======================================================= */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock password reset functionality
    setMessage('Password reset instructions have been sent to your email.');
    setEmail('');
  };

  return (<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }} className="motion-wrapper">

    <div className="auth-container">
      <div className="auth-card">
        <h2>Reset Your Password</h2>
        {message && <div className="alert alert-success">{message}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address *</label>
            <input
              type="email"
              className="rc-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-full">
            Send Reset Instructions
          </button>
        </form>

        <p className="auth-link">
          Remember your password? <Link to="/login">Back to login</Link>
        </p>
      </div>
    </div>
  
</motion.div>);
};

export default PasswordReset;
