/**
 * Shared Navigation & Footer Components
 * Design System: "The Master Blueprint"
 * 
 * Inject consistent header/footer across all portfolio pages.
 * Uses Archivo Black for nav labels, Fira Code for metadata, 
 * copper (#B7410E) for active state, neon (#B0D500) for hover.
 */

(function () {
  'use strict';

  // ── Configuration ─────────────────────────────────────────
  const LINKS = {
    linkedin: 'https://www.linkedin.com/in/migueamejias-mams/',
    github:   'https://github.com/miguelamejias',
    email:    'mailto:migueamejias.mams@gmail.com',
    contact:  'contact.html'
  };

  const NAV_ITEMS = [
    { label: 'HOME',     href: 'index.html' },
    { label: 'CV',       href: 'cv.html' },
    { label: 'PROJECTS', href: 'projects.html' },
    { label: 'BLOG',     href: 'blog.html' },
    { label: 'CONTACT',  href: 'contact.html' }
  ];

  // ── Utility: detect current page ──────────────────────────
  function getCurrentPage() {
    const path = window.location.pathname;
    const file = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    return file;
  }

  // ── Build Navigation HTML ─────────────────────────────────
  function buildNav() {
    const current = getCurrentPage();

    const navLinks = NAV_ITEMS.map(item => {
      const isActive = current === item.href ||
        (current === '' && item.href === 'index.html');

      if (isActive) {
        return `<a class="font-['Archivo_Black'] tracking-tighter uppercase text-sm text-[#B7410E] border-b-2 border-[#B7410E] pb-1" href="${item.href}">${item.label}</a>`;
      }
      return `<a class="font-['Archivo_Black'] tracking-tighter uppercase text-sm text-[#E5E2E1] hover:text-[#B0D500] transition-colors" href="${item.href}">${item.label}</a>`;
    }).join('\n');

    return `<!-- Unified Navigation -->
<nav id="site-nav" class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-[#131313]/70 backdrop-blur-md" role="navigation" aria-label="Main navigation">
  <a href="index.html" class="font-['Archivo_Black'] text-2xl tracking-tighter text-[#E5E2E1] hover:text-primary transition-colors">STRATEGY_ARCHITECT</a>
  <div class="hidden md:flex gap-8 items-center">
    ${navLinks}
  </div>
  <a href="contact.html" class="bg-primary-container text-on-primary-container px-6 py-2 font-['Archivo_Black'] text-xs tracking-widest uppercase hover:shadow-[0_0_15px_#B0D500] transition-all active:scale-95 duration-75">
    ESTABLISH_CONNECTION
  </a>
</nav>`;
  }

  // ── Build Footer HTML ─────────────────────────────────────
  function buildFooter() {
    const year = new Date().getFullYear();

    return `<!-- Unified Footer -->
<footer id="site-footer" class="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center border-t border-[#B7410E]/10 bg-[#131313]" role="contentinfo">
  <a href="index.html" class="font-['Archivo_Black'] text-lg text-[#E5E2E1] mb-6 md:mb-0 hover:text-primary transition-colors">STRATEGY_ARCHITECT</a>
  <div class="flex gap-8 mb-6 md:mb-0">
    <a class="font-['Fira_Code'] text-[10px] uppercase tracking-widest text-[#E5E2E1]/50 hover:text-[#B0D500] transition-all" href="${LINKS.linkedin}" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
    <a class="font-['Fira_Code'] text-[10px] uppercase tracking-widest text-[#E5E2E1]/50 hover:text-[#B0D500] transition-all" href="${LINKS.github}" target="_blank" rel="noopener noreferrer">GITHUB</a>
    <a class="font-['Fira_Code'] text-[10px] uppercase tracking-widest text-[#E5E2E1]/50 hover:text-[#B0D500] transition-all" href="${LINKS.email}">EMAIL</a>
    <a class="font-['Fira_Code'] text-[10px] uppercase tracking-widest text-[#E5E2E1]/50 hover:text-[#B0D500] transition-all" href="${LINKS.contact}">CONTACT</a>
  </div>
  <div class="font-['Fira_Code'] text-[10px] uppercase tracking-widest text-[#E5E2E1]/50">
    © ${year} MIGUEL ÁNGEL MEJÍA. ALL RIGHTS RESERVED.
  </div>
</footer>`;
  }

  // ── Inject Components ─────────────────────────────────────
  function init() {
    // Remove existing nav/header navigation
    const existingNavs = document.querySelectorAll('nav, header');
    existingNavs.forEach(el => {
      // Only remove if it's the top fixed navigation bar
      if (el.classList.contains('fixed') ||
          el.querySelector('a[href*="index.html"], a[href*="cv.html"], a[href*="projects.html"]') ||
          (el.textContent.includes('STRATEGY_ARCHITECT') && el.querySelector('a'))) {
        el.remove();
      }
    });

    // Remove existing footer
    const existingFooters = document.querySelectorAll('footer');
    existingFooters.forEach(el => el.remove());

    // Inject new NAV at top of body
    document.body.insertAdjacentHTML('afterbegin', buildNav());

    // Inject new FOOTER at bottom of body
    document.body.insertAdjacentHTML('beforeend', buildFooter());
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
