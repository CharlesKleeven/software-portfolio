// DISABLE BROWSER SCROLL RESTORATION
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Check if we're loading directly to #work
const isDirectWorkLoad = window.location.hash === '#work';

document.addEventListener('DOMContentLoaded', function () {
  // === Active Nav Highlight ===
  const currentPath = window.location.pathname;
  let activeLink = '';

  console.log('Current path:', currentPath); // Debug line

  if (currentPath === '/' || currentPath === '/index.html' || currentPath === '' || currentPath.endsWith('index.html')) {
    activeLink = 'work';
  } else if (currentPath.includes('about')) {
    activeLink = 'about';
    console.log('About page detected'); // Debug line
  } else if (currentPath.includes('contact') || currentPath.includes('thank-you')) {
    activeLink = 'contact';
  } else if (
    currentPath.includes('/work/') ||
    currentPath.includes('_page.html') ||
    currentPath.includes('pipeline') ||
    currentPath.includes('dialogue') ||
    currentPath.includes('world') ||
    currentPath.includes('persistence') ||
    currentPath.includes('solo')
  ) {
    activeLink = 'work';
  }

  // === Inject Nav + Footer ===
  // Determine if we're in a subdirectory for relative paths
  const isInSubdir = window.location.pathname.includes('/pages/') || window.location.pathname.includes('/work/');
  const pathPrefix = isInSubdir ? '../' : '';
  
  const components = `
    <div class="nav-container">
      <a href="${pathPrefix || '/'}" class="brand-name">Jodie</a>
      <div class="nav-links">
        <div class="nav-item group relative">
          <a href="${pathPrefix || '/'}#work" class="nav-link has-dropdown ${activeLink === 'work' ? 'active' : ''}">Work</a>
          <div class="dropdown-menu">
            <a href="${pathPrefix}work/solo-development">SoloDevelopment</a>
            <a href="${pathPrefix}work/portrait-pipeline">Portrait Pipeline</a>
            <a href="${pathPrefix}work/world-editor">World Editor</a>
            <a href="${pathPrefix}work/data-persistence">Data Persistence</a>
            <a href="${pathPrefix}work/dialogue-system">Dialogue System</a>
          </div>
        </div>
        <div class="nav-item">
          <a href="${pathPrefix}about" class="nav-link ${activeLink === 'about' ? 'active' : ''}">About</a>
        </div>
        <div class="nav-item">
          <a href="${pathPrefix}contact" class="nav-link ${activeLink === 'contact' ? 'active' : ''}">Contact</a>
        </div>
      </div>
    </div>
  `;

  const footer = `
    <footer class="footer">
      <div class="container">
        <h3 class="text-3xl font-semibold mb-6 serif">Thanks for stopping by!</h3>
        <a href="${pathPrefix}contact" class="footer-button">Say hello</a>
        <p class="text-orange-200/70 mt-10 text-sm">&copy; 2025 Jodie Nguyen</p>
      </div>
    </footer>
  `;

  document.querySelector('header.header').innerHTML = components;
  document.getElementById('footer-placeholder').innerHTML = footer;

  // === Scroll Position Handling ===
  if (isDirectWorkLoad) {
    const workSection = document.getElementById('work');
    if (workSection) {
      window.scrollTo({ top: workSection.offsetTop - 100, behavior: 'auto' });
    }
  } else if (!window.location.hash) {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  // === Video Lazy Loading ===
  const lazyVideos = document.querySelectorAll('video[data-src]');
  
  if (lazyVideos.length > 0) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const video = entry.target;
          const src = video.getAttribute('data-src');
          
          if (src) {
            const source = video.querySelector('source');
            if (source) {
              source.src = src;
              video.load();
              video.play(); // Start playing once loaded
              video.removeAttribute('data-src');
              videoObserver.unobserve(video);
            }
          }
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px 0px'
    });

    lazyVideos.forEach(video => videoObserver.observe(video));
  }

  // === Fade-In Scroll Animation ===
  const animatedElements = document.querySelectorAll('.fade-in-up');
  const lightboxFaders = document.querySelectorAll('.fade-lightbox');

  if (animatedElements.length > 0 || lightboxFaders.length > 0) {
    if (isDirectWorkLoad) {
      setTimeout(() => {
        animatedElements.forEach(el => el.classList.add('visible'));
        lightboxFaders.forEach(el => el.classList.add('visible'));
      }, 100);
    } else {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      animatedElements.forEach(el => observer.observe(el));
      lightboxFaders.forEach(el => observer.observe(el));
    }
  }

  // === Smooth Scroll for Internal Anchor Links ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  // === GLOBAL LIGHTBOX SETUP ===
  const overlay = document.getElementById('global-lightbox-overlay');
  const container = document.getElementById('global-lightbox-content');

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      overlay.classList.remove('visible');
      container.innerHTML = '';
    }
  });

  // Close on click outside content
  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      overlay.classList.remove('visible');
      container.innerHTML = '';
    }
  });

  // Handle all lightbox triggers
  document.querySelectorAll('[data-lightbox-src]').forEach(trigger => {
    trigger.addEventListener('click', e => {
      e.preventDefault();

      const src = trigger.getAttribute('data-lightbox-src');
      const type = trigger.getAttribute('data-lightbox-type');

      if (src && type) {
        container.innerHTML = type === 'video'
          ? `<video autoplay loop muted playsinline><source src="${src}" type="video/mp4"></video>`
          : `<img src="${src}" alt="Lightbox content">`;

        overlay.classList.add('visible');
      }
    });
  });
});
