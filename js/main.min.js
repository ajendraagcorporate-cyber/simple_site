
// --- TEMPLATES ---
var headerHTML = `<nav class="nav">
  <div class="nav-inner">
    <a href="/" class="brand">
      <span class="brand-mark"><img src="img/mukul-sir-2026.jpg" alt="Dr. Mukul Agrawal"></span>
      <span class="brand-text">
        <span class="brand-name">Dr. Mukul Agrawal</span>
        <span class="brand-tag">Financial Education by Mukul Agrawal</span>
      </span>
    </a>
    <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
      <span></span>
    </button>
    <ul class="nav-links">
      <li><a href="/">About</a></li>
      <li><a href="/videos">Videos</a></li>
      <li><a href="/reviews">Student Reviews</a></li>
      <li><a href="/contact-us">Contact Us</a></li>
    </ul>
    <a class="nav-cta" href="https://www.youtube.com/@FinanceWithMukulAgrawal" target="_blank" rel="noopener">Watch on YouTube \u2192</a>
  </div>
</nav>`;
var footerHTML = `<footer>
  <div class="wrap" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));gap:40px;padding-bottom:40px;border-bottom:1px solid rgba(255,255,255,0.06);">
    <div>
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:600;color:#F3F1E8;margin-bottom:8px;">Dr. Mukul Agrawal</div>
      <div class="mono" style="font-size:0.75rem;color:#92e3a9;font-weight:600;text-transform:uppercase;letter-spacing:1px;margin-bottom:20px;">Financial Education</div>
      <div style="font-size:0.85rem;color:#A9B6AE;line-height:1.7;max-width:280px;">
        C-1, Bank of Baroda Building,<br>Sector-M, Mama Chauraha,<br>Kursi Road, Lucknow<br>
        <a href="tel:+919708094321" style="color:#DCE7E0;text-decoration:none;font-weight:600;margin-top:12px;display:inline-block;padding:8px 16px;background:rgba(255,255,255,0.05);border-radius:4px;">\uD83D\uDCDE +91-9708094321</a>
      </div>
    </div>
    
    <div>
      <div style="font-size:0.9rem;font-weight:600;color:#fff;margin-bottom:20px;">Quick Links</div>
      <ul class="footer-links" style="display:flex;flex-direction:column;gap:12px;align-items:flex-start;">
        <li><a href="/">About Dr. Mukul</a></li>
        <li><a href="/videos">Watch Videos</a></li>
        <li><a href="/reviews">Student Reviews</a></li>
        <li><a href="/contact-us">Contact Us</a></li>
        <li><a href="https://www.youtube.com/@FinanceWithMukulAgrawal" target="_blank" rel="noopener" style="color:#92e3a9;">Subscribe on YouTube</a></li>
      </ul>
    </div>
    
    <div>
      <div style="font-size:0.9rem;font-weight:600;color:#fff;margin-bottom:20px;">Our Location</div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5280.4065360341165!2d80.95501116584128!3d26.89268996576197!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957dab2fa47c9%3A0xa12ae2f6085d2264!2sBank%20of%20Baroda!5e0!3m2!1sen!2sin!4v1784104226718!5m2!1sen!2sin" width="100%" height="160" style="border:0; border-radius:8px; opacity:0.85; filter:grayscale(0.2);" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  </div>
  <div class="footer-bottom" style="padding-top:24px;border-top:none;">
    <span>&copy; 2026 Finance with Mukul. All rights reserved.</span>
    <span>Content is for education only, not investment advice.</span>
  </div>
</footer>`;

var headerPlaceholder = document.getElementById('header-placeholder');
var footerPlaceholder = document.getElementById('footer-placeholder');

if (headerPlaceholder) {
  headerPlaceholder.innerHTML = headerHTML;
  // Make active link dynamic
  var currentPath = window.location.pathname;
  var links = headerPlaceholder.querySelectorAll('.nav-links a');
  links.forEach(function(link) {
    var linkPath = link.getAttribute('href');
    if (linkPath === currentPath) {
      link.classList.add('active');
    }
  });
}

if (footerPlaceholder) {
  footerPlaceholder.innerHTML = footerHTML;
}
// --- END TEMPLATES ---

