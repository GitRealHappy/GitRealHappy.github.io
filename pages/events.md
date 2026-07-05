---
layout: page
title: "Events"
permalink: /events/
body_class: 'events-page'
---

<div class="events-content">
  <h1>Events</h1>

  <p class="events-intro">
    I organize events for entrepreneurs to get connected and learn from the best thinkers in
    the world of building personal brand empires. I also throw music and art parties.
  </p>

  <div class="event-feature">
    <h2>The Future-Proof Creator Summit</h2>
    <p class="event-date"><strong>June 2026 · Abbotsford, BC</strong></p>

    <p class="event-description">
      A three-day gathering where serious creators, educators, and digital entrepreneurs
      came together to master the timeless principles and modern strategies behind building a
      sustainable, high-income creative business that survives the AI revolution, without
      compromising their passion. Headlined by <strong>Dan Koe</strong>,
      <strong>Kieran Drew</strong>, and <strong>Taylin John Simmonds</strong>, the room was
      full of people who left as collaborators, friends, and business partners.
    </p>

    <div class="speaker-icons">
      <img src="{{ '/assets/images/events/icon1.jpg' | relative_url }}" alt="Speaker" class="speaker-icon">
      <img src="{{ '/assets/images/events/icon2.jpg' | relative_url }}" alt="Speaker" class="speaker-icon">
      <img src="{{ '/assets/images/events/icon3.jpg' | relative_url }}" alt="Speaker" class="speaker-icon">
      <img src="{{ '/assets/images/events/icon4.jpg' | relative_url }}" alt="Speaker" class="speaker-icon">
      <img src="{{ '/assets/images/events/icon5.jpg' | relative_url }}" alt="Speaker" class="speaker-icon">
      <img src="{{ '/assets/images/events/icon6.jpg' | relative_url }}" alt="Speaker" class="speaker-icon">
    </div>

    <p class="event-subtitle">
      The 2026 summit is over, but the next one is already taking shape. Nobody was asked to
      post these afterward. They just did.
    </p>

    <div class="testimonial-wall">
      <button type="button" class="testimonial" onclick="openTestimonial(0)" aria-label="View attendee post">
        <img src="{{ '/assets/images/testimonials/test14.png' | relative_url }}" alt="A 2026 summit attendee's social post" loading="lazy">
      </button>
      <button type="button" class="testimonial" onclick="openTestimonial(1)" aria-label="View attendee post">
        <img src="{{ '/assets/images/testimonials/test15.png' | relative_url }}" alt="A 2026 summit attendee's social post" loading="lazy">
      </button>
      <button type="button" class="testimonial" onclick="openTestimonial(2)" aria-label="View attendee post">
        <img src="{{ '/assets/images/testimonials/test16.png' | relative_url }}" alt="A 2026 summit attendee's social post" loading="lazy">
      </button>
    </div>

    <p class="event-description">
      The 2027 Future-Proof Creator Summit is on the horizon. Tickets aren't public yet, and
      the first twenty sold out in pre-sale. Get on the waitlist to be first to know when the
      dates, location, and tickets are announced, and to lock in your place before the room
      fills up again.
    </p>

    <p class="event-cta">
      <a href="https://www.thelivinginternet.com/" target="_blank" rel="noopener" class="event-link">
        Get on the waitlist →
      </a>
    </p>

    <p class="event-note">
      Curious what the 2026 summit was like?
      <a href="https://www.thelivinginternet.com/" target="_blank" rel="noopener">Learn more here</a>
      · Stay tuned for 2027 updates.
    </p>
  </div>

  <div class="event-feature">
    <h2>TURQUOISER Under The Stars</h2>
    <p class="event-date"><strong>A night to remember</strong></p>

    <div class="event-video">
      <iframe src="https://www.youtube.com/embed/WBm4qGubn70?si=5DR_TBO5XweYI76h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    <p class="event-description">
      A bunch of friends from the Fraser Valley and Vancouver area gathered to groove to the
      exquisite funky tunes of Turquoiser, a group of Chilliwack dwellers who make music and
      other forms of art. At this event we had an art gallery showcasing the visual art of
      Keaton Sauder, Connor Koewenhoven, and Jack Hendsbee.
    </p>

    <p class="event-description">
      Special thanks to Richard Wiebe for constructing this beautiful location, the Rusty
      Shovel, and inviting such a fun time into it.
    </p>

    <p class="event-headliners">Event Coordinator: <strong>Jesse James Carver</strong></p>

    <h3>The Band</h3>
    <ul>
      <li>Keaton Sauder &mdash; Bass</li>
      <li>Parker Hendsbee &mdash; Drums</li>
      <li>Connor Koewenhoven &mdash; Guitar</li>
      <li>Isaac Cornish &mdash; Keyboard</li>
    </ul>
  </div>
</div>

<!-- Testimonial Lightbox -->
<div id="testimonial-lightbox" class="testimonial-lightbox" style="display: none;" tabindex="-1" role="dialog" aria-label="Attendee posts">
  <button class="testimonial-lightbox__close" onclick="closeTestimonial()" aria-label="Close">&times;</button>
  <button class="testimonial-lightbox__nav testimonial-lightbox__prev" onclick="stepTestimonial(-1)" aria-label="Previous post">&#10094;</button>
  <div class="testimonial-lightbox__content">
    <img src="" alt="" id="testimonial-lightbox-image">
  </div>
  <button class="testimonial-lightbox__nav testimonial-lightbox__next" onclick="stepTestimonial(1)" aria-label="Next post">&#10095;</button>
</div>

<script>
(function () {
  var sources = [
    { src: "{{ '/assets/images/testimonials/test14.png' | relative_url }}", alt: "A 2026 summit attendee's social post" },
    { src: "{{ '/assets/images/testimonials/test15.png' | relative_url }}", alt: "A 2026 summit attendee's social post" },
    { src: "{{ '/assets/images/testimonials/test16.png' | relative_url }}", alt: "A 2026 summit attendee's social post" }
  ];
  var index = 0;
  var lightbox = document.getElementById('testimonial-lightbox');
  var image = document.getElementById('testimonial-lightbox-image');
  var touchStartX = 0;

  function render() {
    image.src = sources[index].src;
    image.alt = sources[index].alt;
  }

  window.openTestimonial = function (i) {
    index = i;
    render();
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    lightbox.focus();
  };

  window.closeTestimonial = function () {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
  };

  window.stepTestimonial = function (dir) {
    index = (index + dir + sources.length) % sources.length;
    render();
  };

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target === image.parentNode) closeTestimonial();
  });

  document.addEventListener('keydown', function (e) {
    if (lightbox.style.display !== 'flex') return;
    if (e.key === 'Escape') closeTestimonial();
    else if (e.key === 'ArrowLeft') stepTestimonial(-1);
    else if (e.key === 'ArrowRight') stepTestimonial(1);
  });

  lightbox.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(dx) > 50) stepTestimonial(dx > 0 ? -1 : 1);
  }, { passive: true });
})();
</script>
