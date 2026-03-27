---
layout: page
title: "Events"
permalink: /events/
body_class: 'events-page'
---

<div class="events-content">
  <h1>Upcoming Events</h1>

  <div class="event-feature">
    <h2>The Future-Proof Creator Summit</h2>
    <p class="event-date"><strong>June 5–7, 2026</strong></p>
    <p class="event-location">Sheraton Vancouver Airport Hotel • Vancouver, BC</p>

    <p class="event-description">
      Find Your Tribe. Build Your Future-Proof Creator Business.
    </p>

    <p class="event-subtitle">
      The Future-Proof Creator Summit is where serious creators, educators, and digital entrepreneurs unite for 3 days to master the timeless principles and modern strategies behind building your sustainable, high-income creative business that survives the AI revolution, without compromising your passion.
    </p>

    <p class="event-headliners">
      Headlined by: <strong>Dan Koe</strong>, <strong>Kieran Drew</strong>, and <strong>Taylin John Simmonds</strong>.
    </p>

    <div class="speaker-icons">
      <img src="{{ '/assets/images/events/icon1.jpg' | relative_url }}" alt="Speaker" class="speaker-icon">
      <img src="{{ '/assets/images/events/icon2.jpg' | relative_url }}" alt="Speaker" class="speaker-icon">
      <img src="{{ '/assets/images/events/icon3.jpg' | relative_url }}" alt="Speaker" class="speaker-icon">
      <img src="{{ '/assets/images/events/icon4.jpg' | relative_url }}" alt="Speaker" class="speaker-icon">
      <img src="{{ '/assets/images/events/icon5.jpg' | relative_url }}" alt="Speaker" class="speaker-icon">
      <img src="{{ '/assets/images/events/icon6.jpg' | relative_url }}" alt="Speaker" class="speaker-icon">
    </div>

    <h3>What You'll Learn</h3>
    <ul>
      <li>How to future-proof your creative work in the age of AI</li>
      <li>Build real relationships that lead to sales, business deals, and collaborations</li>
      <li>Write for impact and persuasion</li>
      <li>Create and sell your products or services authentically</li>
      <li>Use AI to multiply your productivity</li>
      <li>Build an audience who trusts you</li>
    </ul>

    <h3>The Experience</h3>
    <ul>
      <li><strong>13+ Speaker Sessions:</strong> Learn from creators with 3.5+ million combined followers</li>
      <li><strong>Life-changing Networking:</strong> Guided networking sessions designed for meaningful connections</li>
      <li><strong>Workshops & Mental Model Labs:</strong> Turn your knowledge into income</li>
      <li><strong>Live Podcasts & Q&A:</strong> Unscripted conversations about building in the new era</li>
      <li><strong>Premium Venue:</strong> 24-hour gym, heated pool, free airport shuttle</li>
    </ul>

    <h3>Ticket Options</h3>

    <div id="early-bird-countdown" class="early-bird-countdown" aria-live="polite">
      <p class="early-bird-countdown__label">Early bird pricing ends April 1, 2026</p>
      <div class="early-bird-countdown__timer" role="timer" aria-label="Time remaining until early bird pricing ends">
        <div class="early-bird-countdown__unit">
          <span id="cd-days" class="early-bird-countdown__value">00</span>
          <span class="early-bird-countdown__unit-label">days</span>
        </div>
        <div class="early-bird-countdown__unit">
          <span id="cd-hours" class="early-bird-countdown__value">00</span>
          <span class="early-bird-countdown__unit-label">hours</span>
        </div>
        <div class="early-bird-countdown__unit">
          <span id="cd-mins" class="early-bird-countdown__value">00</span>
          <span class="early-bird-countdown__unit-label">min</span>
        </div>
        <div class="early-bird-countdown__unit">
          <span id="cd-secs" class="early-bird-countdown__value">00</span>
          <span class="early-bird-countdown__unit-label">sec</span>
        </div>
      </div>
    </div>

    <p id="early-bird-ended" class="early-bird-ended" hidden>Early bird pricing has ended. Standard rates are now in effect.</p>

    <div class="ticket-options">
      <div class="ticket" data-early="$349 USD" data-regular="$449 USD">
        <h4>General Admission</h4>
        <p class="ticket-price"><strong class="js-ticket-price">$349 USD</strong></p>
        <p class="ticket-price-later">$449 USD after April 1st</p>
        <p>Access to all talks, workshops, and live podcasts. Includes 3 meals, 1-year premium community membership, and networking games.</p>
      </div>

      <div class="ticket" data-early="$997 USD" data-regular="$1,297 USD">
        <h4>VIP</h4>
        <p class="ticket-price"><strong class="js-ticket-price">$997 USD</strong></p>
        <p class="ticket-price-later">$1,297 USD after April 1st</p>
        <p>Everything in General Admission PLUS exclusive Saturday dinner with speakers, front-row seating, after-party ticket, and 2 years of premium membership.</p>
      </div>

      <div class="ticket" data-early="$149 USD" data-regular="$197 USD">
        <h4>Virtual</h4>
        <p class="ticket-price"><strong class="js-ticket-price">$149 USD</strong></p>
        <p class="ticket-price-later">$197 USD after April 1st</p>
        <p>Livestream access to all three days, 1-year premium community membership, virtual networking, and recordings available for a full year.</p>
      </div>
    </div>

    <p class="event-cta">
      <a href="https://thelivinginternet.com/" target="_blank" class="event-link">
        Learn More & Get Tickets →
      </a>
    </p>

    <p class="event-note">
      <em>Oakmoss is a proud sponsor of The Future-Proof Creator Summit.</em>
    </p>
  </div>
</div>

<script>
(function () {
  var end = new Date(2026, 3, 2, 0, 0, 0);
  var countdown = document.getElementById('early-bird-countdown');
  var endedMsg = document.getElementById('early-bird-ended');
  var dEl = document.getElementById('cd-days');
  var hEl = document.getElementById('cd-hours');
  var mEl = document.getElementById('cd-mins');
  var sEl = document.getElementById('cd-secs');

  function pad(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function applyRegularPricing() {
    document.querySelectorAll('.ticket').forEach(function (ticket) {
      var priceEl = ticket.querySelector('.js-ticket-price');
      if (priceEl && ticket.dataset.regular) {
        priceEl.textContent = ticket.dataset.regular;
      }
      var later = ticket.querySelector('.ticket-price-later');
      if (later) later.hidden = true;
    });
    if (countdown) countdown.hidden = true;
    if (endedMsg) endedMsg.hidden = false;
  }

  function tick() {
    var now = Date.now();
    var remaining = end - now;
    if (remaining <= 0) {
      applyRegularPricing();
      return;
    }
    var sec = Math.floor(remaining / 1000);
    var days = Math.floor(sec / 86400);
    sec -= days * 86400;
    var hours = Math.floor(sec / 3600);
    sec -= hours * 3600;
    var mins = Math.floor(sec / 60);
    sec -= mins * 60;
    if (dEl) dEl.textContent = pad(days);
    if (hEl) hEl.textContent = pad(hours);
    if (mEl) mEl.textContent = pad(mins);
    if (sEl) sEl.textContent = pad(sec);
    setTimeout(tick, 1000);
  }

  if (Date.now() >= end.getTime()) {
    applyRegularPricing();
  } else {
    tick();
  }
})();
</script>
