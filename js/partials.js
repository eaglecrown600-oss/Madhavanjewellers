/* ================================================================
   Madhavan Jewellers — Shared partials (header & footer)
   Injected at runtime; edit navigation/footer here once.
   ================================================================ */

(function () {
  'use strict';

  const navItems = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About' },
    { href: 'services.html', label: 'Services' },
    { href: 'gallery.html', label: 'Gallery' },
    {
      label: 'Collections',
      // To change a dropdown thumbnail later, just replace the "img" URL below
      // with your own image link (or a local path like "public/gold-thumb.jpg").
      dropdown: [
        { href: 'collections/gold.html', label: 'Gold', img: 'images/collections/gold/hero-1.jpg' },
        { href: 'collections/silver.html', label: 'Silver', img: 'images/collections/silver/hero-1.jpg' },
        { href: 'collections/diamond.html', label: 'Diamond', img: 'images/collections/diamond/hero-1.jpg' },
        { href: 'collections/bridal.html', label: 'Bridal', img: 'images/collections/bridal/hero-1.jpg' }
      ]
    },
    { href: 'testimonials.html', label: 'Testimonials' },
    { href: 'faq.html', label: 'FAQ' },
    { href: 'contact.html', label: 'Contact' }
  ];

  // Pages in subfolders need ../ prefix
  const prefix = window.location.pathname.includes('/collections/') ? '../' : '';
  const logoPath = prefix + 'public/logo.png';

  const headerHTML = `
    <a href="${prefix}index.html" class="skip-link">Skip to content</a>
    <header class="site-header">
      <div class="nav-inner">
        <a href="${prefix}index.html" class="nav-logo">
          <img class="nav-logo-img" src="${logoPath}" alt="Madhavan Jewellers logo" />
          <span class="nav-logo-text">
            <span class="nav-logo-name">MADHAVAN<span class="nav-logo-name-alt"> </span></span>
            <span class="nav-logo-sub">Jewellers Pvt Ltd</span>
          </span>
        </a>
        <nav class="nav-links" aria-label="Primary">
          ${navItems.map(n => {
            if (n.dropdown) {
              const subLinks = n.dropdown.map(d => `
                <a class="nav-dropdown-link" href="${prefix + d.href}">
                  <img class="nav-dropdown-thumb" src="${prefix}${d.img}" alt="${d.label}" loading="lazy" />
                  <span>${d.label}</span>
                </a>`).join('');
              return `
                <div class="nav-dropdown">
                  <button type="button" class="nav-link nav-dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                    ${n.label}
                    <svg class="nav-caret" viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
                  </button>
                  <div class="nav-dropdown-menu">${subLinks}</div>
                </div>`;
            }
            return `<a class="nav-link" href="${prefix + n.href}">${n.label}</a>`;
          }).join('')}
        </nav>
        <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
    <div class="nav-overlay"></div>
  `;

  const footerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="fb-logo">
              <img src="${logoPath}" alt="Madhavan Jewellers logo" />
              <div>
                <div class="fb-name">MADHAVAN</div>
                <div class="fb-sub">Jewellers Pvt Ltd</div>
              </div>
            </div>
            <p>Crafting timeless temple-inspired jewellery since 1945. Heritage artistry meets modern luxury, in 22k gold, sterling silver, and certified diamonds.</p>
            <form class="newsletter" aria-label="Newsletter signup">
              <input type="email" placeholder="Your email address" aria-label="Email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
          <div class="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="${prefix}index.html">Home</a></li>
              <li><a href="${prefix}about.html">About Us</a></li>
              <li><a href="${prefix}services.html">Services</a></li>
              <li><a href="${prefix}gallery.html">Gallery</a></li>
              <li><a href="${prefix}testimonials.html">Testimonials</a></li>
              <li><a href="${prefix}faq.html">FAQ</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Collections</h4>
            <ul>
              <li><a href="${prefix}collections/gold.html">Gold Collection</a></li>
              <li><a href="${prefix}collections/silver.html">Silver Collection</a></li>
              <li><a href="${prefix}collections/diamond.html">Diamond Collection</a></li>
              <li><a href="${prefix}collections/bridal.html">Bridal Collection</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Reach Us</h4>
            <ul>
              <li><a href="${prefix}contact.html">Contact</a></li>
              <li><a href="tel:+917598824317">++91 7598824317</a></li>
              <li><a href="mailto:madhavanjewels@gmail.com">madhavanjewels@gmail.com</a></li>
              <li><span>West, Madurai, Tamil Nadu</span></li>
            </ul>
            <div class="footer-social">
              <a href=https://www.instagram.com/madhavanjewellers?igsh=ZmRsNjF3azduazEw target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></a>
              <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-3.5-.45-5.18a2.5 2.5 0 0 0-1.77-1.77C19.1 4.6 12 4.6 12 4.6s-7.1 0-8.78.45a2.5 2.5 0 0 0-1.77 1.77C1 8.5 1 12 1 12s0 3.5.45 5.18a2.5 2.5 0 0 0 1.77 1.77c1.68.45 8.78.45 8.78.45s7.1 0 8.78-.45a2.5 2.5 0 0 0 1.77-1.77C23 15.5 23 12 23 12zM9.75 15.5v-7l6 3.5z"/></svg></a>
              <a href="https://play.google.com/storehttps://play.google.com/store/apps/details?id=com.madhavanjewellers.gss.twa
" target="_blank" rel="noopener" aria-label="Get it on Google Play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.75-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.68.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"/></svg></a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; <span data-year>2024</span> Madhavan Jewellers Pvt Ltd. All rights reserved.</p>
          <p><a href="#">Privacy Policy</a> · <a href="#">Terms</a></p>
        </div>
      </div>
    </footer>
    <button class="back-to-top" aria-label="Back to top">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
    </button>
  `;

  function initDropdowns() {
    document.querySelectorAll('.nav-dropdown-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const dropdown = btn.closest('.nav-dropdown');
        const isOpen = dropdown.classList.contains('open');
        document.querySelectorAll('.nav-dropdown.open').forEach(d => {
          d.classList.remove('open');
          d.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          dropdown.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
    document.addEventListener('click', () => {
      document.querySelectorAll('.nav-dropdown.open').forEach(d => {
        d.classList.remove('open');
        d.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', 'false');
      });
    });
  }

  function inject() {
    const headerSlot = document.getElementById('header-slot');
    const footerSlot = document.getElementById('footer-slot');
    if (headerSlot) headerSlot.outerHTML = headerHTML;
    if (footerSlot) footerSlot.outerHTML = footerHTML;

    // Page watermark — faint logo imprint, added once on every page
    if (!document.querySelector('.page-watermark')) {
      const watermark = document.createElement('img');
      watermark.src = prefix + 'public/watermark-logo.png';
      watermark.alt = '';
      watermark.setAttribute('aria-hidden', 'true');
      watermark.className = 'page-watermark';
      document.body.appendChild(watermark);
    }

    document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

    initDropdowns();
    document.dispatchEvent(new Event('partials-loaded'));
    window.__partialsReady = true;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
