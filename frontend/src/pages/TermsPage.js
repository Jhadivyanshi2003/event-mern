import React from 'react';
import './TermsPage.css';

export default function TermsPage() {
  return (
    <div className="terms-container">
      <div className="banner">
        <h1>Terms and Conditions</h1>
        <p>Please read our terms and conditions carefully</p>
      </div>

      <div className="terms-content">
        <section className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Event Management System, you accept and agree to be bound by the terms
            and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section className="terms-section">
          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily use the Event Management System for personal, non-commercial
            transitory viewing only. This is the grant of a license, not a transfer of title, and under this
            license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software contained in the system</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>3. User Responsibilities</h2>
          <p>
            Users are responsible for maintaining the confidentiality of their account information and for
            all activities that occur under their account. Users must:
          </p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of their account</li>
            <li>Notify us immediately of any unauthorized use</li>
            <li>Comply with all applicable laws and regulations</li>
          </ul>
        </section>

        <section className="terms-section">
          <h2>4. Privacy Policy</h2>
          <p>
            Your use of the Event Management System is also governed by our Privacy Policy. Please review our
            Privacy Policy, which also governs the site and informs users of our data collection practices.
          </p>
        </section>

        <section className="terms-section">
          <h2>5. Disclaimer</h2>
          <p>
            The materials on the Event Management System are provided on an 'as is' basis. We make no
            warranties, expressed or implied, and hereby disclaim and negate all other warranties including,
            without limitation, implied warranties or conditions of merchantability, fitness for a particular
            purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section className="terms-section">
          <h2>6. Limitations</h2>
          <p>
            In no event shall the Event Management System or its suppliers be liable for any damages
            (including, without limitation, damages for loss of data or profit, or due to business interruption)
            arising out of the use or inability to use the materials on the system.
          </p>
        </section>

        <section className="terms-section">
          <h2>7. Revisions and Errata</h2>
          <p>
            The materials appearing on the Event Management System could include technical, typographical,
            or photographic errors. We do not warrant that any of the materials on the system are accurate,
            complete, or current. We may make changes to the materials contained on the system at any time
            without notice.
          </p>
        </section>
      </div>
    </div>
  );
} 