// Nav toggle
var navToggle = document.getElementById('navToggle');
if (navToggle) {
  navToggle.addEventListener('click', function(){
    var nav = document.querySelector('.nav');
    var isOpen = nav.classList.toggle('is-open');
    this.setAttribute('aria-expanded', isOpen);
  });
}

// Videos
var featuredGrid = document.getElementById('featuredGrid');
if (featuredGrid) {
  var featuredIds = ["WwIKLcmneS8", "CdDHuWA2WME", "yGHh70UNorQ", "sqfB5w3Yx7Q"];

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function cardSkeleton(id) {
    return '' +
      '<a href="https://youtu.be/' + id + '" target="_blank" rel="noopener" class="card fv-card" data-id="' + id + '" ' +
      'style="padding:0;overflow:hidden;text-decoration:none;color:inherit;display:block;">' +
        '<div style="position:relative;background:var(--green-deep);">' +
          '<img src="https://img.youtube.com/vi/' + id + '/hqdefault.jpg" alt="Video thumbnail" style="width:100%;display:block;aspect-ratio:16/9;object-fit:cover;">' +
          '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">' +
            '<div style="width:52px;height:52px;border-radius:50%;background:rgba(255,255,255,0.92);display:flex;align-items:center;justify-content:center;">' +
              '<div style="width:0;height:0;border-top:9px solid transparent;border-bottom:9px solid transparent;border-left:15px solid var(--green-deep);margin-left:4px;"></div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div style="padding:16px 18px;">' +
          '<div class="fv-title" style="font-weight:600;font-size:0.98rem;line-height:1.4;min-height:2.7em;">Loading...</div>' +
          '<div class="mono fv-author" style="font-size:0.75rem;color:var(--muted);margin-top:10px;">Finance with Mukul</div>' +
        '</div>' +
      '</a>';
  }

  function renderSkeletons() {
    featuredGrid.innerHTML = featuredIds.map(cardSkeleton).join('');
  }

  function loadRealData() {
    featuredIds.forEach(function(id) {
      var url = 'https://www.youtube.com/oembed?url=' + encodeURIComponent('https://www.youtube.com/watch?v=' + id) + '&format=json';
      fetch(url)
        .then(function(res) { if (!res.ok) throw new Error('oembed failed'); return res.json(); })
        .then(function(data) {
          var card = document.querySelector('.fv-card[data-id="' + id + '"]');
          if (!card) return;
          card.querySelector('.fv-title').textContent = data.title || 'Watch on YouTube';
          card.querySelector('.fv-author').textContent = data.author_name || 'Finance with Mukul';
        })
        .catch(function() {
          var card = document.querySelector('.fv-card[data-id="' + id + '"]');
          if (!card) return;
          card.querySelector('.fv-title').textContent = 'Watch on YouTube';
        });
    });
  }

  renderSkeletons();
  loadRealData();

  // Auto-update latest video
  var latestIframe = document.getElementById('latest-video-iframe');
  if (latestIframe) {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCPs8w9f1gqe4BqkbI-9wTnw')
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (data && data.items && data.items.length > 0) {
          var link = data.items[0].link;
          var videoIdMatch = link.match(/v=([^&]+)/);
          if (videoIdMatch && videoIdMatch[1]) {
            latestIframe.src = 'https://www.youtube.com/embed/' + videoIdMatch[1] + '?si=UYNA3IMqL-YttXaW';
          }
        }
      })
      .catch(function(e) { console.error('Failed to load latest video', e); });
  }
}

