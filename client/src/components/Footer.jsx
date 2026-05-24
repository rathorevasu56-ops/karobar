import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ background: '#232f3e', color: '#ddd', fontFamily: 'sans-serif', fontSize: '13px' }}>

      {/* Back to top */}
      <div
        onClick={scrollToTop}
        style={{ background: '#37475a', color: '#fff', textAlign: 'center', padding: '14px', cursor: 'pointer', fontSize: '13px' }}
      >
        Back to top
      </div>

      {/* Main columns */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '24px', padding: '32px 40px' }}>
        {[
          { title: 'Get to Know Us', links: ['About Karobar', 'Careers', 'Press Releases', 'Blog'] },
          { title: 'Shop by Category', links: ["Men's Fashion", "Women's Fashion", 'Kids & Baby', 'Footwear', 'Accessories'] },
          { title: 'Help & Support', links: ['Your Account', 'Returns & Refunds', 'Track Your Order', 'Shipping Rates', 'Contact Us'] },
          { title: 'Let Us Help You', links: ['FAQ', 'Size Guide', 'Gift Cards', 'Sell on Karobar', 'Affiliate Program'] },
        ].map(({ title, links }) => (
          <div key={title}>
            <h4 style={{ color: '#fff', fontSize: '14px', fontWeight: 500, marginBottom: '12px' }}>{title}</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '7px' }}>
              {links.map(l => (
                <li key={l}><Link to="#" style={{ color: '#ddd', textDecoration: 'none' }}>{l}</Link></li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 style={{ color: '#fff', fontSize: '14px', fontWeight: 500, marginBottom: '12px' }}>Connect With Us</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '7px' }}>
            {['Instagram', 'Facebook', 'Twitter / X', 'YouTube'].map(s => (
              <li key={s}><Link to="#" style={{ color: '#ddd', textDecoration: 'none' }}>{s}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #3a4553', margin: 0 }} />

      {/* Logo + locale row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '28px', padding: '18px 40px', flexWrap: 'wrap' }}>
        <span style={{ color: '#fff', fontSize: '20px', fontWeight: 500, letterSpacing: '1px' }}>
          karobar<span style={{ color: '#f90' }}>.</span>
        </span>
        {['India', 'English', '₹ INR'].map(label => (
          <span key={label} style={{ fontSize: '12px', border: '1px solid #555', borderRadius: '3px', padding: '5px 12px', color: '#ddd', cursor: 'pointer' }}>
            {label}
          </span>
        ))}
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #3a4553', margin: 0 }} />

      {/* Bottom bar */}
      <div style={{ textAlign: 'center', padding: '18px 40px', fontSize: '12px', color: '#999', background: '#131921', display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
        <span>© 2024 Karobar Fashion Pvt. Ltd.</span>
        {['Conditions of Use', 'Privacy Notice', 'Interest-Based Ads', 'Sitemap'].map(l => (
          <React.Fragment key={l}>
            <span style={{ color: '#555' }}>·</span>
            <Link to="#" style={{ color: '#999', textDecoration: 'none' }}>{l}</Link>
          </React.Fragment>
        ))}
        <span style={{ color: '#555' }}>·</span>
        <span>support@karobar.com &nbsp;|&nbsp; +91 1234567890</span>
      </div>
    </footer>
  );
};

export default Footer;