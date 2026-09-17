const projects = {
  redemption: { title: 'Redemption', category: 'Passion Projects / 01', type: 'Fashion film', format: 'Short film / editorial', description: 'A study in transformation, shadow and the quiet voltage of a new beginning.', credits: 'RNM Productions / Direction / Production' },
  nocturnal: { title: 'Nocturnal', category: 'Passion Projects / 02', type: 'Editorial film', format: 'Fashion film / photography', description: 'A nocturne built from electric color, late hours and a silhouette that refuses to disappear.', credits: 'RNM Productions / Creative Direction / Film' },
  blossom: { title: 'Blossom', category: 'Passion Projects / 03', type: 'Fashion story', format: 'Editorial / stills', description: 'Texture, movement and a softer kind of power captured in a sequence of evolving frames.', credits: 'RNM Productions / Photography / Production' },
  'vijay-creates': { title: 'Vijay Creates', category: 'Influencer Content / 01', type: 'Creator identity', format: 'Social film series', description: 'A creator profile with the pace, warmth and point of view to make every frame feel personal.', credits: 'RNM Productions / Direction / Content Production' },
  'sara-khan': { title: 'Sara Khan', category: 'Influencer Content / 02', type: 'Personal story', format: 'Portrait film', description: 'A portrait of presence, built around the details that make a public image feel human.', credits: 'RNM Productions / Film / Photography' },
  'gym-wale-bhaiya': { title: 'Gym Wale Bhaiya', category: 'Influencer Content / 03', type: 'Content series', format: 'Branded social content', description: 'Energy, rhythm and honest effort turned into a repeatable visual language for social.', credits: 'RNM Productions / Concept / Production' },
  'daood-khan': { title: 'Daood Khan', category: 'Influencer Content / 04', type: 'Portrait series', format: 'Digital campaign', description: 'A character-led portrait series that lets craft, charisma and considered light lead the way.', credits: 'RNM Productions / Direction / Photography' },
  manvi: { title: 'Manvi', category: 'Influencer Content / 05', type: 'Social film', format: 'Portrait / short-form', description: 'A bright, kinetic frame for a story told with honesty and a little bit of wonder.', credits: 'RNM Productions / Direction / Production' },
  floo: { title: 'Floo', category: 'Commercial Work / 01', type: 'Brand film', format: 'Commercial / campaign', description: 'A product world with a clear pulse: tactile, contemporary and made to stay with you.', credits: 'RNM Productions / Film / Production' },
  'socialite-seven': { title: 'Socialite Seven', category: 'Commercial Work / 02', type: 'Campaign', format: 'Brand campaign', description: 'A campaign that turns an everyday ritual into an invitation to look closer.', credits: 'RNM Productions / Creative Direction / Film' },
  'bhooka-bangali': { title: 'Bhooka Bangali', category: 'Commercial Work / 03', type: 'Food film', format: 'Commercial / social', description: 'Flavor, appetite and a table full of movement, directed with a generous point of view.', credits: 'RNM Productions / Direction / Production' },
  'navrang-saree-house': { title: 'Navrang Saree House', category: 'Commercial Work / 04', type: 'Retail story', format: 'Brand film / photography', description: 'A celebration of color and continuity for a house where every fabric carries a memory.', credits: 'RNM Productions / Film / Photography' },
  'real-estate': { title: 'Real Estate', category: 'Commercial Work / 05', type: 'Space / architecture', format: 'Property film', description: 'Architecture rendered as atmosphere: a measured journey through light, volume and place.', credits: 'RNM Productions / Direction / Film' },
  hospitality: { title: 'Hospitality', category: 'Commercial Work / 06', type: 'Experience film', format: 'Brand story', description: 'A sense of arrival, held in the gestures and textures that make a space feel like yours.', credits: 'RNM Productions / Creative / Production' },
  'retail-and-stores': { title: 'Retail and Stores', category: 'Commercial Work / 07', type: 'Commercial film', format: 'Campaign / retail', description: 'A visual system for the places where discovery, design and daily life meet.', credits: 'RNM Productions / Film / Direction' },
  'podcast-work': { title: 'Podcast Work', category: 'Commercial Work / 08', type: 'Conversation series', format: 'Multi-camera / digital', description: 'A considered visual home for ideas in conversation, with room for every voice to land.', credits: 'RNM Productions / Multi-camera / Production' }
};

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: 0.15 }) : null;
document.querySelectorAll('.reveal').forEach((element) => revealObserver ? revealObserver.observe(element) : element.classList.add('visible'));

document.querySelectorAll('[data-rail]').forEach((rail) => {
  const track = rail.querySelector('.project-track');
  const cards = [...track.querySelectorAll('.project-card')];
  let current = 0;
  let startX = 0;
  let dragging = false;
  const maxIndex = () => Math.max(0, cards.length - (window.innerWidth < 800 ? 1.25 : 4));
  const update = () => { const width = cards[0].getBoundingClientRect().width + 16; track.style.transform = `translateX(-${current * width}px)`; };
  const move = (direction) => { current = Math.max(0, Math.min(current + direction, Math.ceil(maxIndex()))); update(); };
  rail.parentElement.querySelector('[data-slide="prev"]').addEventListener('click', () => move(-1));
  rail.parentElement.querySelector('[data-slide="next"]').addEventListener('click', () => move(1));
  rail.addEventListener('pointerdown', (event) => { dragging = true; startX = event.clientX; rail.setPointerCapture(event.pointerId); });
  rail.addEventListener('pointerup', (event) => { if (!dragging) return; const distance = event.clientX - startX; if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1); dragging = false; });
  rail.addEventListener('pointercancel', () => { dragging = false; });
  window.addEventListener('resize', update);
  update();

  cards.forEach((card) => {
    card.addEventListener('click', (event) => {
      event.preventDefault();
    }, true);
    card.addEventListener('auxclick', (event) => {
      event.preventDefault();
    }, true);
    card.addEventListener('dblclick', (event) => {
      event.preventDefault();
      const destination = card.href;
      document.body.classList.add('page-exit');
      window.setTimeout(() => { window.location.assign(destination); }, 240);
    }, true);
  });
});

const detail = document.querySelector('[data-project-detail]');
if (detail) {
  const key = new URLSearchParams(window.location.search).get('id') || 'redemption';
  const project = projects[key] || projects.redemption;
  document.title = `${project.title} | RNM Productions`;
  detail.querySelector('[data-project-title]').textContent = project.title;
  detail.querySelector('[data-project-subtitle]').textContent = project.title;
  detail.querySelector('[data-project-category]').textContent = project.category;
  detail.querySelector('[data-project-type]').textContent = project.type;
  detail.querySelector('[data-project-format]').textContent = project.format;
  detail.querySelector('[data-project-description]').textContent = project.description;
  detail.querySelector('[data-project-credits]').textContent = project.credits;
  detail.querySelector('[data-project-video-label]').textContent = `${project.type} / LANDSCAPE`;
}

document.addEventListener('pointermove', (event) => {
  const glow = document.querySelector('.cursor-glow');
  if (glow) { glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; }
});