// Reviews
var reviewsGrid = document.getElementById('reviewsGrid');
if (reviewsGrid) {
  var seedReviews = [
    { name: "Priya Sharma", rating: 5, text: "Started with zero knowledge of the stock market. Dr. Mukul's videos broke everything down so simply - mutual funds finally make sense to me.", tag: "Student" },
    { name: "Rohit Verma", rating: 5, text: "The tax-saving series alone saved me more than I expected. Clear, practical, no unnecessary jargon.", tag: "Student" },
    { name: "Ananya Iyer", rating: 4, text: "Great content for beginners. I'd love even more advanced strategy videos, but overall really solid.", tag: "Student" },
    { name: "Karan Mehta", rating: 5, text: "Watched the scam-awareness videos right before almost falling for a fake trading app. Genuinely grateful.", tag: "Student" },
    { name: "Sneha Reddy", rating: 5, text: "Finally a channel that explains financial independence in a way that doesn't feel overwhelming.", tag: "Student" },
    { name: "Aditya Nair", rating: 4, text: "Clear explanations and real examples. Helped me build my first SIP portfolio with confidence.", tag: "Student" }
  ];

  function starString(n) {
    var s = "";
    for (var i = 0; i < 5; i++) s += (i < n ? "\u2605" : "\u2606");
    return s;
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function renderReviews() {
    reviewsGrid.innerHTML = "";
    var submitted = [];
    try { submitted = JSON.parse(localStorage.getItem('mukulSiteReviews_v2') || '[]'); } catch (e) { submitted = []; }
    var all = submitted.concat(seedReviews);

    all.forEach(function(r) {
      var card = document.createElement('div');
      card.className = 'card';
      card.innerHTML =
        '<div style="color:var(--gold);font-size:0.95rem;letter-spacing:2px;margin-bottom:10px;">' + starString(r.rating) + '</div>' +
        '<p style="line-height:1.6;color:var(--ink);font-size:0.94rem;margin-bottom:16px;">' + escapeHtml(r.text) + '</p>' +
        '<div class="mono" style="font-size:0.75rem;color:var(--muted);text-transform:uppercase;letter-spacing:0.05em;">' + escapeHtml(r.name) + ' \u00B7 ' + escapeHtml(r.tag || 'Student') + '</div>';
      reviewsGrid.appendChild(card);
    });
  }
  
  var reviewForm = document.getElementById('reviewForm');
  if (reviewForm) {
    reviewForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var name = document.getElementById('rv-name');
      var text = document.getElementById('rv-text');
      var rating = document.getElementById('rv-rating').value;

      if (!name.value.trim() || !text.value.trim()) {
        name.style.borderColor = name.value.trim() ? 'var(--line)' : '#B3483C';
        text.style.borderColor = text.value.trim() ? 'var(--line)' : '#B3483C';
        return;
      }
      name.style.borderColor = 'var(--line)';
      text.style.borderColor = 'var(--line)';

      var submitted = [];
      try { submitted = JSON.parse(localStorage.getItem('mukulSiteReviews_v2') || '[]'); } catch (e) { submitted = []; }
      submitted.unshift({ name: name.value.trim(), rating: parseInt(rating, 10), text: text.value.trim(), tag: "New" });
      localStorage.setItem('mukulSiteReviews_v2', JSON.stringify(submitted));

      document.getElementById('rv-success').style.display = 'inline';
      this.reset();
      renderReviews();
    });
  }

  renderReviews();
}

// Contact
var contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    var formBtn = this.querySelector('button[type="submit"]');
    var originalBtnText = formBtn.textContent;
    var name = document.getElementById('cf-name');
    var email = document.getElementById('cf-email');
    var message = document.getElementById('cf-message');
    var valid = true;

    document.querySelectorAll('.cf-error').forEach(function(el){ el.style.display = 'none'; });
    name.style.borderColor = 'var(--line)';
    email.style.borderColor = 'var(--line)';

    if (!name.value.trim()) {
      document.querySelector('.cf-error[data-for="cf-name"]').style.display = 'block';
      name.style.borderColor = '#B3483C';
      valid = false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
      document.querySelector('.cf-error[data-for="cf-email"]').style.display = 'block';
      email.style.borderColor = '#B3483C';
      valid = false;
    }

    if (valid) {
      formBtn.textContent = 'Sending...';
      formBtn.disabled = true;

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '3b9937a5-883e-4a0d-aad1-dbd723630dd8', // Replace this with your key
          name: name.value.trim(),
          email: email.value.trim(),
          message: message ? message.value.trim() : '',
          subject: 'New Submission from Mukul Agrawal Site'
        })
      })
      .then(async (response) => {
        if (response.status == 200) {
          document.getElementById('cf-success').style.display = 'inline';
          contactForm.reset();
        } else {
          alert('Something went wrong. Please try again.');
        }
      })
      .catch(error => {
        alert('Something went wrong. Please try again.');
      })
      .finally(() => {
        formBtn.textContent = originalBtnText;
        formBtn.disabled = false;
      });
    }
  });
}

